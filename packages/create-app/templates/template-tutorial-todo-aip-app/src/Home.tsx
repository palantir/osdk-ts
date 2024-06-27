import aipLogo from "/aip-icon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [projectHasTasks, setProjectHasTasks] = useState<boolean>(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const project = projects?.find((p) => p.id === projectId);

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
      setProjectHasTasks(projects[0].tasks.length > 0);
    }
  }, [project, projects]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [project?.description]);

  const handleOnTaskCreated = useCallback(() => {
    setProjectHasTasks(true);
  }, []);

  const handleOnProjectCreated = useCallback(
    (projectId: string | undefined) => {
      setProjectId(projectId);
      setProjectHasTasks(false);
    },
    [],
  );

  const handleOnTaskDeleted = useCallback(() => {
    if (project != null && project.tasks.length === 0) {
      setProjectHasTasks(false);
    }
  }, [project]);

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
      {project != null && (
        <div className={css.projectCard} key={project.id}>
          <h1 className={css.projectTitle}>{project.name}</h1>
          {projectHasTasks && (
            <div className={css.description}>
              <textarea
                ref={textAreaRef}
                readOnly
                value={project.description}
                className={css.textArea}
              />
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
                  Get description recommendation
                </div>
              </button>
            </div>
          )}
          <TaskList project={project} onTaskDeleted={handleOnTaskDeleted}/>
          <CreateTaskButton
            project={project}
            onTaskCreated={handleOnTaskCreated}
          />
        </div>
      )}
    </Layout>
  );
}

export default Home;
