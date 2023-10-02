import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

/**
 * Memory limits were exceeded for the `Query` execution.
 *
 */
export interface QueryMemoryExceededLimit {
    errorCode: "TIMEOUT";
    errorName: "QueryMemoryExceededLimit";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
    };
}
