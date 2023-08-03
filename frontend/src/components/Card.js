import "../styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ project }) => {
	console.log(project.githubUrl);
	return (
		<div className="card">
			<div className="card-text">
				<p className="card-title">
					{project.title}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</p>
				<p className="card-description">{project.description}</p>

				<div className="tag-wrapper">
					{project.tags.map((tag) => {
						return (
							<div className="tag" key={`${project.id}-${tag}`}>
								{tag}
							</div>
						);
					})}
				</div>
			</div>

			<div className="card-img-link-wrapper">
				<div className="img-overlay"></div>
				<img
					alt="project"
					className="card-img"
					src={project.imageUrl}
				/>
			</div>
		</div>
	);
};

export default Card;
