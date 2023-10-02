import { ValidateActionResponseV2 } from "./ValidateActionResponseV2";
import { ActionResults } from "./ActionResults";

export interface SyncApplyActionResponseV2 {
    validation?: ValidateActionResponseV2;
    edits?: ActionResults;
}
