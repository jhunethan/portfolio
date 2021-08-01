import "./Projects.css";
import ncgamesdemo from "../../assets/ncgamesdemo.gif";
import graphqldemo from "../../assets/graphqldemo.gif";

export default function Projects() {
  return (
    <section className="projects__section" id="projects">
      <IndividualProject
        title="Northcoders Game Reviews"
        subheader="Solo Project"
        description="This project was built from scratch consolidating all we had learnt on front-end and back-end. This app allows users to comment and upvote reviews."
        techStack={["React", "Express", "PostgreSQL", "Node.js"]}
        repoLink="https://github.com/jhunethan/nc-games"
        websiteLink="https://ncgames.netlify.app"
        image={ncgamesdemo}
      />
      <IndividualProject
        title="Family Tree"
        subheader="Personal Project"
        description="A full stack web application, allowing users to collaboratively build a family tree. This was my first large personal project with the purpose of learning web development. Built through hours of trial and error."
        techStack={["React", "MySQL", "Express", "D3.js"]}
        repoLink="https://github.com/jhunethan/Family-Tree"
        image={"https://media1.giphy.com/media/VrLXH90qteqeb6bC4K/giphy.gif"}
      />
      <IndividualProject
        title="GraphQL Demo"
        subheader="Personal Project"
        description="A GraphQL web application that displays countries from a existing API. This was the first time I've experimented with GraphQL."
        techStack={["Apollo", "GraphQL", "React"]}
        websiteLink="https://graphql-apollo-ethan-lay.netlify.app/"
        repoLink="https://github.com/jhunethan/graphql-apollo-countries-project"
        image={graphqldemo}
      />
    </section>
  );
}

function IndividualProject(props) {
  const {
    title,
    subheader,
    description,
    image,
    techStack = [],
    repoLink,
    websiteLink,
  } = props;
  return (
    <div className="projects__individual container">
      <h2>{title}</h2>
      <p>{subheader}</p>
      <div className="projects__body">
        <div className="projects__image--container">
          <img src={image} alt={title} className="projects__image" />
        </div>
        <div className="projects__description">
          <p>{description}</p>
          <div className="skills-list">
            {techStack.map((item, index) => (
              <div className="skills-list-child" key={`${title}skill${index}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="container space-between">
            {repoLink && (
              <a href={repoLink} className="btn btn-primary">
                Github Repo
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} className="btn btn-primary">
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
