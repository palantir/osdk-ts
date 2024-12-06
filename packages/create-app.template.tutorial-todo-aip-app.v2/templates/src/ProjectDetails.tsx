import aipLogo from "/aip-icon.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import CreateTaskButton from "./CreateTaskButton";
import type { MockProject } from "./mocks";
import css from "./ProjectDetails.module.css";
import TaskList from "./TaskList";
import useProjects from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface ProjectDetailsProps {
  project: MockProject;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [projectHasTasks, setProjectHasTasks] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { updateProjectDescription } = useProjects();
  const tasks = useProjectTasks(project).tasks;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setProjectHasTasks(tasks == null ? false : tasks.length > 0);
  }, [project, tasks]);

  const handleProjectDescriptionRecommendation = useCallback(async () => {
    if (project == null) {
      return;
    }
    setIsProcessing(true);
    await updateProjectDescription(project);
    setIsProcessing(false);
  }, [project, updateProjectDescription]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [project.description]);

  const handleOnTaskCreated = useCallback(() => {
    setProjectHasTasks(true);
  }, []);

  const handleOnTaskDeleted = useCallback(() => {
    if (tasks?.length === 0) {
      setProjectHasTasks(false);
    }
  }, [tasks]);

  return (
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
      <TaskList project={project} onTaskDeleted={handleOnTaskDeleted} />
      <CreateTaskButton
        project={project}
        onTaskCreated={handleOnTaskCreated}
      />
    </div>
  );
}
