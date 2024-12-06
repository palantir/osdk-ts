import { useCallback, useState } from "react";
import { MockTask } from "./mocks";
import css from "./TaskListItem.module.css";

interface TaskListItemProps {
  task: MockTask;
  deleteTask: (task: MockTask) => Promise<void>;
}

function TaskListItem({ task, deleteTask }: TaskListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleClick = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteTask(task);
    } finally {
      setIsDeleting(false);
    }
  }, [deleteTask, task]);

  return (
    <li>
      <label
        className={`${css.label} ${isDeleting ? css.checked : ""}`}
        htmlFor={`${task.id}`}
      >
        <input
          type="checkbox"
          onChange={handleClick}
          checked={isDeleting}
          className={css.delete}
          title="Delete task"
        />
        {task.title}
      </label>
    </li>
  );
}

export default TaskListItem;
