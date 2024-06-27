import { useCallback, useEffect, useRef, useState } from "react";
import type { MockTask } from "./mocks";
import css from "./TaskListItem.module.css";
interface TaskListItemProps {
  task: MockTask;
  deleteTask: (task: MockTask) => Promise<void>;
  onTaskDeleted: (taskId: string) => void;
}

function TaskListItem({ task, deleteTask, onTaskDeleted }: TaskListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteTask(task);
    } finally {
      onTaskDeleted(task.id);
      setIsDeleting(false);
    }
  }, [deleteTask, task, onTaskDeleted]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [task.description]);
  const cleanDescription = task.description.trim() === ""
    ? null
    : task.description.trim();
  return (
    <li className={css.li}>
      <input
        type="checkbox"
        onChange={handleClick}
        checked={isDeleting}
        className={css.delete}
        title="Delete task"
      />
      <div className={`${css.task} ${isDeleting ? css.checked : ""}`}>
        <span>{task.title}</span>
        {cleanDescription != null && (
          <textarea
            ref={textAreaRef}
            readOnly
            value={task.description}
            className={css.textArea}
            rows={1}
          />
        )}
      </div>
    </li>
  );
}

export default TaskListItem;
