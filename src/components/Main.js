export default function Main() {
  return (

    <main>
      {/* section about start */}
      <section id="about">
        <div className="container">
          <div className="about-content">
            <div className="col-1">
              <img src="myimage.png" />
            </div>
            <div className="col-2">
              <h3 id="text-1">Hello, I'm Mothana!</h3>
              <p>
                <span id="text-2">Welcome</span> to my{" "}
                <span id="text-3">"About Me"</span>. I am interested in{" "}
                <span id="text-4">front-end development</span> and programming in
                general. Let me share with you some information about myself:
              </p>
              <br />
              <ul>
                <li>
                  <span className="text">
                    My interest in front-end development:
                  </span>{" "}
                  I have been interested in front-end development for a long time,
                  ever since I was young. I used to think about how they build it.
                </li>
                <li>
                  <span className="text">Educational Background:</span> Bachelor's
                  degree in Chemistry from AHU. Currently, I am 26 years old, I am
                  enrolled in the Front-end Web Development course at Orange
                  Academy, where I am looking forward to learning new skills and
                  improving my practice in this field.
                </li>
                <li>
                  <span className="text">Skills and Technologies:</span> I have
                  skills in designing and developing user interfaces using HTML and
                  CSS. I also started learning JavaScript.
                </li>
                <li>
                  <span className="text">Future Goals:</span> My ambition is to
                  become a Full-stack developer.
                </li>
              </ul>
              <h3>
                <span id="text-5">Thank you for visiting!</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* section about end */}
      {/* section skills start */}
      <section id="skills">
        <div className="container">
          <div className="skills-content">
            <div className="row">
              <div className="item">
                {/* <p>HTML</p> */}
                <i className="fa-brands fa-html5" id="item-html" />
              </div>
              <div className="item">
                <img src="skills.png" id="item-img" />
              </div>
              <div className="item">
                {/* <p>CSS</p> */}
                <i className="fa-brands fa-css3-alt" id="item-css" />
              </div>
              <div className="item">
                <i className="fa-brands fa-bootstrap" id="item-bootstrap" />
              </div>
              <div className="item">
                <h5 id="item-text">
                  I have HTML skills CSS, Figma, bootstrap, along with teamwork
                  capabilities and Pay attention to details. I always strive for
                  Quality and accuracy in every part of my work.
                </h5>
              </div>
              <div className="item">
                <i className="fa-brands fa-figma" id="item-figma" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section skills end */}
      <section id="contact">
        <div className="contact-container">
          <div className="contact-image">
            <img src="contact.jpg" alt="" />
          </div>
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form
              action="https://formsubmit.co/1998mothana@gmail.com"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required="" />
              <input
                type="email"
                name="email"
                placeholder=" YourEmail"
                required=""
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required=""
                defaultValue={""}
              />
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>


  )
}
