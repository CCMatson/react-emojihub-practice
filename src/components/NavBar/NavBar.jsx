import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
			<Link to="/" className="link">Home</Link>
      <Link to="/search" className="link">Emoji Search</Link>
    </header>
  );
};

export default NavBar;