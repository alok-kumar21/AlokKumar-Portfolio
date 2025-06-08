const MainContent = () => {
  return (
    <section>
      <section className=" container html">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta{" "}
                <br />
                tempora nisi odio, dolore, sunt incidunt blanditiis repudiandae{" "}
                <br />
                dolorem nostrum animi quas facilis est sint id recusandae at{" "}
                <br />
                reprehenderit enim vel illum repellendus cumque deleniti ipsum!{" "}
                <br />
                Porro molestiae dolore molestias vero voluptatem, sint, eum{" "}
                <br />
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
          <div className="col-md-4   main-skill name">
            <div className="mt-4">
              <span type="button" className="position-relative">
                <div className="ms-5 border-0 p-3 rounded bg-dark d-inline-block">
                  <img
                    className="img-fluid"
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
                <div className="ms-4 border-0 p-3 rounded bg-dark d-inline-block">
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
                <div className="ms-5 border-0 p-3 rounded bg-dark d-inline-block">
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
                <div className="ms-4 border-0 p-3 rounded bg-dark d-inline-block">
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
    </section>
  );
};

export default MainContent;
