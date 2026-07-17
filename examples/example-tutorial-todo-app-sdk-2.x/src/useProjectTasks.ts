// import { useOsdkClient } from "@osdk/react";
import { useCallback } from "react";
import useSWR from "swr";

import Mocks from "./mocks";
import type { IProject } from "./useProjects";

export interface ITask {
  $apiName: string;
  $primaryKey: string;
  id: string;
  title: string | undefined;
  projectId: string;
}

export function useProjectTasks(project: IProject | undefined) {
  // Use this client variable to access the Ontology SDK.
  // const client = useOsdkClient();
  const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
    project === undefined || project === null
      ? null
      : `projects/${project.id}/tasks`,
    // Try to implement this with the Ontology SDK!
    async () => {
      if (project === undefined || project === null) {
        return [];
      }
      return await Mocks.getProjectTasks(project.$primaryKey);
    }
  );

  const createTask: (
    title: string
  ) => Promise<ITask["$primaryKey"] | undefined> = useCallback(
    async (title) => {
      if (project === undefined || project === null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createTask({
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

  return {
    createTask,
    deleteTask,
    isError: error,
    isLoading,
    isValidating,
    tasks: data,
  };
}
