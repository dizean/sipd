import React,{useEffect} from "react";
import { animate,inView } from "motion";
import "../css/goal.css";

function Goal(){
    useEffect(() => {
        const goals = document.querySelectorAll('.goal');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const ttgoal = entry.target.querySelector('.ttlgoal');
              const dscrp = entry.target.querySelector('.dsrpgoal');
    
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
        }, { threshold: 1 }); 
    
        goals.forEach(goal => {
          observer.observe(goal);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
      useEffect(() => {
        inView(".goals", ({ target }) => {
            const imglogo = target.querySelector(".h1text"); 
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
    return(
        <div className="goals">
            <div className="goalcontainer">
            <div className="h1text">
               <h1>Goals of SIPD</h1>
            </div>
            
            <div className="goal">
               <div className="ttlgoal">
                <h3>
                    Foster Creativity
                </h3>
               </div>
               <div className="dsrpgoal">
                    <p>
                    To foster a creative community among 
                    IT students, promoting innovation, 
                    programming skills, and design
                     proficiency for successful careers
                      in the IT industry. 
                    </p>
               </div>
            </div>
            <hr/>
            <div className="goal">
               <div className="ttlgoal">
                <h3>
                Platform for Technology Exploration
                </h3>
               </div>
               <div className="dsrpgoal">
                    <p>
                    To provide a platform for students to 
                    explore emerging technologies, develop 
                    practical applications, enhance their 
                    problem-solving abilities, and attend 
                    relevant workshops to further improve 
                    their respective IT skills.
                    </p>
               </div>
            </div>
            <hr/>
            <div className="goal">
               <div className="ttlgoal">
                <h3>
                Showcasing Skills through Competitive Events
                </h3>
               </div>
               <div className="dsrpgoal">
                    <p>
                    To create events that showcase and 
                    encourage students to be competitive
                     with their skills, providing 
                     opportunities for them to 
                     demonstrate their talents and
                      abilities to a broader audience.
                    </p>
               </div>
            </div>
            <hr/>
            </div>
        </div>
    );  
}
export default Goal;