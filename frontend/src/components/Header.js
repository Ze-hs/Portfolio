import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/styles.scss";

const Header = () => {
	return (
		<header className="header">
			<FontAwesomeIcon className="logo" icon={faGithub} />
			<Navbar />
		</header>
	);
};

export default Header;
