import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar">
			<Link to="/" className="link">Home</Link>
      {/* <Link to="/emojis" className="link">Emojis</Link> */}
    </header>
  );
};

export default NavBar;