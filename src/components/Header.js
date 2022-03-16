import Welcome from "../images/welcome.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="image__welcome" src={Welcome} alt="welcome" />
    </header>
  );
};

export default Header;
