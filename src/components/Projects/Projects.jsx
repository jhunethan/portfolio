import "./Projects.css";
import ncgamesdemo from "../../assets/ncgamesdemo.gif";
import graphqldemo from "../../assets/graphqldemo.gif";

export default function Projects() {
  return (
    <section className="projects__section" id="projects">
      <IndividualProject
        title="Northcoders Game Reviews"
        subheader="Northcoders Solo Project"
        description="Full stack appilication that allows the users to read and interact with a database of game reviews. This project was built from scratch consolidating all we had learnt on front-end and back-end. This app allows users to comment and upvote reviews."
        techStack={["React", "Express", "PostgreSQL", "Node.js"]}
        repoLink="https://github.com/jhunethan/nc-games"
        websiteLink="https://ncgames.netlify.app"
        image={ncgamesdemo}
      />
      <IndividualProject
        title="Family Tree"
        subheader="Personal Project"
        description="A full stack web application, allowing users to collaboratively build a family tree. This was my first large personal project with the purpose of learning web development. This project used a RESTful API with a MySQL database."
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
      <IndividualProject
        title="Earthquake Locator"
        subheader="Northcoders Pair Project"
        description="As part of the Northcoders course, I built a front end user interface which uses an existing API that provides data about Earthquakes. The user can interact with the map, filtering earthquakes by date."
        techStack={["JavaScript", "Google API", "React"]}
        repoLink="https://github.com/jhunethan/fe-react-data-visualisation"
        image={"https://media1.giphy.com/media/RnTtUgumZ6tnPuqq2V/giphy.gif?cid=790b76110a8088ceba3764b47ccdd1a4ea147c60c8485fff&rid=giphy.gif&ct=g"}
      />
      <div className="projects_individual container projects__last">
        <h1>And many more projects...</h1>
        <h2>Visit my GitHub to see more</h2>
        <a
          href="https://github.com/jhunethan"
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
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
              <a
                href={repoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
            )}
            {websiteLink && (
              <a
                href={websiteLink}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
