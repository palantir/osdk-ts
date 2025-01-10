import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import { IProject, ITask } from "./useProjects";

export function useProjectTasks(project: IProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
    project != null ? `projects/${project.id}/tasks` : null,
    // Try to implement this with the Ontology SDK!
    async () => {
      if (project == null) {
        return [];
      }
      return (await Mocks.getProjectTasks(project.$primaryKey));
    },
  );

  const createTask: (
    title: string,
  ) => Promise<ITask["$primaryKey"] | undefined> = useCallback(
    async (title) => {
      if (project == null) {
        return undefined;
      }
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createTask({
        title,
        projectId: project.$primaryKey,
      });
      await mutate();
      return id;
    },
    [project, mutate],
  );

  const deleteTask: (task: ITask) => Promise<void> = useCallback(
    async (task) => {
      if (project == null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteTask(task.$primaryKey);
      await mutate();
    },
    [project, mutate],
  );

  return {
    tasks: data,
    isLoading,
    isValidating,
    isError: error,
    createTask,
    deleteTask,
  };
}
