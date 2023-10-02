import { QueryApiName } from "../components/QueryApiName";

/** The query is not found, or the user does not have access to it. */
export interface QueryNotFound {
    errorCode: "NOT_FOUND";
    errorName: "QueryNotFound";
    errorInstanceId: string;
    parameters: {
        query: QueryApiName;
    };
}
