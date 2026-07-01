import { useCallback, useEffect, useState } from "react";

import CreateProjectButton from "./CreateProjectButton";
import CreateTaskButton from "./CreateTaskButton";
import DeleteProjectButton from "./DeleteProjectButton";
import Layout from "./Layout";
import ProjectSelect from "./ProjectSelect";
import TaskList from "./TaskList";
import type { IProject } from "./useProjects";
import useProjects from "./useProjects";

import css from "./Home.module.css";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>();
  const { projects } = useProjects();
  const project = projects?.find((p) => p.id === projectId);

  const handleSelectProject = useCallback(
    (p: IProject) => setProjectId(p.id),
    []
  );

  useEffect(() => {
    if (
      (project === undefined || project === null) &&
      projects !== undefined &&
      projects !== null &&
      projects.length > 0
    ) {
      setProjectId(projects[0].id);
    }
  }, [project, projects]);

  return (
    <Layout>
      <div className={css.tutorialBannerWrapper}>
        <div className={css.tutorialBanner}>
          <p className={css.tutorialBannerTitle}>
            💡 Welcome to To Do app tutorial!
          </p>
          <p>
            The To Do App is implemented with mock in-memory data.
            <br />
            Can you solve how to switch it to use the Ontology SDK instead?
          </p>
        </div>
      </div>
      <div className={css.projectSelect}>
        <label htmlFor="project-select">Project:</label>
        <ProjectSelect
          project={project}
          projects={projects ?? []}
          onSelectProject={handleSelectProject}
        />
        <CreateProjectButton onProjectCreated={setProjectId} />
        {project !== undefined && project !== null && (
          <DeleteProjectButton project={project} />
        )}
      </div>
      {project !== undefined && project !== null && (
        <div className={css.projectCard} key={project.id}>
          <h1 className={css.projectTitle}>{project.name}</h1>
          <TaskList project={project} />
          <CreateTaskButton project={project} />
        </div>
      )}
    </Layout>
  );
}

export default Home;
