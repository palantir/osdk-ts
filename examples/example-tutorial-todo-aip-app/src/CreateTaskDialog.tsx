import { ChangeEvent, useCallback, useEffect, useState } from "react";
import css from "./CreateTaskDialog.module.css";
import Dialog from "./Dialog";
import { MockProject } from "./mocks";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: MockProject;
  isOpen: boolean;
  onClose: () => void;
}

function CreateTaskDialog({ project, isOpen, onClose }: CreateTaskDialogProps) {
  const { createTask } = useProjectTasks(project);

  const [name, setName] = useState<string>("New task");
  const [description, setDescription] = useState<string>("");
  const handleChangeTaskName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  const handleChangeTaskDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    [],
  );

  useEffect(() => setName("New task"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      await createTask(name, description);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onClose, createTask, name, description]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button disabled={isCreating} onClick={handleSubmit} key="create">
          Create task
        </button>,
        <button disabled={isCreating} onClick={onClose} key="cancel">
          Cancel
        </button>,
      ]}
    >
      <div className={css.task}>
        <label className={css.label}>
          Task name:{" "}
          <input type="text" value={name} onChange={handleChangeTaskName} />
        </label>
        <label className={css.label}>
          Task description:{" "}
          <input
            type="text"
            value={description}
            onChange={handleChangeTaskDescription}
          />
        </label>
      </div>
    </Dialog>
  );
}
export default CreateTaskDialog;
