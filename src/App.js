import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Featured from "./components/Featured/Featured";
import Reason from "./components/Reason/Reason";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import products from "./ProductDB";

export default function App() {
  const [shoes, setShoes] = useState();
  
  const handleFindProduct = (e, productId) => {
    const results = products.find(({ id }) => productId === id);
    setShoes(results)
  };

  return (
    <Router>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Banner />
            <Featured />
            <Reason />
            <Footer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/products"
        render={() => (
          <div>
            <h1 className="product-heading">Products</h1>
            <div className="product-app">
              {products.map((product) => {
                return (
                  <div>
                    <Products
                      product={product}
                      handleFindProduct={handleFindProduct}
                    />
                  </div>
                );
              })}
            </div>
            ;
            <Footer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/services"
        render={() => (
          <div>
            <h1 className="service-heading">Services</h1>
            <Services
              path="/helping"
              title="Helping People"
              content="What do you offer to people that can help them? Why should they want your services, and what sets you apart from others that do the same thing?"
            />
            <Services
              path="/unqiue"
              title="Uniqueness"
              content="Is there something that is unique about your service that other businesses don't have?  Let's try to convey that."
            />
            <Services
              path="/exceptional"
              title="Exceptional Services"
              content="Are your services a cut above the rest?  We want to show the customer that in this section so that it is undeniable that you are the right person for the job."
            />
            <Services
              path="/special"
              title="Special"
              content="If you are running specials on services, or feel that you offer a special aspect to your service, let's showcase that here."
            />
            <Footer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/about"
        render={() => (
          <div>
            <About />
            <Footer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/contact"
        render={() => (
          <div>
            <Contact />
            <Footer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/products/:id"
        render={() => (
          <div>
            <ProductDetails shoes={shoes} />
          </div>
        )}
      ></Route>
    </Router>
  );
}
