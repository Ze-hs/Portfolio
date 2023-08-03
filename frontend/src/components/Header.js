import Navbar from "./Navbar";
import "../styles/styles.scss";
import logo from "../assets/icons/logo.svg";

const Header = () => {
	return (
		<div className="header-wrapper">
			<header className="header">
				<img className="logo" src={logo} alt="logo" />
				<Navbar />
			</header>
		</div>
	);
};

export default Header;
