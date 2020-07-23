import React from "react";



const Header = ()=>{
    return(
        <header>
          <nav className="site-navigation">
            <div className="nav-container">
              <div className="brand underline">
                <a href="#!">
                  My
                  <b>Portfolio</b>
                </a>
              </div>
              <div className="menu">
                <a href="#!">Education</a>
                <a href="#!">Portfolio</a>
                <a href="#!">Contact</a>
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;