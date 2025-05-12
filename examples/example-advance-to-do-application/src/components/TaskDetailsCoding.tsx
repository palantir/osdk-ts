import { ITask } from "../dataServices/useTasks";
import { UserField } from "./userField";
import useCodingTask from "../dataServices/useCodingTask";
import css from "./TaskDetailsCoding.module.css";
import * as React from "react";

interface ITaskDetailsCodingProps {
    task: ITask;
}
export const TaskDetailsCoding: React.FC<ITaskDetailsCodingProps> = ({ task }) => {
    const { codingTask, isLoading, metadata } = useCodingTask(task);
    
    if (isLoading || !codingTask || !metadata) {
        return <div>Loading...</div>;
    }
    console.log(metadata);
    return (
        <div className={css.taskCard}>
            <h2>{metadata.displayName}</h2>
            <span>{metadata.description}</span>
            <h3>{codingTask.osdkCodingTask.title}</h3>
            <div className={css.field}>
                <strong>{metadata?.properties.description.displayName} </strong>
                <span>{codingTask.osdkCodingTask.description}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.status.displayName} </strong>
                <span>{codingTask.osdkCodingTask.status}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.startDate.displayName} </strong>
                <span>{codingTask.osdkCodingTask.startDate}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.dueDate.displayName} </strong>
                <span>{codingTask.osdkCodingTask.dueDate}</span>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.assignedTo.displayName} </strong>
                <UserField user={codingTask.assignedTo}/>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.createdBy.displayName} </strong>
                <UserField user={codingTask.createdBy}/>
            </div>
            <div className={css.field}>
                <strong>{metadata?.properties.complexity.displayName} </strong>
                <span>{codingTask.osdkCodingTask.complexity}</span>
            </div>
        </div>
    );
}