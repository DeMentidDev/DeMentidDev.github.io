import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="images/DeMentidDev.svg" alt="DeMentidDev Logo" height="80" />
      <h2>DeMentidDev</h2>
      <h3>
        <div className="grid-container">
          <div className="grid-item">
            <Link to="/">Home</Link>
          </div>
          <div className="grid-item">
            <Link to="/about">About</Link>
          </div>
          <div className="grid-item">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="grid-item">
            <Link to="/socials">Socials</Link>
          </div>
        </div>
      </h3>
    </header>
  );
}

export default Header;
