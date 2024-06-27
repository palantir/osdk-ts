import { useCallback } from "react";
import useSWR from "swr";
import type { MockProject } from "./mocks";
import Mocks from "./mocks";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    MockProject[]
  >("projects", async () => {
    // Try to implement this with the Ontology SDK!
    return Mocks.getProjects();
  });

  const createProject: (
    name: string,
  ) => Promise<MockProject["$primaryKey"]> = useCallback(
    async (name: string) => {
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createProject({ name });
      await mutate();
      return id;
    },
    [mutate],
  );

  const updateProjectDescription: (
    project: MockProject,
  ) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      const description = await Mocks.getRecommendedProjectDescription(project);
      await Mocks.updateProjectDescription(project, description);
      await mutate();
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
    updateProjectDescription,
  };
}

export default useProjects;
