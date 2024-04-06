import React from "react";
import "./Head.css"; // Import the specific CSS for the Head component

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        <div className="logo">
          <h1>ACADEMIA</h1>
          <span style={{ color: 'white' }}>ONLINE EDUCATION & LEARNING</span>
        </div>
        <div className="social">
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-youtube icon"></i>
        </div>
      </div>
    </section>
  );
};

export default Head;
