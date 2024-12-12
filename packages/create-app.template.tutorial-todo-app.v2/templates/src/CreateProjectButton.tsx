import { useCallback, useState } from "react";
import CreateProjectDialog from "./CreateProjectDialog";
import useProjects from "./useProjects";

interface CreateProjectButtonProps {
  onProjectCreated?: (projectId: string) => void;
}

function CreateProjectButton({ onProjectCreated }: CreateProjectButtonProps) {
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
      <button onClick={handleOpen}>Create Project</button>
      <CreateProjectDialog
        isOpen={isOpen}
        onClose={handleClose}
        onProjectCreated={onProjectCreated}
      />
    </>
  );
}

export default CreateProjectButton;
