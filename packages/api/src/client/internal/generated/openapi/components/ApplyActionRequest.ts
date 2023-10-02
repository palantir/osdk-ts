import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export type ApplyActionRequest = { parameters: Record<ParameterId, DataValue>; };
