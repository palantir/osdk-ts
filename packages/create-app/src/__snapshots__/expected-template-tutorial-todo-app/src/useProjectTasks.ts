import { Project, Task } from "@todo-app/sdk/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import Mocks from "./mocks";
import randomId from "./randomId";

export function useProjectTasks(project: Project | undefined) {
  const { data, isLoading, isValidating, error, mutate } = useSWR<Task[]>(
    project != null ? `projects/${project.id}/tasks` : null,
    async () => {
      if (project == null) {
        return [];
      }
      const result = await project.task.all();
      if (result.type !== "ok") {
        throw result.error;
      }
      return result.value;
    },
  );

  const createTask: (
    name: string,
  ) => Promise<Task["__primaryKey"] | undefined> = useCallback(
    async (name) => {
      if (project == null) {
        return undefined;
      }
      // Try to implement this with the Ontology SDK!
      const id = randomId();
      await Mocks.createTask({ id, name, projectId: project.__primaryKey });
      await mutate();
      return id;
      // Solution:
      //
      // const id = randomId();
      // await client.ontology.actions.createTask({
      //   id,
      //   name,
      //   start_date: LocalDate.now(),
      //   end_date: LocalDate.now().plusWeeks(1),
      //   status: "Open",
      //   project_id: project,
      // });
      // await mutate();
      // return id;
    },
    [project, mutate],
  );

  const deleteTask: (task: Task) => Promise<void> = useCallback(
    async (task) => {
      if (project == null) {
        return;
      }
      // Try to implement this with the Ontology SDK!
      await Mocks.deleteTask(task.__primaryKey);
      await mutate();
      // Solution:
      //
      // await client.ontology.actions.deleteTask({ Task: task });
      // await mutate();
    },
    [project, mutate],
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
