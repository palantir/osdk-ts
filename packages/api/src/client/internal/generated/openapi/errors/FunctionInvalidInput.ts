import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

/** */
export interface FunctionInvalidInput {
    errorCode: "INVALID_ARGUMENT";
    errorName: "FunctionInvalidInput";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
    };
}
