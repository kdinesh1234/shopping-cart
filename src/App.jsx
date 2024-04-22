import React, { useState } from "react";

import Card from "./Components/Card.jsx";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <><div className="fixed-top">
      <Navbar/>
      <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card  />
      </div>
      <Footer/>
    </>
  );
}

export default App;
