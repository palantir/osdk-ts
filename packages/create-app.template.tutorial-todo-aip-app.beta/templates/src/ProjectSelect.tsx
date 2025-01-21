import { ChangeEvent, useCallback } from "react";
import { IProject } from "./useProjects";

interface ProjectSelectProps {
  project: IProject | undefined;
  projects: IProject[];
  onSelectProject: (project: IProject) => void;
}

function ProjectSelect({
  project,
  projects,
  onSelectProject,
}: ProjectSelectProps) {
  const handleSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const nextProject = projects.find((p) => `${p.id}` === e.target.value);
      if (nextProject != null) {
        onSelectProject(nextProject);
      }
    },
    [projects, onSelectProject],
  );

  return (
    <select value={project?.id} onChange={handleSelect}>
      <option hidden disabled value="">
        -- select a project --
      </option>

      {projects.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  );
}

export default ProjectSelect;
