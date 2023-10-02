import { PageToken } from "../components/PageToken";

/** The provided page token could not be used to retrieve the next page of results. */
export interface InvalidPageToken {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPageToken";
    errorInstanceId: string;
    parameters: {
        pageToken: PageToken;
    };
}
