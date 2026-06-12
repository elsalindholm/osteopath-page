import "../assets/scss/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>Logo goes here</div>
      <div className="nav-link-container">
        <a className="nav-link">Minusta</a>
        <a className="nav-link">Osteopatia</a>
        <a className="nav-link">Varaa aika</a>
        <a className="nav-link">Yhteystiedot</a>
      </div>
    </div>
  );
};

export default NavBar;
