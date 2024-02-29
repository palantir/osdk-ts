import { Project } from "@fake/sdk/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import randomId from "./randomId";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<Project[]>(
    "projects",
    async () => {
      // Try to implement this with the Ontology SDK!
      return Mocks.getProjects();
      // Solution:
      //
      // const result = await client.ontology.objects.Project.orderBy((p) =>
      //   p.name.asc()
      // ).page({
      //   pageSize: 50,
      // });
      // if (result.type !== "ok") {
      //   throw result.error;
      // }
      // return result.value.data;
    },
  );

  const createProject: (name: string) => Promise<Project["__primaryKey"]> =
    useCallback(
      async (name) => {
        // Try to implement this with the Ontology SDK!
        const id = randomId();
        await Mocks.createProject({ id, name });
        await mutate();
        return id;
        // Solution:
        //
        // const id = randomId();
        // await client.ontology.actions.createProject({
        //   id,
        //   name,
        // });
        // await mutate();
        // return id;
      },
      [mutate],
    );

  const deleteProject: (project: Project) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteProject(project.__primaryKey);
      await mutate();
      // Solution:
      //
      // await client.ontology.actions.deleteProject({ Project: project });
      // await mutate();
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
