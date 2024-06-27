import type { MockProject } from "./mocks";
import css from "./TaskList.module.css";
import TaskListItem from "./TaskListItem";
import { useProjectTasks } from "./useProjectTasks";

interface TaskListProps {
  project: MockProject;
  onTaskDeleted: (taskId: string) => void;
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
