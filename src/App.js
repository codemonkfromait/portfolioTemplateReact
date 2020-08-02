import React from "react";
import Navbar from "./Navbar";
import Headsec from "./Headsec";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import About from "./About";
import $ from "jquery";

const App = () => {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
  return (
    <div>
      <Navbar />
      <Headsec />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
