import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog";
import useProjects from "./useProjects";

interface CreateProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectCreated?: (projectId: string) => void;
}

function CreateProjectDialog({
  isOpen,
  onClose,
  onProjectCreated,
}: CreateProjectDialogProps) {
  const { createProject } = useProjects();

  const [name, setName] = useState<string>("New project");
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  useEffect(() => setName("New project"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      const projectId = await createProject(name);
      onProjectCreated?.(projectId);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onProjectCreated, onClose, createProject, name]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button disabled={isCreating} onClick={handleSubmit}>
          Create project
        </button>,
        <button disabled={isCreating} onClick={onClose}>
          Cancel
        </button>,
      ]}
    >
      <label>
        Project name: <input type="text" value={name} onChange={handleChange} />
      </label>
    </Dialog>
  );
}
export default CreateProjectDialog;
