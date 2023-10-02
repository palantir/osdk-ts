import { ObjectEdits } from "./ObjectEdits";
import { ObjectTypeEdits } from "./ObjectTypeEdits";

export interface ActionResults_Edits extends ObjectEdits {
    type: "edits";
}

function isEdits(obj: ActionResults): obj is ActionResults_Edits {
    return (obj.type === "edits");
}

function edits(obj: ObjectEdits): ActionResults_Edits {
    return {
        ...obj,
        type: "edits",
    };
}

export interface ActionResults_LargeScaleEdits extends ObjectTypeEdits {
    type: "largeScaleEdits";
}

function isLargeScaleEdits(obj: ActionResults): obj is ActionResults_LargeScaleEdits {
    return (obj.type === "largeScaleEdits");
}

function largeScaleEdits(obj: ObjectTypeEdits): ActionResults_LargeScaleEdits {
    return {
        ...obj,
        type: "largeScaleEdits",
    };
}

export interface ActionResultsVisitor<T> {
    edits: (obj: ObjectEdits) => T;
    largeScaleEdits: (obj: ObjectTypeEdits) => T;
    unknown: (obj: ActionResults) => T;
}

function visit<T>(obj: ActionResults, visitor: ActionResultsVisitor<T>): T {
    if (isEdits(obj)) {
        return visitor.edits(obj);
    }

    if (isLargeScaleEdits(obj)) {
        return visitor.largeScaleEdits(obj);
    }

    return visitor.unknown(obj);
}

export type ActionResults = ActionResults_Edits | ActionResults_LargeScaleEdits;

export const ActionResults = {
    isEdits: isEdits,
    edits: edits,
    isLargeScaleEdits: isLargeScaleEdits,
    largeScaleEdits: largeScaleEdits,
    visit: visit,
};
