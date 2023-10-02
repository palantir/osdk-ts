import { ApplyActionRequestOptions } from "../components/ApplyActionRequestOptions";

/** The given options are individually valid but cannot be used in the given combination. */
export interface InvalidApplyActionOptionCombination {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidApplyActionOptionCombination";
    errorInstanceId: string;
    parameters: {
        invalidCombination: ApplyActionRequestOptions;
    };
}
