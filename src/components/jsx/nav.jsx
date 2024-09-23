import React,{useState,useEffect} from "react";
import "../css/nav.css";

function Navigation() { 
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    }
  };
  return (
    <>
      <nav class="nav" >
        <div className="logo" >
        <img src="./assets/images/logo.png"/>
        </div>
        <label for="hamburger">&#9776;</label>
  			<input type="checkbox" id="hamburger"/>
	    <div class="links">
	    <a href="/" onClick={() => scrollToSection("home")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#goals" onClick={() => scrollToSection("goals")}>Goals</a>
          <a href="#officers" onClick={() => scrollToSection("officers")}>Officers</a>
          <a href="#events" onClick={() => scrollToSection("events")}>Events</a>
	    </div>
    </nav>
    </>
  );
}

export default Navigation;
