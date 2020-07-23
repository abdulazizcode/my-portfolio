import React from "react";


const Section4 = () =>{
    return(
        <section className="section-bg">
        <header className="section-header">
          <h1>Portfolio</h1>
          <p>So I don't really have a clear plan, in terms of Projects, as to where I want to head in the future.</p>
        </header>
        <div className="container">
          <div className="flex wrap portfolio">
            <div className="card">
              <img src="img/dw.jpg" alt="" />
              <h2>Future Websites</h2>
            </div>
            <div className="card">
              <img src="img/bm.jpg" alt="" />
              <h2>Future Websites</h2>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section4;