import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SideBars = () => {
	return (
		<div className="side-bars">
			<aside className="social-bar">
				<a href="/#">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="/#">
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a href="/#">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>

				<div className="line"></div>
			</aside>
		</div>
	);
};

export default SideBars;
