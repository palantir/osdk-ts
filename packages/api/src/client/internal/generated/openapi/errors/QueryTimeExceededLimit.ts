import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

/**
 * Time limits were exceeded for the `Query` execution.
 *
 */
export interface QueryTimeExceededLimit {
    errorCode: "TIMEOUT";
    errorName: "QueryTimeExceededLimit";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
    };
}
