import { TodoProject } from "@fake/sdk/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";

function useProjects() {
  const { data, isLoading, isValidating, error, mutate } = useSWR<
    TodoProject[]
  >("projects", async () => {
    // Try to implement this with the Ontology SDK!
    return Mocks.getProjects();
    // Solution:
    //
    // const result = await client.ontology.objects.TodoProject.orderBy((p) =>
    //   p.name.asc()
    // ).page({
    //   pageSize: 50,
    // });
    // if (result.type !== "ok") {
    //   throw result.error;
    // }
    // return result.value.data;
  });

  const createProject: (name: string) => Promise<TodoProject["__primaryKey"]> =
    useCallback(
      async (name) => {
        // Try to implement this with the Ontology SDK!
        const id = await Mocks.createProject({ name });
        await mutate();
        return id;
        // Solution:
        //
        // const result =
        //   await client.ontology.actions.createTodoProjectd1a1a1f7E94f4470B73bEd518e7a8b11(
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
      [mutate],
    );

  const deleteProject: (project: TodoProject) => Promise<void> = useCallback(
    async (project) => {
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteProject(project.__primaryKey);
      await mutate();
      // Solution:
      //
      // await client.ontology.actions.deleteTodoProject022fbb06Bfb040a9880174c4111aa497(
      //   { "todo-project": project }
      // );
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
