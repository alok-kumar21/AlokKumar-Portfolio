import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import meetupimage from "../assets/meetup.png";
import pendoraimage from "../assets/pendora.png";
import resumePDF from "../assets/resume.pdf";

import { useState } from "react";

const MainContent = () => {
  const [message, setMessage] = useState(true);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "81435d6b-ec00-45ca-9e73-a46f916ae9c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section>
      <Navbar />

      <section id="about" className="container py-4">
        <div className="row align-items-center">
          {/* Left Column - Info */}
          <div className="col-12 col-lg-8 order-2 order-lg-1 info">
            <div>
              <h1 className="primary name">Alok Kumar</h1>
              <p className="h5 text-secondary">Full Stack Web Developer</p>
            </div>

            <div className="d-flex flex-wrap mt-3 mb-3 gap-2">
              <div className="text-secondary">
                <i className="bi bi-envelope"></i>&nbsp; alok.8kumar21@gmail.com
              </div>
              <div className="text-secondary">
                <i className="bi bi-geo-alt"></i>&nbsp; Ayodhya, India
              </div>
            </div>

            <div>
              <p className="text-secondary">
                A passionate and motivated software developer eager to kickstart
                my career in web development. Skilled in modern technologies
                like React.Js and Node.js, and excited to build user-friendly
                applications and keep learning every day.
              </p>
            </div>

            <div className="mt-3 mb-3 d-flex flex-wrap gap-2">
              <a
                href={resumePDF}
                download="AlokKumar-Resume.pdf"
                className="btn btn-light"
              >
                <i className="bi bi-download"></i>&nbsp;&nbsp;Resume
              </a>
              <Link to="https://github.com/alok-kumar21" className="btn border">
                <i className="bi bi-github text-secondary"></i>
              </Link>
              <Link to="mailto:alok.8kumar21@gmail.com" className="btn border">
                <i className="bi bi-envelope text-secondary"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/iamalokkumar/"
                className="btn border"
              >
                <i className="bi bi-linkedin text-secondary"></i>
              </Link>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="col-12 col-lg-4 order-1 order-lg-2 name mb-4 mb-lg-0">
            <div className="d-flex justify-content-center flex-wrap gap-4 gap-md-4">
              {/* Skill 1 */}
              <div className="position-relative text-center">
                <div className="main-skill border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                    alt="react-image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <span className="d-block mt-2 text-success badge rounded-pill bg-dark">
                  MongoDB
                </span>
              </div>

              {/* Skill 2 */}
              <div className="position-relative text-center">
                <div className="main-skill border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000"
                    alt="nodejs-image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <span className="d-block mt-2 text-warning badge rounded-pill bg-dark">
                  ExpressJs
                </span>
              </div>
            </div>
            {/* Skill 3 */}
            <div className="mt-4 d-flex justify-content-center flex-wrap gap-4 gap-md-4">
              <div className="position-relative text-center">
                <div className="main-skill border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="rotate-icon img-fluid"
                    src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                    alt="react-image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <span className="d-block mt-2 text-primary badge rounded-pill bg-dark">
                  React Js
                </span>
              </div>

              {/* Skill 4 */}
              <div className="position-relative text-center">
                <div className="main-skill border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                    alt="nodejs-image"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <span className="d-block mt-2 text-success badge rounded-pill bg-dark">
                  Node Js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="education autoShow container">
        <div>
          <h1 className="text-white">Education</h1>
        </div>
        <div className="d-flex mt-4 autoShow">
          <i className="bi bi-mortarboard h2 text-secondary"></i>
          <div>
            <h5 className="mt-2 ms-3 text-white">
              Babu Banarasi Das University, Lucknow
            </h5>
            <span className="ms-3 text-secondary">M.C.A, Computer Science</span>
            <br />
            <span className="ms-3 text-secondary">May 2020 - June 2022</span>
          </div>
        </div>
        <div className="d-flex mt-5 autoShow">
          <i className="bi bi-mortarboard h2 text-secondary"></i>
          <div>
            <h5 className="mt-2 ms-3 text-white">
              Makhanlal Chaturvedi National University, Bhopal
            </h5>
            <span className="ms-3 text-secondary">B.C.A, Computer Science</span>
            <br />
            <span className="ms-3 text-secondary">May 2017 - June 2020</span>
          </div>
        </div>
      </section>
      <section id="skills" className="skills autoShow container">
        <div>
          <h1 className="text-white">Skills</h1>
          <p className="text-secondary">
            Technologies and tools I've worked with throughout my projects
          </p>
        </div>
        <div className="mt-5 autoShow">
          <h4 className="text-white">Frontend</h4>
        </div>
        <div className="d-flex mt-4 autoShow">
          <div>
            <div className="border-0 bg-dark p-3 rounded ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3030115.png?f=webp&w=512"
                alt="html-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1">HTML</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226088.png?f=webp&w=512"
                alt="css-image"
                className="img-fluid"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-3">CSS</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512"
                alt="javascript-image"
                className="img-fluid"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-3">Javascript</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226077.png?f=webp&w=512"
                alt="bootstrap-image"
                className="img-fluid"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-3">Bootstrap</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=512"
                alt="react-image"
                className="img-fluid"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-4">React.js</p>
          </div>
        </div>
        <div className="mt-4 autoShow">
          <h4 className="text-white">Backend</h4>
        </div>

        <div className="d-flex mt-4 autoShow">
          <div>
            <div className="border-0 bg-dark p-3 rounded ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226035.png?f=webp&w=512"
                alt="nodejs-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1">Node.js</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-11217528-9200532.png?f=webp&w=512 "
                alt="expressjs-image"
                className="img-fluid ms-1 "
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-4">Express.js</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-logo-freebies-pack-logos-icons-1175138.png?f=webp&w=512"
                alt="mongodb-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-4">MongoDB</p>
          </div>
        </div>

        <div className="mt-4 autoShow">
          <h4 className="text-white">Tools & Platforms</h4>
        </div>
        <div className="d-flex mt-4 autoShow">
          <div>
            <div className="border-0 bg-dark p-3 rounded ">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175218.png?f=webp&w=512"
                alt="git-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1 ">git</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226096.png?f=webp&w=512"
                alt="github-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-4 ">github</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-vscode-logo-icon-download-in-svg-png-gif-file-formats--social-media-technology-brand-pack-logos-icons-3365471.png?f=webp&w=512"
                alt="vscode-image"
                className="img-fluid ms-1"
              />
            </div>
            <p className="text-center text-secondary mt-1 ms-4">vscode</p>
          </div>
          <div>
            <div className="border-0 bg-dark p-3 rounded ms-4">
              <i className="bi bi-caret-up-fill text-white h3"></i>
            </div>
            <p className="text-center text-secondary mt-1 ms-3">Vercel</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects autoShow container">
        <div>
          <h1 className="text-white">Projects</h1>
        </div>
        <div className="card     mt-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pendoraimage} alt="" className="w-100 img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <h3 className="card-title text-white">Pendora</h3>
                <p className="card-text text-secondary">
                  The Pendora is a MERN stack (MongoDB, Express, React, Node.js)
                  application designed to help users discover and explore
                  various products. It features a list of Products with
                  filtering options By Price, rating, and Product, search,
                  Product add to Cart, and add to wish list, making it easy to
                  find relevant products.
                </p>
                <span class="badge text-bg-dark mb-3">React</span>
                <span class="badge text-bg-dark mb-3 ms-3">Express.js</span>
                <span class="badge text-bg-dark mb-3  ms-3">Node.js</span>
                <span class="badge text-bg-dark mb-3  ms-3">MongoDB</span>
                <span class="badge text-bg-dark mb-3 ms-3">Bootstrap</span>
                <span class="badge text-bg-dark mb-3  ms-3">Context API</span>

                <ul className="text-secondary">
                  <li>Search product.</li>
                  <li> Add item to cart.</li>
                  <li>Remove item from cart</li>
                  <li>Add item to wishlist.</li>
                </ul>
                <Link
                  to="https://pendora-frontend.vercel.app/"
                  className="btn  btn-light"
                  target="_blank"
                >
                  <i class="bi bi-box-arrow-up-right"></i>&nbsp;Live
                </Link>
                <Link
                  to="https://github.com/alok-kumar21/Pendora-frontend"
                  className="btn  btn-outline-light ms-4"
                  target="_blank"
                >
                  <i class="bi bi-github"></i>&nbsp;github
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card  autoShow   mt-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={meetupimage}
                alt="meetup image"
                className="w-100 img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <h3 className="card-title text-white">MeetUp</h3>
                <p className="card-text text-secondary">
                  The Meetup App is a MERN stack (MongoDB, Express, React,
                  Node.js) application designed to help users discover and
                  explore various events. It features a list of meetup events
                  with filtering options for online and offline events, making
                  it easy to find relevant gatherings. A search bar allows users
                  to quickly locate specific events by keywords.
                </p>
                <span class="badge text-bg-dark mb-3">React</span>
                <span class="badge text-bg-dark mb-3 ms-3">Express.js</span>
                <span class="badge text-bg-dark mb-3  ms-3">Node.js</span>
                <span class="badge text-bg-dark mb-3  ms-3">MongoDB</span>
                <span class="badge text-bg-dark mb-3 ms-3">Bootstrap</span>

                <ul className="text-secondary">
                  <li>Event Listing</li>
                  <li>Search a Event</li>
                  <li>View Detail Event</li>
                  <li>Filter Online and offline Events.</li>
                </ul>
                <Link
                  to="https://meet-up-frontend-chi.vercel.app/"
                  className="btn  btn-light"
                  target="_blank"
                >
                  <i class="bi bi-box-arrow-up-right"></i>&nbsp;Live
                </Link>
                <Link
                  to="https://github.com/alok-kumar21/MeetUp-frontend"
                  className="btn  btn-outline-light ms-4"
                  target="_blank"
                >
                  <i class="bi bi-github "></i>&nbsp;github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact py-5">
        <div className="container">
          <h1 className="text-white mb-5 text-center">Contact Me</h1>

          <div className="row g-4">
            {/* Contact Info Column */}
            <div className="col-lg-6">
              <div className="contact-info p-4 p-md-5 rounded-3  h-100">
                <h3 className="text-white mb-4">Get in Touch</h3>

                {/* Email */}
                <div className="d-flex align-items-center mb-4">
                  <div className="contact-icon bg-dark rounded-circle d-flex align-items-center justify-content-center me-4">
                    <i className="bi bi-envelope text-white fs-4"></i>
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Email</p>
                    <a
                      href="mailto:alok.8kumar21@gmail.com"
                      className="text-white text-decoration-none"
                    >
                      alok.8kumar21@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="d-flex align-items-center mb-4">
                  <div className="contact-icon bg-dark rounded-circle d-flex align-items-center justify-content-center me-4">
                    <i className="bi bi-geo-alt text-white fs-4"></i>
                  </div>
                  <div>
                    <p className="text-secondary mb-1">Location</p>
                    <p className="text-white mb-0">Ayodhya, India</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="d-flex align-items-center">
                  <div className="contact-icon bg-dark rounded-circle d-flex align-items-center justify-content-center me-4">
                    <i className="bi bi-linkedin text-white fs-4"></i>
                  </div>
                  <div>
                    <p className="text-secondary mb-1">LinkedIn</p>
                    <Link
                      to="https://www.linkedin.com/in/iamalokkumar/"
                      className="text-white "
                      target="_blank"
                    >
                      linkedin.com/in/iamalokkumar
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="col-lg-6">
              {message ? (
                <div className="contact-form p-4 p-md-5 rounded-3  h-100">
                  <h3 className="text-white mb-4">Send a Message</h3>

                  <form onSubmit={onSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 text-white"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border-0 text-white"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="form-label text-white"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control border-0 text-white"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>

                    <button
                      onClick={() => setMessage(false)}
                      type="submit"
                      className="btn btn-light w-100 py-2"
                    >
                      Submit Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="contact-success p-4 p-md-5 rounded-3  border border-success h-100">
                  <div className="text-center">
                    <i className="bi bi-check-circle-fill text-success display-4 mb-3"></i>
                    <h3 className="text-white mb-3">
                      Message Sent Successfully
                    </h3>
                    <p className="text-secondary mb-4">
                      Thank you for reaching out. I'll get back to you as soon
                      as possible.
                    </p>
                    <button
                      onClick={() => setMessage(true)}
                      className="btn btn-outline-light px-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
