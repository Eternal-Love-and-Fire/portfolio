import { ProjectType } from "../project.type";

type ProjectCardProps = Omit<ProjectType, "id">;

const ProjectCard = (props: ProjectCardProps) => {
  const { title, techs, description } = props;
  return (
    <li className="p-2 flex flex-col gap-2 border-2 border-black dark:border-white">
      <h2 className="font-bold">{title}</h2>
      <div className="flex gap-2">
        {techs.map((tech) => {
          return <div key={tech} className="px-1 flex items-center justify-center border border-black dark:border-white rounded-md">{tech}</div>;
        })}
      </div>
      <p>{description}</p>
    </li>
  );
};

export { ProjectCard };
