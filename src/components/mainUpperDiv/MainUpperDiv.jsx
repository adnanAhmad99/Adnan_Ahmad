import { URLAPPEND } from "../../data/globalData";
import "./mainUpperDiv.css";

const MainUpperDiv = () => {
  const handleContactButton = () => {
    const selectedId = document.querySelector("#contact");
    selectedId?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <article className="d-flex upper-main-div" id="home">
      <div className="main-image d-flex">
        <img src={`${URLAPPEND}/images/mainPic.jpg`} alt="my photo" />
      </div>
      <div className="d-flex main-intro">
        <small>Hello, Thank you for visiting </small>
        <div>
          <small>I'm </small>
          <span className="name-span">Adnan Ahmad</span>
        </div>
        <small>Frontend / Backend Developer</small>
        <div className="upper-div-buttons">
          <button className="cv-button color-opposite">
            <a href="AdnanCv.pdf" target="_blank" className="color-opposite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              &nbsp; Download my Cv
            </a>
          </button>
          <button className="contact-button" onClick={handleContactButton}>
            Contact me
          </button>
        </div>
      </div>
    </article>
  );
};

export default MainUpperDiv;
