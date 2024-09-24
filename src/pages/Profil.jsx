import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Garde les icônes de marque
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Importation mise à jour



const Profil = () => {
  const loadReactApp = () => {
    const container = document.getElementById("react-app-container");
    container.innerHTML = `<iframe src="https://codesandbox.io/p/github/Benjamin63B/App-John-doe-react/main?import=true&embed=1"
      style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Benjamin63B/App-John-doe-react/main"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>`;
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 ps-5">
          <div className="container-fluid">
            <a href="../../index.html" className="navbar-brand">
              <h2 className="navbar-text text-uppercase text-light">
                John <span className="bg-primary bg-gradient rounded-3 p-1">Doe</span>
              </h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
              <ul className="navbar-nav mb-2 mb-lg-0 text-light text-uppercase">
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="../../index.html">Accueil</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="./services.html">Services</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="./portfolio.html">Réalisations</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="./blog.html">Blog</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="./contact.html">Me contacter</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <button className="btn btn-primary m-5" id="load-react-app" onClick={loadReactApp}>
        Voir mon profile github
      </button>
      <div className="m-5" id="react-app-container"></div>

      <footer className="container-fluid bg-dark bg-opacity-10">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col-12 col-sm-6 col-lg-3 p-4">
            <h4>John Doe</h4>
            <p className="text-capitalize m-0">
              40 rue laure Diebold <br />69009 Lyon, France
            </p>
            <a href="tel:+33660504030" className="pb-2 p-0 text-reset">
              Téléphone: 06 60 50 40 30
            </a>
            <div className="row mt-2">
              <div className="d-flex align-items-center">
                <a
                  href="https://github.com/github-john-doe"
                  className="mx-2 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
                <a
                  href="https://x.com/github-john-doe"
                  className="mx-2 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </a>
                <a
                  href="https://linkedin.com/in/github-john-doe"
                  className="mx-2 text-reset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 p-4">
            <h4>Liens utiles</h4>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="../../index.html" className="text-reset">Accueil</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="../../index.html#about" className="text-reset">&Agrave; propos</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./services.html" className="text-reset">Services</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./contact.html" className="text-reset">Me contacter</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./legal.html" className="text-reset">Mentions légales</a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 p-4">
            <h4>Mes dernières réalisations</h4>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./portfolio.html#freshfood" className="text-reset">Fresh food</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./portfolio.html#akira" className="text-reset">Restaurant Akira</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./portfolio.html#espace" className="text-reset">Espace bien-être</a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 p-4">
            <h4>Mes derniers articles</h4>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./blog.html#coder" className="text-reset">Coder son site en HTML/CSS</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./blog.html#croissance" className="text-reset">Vendre ses produits sur le web</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faChevronRight} className="text-primary fa-sm me-1" />
              <a href="./blog.html#google" className="text-reset">Se positionner sur Google</a>
            </div>
          </div>
        </div>

        <div className="row bg-dark py-3">
          <p className="text-light text-center m-0">&copy; Designed by John Doe</p>
        </div>
        <div className="row py-2"></div>
      </footer>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Profil;
