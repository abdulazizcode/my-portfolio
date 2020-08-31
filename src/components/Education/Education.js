import React from "react";



const Education = ()=>{
    return(
        <section className="section" id="education">
        <div className="container">
          <header className="section-header">
            <h1>Education</h1>
            <p>However, very recently I have come to an understanding that complex music is not necessarily pleasant.</p>
          </header>
          <div className="resume">
            <div className="flex">
              <div className="resume-title">
                <h2 className="underline-nh">BIT</h2>
                <div className="subtitle">2019 - Current</div>
              </div>
              <div className="resume-description">
                <h3>Limkokwing University</h3>
                <p>Lontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                <ul>
                  <li>Composed songs such as Dancing Mad and Aria de Maria.</li>
                  <li>Also composed One Winged Angel.</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="resume-title">
                <h2 className="underline-nh">Foundation in IT</h2>
                <div className="subtitle">2017 - 2018</div>
              </div>
              <div className="resume-description">
                <h3>Limkokwing University</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                <ul>
                  <li>Spearheaded the combination of video games and heavy metal.</li>
                  <li>Wore a sweet bandana.</li>
                  <li>It had kanji on it I think.</li>
                </ul>
              </div>
            </div>
          </div>
        </div></section>
    )
}
export default Education;