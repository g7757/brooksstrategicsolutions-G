
import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to Brooks Strategic Solutions</h1>
      <h2>Empowering your future, one solution at a time.</h2>
      <button onClick={() => alert("Booking coming soon!")}>Book Now</button>
      <button style={{ marginLeft: "1rem" }}>Español</button>
      <hr />
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" /><br />
        <input type="email" placeholder="Your Email" /><br />
        <textarea placeholder="Your Message"></textarea><br />
        <button type="submit">Send</button>
      </form>
      <hr />
      <h3>About Us</h3>
      <p>At Brooks Strategic Solutions, our mission is to empower individuals and families through personalized insurance solutions. 
      We are committed to building trust, educating clients, and asking the right questions to guide them toward confident decisions about their future.</p>
    </div>
  );
}

export default App;
