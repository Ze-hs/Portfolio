import "../styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ project }) => {
	return (
		<div className="card">
			<div className="card-text">
				<p className="card-title">
					{project.title}
					<a href="/#">
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

			<a className="card-img-link-wrapper" href="http://google.com">
				<div className="img-overlay"></div>
				<img
					alt="project"
					className="card-img"
					src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
				/>
			</a>
		</div>
	);
};

export default Card;
