import { useSelector } from "react-redux";
import Card from "./Card";
import "../styles/styles.scss";

const ProjectList = () => {
	const projects = useSelector((state) => state.projects);

	return (
		<main className="sub-container">
			<h2 className="subheading">Projects</h2>
			<div className="project-list">
				{projects.map((project) => (
					<Card key={project.id} project={project} />
				))}
			</div>
		</main>
	);
};

export default ProjectList;
