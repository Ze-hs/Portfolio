import "../styles/styles.scss";

const Card = ({ project }) => {
	return (
		<div className="card">
			<div>
				<p className="title">{project.title}</p>
				<p>{project.description}</p>
			</div>

			<img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
			{/* <div>
				{project.tags.map((tag) => {
					return <div key={`${project.id}-${tag}`}>tag</div>;
				})} */}
		</div>
		// </div>
	);
};

export default Card;
