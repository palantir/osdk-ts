import { useCallback, useEffect, useState } from "react";

import CreateProjectButton from "./CreateProjectButton";
import DeleteProjectButton from "./DeleteProjectButton";
import Layout from "./Layout";
import type { MockProject } from "./mocks";
import { ProjectDetails } from "./ProjectDetails";
import ProjectSelect from "./ProjectSelect";
import useProjects from "./useProjects";

import css from "./Home.module.css";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>();
  const { projects } = useProjects();

  const project = projects?.find((p) => p.id === projectId);

  const handleSelectProject = useCallback(
    (p: MockProject) => setProjectId(p.id),
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

  const handleOnProjectCreated = useCallback(
    (createdProjectId: string | undefined) => {
      setProjectId(createdProjectId);
    },
    []
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
            <br />
            Can you solve how to change it to use the Ontology SDK instead?
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
        <CreateProjectButton onProjectCreated={handleOnProjectCreated} />
        {project !== undefined && project !== null && (
          <DeleteProjectButton project={project} />
        )}
      </div>
      {project !== undefined && project !== null && (
        <ProjectDetails project={project} />
      )}
    </Layout>
  );
}

export default Home;
