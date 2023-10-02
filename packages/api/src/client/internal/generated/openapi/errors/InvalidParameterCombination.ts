/** The given parameters are individually valid but cannot be used in the given combination. */
export interface InvalidParameterCombination {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidParameterCombination";
    errorInstanceId: string;
    parameters: {
        validCombinations: Array<Array<string>>;
        providedParameters: Array<string>;
    };
}
