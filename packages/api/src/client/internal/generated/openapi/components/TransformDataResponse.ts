import { FieldName } from "./FieldName";
import { DataValue } from "./DataValue";

/** */
export type TransformDataResponse = { outputs: Record<FieldName, DataValue>; };
