import React from "react";
import {Link} from "react-scroll";
import logo from "../../img/logo.png";



const Header = ()=>{
    return(
        <header className="header">
          <nav className="site-navigation">
            <div className="nav-container">
              <div className="brand underline">
                <a href="#!">
                  <img className="logo" src={logo}/>
                </a>
              </div>
              <div className="menu">

                  <Link
                    className="nav__item"
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                 >Education </Link>

     
                  <Link
                    className="nav__item"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                >Skills</Link>

                  
                  <Link
                    className="nav__item"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration= {500}
                >Contact </Link>
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;