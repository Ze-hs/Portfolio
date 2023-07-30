import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SideBars = () => {
	return (
		<>
			<aside>
				<FontAwesomeIcon icon={faCircle} />
				<FontAwesomeIcon icon={faCircle} />
				<FontAwesomeIcon icon={faCircle} />
			</aside>

			<aside>
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faEnvelope} />
			</aside>
		</>
	);
};

export default SideBars;
