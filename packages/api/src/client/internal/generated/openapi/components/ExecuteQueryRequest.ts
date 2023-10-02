import { ParameterId } from "./ParameterId";
import { DataValue } from "./DataValue";

export type ExecuteQueryRequest = { parameters: Record<ParameterId, DataValue>; };
