import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss'
import MainWrapper from './components/MainWrapper/MainWrapper';
import { createContext, useRef } from "react";
import Hero from './components/Hero/Hero';

function App() {
  const mainWrapperRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
       <MainWrapper ref={mainWrapperRef}>
        <Hero/>
       </MainWrapper>
    </>
  )
}

export default App
