import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

/** */
export type AsyncApplyActionRequest = { parameters: Record<ParameterId, DataValue>; };
