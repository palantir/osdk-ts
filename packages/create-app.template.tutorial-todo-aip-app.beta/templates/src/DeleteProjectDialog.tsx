import { useCallback, useState } from "react";
import css from "./DeleteProjectDialog.module.css";
import Dialog from "./Dialog";
import useProjects, { IProject } from "./useProjects";

interface DeleteProjectDialogProps {
  project: IProject;
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
        <button
          disabled={isDeleting}
          onClick={onClose}
          key="cancel"
          className={css.button}
        >
          Cancel
        </button>,
        <button
          disabled={isDeleting}
          onClick={handleSubmit}
          key="delete"
          className={css.button}
        >
          Delete
        </button>,
      ]}
    >
      Are you sure you want to delete this project?
    </Dialog>
  );
}
export default DeleteProjectDialog;
