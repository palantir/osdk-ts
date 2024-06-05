import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog";
import { TutorialProject } from "./types";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: TutorialProject;
  isOpen: boolean;
  onClose: () => void;
}

function CreateTaskDialog({ project, isOpen, onClose }: CreateTaskDialogProps) {
  const { createTask } = useProjectTasks(project);

  const [name, setName] = useState<string>("New task");
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  useEffect(() => setName("New task"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      await createTask(name);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onClose, createTask, name]);

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
      <label>
        Task name: <input type="text" value={name} onChange={handleChange} />
      </label>
    </Dialog>
  );
}
export default CreateTaskDialog;
