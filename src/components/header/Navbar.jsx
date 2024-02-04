import { useState } from "react";

const LINKSARRAY = ["About", "Skills", "Certificates", "Projects"];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLink = (data) => {
    setActiveLink(data);
    const idData =
      data === "Final note" ? "#final-note" : `#${data.toLowerCase()}`;
    const selectedId = document.querySelector(idData);
    selectedId?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="ul-navlinks">
      {LINKSARRAY.map((element, i) => (
        <li key={`${i}${element}`}>
          <button
            className={`links-button ${
              activeLink === element ? "link-active" : ""
            }`}
            onClick={() => handleLink(element)}
          >
            {element}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
