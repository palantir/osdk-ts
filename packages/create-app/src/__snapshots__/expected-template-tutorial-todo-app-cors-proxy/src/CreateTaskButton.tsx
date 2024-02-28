import { Project } from "@fake/sdk/ontology/objects";
import { useCallback, useState } from "react";
import CreateTaskDialog from "./CreateTaskDialog";
import { useProjectTasks } from "./useProjectTasks";

interface CreateTaskButtonProps {
  project: Project;
}

function CreateTaskButton({ project }: CreateTaskButtonProps) {
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
      <button onClick={handleOpen}>Create Task</button>
      <CreateTaskDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default CreateTaskButton;
