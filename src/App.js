import Navigation from './components/jsx/nav';
import './App.css'
import MyParticles from './components/jsx/particles';
import Home from './components/jsx/home';
import About from './components/jsx/about';
import Goal from './components/jsx/goal';
import Events from './components/jsx/events';
import Activities from './components/jsx/activties';
import { animate, scroll,inView } from "motion";
import Footer from './components/jsx/footer';
import { useEffect } from 'react';
function App() {
  
  return (
    <>
     <MyParticles/>
    <Navigation/>
    <section id="home">
      <div>
  <Home/>
      </div>
    </section >
    <section id="about">
    <div><About/></div>
    </section>
    <section id="goals">
    <div><Goal/></div>
    </section>
    <section id="officers">
    <div><Events/></div>
    </section>
    <section id="events">
    <div> <Activities/></div>
    </section>
    <Footer/>
    </>
   
    
  );
}

export default App;
