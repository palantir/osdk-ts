// import { useOsdkClient } from "@osdk/react";
import { useCallback } from "react";
import useSWR from "swr";

import Mocks from "./mocks";
import type { IProject } from "./useProjects";

export interface ITask {
  $apiName: string;
  $primaryKey: string;
  id: string;
  title: string;
  description: string;
  projectId: string;
}

export function useProjectTasks(project: IProject | undefined) {
  // Use this client variable to access the Ontology SDK.
  // const client = useOsdkClient();
  const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
    project !== undefined && project !== null
      ? `projects/${project.id}/tasks`
      : null,
    // Try to implement this with the Ontology SDK!
    () => {
      if (project !== undefined && project !== null) {
        return Mocks.getProjectTasks(project.$primaryKey);
      }
      return [];
    }
  );

  const createTask: (
    title: string,
    description: string
  ) => Promise<ITask["$primaryKey"] | undefined> = useCallback(
    async (title: string, description: string) => {
      if (project === undefined || project === null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createTask({
        description,
        projectId: project.$primaryKey,
        title,
      });
      await mutate();
      return id;
    },
    [project, mutate]
  );

  const deleteTask: (task: ITask) => Promise<void> = useCallback(
    async (task) => {
      if (project === undefined || project === null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteTask(task.$primaryKey);
      await mutate();
    },
    [project, mutate]
  );

  const getRecommendedTaskDescription: (taskName: string) => Promise<string> =
    useCallback(
      async (taskName: string) => {
        // Try to implement this with the Ontology SDK!
        const recommendedTaskDescription =
          await Mocks.getRecommendedTaskDescription(taskName);
        await mutate();
        return recommendedTaskDescription;
      },
      [mutate]
    );

  return {
    createTask,
    deleteTask,
    getRecommendedTaskDescription,
    isError: error,
    isLoading,
    isValidating,
    tasks: data,
  };
}
