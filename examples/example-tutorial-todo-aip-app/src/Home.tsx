import aipLogo from "/aip-icon.svg";
import { useCallback, useEffect, useState } from "react";
import CreateProjectButton from "./CreateProjectButton";
import CreateTaskButton from "./CreateTaskButton";
import DeleteProjectButton from "./DeleteProjectButton";
import css from "./Home.module.css";
import Layout from "./Layout";
import type { MockProject } from "./mocks";
import ProjectSelect from "./ProjectSelect";
import TaskList from "./TaskList";
import useProjects from "./useProjects";

function Home() {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);
  const { projects, updateProjectDescription } = useProjects();
  const project = projects?.find((p) => p.id === projectId);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSelectProject = useCallback(
    (p: MockProject) => setProjectId(p.id),
    [],
  );

  const handleProjectDescriptionRecommendation = useCallback(async () => {
    if (project == null) {
      return;
    }
    setIsProcessing(true);
    await updateProjectDescription(project);
    setIsProcessing(false);
  }, [project, updateProjectDescription]);

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
            💡 Welcome to the To-do AIP tutorial!
          </p>
          <p>
            The application is implemented with mock in memory data. Can you
            solve how to change it to use the Ontology SDK instead?
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
          <div className={css.description}>
            <span>{project.description}</span>
            <button
              disabled={isProcessing}
              className={`${css.aip} ${isProcessing ? css.processing : ""}`}
              title="Click here to update project description based on AIP Logic"
              type="button"
              onClick={handleProjectDescriptionRecommendation}
            >
              <div className={css.aipText}>
                <img
                  src={aipLogo}
                  alt="AIP"
                  className={css.image}
                />
                <span>Get description recommendation</span>
              </div>
            </button>
          </div>
          <TaskList project={project} />
          <CreateTaskButton project={project} />
        </div>
      )}
    </Layout>
  );
}

export default Home;
