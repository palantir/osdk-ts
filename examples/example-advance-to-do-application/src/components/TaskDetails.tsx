import { ITask } from "../dataServices/useTasks";
import { TaskDetailsCoding } from "./TaskDetailsCoding";
import { TaskDetailsLearning } from "./TaskDetailsLearning";

interface TaskDetailsProps {
    task: ITask;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ task }) => {
    // use Itask $ObjectType to load the concrete iew for the Task
    if (task.osdkTask.$objectType === "osdkCodingTask") {
        return <TaskDetailsCoding task={task} />;
    }
    if (task.osdkTask.$objectType === "osdkLearningTask") {
        return <TaskDetailsLearning task={task} />;
    }
    return <div>Unknown Task Type</div>;
};
    
