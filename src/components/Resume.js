import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "BTech in Computer Science",
    academy: "Lovely Professional University, Phagwara, India",
    dec: "Likhith Kanigolla completed his Bachelor of Technology in Computer Science from Lovely Professional University, with a GPA of 7.75/10. The program provided a solid foundation in computer science principles, including software development, data structures, algorithms, and system design, preparing for a career in technology and innovation.",
    startYear: "2019",
    endYear: "2023",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    academy: "Narayana Junior College, Gudivada, India",
    dec: "Likhith Kanigolla Completed Higher Secondary Education from Narayana Junior College,  with a GPA of of 9.19/10 in the Science stream from Board of Intermediate Education, Andhra Pradesh. The program provided a solid foundation in Mathematics, Physics, Chemistry, and Computer Science.",
    startYear: "2017",
    endYear: "2019",
  },
  {
    id: 3,
    title: "High School",
    academy: "Dr. KKR Gowtham Concept School, Gudivada, India",
    dec: "Likhith Kanigolla Completed High School from Dr. KKR Gowtham Concept School, with a GPA of 8.5/10 from Andhra Pradesh Board of Secondary Education. ",
    endYear: "2017",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Research Software Engineer",
    company: "Smart City Research Center, IIIT Hyderabad",
    dec: "Likhith Kanigolla currently Working on a Digital Twin Project for Water Networks in collaboration with ZF Technologies. Developed a scalable, secure, and user-friendly version of the oneM2M called ctOP (City IoT Operating Platform) in collaboration with Smart City Mission and IUDX. Created a real-time dashboard for monitoring a 300+ node smart city system, utilizing React JS and Grafana.",
    startYear: "July 2023",
    endYear: false,
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "Nyalazone Solutions",
    dec: "Likhith Kanigolla developed pipelines to automate various tasks using Jenkins for streamlined management. Researched and implemented efficient log processing methods using the EFG (Elastic-Fluentd-Grafana) stack. Designed a Kafka-based solution for real-time data processing, facilitating data transfer from PostgreSQL to Elasticsearch. Implemented best practices for PostgreSQL, including database partitioning, which reduced system latency by 300%.",
    startYear: "June 2023",
    endYear: "July 2022",
  },
  {
    id: 3,
    title: "Security Research Intern",
    company: "Smart City Research Center, IIIT Hyderabad",
    dec: "Likhith Kanigolla Worked on security aspects and conducted vulnerability assessments for applications. Provided security recommendations for smart city implementations. Conducted load testing on servers using JMeter by designing custom load tests..",
    startYear: "June 2022",
    endYear: "Jan 2022",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
