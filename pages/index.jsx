import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import Github from "../src/components/Github";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <Layout pageClassName={"home dark-skin"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Likhith</b> Kanigolla{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Software Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      From Andhra Pradesh, India. Currently working on Digital Twin Technologies.
                       My area of Expertise includes 
                      backend development, DevOps, and Cloud Computing.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/balalikhithkanigolla/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.github.com/likhithkanigolla/">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://www.instagram.com/likhithkanigolla/">
                      <i aria-hidden="true" className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1z7J1i378BtOdPES2KG-mG6kJTzRG7sH0/view?usp=sharing"
                    className="btn"
                  >
                    <span>View CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile2.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        2 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">50+</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        <Github />
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Digital Twin </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span>Full Stack Web Development</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                     Creating comprehensive web applications, covering both front-end and back-end development. It includes Implementing responsive designs, managing databases, and ensuring smooth server-side functionality.
                      {" "}
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Penetration Testing </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> iOS &amp; Android </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Penetration testing involves simulating cyber-attacks to identify vulnerabilities in a system's security. It helps ensure robust defenses by uncovering potential weaknesses before malicious actors can exploit them.
                      </p>
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Game Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Unity &amp; Unreal Engine </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Creating games &amp; describes the design, development and
                      release of a game. Developing unique mobile android and
                      ios games.{" "}
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide> */}
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Advertising </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> DevOps and Cloud  </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Automating the software development lifecycle and managing cloud infrastructure. This involves creating and managing CI/CD pipelines to streamline integration and deployment, ensuring rapid and reliable software delivery. {" "}
                    </div>
                  </div>
                  {/* <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a> */}
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Music Writing </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Sound Track </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Music copying, writing, creating, transcription and
                        composition services.
                      </p>
                    </div>
                  </div>
                  <a href="#pricing-section" className="lnk">
                    {" "}
                    See Pricing{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide> */}
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Python </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Proficient in Python, primarily using FastAPI for building high-performance web applications and APIs.
                        </p>
                      </div>
                    </div>
                    {/* <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div> */}
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> React JS</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                        Experienced in developing dynamic user interfaces, Dashboards and single-page applications with React.js.
                        </p>
                      </div>
                    </div>
                    {/* <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        75 <span>%</span>
                      </span>
                    </div> */}
                  </div>

                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Postgres </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Skilled in managing and querying relational databases using PostgreSQL. Research on database optimization and performance tuning.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Google Cloud </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Adept at leveraging Google Cloud services for scalable and reliable cloud-based solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> DevOps Pipelines</span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Experienced in setting up and managing DevOps pipelines, primarily using Jenkins, GitHub, and GitLab for CI/CD automation and version control.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Docker</span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Competent in using Docker for containerizing applications and managing development environments.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Apache Kafka </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Experienced in using Apache Kafka for real-time data streaming and processing in distributed systems.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> WordPress </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Experienced in using WordPress for creating and managing content-rich websites.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Grafana </span>
                    </h6>

                    <div className="text">
                      <div>
                        <p>
                        Proficient in using Grafana for monitoring and visualizing real-time data and system metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* Section - Testimonials */}
      <section
        className="lui-section lui-gradient-center"
        id="testimonials-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Testimonials </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  what <b>Customers Say</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...testimonialsSliderProps}
              className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-2.jpg"
                      alt="Saqlan "
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                We developed a great partnership with Bala Likhith Kanigolla and his dedication to a website is evident in all aspects of the site.He creates a professional,attractive and effective website.He will be the "Best Website Designer" to our company.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Saqlin </span>
                    </h6>
                    <div className="author">
                      <span>Founder of Turning Point Consulatncy Services</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-1.jpg"
                      alt="Sohail Shaik"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
   
                      Likhith is a great and hardworking person. He has been working and handling all the technical work in our organization with perfection. The way he handled every task with such a ease is really admirable. I wish all the luck to him for his further journey.
                                        
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Sohail Shaik</span>
                    </h6>
                    <div className="author">
                      <span>Founder of Gravity</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-4.jpg"
                      alt="zahran"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                       
                      Mr. Likhith, has done a wonderful job in designing/styling our organizations website. He has shown his real potential as a team player and leader. It is helpful to showcase our all events at a glance. His quality of efforts is reflected by his work, which really satisfactory.

                                        
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Zahran</span>
                    </h6>
                    <div className="author">
                      <span>CEO of Dragcon(2018-2022) </span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-3.jpg"
                      alt="Saransh"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                    
                      I am really happy with your service, it is exceptional, Web Design team is just great.I am impressed. Very co-operative and creative team,  we enjoyed to work with you. I will recommend to all my customers, friends and clients.Keep it up
                                        Thank you for your great job.
                                        
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Sarnash</span>
                    </h6>
                    <div className="author">
                      <span>CEO &amp; Founder, SEF Groups</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-5.jpg"
                      alt="Bhavya"
                    />
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="44px"
                        height="34px"
                      >
                        <path
                          fillRule="evenodd"
                          strokeWidth="2px"
                          stroke="rgb(0, 0, 0)"
                          fill="rgb(41, 165, 135)"
                          d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>
                      Mr. Likhith is very passionate about the IT domain and its services. He has gained a good appreciation and  become the mentor for his juniors. Precisely speaking, I must appreciate for his extreme patience and his determination towards the goal.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Bhavya sri Khandrika</span>
                    </h6>
                    <div className="author">
                      <span>Organising Team, Sumshodini'20</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Reviews </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Pricing */}
      {/* <section className="lui-section lui-gradient-center" id="pricing-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Pricing </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Price Board</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="v-line v-line-left">
          <div className="container">
            <div className="pricing-items row">
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Hourley Basis </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      39 <b>$</b>
                    </span>
                    <em>Hour</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <em>Advertising</em>
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="label">
                  <span> Popular </span>
                </div>
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Freelancing </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      259 <b>$</b>
                    </span>
                    <em>Week</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Full Time </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      1.249 <b>$</b>
                    </span>
                    <em>Month</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Photography
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Pricing </span>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section - Blog */}
      {/* <section className="lui-section lui-gradient-top" id="blog-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Latest Blog </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/single7.jpg"
                          alt="The Main Thing For The Designer"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>The Main Thing For The Designer</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/blog-4-scaled-1.jpg"
                          alt="Follow Your Own Design Process"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Follow Your Own Design Process</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <Link legacyBehavior href="/blog-single">
                      <a>
                        <img
                          decoding="async"
                          src="assets/images/blog-2.jpg"
                          alt="Usability Secrets to Create Better Interfaces"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>November 28, 2021</span>
                    </div>
                    <h5 className="lui-title">
                      <Link legacyBehavior href="/blog-single">
                        <a>Usability Secrets to Create Better Interfaces</a>
                      </Link>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget…{" "}
                      </p>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="lnk">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load-more">
              <Link legacyBehavior href="/blog">
                <a
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View Blog</span>
                </a>
              </Link>
            </div>
            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Address </span>
                    </div>
                    <div className="lui-text">
                      <span>IIIT Hyderabad, Gachibowli, Hyderabad, India</span>
                    </div>
                  </div>
                  {/* <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Collabroation & Freelancin </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div> */}
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> likhithkanigolla@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> +91 95736 18704 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            {/* * Accept the terms and conditions. */}
                          </div>
                          <a
                            href="mailto:likhithkanigolla@gmail.com"
                            className="btn"
                            onclick="$('#cform').submit(); return false;"
                          >
                            <span>Send Message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
