import { ParameterId } from "../components/ParameterId";
import { ValueType } from "../components/ValueType";

/**
 * The type of the requested parameter is not currently supported by this API. If you need support for this,
 * please reach out to Palantir Support.
 *
 */
export interface ParameterTypeNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ParameterTypeNotSupported";
    errorInstanceId: string;
    parameters: {
        parameterId: ParameterId;
        parameterBaseType: ValueType;
    };
}
