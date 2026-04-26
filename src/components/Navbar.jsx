import cartIcon from "../assets/cart.svg";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.svg";

function Navbar({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="topbar">
      <a className="brandmark" href="#home" aria-label="Foodies home">
        <img src={logo} alt="Foodies logo" />
      </a>

      <nav className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        <a href="#discover">Discover</a>
        <a href="#restaurants">Restaurants</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="topbar-actions">
        <button type="button" className="icon-button" aria-label="View cart">
          <img src={cartIcon} alt="" />
        </button>
        <button
          type="button"
          className="icon-button menu-button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <img src={menuIcon} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
