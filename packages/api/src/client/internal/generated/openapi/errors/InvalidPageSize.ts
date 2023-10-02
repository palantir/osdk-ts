import { PageSize } from "../components/PageSize";

/** The provided page size was zero or negative. Page sizes must be greater than zero. */
export interface InvalidPageSize {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPageSize";
    errorInstanceId: string;
    parameters: {
        pageSize: PageSize;
    };
}
