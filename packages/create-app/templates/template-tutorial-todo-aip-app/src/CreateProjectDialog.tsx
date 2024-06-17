import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import css from "./CreateProjectDialog.module.css";

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
  const [description, setDescription] = useState<string>("");

  const handleChangeProjectName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  const handleChangeProjectDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    [],
  );

  useEffect(() => setName("New project"), [isOpen]);

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      const projectId = await createProject(name, description);
      onProjectCreated?.(projectId);
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onProjectCreated, onClose, createProject, name, description]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button disabled={isCreating} onClick={onClose} key="cancel">
          Cancel
        </button>,
        <button disabled={isCreating} onClick={handleSubmit} key="create">
          Create project
        </button>,
      ]}
    >
      <div className={css.project}>
        <label className={css.label}>
          Project name:{" "}
          <input type="text" value={name} onChange={handleChangeProjectName} />
        </label>
        <label className={css.label}>
          Project description:{" "}
          <input
            type="text"
            value={description}
            onChange={handleChangeProjectDescription}
          />
        </label>
      </div>
    </Dialog>
  );
}
export default CreateProjectDialog;
