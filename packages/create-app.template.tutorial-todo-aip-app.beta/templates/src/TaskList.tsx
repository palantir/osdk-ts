import TaskListItem from "./TaskListItem";
import type { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

import css from "./TaskList.module.css";

interface TaskListProps {
  project: IProject;
  onTaskDeleted: (taskId: string | undefined) => void;
}

function TaskList({ project, onTaskDeleted }: TaskListProps) {
  const {
    tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
    deleteTask,
  } = useProjectTasks(project);

  if (isErrorTasks) {
    return <div className={css.taskList}>Error loading tasks!</div>;
  } else if (isLoadingTasks) {
    return null;
  }

  const data = tasks ?? [];
  if (data.length === 0) {
    return <div className={css.taskList}>No tasks found</div>;
  }

  return (
    <ul className={css.taskList}>
      {data.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;
