import "./Projects.css";
export default function Projects() {
  return (
    <section className="projects__section">
      <IndividualProject
        title="Family Tree"
        subheader="Personal Project"
        description="A full stack web application, allowing users to collaboratively build a family tree"
        techStack={[
          "React",
          "MySQL",
          "Javascript",
          "Express",
          "Node.js",
          "D3.js",
        ]}
      />
      <IndividualProject
        title="Northcoders Game Reviews"
        subheader="Solo Project"
        description="A GraphQL web application that displays information from a public API"
        techStack={["React", "Express", "PostgreSQL", "Node.js", "Javascript", "HTML", "CSS"]}
      />
      <IndividualProject
        title="Northcoders Marketplace"
        subheader="Pair programming project"
        description="A GraphQL web application that displays information from a public API"
        techStack={["React", "Javascript", "HTML", "CSS"]}
      />
      <IndividualProject
        title="GraphQL Demo"
        subheader="Personal Project"
        description="A GraphQL web application that displays information from a public API"
        techStack={["Apollo", "GraphQL", "Javascript", "HTML", "CSS"]}
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
  } = props;
  return (
    <div className="projects__individual container">
      <h2>{title}</h2>
      <p>{subheader}</p>
      <div className="projects__body">
        <div className="projects__image">
          <img src={image} alt={title} />
        </div>
        <div className="projects__description">
          <p>{description}</p>
          <div className="skills-list">
            {techStack.map((item,index) => (
              <div className="skills-list-child" key={`${title}skill${index}`}>{item}</div>
            ))}
          </div>
          <a href={repoLink} className="btn btn-primary">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
