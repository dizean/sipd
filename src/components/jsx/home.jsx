import React,{useEffect} from "react";
import { animate,inView } from "motion";
import "../css/home.css";
import Typer from "./typree"

function Home(){
    useEffect(() => {
        inView(".home", ({ target }) => {
            const imglogo = target.querySelector(".imglogo"); 
            const sipd = target.querySelector(".sipd");
            const elements = [imglogo,sipd];
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
    const words = ['Society', 'of', 'Innovators,', 'Programmers,', 'and', 'Designers'];
    return(
        <div className="home">
        <div className="imglogo">
            <img src="./assets/images/logo.png"/>
        </div>
        <div className="sipd">
            <h1>S.I.P.D</h1>
            <p><Typer/><br/></p>
        </div>
        </div>
    );  
}
export default Home;