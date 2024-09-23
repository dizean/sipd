import React, { useEffect, useRef } from "react";
import { animate,inView } from "motion";
import "../css/act.css";

function Activities(){
    useEffect(() => {
        const goals = document.querySelectorAll('.actis');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const ttgoal = entry.target.querySelector('.mage');
              const dscrp = entry.target.querySelector('.abut');
    
              const elements = [ttgoal, dscrp];
    
              elements.forEach(element => {
                animate(
                  element,
                  { opacity: 1, transform: 'none' },
                  { duration: 1.5, easing: [0.17, 0.55, 0.55, 1] }
                );
              });
    
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: .3 }); 
    
        goals.forEach(goal => {
          observer.observe(goal);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
    return(
        <div className="act">
               <div class="slider">
	    <div class="slide-track">
		<div class="slide">
			<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
        <h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
		<div class="slide">
		<h1>ACTIVITIES & EVENTS</h1>
		</div>
</div>
</div>
       <div className="actis">
        <div className="mage">
        <img src="../assets/images/induction.JPG"/>
        </div>
        <div className="abut">
        <h1>
            INDUCTION
        </h1>
        <p>
        Induction is a logical reasoning process where specific
         instances or examples are observed, leading to
          the formation of a general principle or 
          hypothesis. It involves drawing broader 
          conclusions based on specific observations 
          or patterns. In scientific inquiry, induction
           plays a crucial role in formulating theories
            and making predictions based on observed 
            data.
        </p>
        </div>
       </div>
       <div className="actis">
        <div className="mage"><h1>
           Enrollment for BSIT
        </h1>
        <p>
        BSIT enrollment refers to the process of registering
         and officially joining a Bachelor of Science
          in Information Technology program at an
           educational institution. This typically 
           involves submitting necessary documents,
            selecting courses, and paying any required
             fees. Successful BSIT enrollment marks the
              beginning of a student's academic journey
               in the field of information technology, 
               where they will gain knowledge and skills related to computer science and technology.
        </p>
        
        </div>
        <div className="abut">
        <img src="../assets/images/enroll.png"/>
        </div>
       </div>
       <div className="actis">
        <div className="mage">
        <img src="../assets/images/volunters.png"/>
        </div>
        <div className="abut">
        <h1>
            LF Volunteer Officers
        </h1>
        <p>
        Our club is actively seeking passionate individuals to join our team as volunteers, contributing their unique skills and enthusiasm to help us achieve our goals.
        If you're eager to make a positive impact and become part of a vibrant community, we invite you to consider volunteering with our club, where your time and dedication can truly make a difference.
        Join us in building a supportive and collaborative environment by volunteering for our club, where your commitment will not only enhance your personal growth but also contribute to the success of our shared endeavors.
        </p>
        </div>
       </div>
       <div className="actis">
        <div className="mage"><h1>
           Club Orientation
        </h1>
        <p>
        Our club orientation sessions provide a comprehensive introduction to our organization, offering new members the opportunity to familiarize themselves with our mission, values, and the various activities we engage in.
Attending our club orientation is the perfect way for newcomers to connect with current members, gain insights into our club culture, and discover the diverse range of opportunities available for personal and professional development.
        </p>
        
        </div>
        <div className="abut">
        <img src="../assets/images/core.png"/>
        </div>
       </div>
        </div>
    );  
}
export default Activities;