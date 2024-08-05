import { motion } from "framer-motion";
import { ProjectCard } from "./components/project-card";
import { ProjectType } from "./project.type";
import { Link } from "react-router-dom";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Cat Portfolio",
    techs: ["React", "Tailwind"],
    description: "First porfolio, simple project, nothing special about it",
  },
  {
    id: 2,
    title: "Cat Portfolio",
    techs: ["React", "Tailwind"],
    description: "First porfolio, simple project, nothing special about it",
  },
  {
    id: 3,
    title: "Cat Portfolio",
    techs: ["React", "Tailwind"],
    description: "First porfolio, simple project, nothing special about it",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
      transition={{ duration: 2 }}
      className="p-4"
      layout
    >
      <Link
        to="/portfolio/"
        className="m-4 px-4 py-2 border dark:border-white border-black rounded-md hover:bg-teal-400 duration-300"
      >
        Back to Home
      </Link>
      <ul className="p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techs={project.techs}
            />
          );
        })}
      </ul>
    </motion.div>
  );
};

export { Projects };
