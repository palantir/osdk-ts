import { ColumnConstraint } from "./ColumnConstraint";

export interface ConstraintType_Array extends ColumnConstraint {
    type: "array";
}

export type ConstraintType = ConstraintType_Array;
