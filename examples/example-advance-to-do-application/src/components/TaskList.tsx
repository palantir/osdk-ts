import React, { useState } from 'react';
import { IProject } from "../dataServices/useProjects";
import useTasks, { ITask } from "../dataServices/useTasks";
import css from "./TaskList.module.css";
import { UserField } from './userField';
interface TasksListProps {
    selectedProject: IProject;
    onSelectedTask: (task: ITask) => void;
}

export const TaskList: React.FC<TasksListProps> = ({ selectedProject, onSelectedTask }) => {
    const { tasks, metadata } = useTasks(selectedProject);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    const handleTaskClick = (taskId: string) => {
        setSelectedTaskId(taskId);
        const selectedTask = tasks.find(task => task.osdkTask.$primaryKey === taskId);
        if (selectedTask) {
            onSelectedTask(selectedTask);
        }
    };

    if (metadata == null || metadata.properties == null) {
        return <div>Loading...</div>;
    }
    return (
        <div className={css.container}>
            {tasks.map(task => (
                <div
                    key={task.osdkTask.$primaryKey as string}
                    className={`${css.taskCard} ${selectedTaskId === task.osdkTask.$primaryKey ? css.selected : ''}`}
                    onClick={() => handleTaskClick(task.osdkTask.$primaryKey as string)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            handleTaskClick(task.osdkTask.$primaryKey as string);
                            e.preventDefault();
                        }
                    }}
                    role="option"
                    tabIndex={0}
                    aria-selected={selectedTaskId === task.osdkTask.$primaryKey}
                >
                    <div className={css.header}>
                        <h3>{task.osdkTask.title}</h3>
                        <div>
                            <strong>Concrete Object Type: </strong>
                            <span>{task.osdkTask.$objectType}</span>
                        </div>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.title.displayName}: </strong>
                        <span>{task.osdkTask.title}</span>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.description.displayName}: </strong>
                        <span>{task.osdkTask.description}</span>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.status.displayName}: </strong>
                        <span>{task.osdkTask.status}</span>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.startDate.displayName}: </strong>
                        <span>{task.osdkTask.startDate}</span>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.dueDate.displayName}: </strong>
                        <span>{task.osdkTask.dueDate}</span>
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.createdBy.displayName}: </strong>
                        <UserField user={task.createdBy} />
                    </div>
                    <div className={css.field}>
                        <strong>{metadata.properties.assignedTo.displayName}: </strong>
                        <UserField user={task.assignedTo} />
                    </div>
                </div>
            ))}
        </div>
    );
};