import "./projects.css";

const PROJECTDETAILS = [
  {
    heading: "Cosmetics Store:",
    detail:
      "Engineered a comprehensive cosmetic store application using React, Node.js, and MongoDB. Implemented CRUD operations for products, empowering admins with graphical performance insights through Chart.js.",
    skillsUsed: ["React", "Redux", "Chartjs", "Nodejs", "Mongodb", "Mongoose"],
  },
  {
    heading: "Blogs website:",
    detail:
      "Designed and implemented a versatile blog application for both customers and administrators using React, Node.js, and MongoDB, ensuring seamless content management and user engagement.",
    skillsUsed: ["React", "Redux", "Nodejs", "Mongodb", "Mongoose"],
  },
  {
    heading: "Quiz App:",
    detail:
      "Successfully created two distinct quiz applications: one utilizing HTML, CSS, and vanilla JavaScript, and the other employing React, showcasing versatility in development skills.",
    skillsUsed: ["Html", "Css", "Javascript", "React"],
  },
  {
    heading: "Product App:",
    detail:
      "Developed a robust web application with product addition and deletion functionalities, incorporating admin features using .NET Core MVC and Entity Framework.",
    skillsUsed: ["Dot Net Core", "Entity Framework", "Bootstrap"],
  },
  {
    heading: "Multistep Form:",
    detail:
      "Innovated a dynamic multi-step form application using React, Node.js, and MongoDB. Integrated functionalities for recording and sending videos and photos alongside other information, enhancing user interaction.",
    skillsUsed: ["React", "Redux", "Nodejs", "Mongodb", "Mongoose"],
  },
  {
    heading: "Shopping List App:",
    detail:
      "Developed a user-friendly shopping list application with Angular, featuring an authentication service for a secure and personalized experience.",
    skillsUsed: ["Angular", "Css"],
  },
];

const Projects = () => {
  return (
    <article className="projects" id="projects">
      <h2 className="color-opposite top-h">Projects</h2>
      <div className="d-flex projects-main-div">
        {PROJECTDETAILS.map((data, i) => (
          <div key={`${i}+${data.heading}`} className="d-flex project-div">
            <span className="bold heading-span ">{data.heading}</span>
            <p className="project-intro">{data.detail}</p>
            <div className="d-flex skills-used">
              {data.skillsUsed.map((skillUsedData, i2) => (
                <span
                  className="color-opposite"
                  key={`${i}${i2}${skillUsedData}`}
                >
                  {skillUsedData}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="projects-ending-para">
        sentimental analysis flask app and many more...
      </p>
    </article>
  );
};

export default Projects;
