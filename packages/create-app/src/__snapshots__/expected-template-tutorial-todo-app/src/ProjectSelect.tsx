import { Project } from "@fake/sdk/ontology/objects";
import { ChangeEvent, useCallback } from "react";

interface ProjectSelectProps {
  project: Project | undefined;
  projects: Project[];
  onSelectProject: (project: Project) => void;
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
