import React from "react";
import "./components/Page1.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import MySkils from "./components/MySkils/MySkils";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";



const App = ()=>{
    return(
        <main className="main-app">
          
            <Header/>
            <AboutMe/>
            <MySkils/>
            <Education/>
            <Contact/>
            <Footer/>
        
        </main>
    )
}

export default App;