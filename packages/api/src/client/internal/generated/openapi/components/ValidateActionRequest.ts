import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export type ValidateActionRequest = { parameters: Record<ParameterId, DataValue>; };
