import aipLogo from "/aip-icon.svg";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import css from "./CreateTaskDialog.module.css";
import Dialog from "./Dialog";
import type { MockProject } from "./mocks";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskDialogProps {
  project: MockProject;
  isOpen: boolean;
  onClose: () => void;
}

function CreateTaskDialog({ project, isOpen, onClose }: CreateTaskDialogProps) {
  const { createTask, getRecommendedTaskDescription } = useProjectTasks(
    project,
  );

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

  const handleTaskDescriptionRecommendation = useCallback(async () => {
    const recommendedDescription = await getRecommendedTaskDescription(name);
    setDescription(recommendedDescription);
  }, [getRecommendedTaskDescription, name]);

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
        <button disabled={isCreating} onClick={onClose} key="cancel">
          Cancel
        </button>,
        <button disabled={isCreating} onClick={handleSubmit} key="create">
          Create task
        </button>,
      ]}
    >
      <div className={css.task}>
        <label className={css.label}>
          Task name:{" "}
        </label>
        <input
          type="text"
          value={name}
          onChange={handleChangeTaskName}
          className={css.input}
        />

        <label className={css.label}>
          Task description:{" "}
        </label>
        <div className={css.container}>
          <input
            type="text"
            value={description}
            onChange={handleChangeTaskDescription}
            className={css.input}
          />
          <button
            className={css.aip}
            title="Click here to get AIP task description recommendation"
            type="button"
            onClick={handleTaskDescriptionRecommendation}
          >
            <img
              src={aipLogo}
              alt="AIP"
              className={css.image}
            />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
export default CreateTaskDialog;
