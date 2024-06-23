import { useCallback, useEffect, useRef, useState } from "react";
import type { MockTask } from "./mocks";
import css from "./TaskListItem.module.css";
interface TaskListItemProps {
  task: MockTask;
  deleteTask: (task: MockTask) => Promise<void>;
}

function TaskListItem({ task, deleteTask }: TaskListItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteTask(task);
    } finally {
      setIsDeleting(false);
    }
  }, [deleteTask, task]);

  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [task.description]);

  return (
    <li className={css.li}>
      <label
        className={`${css.label} ${isDeleting ? css.checked : ""}`}
        htmlFor={`${task.id}`}
      />
      <input
        type="checkbox"
        onChange={handleClick}
        checked={isDeleting}
        className={css.delete}
        title="Delete task"
      />
      <div className={`${css.task} ${isDeleting ? css.checked : ""}`}>
        <span>{task.title}</span>
        <textarea
          ref={textAreaRef}
          readOnly
          value={task.description}
          className={css.textArea}
        />
      </div>
    </li>
  );
}

export default TaskListItem;
