import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

/** */
export interface FunctionExecutionFailed {
    errorCode: "INVALID_ARGUMENT";
    errorName: "FunctionExecutionFailed";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
    };
}
