import { TodoTask } from "@fake/sdk/ontology/objects";
import { useCallback, useState } from "react";
import css from "./TaskListItem.module.css";

interface TaskListItemProps {
  task: TodoTask;
  deleteTask: (task: TodoTask) => Promise<void>;
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
      <input
        id={`${task.id}`}
        type="checkbox"
        onClick={handleClick}
        checked={isDeleting}
        disabled={isDeleting}
      />
      <label className={css.label} htmlFor={`${task.id}`}>
        {task.title}
      </label>
    </li>
  );
}

export default TaskListItem;
