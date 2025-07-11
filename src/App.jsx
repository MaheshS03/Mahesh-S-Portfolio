import React from 'react';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import RecentWork from "./components/recentWork/recentWork";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ProfessionalExperience from "./components/professionalExperience/professionalExperience";

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <ProfessionalExperience />
        <Services />
        <RecentWork />
        <Contact />
        <Footer />
    </>
  )
}

export default App;