// Replace this hook with @osdk/react. For example:
//   import { useOsdkObjects, useOsdkAction, useOsdkFunction } from "@osdk/react";
//   import { $Actions, $Objects, $Queries } from "{{osdkPackage}}";
//   const { data: tasks, isLoading } = useOsdkObjects($Objects.YourTaskObject, {
//     where: { projectId: { $eq: project?.$primaryKey } },
//     enabled: project != null,
//   });
//   const { applyAction: createTask } = useOsdkAction($Actions.createTask);
//   const { applyAction: deleteTask } = useOsdkAction($Actions.deleteTask);
//   const { data: recommendation } = useOsdkFunction(
//     $Queries.getRecommendedTaskDescription,
//     { params: { taskName }, enabled: taskName != null },
//   );
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import { IProject } from "./useProjects";
export interface ITask {
  $apiName: string;
  $primaryKey: string;
  id: string;
  title: string;
  description: string;
  projectId: string;
}

export function useProjectTasks(project: IProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
    project != null ? `projects/${project.id}/tasks` : null,
    async () => {
      if (project == null) {
        return [];
      }
      return Mocks.getProjectTasks(project.$primaryKey);
    },
  );

  const createTask: (
    title: string,
    description: string,
  ) => Promise<ITask["$primaryKey"] | undefined> = useCallback(
    async (title: string, description: string) => {
      if (project == null) {
        return undefined;
      }
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

  const deleteTask: (task: ITask) => Promise<void> = useCallback(
    async (task) => {
      if (project == null) {
        return;
      }
      await Mocks.deleteTask(task.$primaryKey);
      await mutate();
    },
    [project, mutate],
  );

  const getRecommendedTaskDescription: (taskName: string) => Promise<string> =
    useCallback(
      async (taskName: string) => {
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
