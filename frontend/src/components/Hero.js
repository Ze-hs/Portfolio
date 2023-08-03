import "../styles/styles.scss";

const Hero = () => {
	return (
		<section className="container">
			<div className="hero">
				<p>Hi, my name is</p>
				<h1 className="heading">Ze Hao Su</h1>
				<p className="subheadline">
					<span className="highlight">Software developer</span>{" "}
					seeking new challenges everyday
				</p>

				<button className="button-primary">LEARN MORE</button>
			</div>
		</section>
	);
};

export default Hero;
