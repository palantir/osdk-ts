import { useCallback, useState } from "react";
import css from "./CreateTaskButton.module.css";
import CreateTaskDialog from "./CreateTaskDialog";
import { IProject } from "./useProjects";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskButtonProps {
  project: IProject;
  onTaskCreated: (taskId: string) => void;
}

function CreateTaskButton({ project, onTaskCreated }: CreateTaskButtonProps) {
  const { isLoading: isLoadingTasks, isError: isErrorTasks } = useProjectTasks(
    project,
  );

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoadingTasks || isErrorTasks) {
    return null;
  }

  return (
    <>
      <button onClick={handleOpen} className={css.button}>Create Task</button>
      <CreateTaskDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
        onTaskCreated={onTaskCreated}
      />
    </>
  );
}

export default CreateTaskButton;
