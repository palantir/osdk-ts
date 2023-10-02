import { ObjectEdits } from "./ObjectEdits";
import { ObjectTypeEdits } from "./ObjectTypeEdits";

export interface ActionResults_Edits extends ObjectEdits {
    type: "edits";
}

export interface ActionResults_LargeScaleEdits extends ObjectTypeEdits {
    type: "largeScaleEdits";
}

export type ActionResults = ActionResults_Edits | ActionResults_LargeScaleEdits;
