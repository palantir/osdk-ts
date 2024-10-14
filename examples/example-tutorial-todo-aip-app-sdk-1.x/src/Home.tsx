import { useCallback, useEffect, useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import DeleteProjectButton from "./DeleteProjectButton";
import css from "./Home.module.css";
import Layout from "./Layout";
import type { MockProject } from "./mocks";
import { ProjectDetails } from "./ProjectDetails";
import ProjectSelect from "./ProjectSelect";
import useProjects from "./useProjects";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);
  const { projects } = useProjects();

  const project = projects?.find((p) => p.id === projectId);

  const handleSelectProject = useCallback(
    (p: MockProject) => setProjectId(p.id),
    [],
  );

  useEffect(() => {
    if (project == null && projects != null && projects.length > 0) {
      setProjectId(projects[0].id);
    }
  }, [project, projects]);

  const handleOnProjectCreated = useCallback(
    (projectId: string | undefined) => {
      setProjectId(projectId);
    },
    [],
  );

  return (
    <Layout>
      <div className={css.tutorialBannerWrapper}>
        <div className={css.tutorialBanner}>
          <p className={css.tutorialBannerTitle}>
            💡 Welcome to the To Do AIP App tutorial!
          </p>
          <p>
            The application is implemented with mock in memory data.
            <br />Can you solve how to change it to use the Ontology SDK
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
        <CreateProjectButton onProjectCreated={handleOnProjectCreated} />
        {project != null && <DeleteProjectButton project={project} />}
      </div>
      {project != null && <ProjectDetails project={project} />}
    </Layout>
  );
}

export default Home;
