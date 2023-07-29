import { useSelector } from "react-redux";
import Card from "./Card";

const ProjectList = () => {
	const projects = useSelector((state) => state.projects);

	return (
		<main>
			<h2>Projects</h2>
			{projects.map((project) => (
				<Card key={project.id} project={project} />
			))}
		</main>
	);
};

export default ProjectList;
