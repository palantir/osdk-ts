import { useCallback } from "react";
import useSWR from "swr";
import Mocks, { MockProject } from "./mocks";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    MockProject[]
  >("projects", async () => {
    // Try to implement this with the Ontology SDK!
    return Mocks.getProjects();
  });

  const createProject: (name: string) => Promise<MockProject["$primaryKey"]> =
    useCallback(
      async (name) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
      },
      [mutate],
    );

  const deleteProject: (project: MockProject) => Promise<void> = useCallback(
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
  };
}

export default useProjects;
