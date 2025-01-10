import aipLogo from "/aip-icon.svg";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import css from "./CreateTaskDialog.module.css";
import Dialog from "./Dialog";
import { useProjectTasks } from "./useProjectTasks";
import { IProject } from "./useProjects";

interface CreateTaskDialogProps {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: (taskId: string) => void;
}

function CreateTaskDialog(
  { project, isOpen, onClose, onTaskCreated }: CreateTaskDialogProps,
) {
  const { createTask, getRecommendedTaskDescription } = useProjectTasks(
    project,
  );

  const [name, setName] = useState<string>("New task");
  const [description, setDescription] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeTaskName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [],
  );

  const handleChangeTaskDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
    [],
  );

  const handleTaskDescriptionRecommendation = useCallback(async () => {
    setIsProcessing(true);
    const recommendedDescription = await getRecommendedTaskDescription(name);
    setDescription(recommendedDescription);
    setIsProcessing(false);
  }, [getRecommendedTaskDescription, name]);

  useEffect(() => {
    setName("New task");
    setDescription("");
  }, [isOpen]);
  useEffect(() => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      textArea.style.height = "auto";
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [description]);

  const handleSubmit = useCallback(async () => {
    setIsCreating(true);
    try {
      const taskId = await createTask(name, description);
      if (taskId != null) {
        onTaskCreated(taskId);
      }
    } finally {
      setIsCreating(false);
      onClose();
    }
  }, [onClose, createTask, onTaskCreated, name, description]);

  return (
    <>
      {isOpen && (
        <div className={css.dialogContainer}>
          <Dialog
            isOpen={isOpen}
            buttons={[
              <button
                disabled={isCreating}
                onClick={onClose}
                key="cancel"
                className={css.button}
              >
                Cancel
              </button>,
              <button
                disabled={isCreating}
                onClick={handleSubmit}
                key="create"
                className={css.button}
              >
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
                <textarea
                  ref={textAreaRef}
                  value={description}
                  onChange={handleChangeTaskDescription}
                  className={css.textArea}
                  rows={2}
                />
                <button
                  disabled={isProcessing}
                  className={`${css.aip} ${isProcessing ? css.processing : ""}`}
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
        </div>
      )}
    </>
  );
}

export default CreateTaskDialog;
