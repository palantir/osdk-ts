// import { useOsdkClient } from "@osdk/react";
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

function useProjects() {
  // Use this client variable to access the Ontology SDK.
  // const client = useOsdkClient();
  const { data, isLoading, isValidating, error, mutate } = useSWR<IProject[]>(
    "projects",
    async () => {
      // Try to implement this with the Ontology SDK!
      const fetchedProjects = await Mocks.getProjects();
      const projectsList: IProject[] = fetchedProjects.map((project) => ({
        $apiName: project.$apiName,
        $primaryKey: project.$primaryKey,
        description: project.description || "",
        id: project.id,
        name: project.name || "",
      }));
      return projectsList;
    }
  );

  const createProject: (name: string) => Promise<IProject["$primaryKey"]> =
    useCallback(
      async (name: string) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
      },
      [mutate]
    );

  const updateProjectDescription: (project: IProject) => Promise<void> =
    useCallback(
      async (project) => {
        // Try to implement this with the Ontology SDK!
        await Mocks.updateProjectDescription(project);
        await mutate();
      },
      [mutate]
    );

  const deleteProject: (project: IProject) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteProject(project.$primaryKey);
      await mutate();
    },
    [mutate]
  );

  return {
    createProject,
    deleteProject,
    isError: error,
    isLoading,
    isValidating,
    projects: data,
    updateProjectDescription,
  };
}

export default useProjects;
