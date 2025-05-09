import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import client from "../client";
import { ITask } from "./useTasks";
import { osdkCodingTask } from "@tutorial-advance-to-do-application/sdk";
import { User } from "@osdk/foundry.admin";
import useAdmin from "./useAdmin";
import { ObjectMetadata } from "@osdk/client";

interface CodingTaskEnriched {
  osdkCodingTask: osdkCodingTask.OsdkInstance;
  createdBy: User;
  assignedTo: User;
}

// TODO: Find a way to fix this as task details control is dismounted which cause a fetch on the same task.

function useCodingTask(task: ITask) {
    const [metadata, setMetadata] = useState<ObjectMetadata>();
    const { getBatchUserDetails } = useAdmin();

    // Define the fetcher using useCallback
    const fetcher = useCallback(async () => {
        const codingTask: osdkCodingTask.OsdkInstance = await client(osdkCodingTask).fetchOne(task.osdkTask.$primaryKey as string);
        const users = await getBatchUserDetails([codingTask.createdBy as string, codingTask.assignedTo as string]);
        const codingTaskEnriched: CodingTaskEnriched = {
            osdkCodingTask: codingTask,
            createdBy: users[codingTask.createdBy as string],
            assignedTo: users[codingTask.assignedTo as string],
        };
        return codingTaskEnriched;
    }, [getBatchUserDetails, task.osdkTask.$primaryKey]);

    // Only pass the fetcher if the data is not already cached
    const { data, error, isValidating } = useSWR<CodingTaskEnriched>(
    task.osdkTask.$primaryKey as string,
    fetcher,
    { 
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    }
    );

    // Showing how we read the object type metadata and use the property display name from the ontology 
    const getObjectTypeMetadata = useCallback(async () => {
        const objectTypeMetadata = await client.fetchMetadata(osdkCodingTask);
        setMetadata(objectTypeMetadata);
    }, []);

    useEffect(() => {
        getObjectTypeMetadata();
    }, [getObjectTypeMetadata]);


    return {
    codingTask: data,
    isLoading: !data && !error,
    isValidating,
    isError: error,
    metadata,
    };
}

export default useCodingTask;