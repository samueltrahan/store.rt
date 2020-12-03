const cors = require("cors");
const express = require("express");
const stripe = require("stripe")('sk_test_51HtxUMHNTB4gu9aGTEXSkeNEVDqxpHU07XufAMle2CdGQvaBJtx1RkcFTpvtxhZ52eK4qh834cKs1BzxePdyFCEZ00rgKLRQZT');

const {v4: uuidv4} = require("uuid");


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Add your Stripe secret key to the require('stripe') statement!")
});

app.post('/checkout', async (req, res) => {

  let error;
  let status;
  try {
   
    const {product, token } = req.body;
    const customer = await 
    stripe.customers.create({
      email: token.email,
      source: token.id
    });


    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create({
      amount: product * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: `Purchased the `,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip
        }
      }
    },
    {
      idempotencyKey
    }
    );
    console.log("Charge", { charge});
    status="success";
  } catch (error) {
    console.error("Error", error);
    status = "failure"
  }

  res.json({error, status})
})

app.listen(3001)