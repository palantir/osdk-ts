import { ApplyActionRequestOptions } from "./ApplyActionRequestOptions";
import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export interface ApplyActionRequestV2 {
    options?: ApplyActionRequestOptions;
    parameters: Record<ParameterId, DataValue>;
}
