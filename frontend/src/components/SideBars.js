import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SideBars = () => {
	return (
		<div className="side-bars">
			<aside className="social-bar">
				<a
					href="https://github.com/Ze-hs"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://ca.linkedin.com/in/zehao-su"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
				<a href="mailto:zehao.su@torontomu.ca">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>

				<div className="line"></div>
			</aside>
		</div>
	);
};

export default SideBars;
