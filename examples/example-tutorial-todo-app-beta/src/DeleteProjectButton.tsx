import { useCallback, useState } from "react";
import DeleteProjectDialog from "./DeleteProjectDialog";
import { MockProject } from "./mocks";
import useProjects from "./useProjects";

interface DeleteProjectButtonProps {
  project: MockProject;
}

function DeleteProjectButton({ project }: DeleteProjectButtonProps) {
  const { isLoading: isLoadingProjects, isError: isErrorProjects } =
    useProjects();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoadingProjects || isErrorProjects) {
    return null;
  }

  return (
    <>
      <button onClick={handleOpen}>Delete Project</button>
      <DeleteProjectDialog
        project={project}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default DeleteProjectButton;
