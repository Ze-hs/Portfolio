import Navbar from "./Navbar";
import "../styles/styles.scss";
import logo from "../assets/icons/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
	return (
		<div className="header-wrapper">
			<header className="header">
				<Link smooth to="/#" className="logo-wrapper">
					<img className="logo" src={logo} alt="logo" />
				</Link>

				<Navbar />
			</header>
		</div>
	);
};

export default Header;
