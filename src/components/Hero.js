import "../styles/styles.scss";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
	return (
		<section className="container">
			<div id="hero" className="hero">
				<p>Hi, my name is</p>
				<h1 className="heading">Ze Hao Su</h1>
				<p className="subheadline">
					<span className="highlight">Software developer</span>{" "}
					seeking new challenges everyday
				</p>

				<Link smooth to="/#projects" className=" button-primary">
					<button>LEARN MORE</button>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
