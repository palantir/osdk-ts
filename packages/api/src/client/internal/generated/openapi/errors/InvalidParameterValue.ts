import { ValueType } from "../components/ValueType";
import { OntologyDataType } from "../components/OntologyDataType";
import { ParameterId } from "../components/ParameterId";
import { DataValue } from "../components/DataValue";

/**
 * The value of the given parameter is invalid. See the documentation of `DataValue` for details on
 * how parameters are represented.
 *
 */
export interface InvalidParameterValue {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidParameterValue";
    errorInstanceId: string;
    parameters: {
        parameterBaseType: ValueType;
        parameterDataType: OntologyDataType;
        parameterId: ParameterId;
        parameterValue: DataValue;
    };
}
