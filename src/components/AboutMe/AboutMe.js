import React from "react";


const AboutMe = () =>{
    return(
        <main>
            <div className="container flex ac">
              <div className="hero-container ">
                <h1>Abdusamadzoda Abdulaziz</h1>
                <p className="lead">I am 
                  <a href="https://www.linkedin.com/in/abdusamadzoda-abdulaziz/"> self-taught Web Developer</a>,
                   I have always found coding intuitive and have pushed myself to learn the most effective ways to achieve a result.
                  <a href="https://determined-hawking-11b431.netlify.app/">Final project link</a> series by
                  <a href="https://github.com/abdulazizcode">GitHub</a>.</p>
                <p>Skilled at writing well-designed responsive webs, testable and efficient code using current best practices in Web development</p>
                <p>
                  <a className="button" href="#!">Get in Touch</a>
                </p>
              </div>
              <div className="code">
                <pre><code className="language-js">{"{"}{"\n"}{"  "}"name": "Abdusamadzoda Abdulaziz",{"\n"}{"  "}"occupation": "Web Developer",{"\n"}{"  "}"available_for_hire:"<i className="aqua"> true</i> { " \n"}{"}"}</code></pre>
              </div>
            </div>
        </main>
    )
}

export default AboutMe;