import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";
import { useState } from "react";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const menuStyle = openMenu ? "open-menu" : "close-menu";

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className="navbar">
			{console.log("hey")}

			<button onClick={handleClick} className={"mobile-nav-toggle"}>
				{openMenu ? (
					<FontAwesomeIcon icon={faX} />
				) : (
					<FontAwesomeIcon icon={faBars} />
				)}
			</button>

			<ul className={`nav_list ${menuStyle}`}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/projects">projects</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
