import { useCallback } from "react";
import useSWR from "swr";
import Mocks, { MockProject, MockTask } from "./mocks";

export function useProjectTasks(project: MockProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<MockTask[]>(
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
    description: string,
  ) => Promise<MockTask["$primaryKey"] | undefined> = useCallback(
    async (title: string, description: string) => {
      if (project == null) {
        return undefined;
      }
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createTask({
        title,
        description,
        projectId: project.$primaryKey,
      });
      await mutate();
      return id;
    },
    [project, mutate],
  );

  const deleteTask: (task: MockTask) => Promise<void> = useCallback(
    async (task) => {
      if (project == null) {
        return;
      }
      await sleep(1000);
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteTask(task.$primaryKey);
      await mutate();
    },
    [project, mutate],
  );

  const getRecommendedTaskDescription: (taskName: string) => Promise<string> =
    useCallback(
      async (taskName: string) => {
        // Try to implement this with the Ontology SDK!
        const recommendedTaskDescription = await Mocks
          .getRecommendedTaskDescription(taskName);
        await mutate();
        return recommendedTaskDescription;
      },
      [mutate],
    );

  return {
    tasks: data,
    isLoading,
    isValidating,
    isError: error,
    createTask,
    deleteTask,
    getRecommendedTaskDescription,
  };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
