import { QueryDataType } from "../components/QueryDataType";
import { ParameterId } from "../components/ParameterId";
import { DataValue } from "../components/DataValue";

/**
 * The value of the given parameter is invalid. See the documentation of `DataValue` for details on
 * how parameters are represented.
 *
 */
export interface InvalidQueryParameterValue {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidQueryParameterValue";
    errorInstanceId: string;
    parameters: {
        parameterDataType: QueryDataType;
        parameterId: ParameterId;
        parameterValue: DataValue;
    };
}
