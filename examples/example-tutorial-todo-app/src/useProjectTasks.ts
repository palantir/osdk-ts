import { OsdkTodoProject, OsdkTodoTask } from "@osdk/examples.one.dot.one/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";

export function useProjectTasks(project: OsdkTodoProject | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<OsdkTodoTask[]>(
    project != null ? `projects/${project.id}/tasks` : null,
    async () => {
      if (project == null) {
        return [];
      }
      const result = await project.osdkTodoTasks.all();
      if (result.type !== "ok") {
        throw result.error;
      }
      return result.value;
    }
  );

  const createTask: (
    name: string
  ) => Promise<OsdkTodoTask["__primaryKey"] | undefined> = useCallback(
    async (name) => {
      if (project == null) {
        return undefined;
      }
      // Try to implement this with the Ontology SDK!
      const id = await Mocks.createTask({
        name,
        projectId: project.__primaryKey,
      });
      await mutate();
      return id;
      // Solution:
      //
      // const result =
      //   await client.ontology.actions.createOsdkTodoTask(
      //     {
      //       title: name,
      //       start_date: LocalDate.now(),
      //       due_date: LocalDate.now().plusWeeks(1),
      //       status: "IN PROGRESS",
      //       project_id: project.__primaryKey,
      //     },
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
    [project, mutate]
  );

  const deleteTask: (task: OsdkTodoTask) => Promise<void> = useCallback(
    async (task) => {
      if (project == null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteTask(task.__primaryKey);
      await mutate();
      // Solution:
      //
      // await client.ontology.actions.deleteOsdkTodoTask(
      //   { "todo-task": task }
      // );
      // await mutate();
    },
    [project, mutate]
  );

  return {
    tasks: data,
    isLoading,
    isValidating,
    isError: error,
    createTask,
    deleteTask,
  };
}
