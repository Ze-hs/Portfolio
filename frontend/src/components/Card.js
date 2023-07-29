const Card = ({ project }) => {
	return (
		<div>
			<p>{project.title}</p>
			<p>{project.description}</p>

			<div>
				{project.tags.map((tag) => {
					<div key={`${project.id}-${tag}`}>tag</div>;
				})}
			</div>
		</div>
	);
};

export default Card;
