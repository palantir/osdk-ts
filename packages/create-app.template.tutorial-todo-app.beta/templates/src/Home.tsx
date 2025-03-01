import { useCallback, useEffect, useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import CreateTaskButton from "./CreateTaskButton";
import DeleteProjectButton from "./DeleteProjectButton";
import css from "./Home.module.css";
import Layout from "./Layout";
import ProjectSelect from "./ProjectSelect";
import TaskList from "./TaskList";
import useProjects, { IProject } from "./useProjects";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);
  const { projects } = useProjects();
  const project = projects?.find((p) => p.id === projectId);

  const handleSelectProject = useCallback(
    (p: IProject) => setProjectId(p.id),
    [],
  );

  useEffect(() => {
    if (project == null && projects != null && projects.length > 0) {
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
            <br />Can you solve how to switch it to use the Ontology SDK
            instead?
          </p>
        </div>
      </div>
      <div className={css.projectSelect}>
        <span>Project:</span>
        <ProjectSelect
          project={project}
          projects={projects ?? []}
          onSelectProject={handleSelectProject}
        />
        <CreateProjectButton onProjectCreated={setProjectId} />
        {project != null && <DeleteProjectButton project={project} />}
      </div>
      {project != null && (
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
