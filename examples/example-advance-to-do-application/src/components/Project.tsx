import React, { useCallback, useState } from 'react';
import useProjects, { IProject } from '../dataServices/useProjects';
import css from './Project.module.css';
import useAnalytics from '../userAnalytics/useAnalytics';
import { EventType } from '../userAnalytics/userAnalyticsTypes';

export interface ProjectProps {
    onProjectSelect?: (project: IProject) => void;
}

const Project: React.FC<ProjectProps> = ({ onProjectSelect }) => {
    const { projects } = useProjects();
    const { logEvent } = useAnalytics();
    const [currentProject, setCurrentProject] = useState<IProject | undefined>(undefined);

    const handleProjectSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPK = event.target.value;
        const project = projects.find(p => p.$primaryKey === selectedPK);
        setCurrentProject(project);
        logEvent(EventType.ProjectSelected, `{ projectId: selectedPK }`);
        if (project) {
            onProjectSelect?.(project);
        }
    }, [logEvent, onProjectSelect, projects]);
    
    return (
        <div className={css.projectContainer}>
            
          <select value={currentProject?.id || ''} onChange={handleProjectSelect} className={css.projectSelect}>
            <option value="">Select Project</option>
            {projects.map(project => (
                <option key={project.$primaryKey} value={project.$primaryKey}>
                {project.name} ({project.numberOfTasks} tasks)
                </option>
            ))}
          </select>
          {currentProject && (
            <div className={css.projectCard}>
                <div className={css.projectDetails}>
                    <b>{currentProject.name}</b>
                    <span>{currentProject.description}</span>
                </div>
                <div className={css.projectStats}>
                    <div>
                        <strong>Number of completed tasks: </strong>
                        <span>{currentProject.numberOfCompletedTasks}</span>
                    </div>
                    <div>
                        <strong>Number of in progress tasks: </strong>
                        <span>{currentProject.numberOfInProgressTasks}</span>
                    </div>
                    <div>
                        <strong>Number of not started tasks: </strong>
                        <span>{currentProject.numberOfNotStartedTasks}</span>
                    </div>
                </div>
            </div>
          )}
        </div>
      );
    };
    
export default Project;