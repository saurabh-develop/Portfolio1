import Card3D from "./ui/Card3D";

const Project = () => {
  return (
    <div>
      <ProjectSection />
    </div>
  );
};
const projects = [
  {
    heading: "Game Center",
    description:
      "A platform where you can play different games like chess, sudoku, tic-tac-toe.",
    image: "GameCenter1.png",
    link: "https://github.com/saurabh-develop/Game-Center",
  },
  {
    heading: "Case Files",
    description: "A blog website where you can read and write blogs.",
    image: "CaseFiles1.png",
    link: "https://github.com/saurabh-develop/Case-Files",
  },
  {
    heading: "Think Flow",
    description: "A DSA Visualisation App where user can understand concept easily.",
    image: "firstPage.png",
    link: "https://github.com/saurabh-develop/ThinkFlow",
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Card3D
          key={index}
          heading={project.heading}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="py-12 px-4" id="projects">
      <h2 className="text-5xl font-bold">Projects</h2>
      <ProjectList />
    </section>
  );
};

export default Project;
