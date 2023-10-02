import { ColumnConstraint } from "./ColumnConstraint";

export interface ConstraintType_Array extends ColumnConstraint {
    type: "array";
}

function isArray(obj: ConstraintType): obj is ConstraintType_Array {
    return (obj.type === "array");
}

export interface ConstraintTypeVisitor<T> {
    array: (obj: ColumnConstraint) => T;
    unknown: (obj: ConstraintType) => T;
}

function visit<T>(obj: ConstraintType, visitor: ConstraintTypeVisitor<T>): T {
    if (isArray(obj)) {
        return visitor.array(obj);
    }

    return visitor.unknown(obj);
}

export type ConstraintType = ConstraintType_Array;

export const ConstraintType = {
    isArray: isArray,
    visit: visit,
};
