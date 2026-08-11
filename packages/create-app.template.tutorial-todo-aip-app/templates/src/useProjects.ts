import { useCallback } from "react";
import useSWR from "swr";

import type { MockProject } from "./mocks";
import Mocks from "./mocks";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    MockProject[]
  >("projects", () =>
    // Try to implement this with the Ontology SDK!
    Mocks.getProjects()
  );

  const createProject: (name: string) => Promise<MockProject["$primaryKey"]> =
    useCallback(
      async (name: string) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
      },
      [mutate]
    );

  const updateProjectDescription: (project: MockProject) => Promise<void> =
    useCallback(
      async (project) => {
        // Try to implement this with the Ontology SDK!
        await Mocks.updateProjectDescription(project);
        await mutate();
      },
      [mutate]
    );

  const deleteProject: (project: MockProject) => Promise<void> = useCallback(
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
