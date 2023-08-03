import "../styles/styles.scss";

const About = () => {
	return (
		<section id="about" className="sub-container ">
			<div className="about">
				<h2 className="subheading">About</h2>
				<div className="about-text">
					<p>
						Hello there! I'm Ze Hao, a 4th-year Computer Science
						major at Ryerson University. My passion lies in building
						and tinkering with new ideas. Throughout my journey,
						I've had the privilege of working as a
						<span className="highlight"> data analyst</span> and
						<span className="highlight"> software developer</span>,
						gaining valuable experience in both front-end and
						back-end development.
					</p>

					<p>
						Here are some of the technologies I've worked with
						recently:
					</p>
					<ul className="skill-list">
						<li>Java</li>
						<li>Python</li>
						<li>R</li>
						<li>React</li>
						<li>Express</li>
						<li>Node.js</li>
					</ul>
					<p>
						Currently, I'm on a journey to build my own emulator
						entirely from scratch – starting with designing an
						assembler, crafting my coding language, and finally
						creating the emulator itself.
					</p>

					<p>
						When I'm not studying, you'll find me exploring Blender
						and Photoshop CC, indulging in my creative side
						alongside coding. I'm eager to keep growing and
						creating, and I'd love to connect with fellow tech
						enthusiasts.
					</p>
				</div>
			</div>
		</section>
	);
};
export default About;
