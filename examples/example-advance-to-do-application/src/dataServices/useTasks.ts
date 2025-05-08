import useSWR from "swr";
import client from "../client";
import { OsdkITask } from "@tutorial-advance-to-do-application/sdk";
import { IProject } from "./useProjects";
import { useCallback, useEffect, useState } from "react";
import useAdmin from "./useAdmin";
import { User } from "@osdk/foundry.admin";
import { InterfaceMetadata } from "@osdk/api";
import _ from "lodash";

export interface ITask {
    osdkTask: OsdkITask.OsdkInstance;
    createdBy: User;
    assignedTo: User;
}

function useTasks(project: IProject) {
    const [metadata, setMetadata] = useState<InterfaceMetadata>();
    const { getBatchUserDetails } = useAdmin();
    // `$includeAllBaseObjectProperties: true,` means that although we are fetching the object through its interface implementation 
    // we are still going to get all the base object properties as when we pivot to the base object using $as we don't need to fetch them again
    const fetcher = useCallback(async () => {
        const tasksPage = await client(OsdkITask).where({
            projectId: { $eq: project.$primaryKey },
        }).fetchPage({
            // $includeAllBaseObjectProperties: true,
            $orderBy: { "dueDate": "desc", "status": "asc" }, 
        });
        // Get the user details for the createdBy field
        const createdByIds = _.uniq(tasksPage.data.map((task) => task.createdBy as string));
        const createdByUserList = await getBatchUserDetails(createdByIds);
        // Get the user details for the assignedTo field
        const assignedToIds = _.uniq(tasksPage.data.map((task) => task.assignedTo as string));
        const assignedToUserList = await getBatchUserDetails(assignedToIds);
        const tasksList: ITask[] = tasksPage.data.map((task) => ({
            osdkTask: task,
            assignedTo: assignedToUserList[task.assignedTo as string],
            createdBy: createdByUserList[task.createdBy as string],
            }));
      return tasksList;
    } , [getBatchUserDetails, project.$primaryKey]);

  const { data, isLoading, isValidating, error, mutate } = useSWR<ITask[]>(
    ["tasks",project.$primaryKey],
    fetcher,
    { revalidateOnFocus: false }
  );

  // Showing how we read the object type metadata and use the property display name from the ontology 
  const getObjectTypeMetadata = useCallback(async () => {
    const objectTypeMetadata = await client.fetchMetadata(OsdkITask);
    setMetadata(objectTypeMetadata);
    } , []);

    useEffect(() => {
        getObjectTypeMetadata();
    }, [getObjectTypeMetadata]);


    useEffect(() => {
        // Subscribe to the object set to get real-time updates
        const subscription = client(OsdkITask)
            .where({
                projectId: { $eq: project.$primaryKey },
            })
            .subscribe(
                {
                    onChange(update) {
                        if (update.state === "ADDED_OR_UPDATED") {
                            // An object has received an update or an object was added to the object set
                            const currentObject = data?.find((task) => task.osdkTask.$primaryKey === update.object.$primaryKey);
                            if (currentObject !== undefined) {
                                // get the user details for the createdBy field and the assignedTo field
                                getBatchUserDetails([update.object.createdBy as string, update.object.assignedTo as string]).then((userList) => {
                                    const updatedObject: ITask = {
                                        osdkTask: update.object,
                                        assignedTo: userList[update.object.assignedTo as string],
                                        createdBy: userList[update.object.createdBy as string],
                                    };
                                    // Replace the object in date with the new one mutate without fetching
                                    mutate((currentData: ITask[] | undefined) => {
                                        if (!currentData) return [];
                                        return currentData.map((task) => task.osdkTask.$primaryKey === update.object.$primaryKey ? updatedObject : task);
                                    }, { revalidate: false });
                                });
                            }
                        }
                        else if (update.state === "REMOVED") {
                            // remove the object from the data mutate without fetching
                            mutate((currentData: ITask[] | undefined) => {
                                if (!currentData) return [];
                                return currentData.filter((task) => task.osdkTask.$primaryKey !== update.object.$primaryKey);
                            }, { revalidate: false });
                        }
                    },
                    onSuccessfulSubscription() {
                        // The subscription was successful and you can expect to receive updates
                    },
                    onError(err) {
                        // There was an error with the subscription and you will not receive any more updates
                        console.error(err);
                    },
                    onOutOfDate() {
                        // We could not keep track of all changes. Please reload the objects in your set.
                    },
                },
            );

        subscription.unsubscribe();
    },[data, getBatchUserDetails, mutate, project.$primaryKey]);

  return {
    tasks: data ?? [],
    isLoading,
    isValidating,
    isError: error,
    metadata,
  };
}

export default useTasks;