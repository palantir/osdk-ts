import { FieldName } from "./FieldName";
import { DataValue } from "./DataValue";

/** */
export type TransformDataRequest = { inputs: Record<FieldName, DataValue>; };
