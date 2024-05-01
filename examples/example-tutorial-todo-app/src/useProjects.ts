import { OsdkTodoProject } from "@osdk/examples.one.dot.one";
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    OsdkTodoProject[]
  >("projects", async () => {
    // Try to implement this with the Ontology SDK!
    return Mocks.getProjects();
    // Solution:
    //
    // const result = await client.ontology.objects.OsdkTodoProject.orderBy((p) =>
    //   p.name.asc()
    // ).page({
    //   pageSize: 50,
    // });
    // if (result.type !== "ok") {
    //   throw result.error;
    // }
    // return result.value.data;
  });

  const createProject: (name: string) => Promise<OsdkTodoProject["__primaryKey"]> =
    useCallback(
      async (name) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
        // Solution:
        //
        // const result =
        //   await client.ontology.actions.createOsdkTodoProject(
        //     { name, budget: 50 },
        //     { returnEdits: ReturnEditsMode.ALL }
        //   );
        // if (result.type !== "ok") {
        //   throw result.error;
        // } else if (result.value.edits.type !== "edits") {
        //   throw new Error("Expected edits to be returned");
        // }
        // await mutate();
        // return result.value.edits.added[0].primaryKey;
      },
      [mutate]
    );

  const deleteProject: (project: OsdkTodoProject) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteProject(project.__primaryKey);
      await mutate();
      // Solution:
      //
      // await client.ontology.actions.deleteOsdkTodoProject(
      //   { "todo-project": project }
      // );
      // await mutate();
    },
    [mutate]
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
