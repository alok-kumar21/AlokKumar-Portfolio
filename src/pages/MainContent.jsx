import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainContent = () => {
  return (
    <section>
      <Navbar />
      <section id="about" className=" container ">
        <div className="row">
          <div className="col-12 col-md-8 info">
            <div>
              <h1 className="primary name">Alok Kumar</h1>
              <p className="h5  text-secondary">Full Stack Web Developer</p>
            </div>
            <div className="d-flex mt-4 mb-4">
              <div className="text-secondary">
                <i className="bi bi-envelope "></i>&nbsp;
                alok.8kumar21@gmail.com
              </div>
              <div className=" ms-3 text-secondary">
                <i className="bi bi-geo-alt"></i>&nbsp; Ayodhya, India
              </div>
            </div>
            <div>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                tempora nisi odio, dolore, sunt incidunt blanditiis repudiandae
                dolorem nostrum animi quas facilis est sint id recusandae at
                reprehenderit enim vel illum repellendus cumque deleniti ipsum!
                Porro molestiae dolore molestias vero voluptatem, sint, eum.
              </p>
            </div>
            <div className="mt-4 mb-4">
              <Link download={true} className="btn btn-light ">
                <i className="bi bi-download"></i>&nbsp;&nbsp;Resume
              </Link>
              <Link
                to="https://github.com/alok-kumar21"
                className="btn ms-3 border"
              >
                <i className="bi bi-github text-secondary"></i>
              </Link>
              <Link
                to="mailto:alok.8kumar21@gmail.com"
                className="btn ms-3 border"
              >
                <i className="bi bi-envelope text-secondary"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/iamalokkumar/"
                className="btn ms-3  border"
              >
                <i className="bi bi-linkedin  text-secondary"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4    name">
            <div className="mt-4">
              <span type="button" className="position-relative">
                <div className="main-skill ms-5 border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid "
                    src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                    alt="react-image"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <span className="position-absolute top-0 text-success start-0 translate-middle badge rounded-pill bg-dark">
                  MongoDB
                </span>
              </span>

              <span type="button" className="position-relative">
                <div className="main-skill ms-4 border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000"
                    alt="nodejs-image"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <span className="position-absolute top-0 text-warning start-100 ms-5 translate-middle badge rounded-pill bg-dark">
                  ExpressJs
                </span>
              </span>
            </div>
            <br />

            <div className="mt-2">
              <span type="button" className="position-relative">
                <div className="main-skill ms-5 border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="rotate-icon img-fluid"
                    src="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
                    alt="react-image"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <span className="position-absolute top-100 text-primary start-0 translate-middle badge rounded-pill bg-dark">
                  React Js
                </span>
              </span>

              <span type="button" className="position-relative">
                <div className="main-skill ms-4 border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                    alt="nodejs-image"
                    style={{ width: "70px", height: "70px" }}
                  />
                </div>
                <span className="position-absolute top-100 text-success start-100 ms-5 translate-middle badge rounded-pill bg-dark">
                  Node Js
                </span>
              </span>
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
              <img
                src="https://private-user-images.githubusercontent.com/69728237/446382811-0c04885f-e37c-4b2a-9fa5-ae5253e619bf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0ODEyNjMsIm5iZiI6MTc0OTQ4MDk2MywicGF0aCI6Ii82OTcyODIzNy80NDYzODI4MTEtMGMwNDg4NWYtZTM3Yy00YjJhLTlmYTUtYWU1MjUzZTYxOWJmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDE0NTYwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI5YTg5NzE3M2NhMjExMzg5NTk4MTljNjk1YmNiOTEyZTA3ZmRiNzY4MjI0YTlmNTEwOGM5YTFiY2NlNjA2Y2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xWItc7FbYmx0mvMmC4CNj1mJO9hTtEFUIP8b4KJar5w"
                alt=""
                className="w-100 img-fluid"
              />
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
                src="https://private-user-images.githubusercontent.com/69728237/424608071-23af58f2-276d-4f62-bf02-b9d41a53c579.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDk0ODM5NDgsIm5iZiI6MTc0OTQ4MzY0OCwicGF0aCI6Ii82OTcyODIzNy80MjQ2MDgwNzEtMjNhZjU4ZjItMjc2ZC00ZjYyLWJmMDItYjlkNDFhNTNjNTc5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA5VDE1NDA0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3OTQxNzU4ZDJjZDM4MDk1MWI3M2UxOGJkNTk5MWM4OWE3ODM3ZDM1YzFiNjdiZmRmZTdiYzY1OGYyMWVkMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.BiCLgw2eoZ194bscw5jqZQ8pSSrinM1lFWWM73TO3V8"
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
      <section id="contact" className="contact  autoShow container">
        <div>
          <h1 className="text-white">Contact Me</h1>
          <div className="row">
            <div className="col-md-6">
              <div>
                <h5 className="text-white mt-4">Get in Touch</h5>
              </div>

              <div>
                <div className="d-flex mt-5 ">
                  <div className="d-inline mt-3">
                    <span class="bi bi-envelope text-white h5 bg-dark p-3  rounded-circle"></span>
                  </div>
                  <div className="d-inline ms-3 ">
                    <span className="text-secondary  text-center">Email</span>
                    <br />
                    <span className="text-white text-center">
                      alok.8kumar21@gmail.com
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-4 ">
                  <div className="d-inline mt-3">
                    <span class="bi bi-geo-alt text-white h5 bg-dark p-3  rounded-circle"></span>
                  </div>
                  <div className="d-inline ms-3 ">
                    <span className="text-secondary  text-center">
                      Location
                    </span>
                    <br />
                    <span className="text-white text-center">
                      Ayodhya, India
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-4 ">
                  <div className="d-inline mt-3">
                    <span class="bi bi-linkedin text-white h5 bg-dark p-3  rounded-circle"></span>
                  </div>
                  <div className="d-inline ms-3 ">
                    <span className="text-secondary  text-center">
                      Linkedin
                    </span>
                    <br />
                    <Link
                      to="https://www.linkedin.com/in/iamalokkumar/"
                      className="text-white text-center"
                      target="_blank"
                    >
                      linkedin.com/in/iamalokkumar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 autoShow">
              <div>
                <h5 className="text-white mt-4">Send a Message</h5>
              </div>
              <form className="mt-5">
                <label className="form-label text-white" htmlFor="name">
                  Name
                </label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
                <label className="form-label text-white mt-4" htmlFor="email">
                  Email
                </label>
                <br />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
                <br />
                <label className="form-label text-white" htmlFor="">
                  Message
                </label>
                <br />
                <textarea
                  className="form-control"
                  name=""
                  rows="5"
                  cols="40"
                  id=""
                  placeholder="Your Message"
                ></textarea>
                <button type="submit" className="btn mt-4 btn-light">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
