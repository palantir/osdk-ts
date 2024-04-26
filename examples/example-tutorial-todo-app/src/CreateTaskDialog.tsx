import { OsdkTodoProject } from "@osdk/examples.one.dot.one/ontology/objects";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: OsdkTodoProject;
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
        <button disabled={isCreating} onClick={handleSubmit}>
          Create task
        </button>,
        <button disabled={isCreating} onClick={onClose}>
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
