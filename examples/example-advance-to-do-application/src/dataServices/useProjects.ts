import { osdkTodoProject } from "@tutorial-advance-to-do-application/sdk";
import { useCallback } from "react";
import useSWR from "swr";
import { useOsdkClient } from "@osdk/react";
import type { Osdk, PropertyKeys } from "@osdk/client";

export type IProject = Osdk.Instance<osdkTodoProject, never, PropertyKeys<osdkTodoProject>> & {
  numberOfTasks: number,
  numberOfCompletedTasks: number,
  numberOfInProgressTasks: number,
  numberOfNotStartedTasks: number,
}

function useProjects() {
  const client = useOsdkClient();
  const fetcher = useCallback(async () => {
    const projectsPage = await client(osdkTodoProject)
      .withProperties({
        "numberOfTasks": (baseObjectSet) =>
          baseObjectSet.pivotTo("osdkTodoTask").aggregate("$count"),
        "numberOfCompletedTasks": (baseObjectSet) =>
          baseObjectSet.pivotTo("osdkTodoTask").where({
            "status": { $eq: "COMPLETED" },
            }).aggregate("$count"),
        "numberOfInProgressTasks": (baseObjectSet) =>
          baseObjectSet.pivotTo("osdkTodoTask").where({
            "status": { $eq: "IN PROGRESS" },
            }).aggregate("$count"),
        "numberOfNotStartedTasks": (baseObjectSet) =>
          baseObjectSet.pivotTo("osdkTodoTask").where({
            "status": { $eq: "NOT STARTED" },
            }).aggregate("$count")
        })
      .fetchPage();
      const projects: IProject[] = projectsPage.data.map((project) => ({
        ...project,
        numberOfTasks: project.numberOfTasks ?? 0,
        numberOfCompletedTasks: project.numberOfCompletedTasks ?? 0,
        numberOfInProgressTasks: project.numberOfInProgressTasks ?? 0,
        numberOfNotStartedTasks: project.numberOfNotStartedTasks ?? 0,
      }));
      return projects;
    }, [client]);
  const { data, isLoading, isValidating, error } = useSWR<IProject[]>(
    "projects",
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    projects: data ?? [],
    isLoading,
    isValidating,
    isError: error,
  };
}

export default useProjects;