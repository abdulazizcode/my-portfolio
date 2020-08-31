import React from "react";




const Footer = () =>{
    return(
        <div>
            <footer className="site-footer">
                <div className="container">
                <div className="flex sb">
                    <div className="about">

                    <h1>
                        <span className="primary">Abdusamadzoda</span>
                        <b className="secondary">Abdulaziz</b>
                    </h1>

                    <p>
                       I have always found coding intuitive and have pushed myself to learn the most effective ways to achieve a result.
                        Skilled at writing well-designed responsive webs, testable and efficient code using current best practices in Web development
                    </p>
                    </div>
                    <div className="connect">
                         <h1>Connect with me</h1>
                         <p>You can find me here, there, and everywhere.</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/abdulaziz.abdurasul">
                            <i className="fa fa-rss fa-2x" />
                            </a>
                            <a href="https://twitter.com/abdusamadzoda">
                            <i className="fa fa-twitter fa-2x" />
                            </a>
                            <a href="https://github.com/abdulazizcode">
                            <i className="fa fa-github fa-2x" />
                            </a>
                            <a href="https://stackoverflow.com/users/13966611/abdusanadzoda-abdulaziz">
                            <i className="fa fa-stack-overflow fa-2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdusamadzoda-abdulaziz/" >
                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </footer>

      
            <footer className="footer-bottom">
                <div className="container">
                    <p>
                        © 2020 Firstname Lastname. All rights reserved.
                    </p>
                </div>
            </footer>


        </div>
    )
}

export default Footer;