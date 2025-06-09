const MainContent = () => {
  return (
    <section>
      <section className=" container ">
        <div className="row">
          <div className=" col-md-8 info">
            <div>
              <h1 className="primary name">Alok Kumar</h1>
              <p className="h5  text-secondary">Full Stack Web Developer</p>
            </div>
            <div className="d-flex mt-4 mb-4">
              <div className="text-secondary">
                <i class="bi bi-envelope "></i>&nbsp; alok.8kumar21@gmail.com
              </div>
              <div className=" ms-3 text-secondary">
                <i class="bi bi-geo-alt"></i>&nbsp; Ayodhya, India
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
              <button className="btn btn-light ">
                <i class="bi bi-download"></i>&nbsp;&nbsp;Resume
              </button>
              <button className="btn ms-3 border">
                <i class="bi bi-github text-secondary"></i>
              </button>
              <button className="btn ms-3 border">
                <i class="bi bi-envelope text-secondary"></i>
              </button>
              <button className="btn ms-3  border">
                <i class="bi bi-linkedin  text-secondary"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4    name">
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
          <i class="bi bi-mortarboard h2 text-secondary"></i>
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
          <i class="bi bi-mortarboard h2 text-secondary"></i>
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
            <p className="text-center text-secondary mt-1 ">MongoDB</p>
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
              <i class="bi bi-caret-up-fill text-white h3"></i>
            </div>
            <p className="text-center text-secondary mt-1 ms-3">Vercel</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects container">
        <div>
          <h1 className="text-white">Projects</h1>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
