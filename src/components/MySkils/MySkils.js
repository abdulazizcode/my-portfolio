import React from "react";


const MySkils = () =>{
    return(
        <main>
            <section className="section-bg" id="skills">
              <div className="container">
                <header className="section-header">
                  <h1>Technical Skills</h1>
                  <p>"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them."</p>
                </header>
                <div className="flex wrap skills">
                  <div className="card">
                    <img src={require('../../img/html.png')} alt="" />
                    <h2>HTML</h2>
                  </div>
                  <div className="card">
                    <img src={require('../../img/css.png')} alt="" />
                    <h2>CSS</h2>
                  </div>
                  <div className="card">
                    <img src={require('../../img/sass.png')} alt="" />
                    <h2>Sass</h2>
                  </div>
                  <div className="card">
                    <img src={require('../../img/js.png')} alt="" />
                    <h2>JavaScript</h2>
                  </div>
                  <div className="card">
                    <img src={require('../../img/react.png')} alt="" />
                    <h2>React</h2>
                  </div>
                </div>
              </div>
            </section>
        </main>
    )
}

export default MySkils; 