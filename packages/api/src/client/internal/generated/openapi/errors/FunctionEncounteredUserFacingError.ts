import { FunctionRid } from "../components/FunctionRid";
import { FunctionVersion } from "../components/FunctionVersion";

/**
 * The authored function failed to execute because of a user induced error. The message argument
 * is meant to be displayed to the user.
 *
 */
export interface FunctionEncounteredUserFacingError {
    errorCode: "INVALID_ARGUMENT";
    errorName: "FunctionEncounteredUserFacingError";
    errorInstanceId: string;
    parameters: {
        functionRid: FunctionRid;
        functionVersion: FunctionVersion;
        message: string;
    };
}
