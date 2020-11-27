import React from 'react';
import './About.css'

export default function About() {
  return (
    <div className="about-page">
     <div className="business">
       <h1>Business Title</h1>
       <p>Mission Statement</p>
     </div>
     <div className="drive">
       <h1>What drives this business?</h1>
       <p>This is the section where we go deeper into your mission statement and tell the customer what it is that you want from this.</p>
     </div>
     <div className="how">
       <h1>How it started</h1>
       <p>We need to talk about how this whole thing started.  Where you came from before starting this business.  Some of the highlights along the way of building this business.</p>
     </div>
    </div>
  )
}
