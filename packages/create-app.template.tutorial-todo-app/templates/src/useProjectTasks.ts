import { useCallback } from "react";
import useSWR from "swr";

import type { MockProject, MockTask } from "./mocks";
import Mocks, { sleep } from "./mocks";

export function useProjectTasks(project: MockProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<MockTask[]>(
    project === undefined || project === null
      ? null
      : `projects/${project.id}/tasks`,
    // Try to implement this with the Ontology SDK!
    () => {
      if (project === undefined || project === null) {
        return [];
      }
      return project.tasks;
    }
  );

  const createTask: (
    title: string
  ) => Promise<MockTask["$primaryKey"] | undefined> = useCallback(
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

  const deleteTask: (task: MockTask) => Promise<void> = useCallback(
    async (task) => {
      if (project === undefined || project === null) {
        return;
      }
      await sleep(1000);
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
