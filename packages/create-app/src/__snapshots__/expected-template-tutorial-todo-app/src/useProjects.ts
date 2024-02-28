import { Project } from "@fake/sdk/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import client from "./client";
import randomId from "./randomId";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<Project[]>(
    "projects",
    async () => {
      const result = await client.ontology.objects.Project.orderBy((p) =>
        p.name.asc()
      ).page({
        pageSize: 50,
      });
      if (result.type !== "ok") {
        throw result.error;
      }
      return result.value.data;
    },
  );

  const createProject = useCallback(
    async (name: string) => {
      const id = randomId();
      await client.ontology.actions.createProject({
        id,
        name,
      });
      await mutate();
      return id;
    },
    [mutate],
  );

  const deleteProject = useCallback(
    async (project: Project) => {
      await client.ontology.actions.deleteProject({ Project: project });
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
