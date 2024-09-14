import logo from '../images/logo.png';
import section1 from '../images/section1.jpg';

export default function Nav() {
  return (

    <>
      {/* header start */}
      <header id="home">
        <div className="navbar">
          <nav>
            <a id="logo" href="">
              <img src={logo} alt='logo'/>
              MothanaBaniata
            </a>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT ME</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a id="CTA" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-content">
          <div className="content-text">
            <h2>
              <span id="span1">I am</span>
              <br />
              <span id="span2">a front-end</span>
              <br />
              <span id="span3">software</span>
              <br />
              <span id="span4">developer</span>
            </h2>
            <div className="social">
              <a href="https://wa.me/+962798810590" target="_blank">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="https://github.com/MothanaBaniata" target="_blank">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://github.com/MothanaBaniata" target="_blank">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <img src={section1} alt="Front-end-wallpaper" />
        </div>
      </header>
      {/* header end */}
    </>


  )
}
