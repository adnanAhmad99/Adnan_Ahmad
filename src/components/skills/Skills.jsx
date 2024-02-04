import "./skills.css";
import Skill from "./Skill";
import {
  PROGRAMMINGlANGUAGES,
  FRONTENDEVELOPMENT,
  BACKENDDEVELOPMENT,
  DEVOPS,
} from "../../data/skillsData";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="color-opposite top-h">Skills</h2>
      <div>
        <h3 className="skills-mini-heading">Programing languages:</h3>
        <div className="d-flex sub-skills-div">
          {PROGRAMMINGlANGUAGES.map((data, i) => (
            <Skill key={`${i}${data}`} skillData={data} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="skills-mini-heading">Frontend Development:</h3>
        <div className="d-flex sub-skills-div">
          {FRONTENDEVELOPMENT.map((data, i) => (
            <Skill key={`${i}${data}`} skillData={data} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="skills-mini-heading">Backend Development:</h3>
        <div className="d-flex sub-skills-div">
          {BACKENDDEVELOPMENT.map((data, i) => (
            <Skill key={`${i}${data}`} skillData={data} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="skills-mini-heading">DevOps:</h3>
        <div className="d-flex sub-skills-div">
          {DEVOPS.map((data, i) => (
            <Skill key={`${i}${data}`} skillData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
