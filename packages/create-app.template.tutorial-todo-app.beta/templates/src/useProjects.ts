// Replace this hook with @osdk/react. For example:
//   import { useOsdkObjects, useOsdkAction } from "@osdk/react";
//   import { $Actions, $Objects } from "{{osdkPackage}}";
//   const { data: projects, isLoading } = useOsdkObjects($Objects.YourProjectObject);
//   const { applyAction: createProject } = useOsdkAction($Actions.createProject);
//   const { applyAction: deleteProject } = useOsdkAction($Actions.deleteProject);
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
export interface IProject {
  $apiName: string;
  $primaryKey: string;
  id: string;
  name: string;
}

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<IProject[]>(
    "projects",
    async () => {
      const projectsList: IProject[] = (await Mocks.getProjects()).map((
        project,
      ) => ({
        $apiName: project.$apiName,
        $primaryKey: project.$primaryKey,
        id: project.id,
        name: project.name || "",
      }));
      return projectsList;
    },
  );

  const createProject: (name: string) => Promise<IProject["$primaryKey"]> =
    useCallback(
      async (name) => {
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
      },
      [mutate],
    );

  const deleteProject: (project: IProject) => Promise<void> = useCallback(
    async (project) => {
      await Mocks.deleteProject(project.$primaryKey);
      await mutate();
    },
    [mutate],
  );

  return {
    projects: data,
    isLoading,
    isValidating,
    isError: error,
    createProject,
    deleteProject,
  };
}

export default useProjects;
