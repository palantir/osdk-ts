import { useCallback, useState } from "react";
import Dialog from "./Dialog";
import { TutorialProject } from "./types";
import useProjects from "./useProjects";

interface DeleteProjectDialogProps {
  project: TutorialProject;
  isOpen: boolean;
  onClose: () => void;
}

function DeleteProjectDialog({
  project,
  isOpen,
  onClose,
}: DeleteProjectDialogProps) {
  const { deleteProject } = useProjects();

  const [isDeleting, setIsDeleting] = useState(false);
  const handleSubmit = useCallback(async () => {
    setIsDeleting(true);
    try {
      await deleteProject(project);
    } finally {
      setIsDeleting(false);
      onClose();
    }
  }, [deleteProject, onClose, project]);

  return (
    <Dialog
      isOpen={isOpen}
      buttons={[
        <button disabled={isDeleting} onClick={handleSubmit} key="delete">
          Delete
        </button>,
        <button disabled={isDeleting} onClick={onClose} key="cancel">
          Cancel
        </button>,
      ]}
    >
      Are you sure you want to delete this project?
    </Dialog>
  );
}
export default DeleteProjectDialog;
