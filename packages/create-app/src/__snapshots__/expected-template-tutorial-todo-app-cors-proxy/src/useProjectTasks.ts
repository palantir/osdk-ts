import { LocalDate } from "@fake/sdk";
import { Project, Task } from "@fake/sdk/ontology/objects";
import { useCallback } from "react";
import useSWR from "swr";
import client from "./client";
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

  const createTask = useCallback(
    async (name: string) => {
      if (project == null) {
        return;
      }
      const id = randomId();
      await client.ontology.actions.createTask({
        id,
        name,
        start_date: LocalDate.now(),
        end_date: LocalDate.now().plusWeeks(1),
        status: "Open",
        project_id: project,
      });
      await mutate();
      return id;
    },
    [project, mutate],
  );

  const deleteTask = useCallback(
    async (task: Task) => {
      if (project == null) {
        return;
      }
      await client.ontology.actions.deleteTask({ Task: task });
      await mutate();
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
