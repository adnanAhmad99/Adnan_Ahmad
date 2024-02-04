import "./certificates.css";

const COURSERACERTIFICATES = [
  {
    courseName: "Introduction to Web Development with HTML, CSS, JavaScript",
    link: "https://www.coursera.org/account/accomplishments/certificate/25HKWS2P89SU",
  },
  {
    courseName: "Introduction to Cloud Computing",
    link: "https://www.coursera.org/account/accomplishments/certificate/7QXDEQ62M3FF",
  },
  {
    courseName: "Getting Started with Git and GitHub",
    link: "https://www.coursera.org/account/accomplishments/certificate/2RPBQHC548S9",
  },
  {
    courseName: "Developing Front-End Apps with React",
    link: "https://www.coursera.org/account/accomplishments/certificate/N4MJ3DS6CRUC",
  },
  {
    courseName: "Developing Back-End Apps with Node.js and Express",
    link: "https://www.coursera.org/account/accomplishments/certificate/4ERVALDPGC7H",
  },
  {
    courseName: "Python for Data Science, AI & Development",
    link: "https://www.coursera.org/account/accomplishments/certificate/3Q4S9Z54MZGR",
  },
  {
    courseName: "Developing AI Applications with Python and Flask",
    link: "https://www.coursera.org/account/accomplishments/certificate/SYEJK2GDWMAH",
  },
  {
    courseName: "Django Application Development with SQL and Databases",
    link: "https://www.coursera.org/account/accomplishments/certificate/JQXVD4ZGR8S7",
  },
];

const CourseraCertificates = () => {
  return (
    <article className="certificates">
      <h2 className="color-opposite top-h">Certificates</h2>
      <p>
        These certificates are part of{" "}
        <a
          href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer"
          target="_blank"
        >
          IBM Full Stack Software Developer Professional Certificate
        </a>{" "}
        course. They provide hands on practical approcah on their cloud
        platform. I already completed below certificates and currently learning
        kubernetes,openshift and microservices.
      </p>
      <p className="bold under-line">Links:</p>
      <ul className="d-flex">
        {COURSERACERTIFICATES.map((course, i) => (
          <li key={`${i}${course.courseName}`}>
            <a href={course.link} target="_blank">
              {course.courseName}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CourseraCertificates;
