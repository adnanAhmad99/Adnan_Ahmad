import { URLAPPEND } from "../../data/globalData";
import "./introDiv.css";

const IntroDiv = () => {
  return (
    <article className="intro " id="about">
      <h2 className="color-opposite top-h">About Me</h2>
      <div className="d-flex sub-intro padding-left-right">
        <p className="intro-info">
          Hello there! I'm Adnan Ahmad, a passionate learner with a knack for
          adapting to diverse working environments. My strength lies in
          following instructions meticulously, coupled with a keen attention to
          detail. What sets me apart is my flexibility—I seamlessly navigate the
          realms of both frontend and backend development. <br /> Welcome to my
          digital space where curiosity meets coding expertise!
        </p>
        <div className="d-flex intro-pic">
          <div>
            <img src={`${URLAPPEND}/images/myPic.jpeg`} alt="my photo" />
          </div>
        </div>
      </div>
      <div className="d-flex experience-para-div ">
        <p>
          With over a year and a half of dedicated experience in web app
          development, I bring a wealth of expertise to the table. During a
          four-month internship at Ezline Software House, I honed my skills and
          gained valuable insights into the industry. The remainder of my
          professional journey has been marked by collaborative efforts, where I
          actively contributed to various projects, supporting and collaborating
          with seasoned senior developers. This hands-on experience has not only
          enriched my technical proficiency but also instilled a strong
          commitment to excellence in every project I undertake.
        </p>
      </div>
    </article>
  );
};

export default IntroDiv;
