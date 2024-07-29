import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-web-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-web-development")}
            data-href=".sorting-web-development"
          >
            Web-Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-backend-development")}`}
            onClick={handleFilterKeyChange("sorting-backend-development")}
            data-href=".sorting-backend-development"
          >
            Backend-Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-python-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-python-development")}
            data-href=".sorting-python-development"
          >
            Python-Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-machine-learning"
            )}`}
            onClick={handleFilterKeyChange("sorting-machine-learning")}
            data-href=".sorting-machine-learning"
          >
            machine-learning
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web-development sorting-backend-development sorting-machine-learning ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/dt_waternetwork/simulation">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work4.jpeg"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Web-Development, backend-development </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/dt_waternetwork/simulation">
                    <a>Digital Twin</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  The Digital Twin for Water Network integrates real-time sensor monitoring and control and a user-friendly dashboard for visualizing and simulating water quality scenarios in collaboration with ZF Technologies.
                  </p>
                </div>
                <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/dt_waternetwork/simulation">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web-development sorting-python-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work2.jpeg"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Web Development, Python</span>
                <h5 className="name">
                  <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard">
                    <a>Maintenance Dashboard</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A real-time dashboard for monitoring a 300+ node smart city system, utilizing React JS and Grafana. It helps in monitoring the health of the system and provides insights into the system's performance.
                  </p>
                </div>
                <Link legacyBehavior href="https://smartcitylivinglab.iiit.ac.in/maintenance-dashboard">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-backend-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://ctop.iiit.ac.in/">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work7.jpg"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">backend-Development</span>
                <h5 className="name">
                  <Link legacyBehavior href="https://ctop.iiit.ac.in/">
                    <a>ctOP</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Part of Developing, Deployment to build a scalable, secure, and user-friendly version of the oneM2M called ctOP (City IoT Operating Platform) in collaboration with Smart City Mission and IUDX.
                  </p>
                </div>
                <Link legacyBehavior href="https://ctop.iiit.ac.in/">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-python-development">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://github.com/likhithkanigolla/KIET_HACKATHON_EMOCYP-encryptor-decrypter">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work1.jpeg"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category">Python, Cyber Security</span>
                <h5 className="name">
                  <Link legacyBehavior href="https://github.com/likhithkanigolla/KIET_HACKATHON_EMOCYP-encryptor-decrypter">
                    <a>EMOCYP</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  This project implements a 7-layered symmetric encryption algorithm to encrypt plain text into emojis and
                  decrypt emojis back into plain text.
                  </p>
                </div>
                <Link legacyBehavior href="https://github.com/likhithkanigolla/KIET_HACKATHON_EMOCYP-encryptor-decrypter">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-python-development sorting-machine-learning ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/single8.jpg"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Machine Learning </span>
                <h5 className="name">
                  <Link legacyBehavior href="/">
                    <a>Aqua Prognosticator</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Machine learning model that predicts water quality changes based on impurity levels. It Predicts the variance of the TDS value with
                  respect to the impurities like sand, soil, etc.
                  </p>
                </div>
                <Link legacyBehavior href="/">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-web-development sorting-backend-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/single6.jpg"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> web-development, backend-development</span>
                <h5 className="name">
                  <Link legacyBehavior href="/">
                    <a>LuminoSynth</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A software replica of a physical hardware-led system, accurately predicting color reflection
                  under various conditions.
                  </p>
                </div>
                <Link legacyBehavior href="/">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="https://github.com/likhithkanigolla">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
