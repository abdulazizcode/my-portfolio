import React from "react";


const Contact = ()=>{
    return(
        <section className="section">
        <header className="section-header">
          <h1>Contact</h1>
          <p>However there is something about it that will remain in your mind for a long, long time. Including
            <a href="#!">Twitter</a> and
            <a href="#!">GitHub</a>.</p>
        </header>
        <div className="form-container">
          <form action="https://formspree.io/you@email.com">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="_replyto" />
            <label htmlFor="message">Message</label>
            <textarea name="message" cols={30} rows={10} defaultValue={""} />
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
      </section>
    )
}

export default Contact;