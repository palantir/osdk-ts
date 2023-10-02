import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

export interface FunctionExecutionTimedOut {
    errorCode: "TIMEOUT";
    errorName: "FunctionExecutionTimedOut";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
    };
}
