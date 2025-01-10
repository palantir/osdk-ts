import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";

export interface IProject {
  $apiName: string;
  $primaryKey: string;
  id: string;
  name: string;
  description: string;
}

export interface ITask {
  $apiName: string;
  $primaryKey: string;
  id: string;
  title: string;
  description: string;
  projectId: string;
}

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<IProject[]>("projects", async () => {
    // Try to implement this with the Ontology SDK!
    const projectsList: IProject[] = (await Mocks.getProjects()).map((project) => ({
      ...project
    }));
    return projectsList;
    }
  );

  const createProject: (
    name: string,
  ) => Promise<IProject["$primaryKey"]> = useCallback(
    async (name: string) => {
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createProject({ name });
      await mutate();
      return id;
    },
    [mutate],
  );

  const updateProjectDescription: (
    project: IProject,
  ) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      await Mocks.updateProjectDescription(project);
      await mutate();
    },
    [mutate],
  );

  const deleteProject: (project: IProject) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
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
    updateProjectDescription,
  };
}

export default useProjects;
