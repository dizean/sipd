import React, { useEffect, useRef } from "react";
import { animate,inView } from "motion";
import "../css/events.css";
import { Carousel } from 'react-carousel3'

function Events() {
  useEffect(() => {
    inView(".events", ({ target }) => {
        const imglogo = target.querySelector(".carousel"); 
        
        const elements = [imglogo];
              elements.forEach(element => {
                inView(element, () => {
                  animate(
                    element,
                    { opacity: 1, transform: "none" },
                    { duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
                  );
                });
              });
            });
  });
  return (
    <div className="events">
      <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<h1>Meet the Officers</h1>
		</div>
		<div class="slide">
		<h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
    <div class="slide">
			<h1>Meet the Officers</h1>
		</div>
		<div class="slide">
		<h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
		<div class="slide">
    <h1>Meet the Officers</h1>
		</div>
</div>
</div>
      <div className="evimgs">
      <div className="carousel">
    <Carousel className="cars" height={700} width={1900} xOrigin={670} yOrigin={120} autoPlay={true}>
      <div key={1}>
      <img src="./assets/images/ser.png"/>
      <h1>CLUB MODERATOR</h1>
      <p>Lenilito Betita</p>
      </div>
      <div key={2} >
      <img src="./assets/images/efj.png"/>
      <h1>P.I.O</h1>
      <p>Felipe Johnson Buenaflor</p>
      </div>
      <div key={3} >
      <img src="./assets/images/david.png"/>
      <h1>TREASURER</h1>
      <p>David Lacson</p>
      </div>
      <div key={4} >
      <img src="./assets/images/colin.png"/>
      <h1>BUSINESS MANAGER</h1>
      <p>Coco Martin Menez</p>
      </div>
      <div key={5} >
      <img src="./assets/images/gar.png"/>
      <h1>ASSISTANT SECRETARY</h1>
      <p>Gabriel Malanday</p>
      </div>
      <div key={6} >
      <img src="./assets/images/ako.png"/>
      <h1>SECRETARY</h1>
      <p>Charles Denver Ean Torres</p>
      </div>
      <div key={7} >
      <img src="./assets/images/enwik.png"/>
      <h1>VICE PRESIDENT</h1>
      <p>Enwik Jomer Pacaña</p>
      </div>
      <div key={8} >
      <img src="./assets/images/kiven.png"/>
      <h1>PRESIDENT</h1>
      <p>Kevin Jan Tolentino</p>
      </div>
    </Carousel>
  </div>
      </div>
    </div>
  );
}

export default Events;
