import { OsdkTodoProject } from "@osdk/examples.one.dot.one";
import { ChangeEvent, useCallback } from "react";

interface ProjectSelectProps {
  project: OsdkTodoProject | undefined;
  projects: OsdkTodoProject[];
  onSelectProject: (project: OsdkTodoProject) => void;
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
      <option hidden disabled selected>
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
