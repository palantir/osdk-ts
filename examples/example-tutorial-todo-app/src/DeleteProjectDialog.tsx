import { OsdkTodoProject } from "@osdk/examples.one.dot.one";
import { useCallback, useState } from "react";
import Dialog from "./Dialog";
import useProjects from "./useProjects";

interface DeleteProjectDialogProps {
  project: OsdkTodoProject;
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
        <button disabled={isDeleting} onClick={handleSubmit}>
          Delete
        </button>,
        <button disabled={isDeleting} onClick={onClose}>
          Cancel
        </button>,
      ]}
    >
      Are you sure you want to delete this project?
    </Dialog>
  );
}
export default DeleteProjectDialog;
