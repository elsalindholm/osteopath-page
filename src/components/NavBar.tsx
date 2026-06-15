import "../assets/scss/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>Logo goes here</div>
      <div className="nav-link-container">
        <a className="nav-link" href="#minusta">Minusta</a>
        <a className="nav-link" href="#osteopatia">Osteopatia</a>
        <a className="nav-link" href="#varaa-aika">Varaa aika</a>
        <a className="nav-link" href="#yhteystiedot">Yhteystiedot</a>
      </div>
    </div>
  );
};

export default NavBar;
