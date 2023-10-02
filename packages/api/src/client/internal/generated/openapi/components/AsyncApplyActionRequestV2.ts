import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export type AsyncApplyActionRequestV2 = { parameters: Record<ParameterId, DataValue>; };
