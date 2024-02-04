import "./footer.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="color-opposite">
      <p className="footer-copyright">
        All right reserved &copy; Adnan Ahmad {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
