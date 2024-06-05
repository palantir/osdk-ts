import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import { TutorialProject, TutorialTask } from "./types";

export function useProjectTasks(project: TutorialProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    TutorialTask[]
  >(
    project != null ? `projects/${project.id}/tasks` : null,
    // Try to implement this with the Ontology SDK!
    async () => {
      if (project == null) {
        return [];
      }
      return project.tasks;
    },
  );

  const createTask: (
    title: string,
  ) => Promise<TutorialTask["$primaryKey"] | undefined> = useCallback(
    async (title: string) => {
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

  const deleteTask: (task: TutorialTask) => Promise<void> = useCallback(
    async (task: TutorialTask) => {
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
