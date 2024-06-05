import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import { TutorialProject } from "./types";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    TutorialProject[]
  >("projects", async () => {
    // Try to implement this with the Ontology SDK!
    return Mocks.getProjects();
  });

  const createProject: (
    name: string,
  ) => Promise<TutorialProject["$primaryKey"]> = useCallback(
    async (name: string) => {
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createProject({ name });
      await mutate();
      return id;
    },
    [mutate],
  );

  const deleteProject: (project: TutorialProject) => Promise<void> =
    useCallback(
      async (project: TutorialProject) => {
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
