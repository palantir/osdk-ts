import { ArraySize } from "./ArraySize";
import { GroupMember } from "./GroupMember";
import { ObjectPropertyValue } from "./ObjectPropertyValue";
import { ObjectQueryResult } from "./ObjectQueryResult";
import { OneOf } from "./OneOf";
import { Range } from "./Range";
import { StringLength } from "./StringLength";
import { StringRegexMatch } from "./StringRegexMatch";
import { Unevaluable } from "./Unevaluable";

export interface ParameterEvaluatedConstraint_ArraySize extends ArraySize {
    type: "arraySize";
}

export interface ParameterEvaluatedConstraint_GroupMember extends GroupMember {
    type: "groupMember";
}

export interface ParameterEvaluatedConstraint_ObjectPropertyValue extends ObjectPropertyValue {
    type: "objectPropertyValue";
}

export interface ParameterEvaluatedConstraint_ObjectQueryResult extends ObjectQueryResult {
    type: "objectQueryResult";
}

export interface ParameterEvaluatedConstraint_OneOf extends OneOf {
    type: "oneOf";
}

export interface ParameterEvaluatedConstraint_Range extends Range {
    type: "range";
}

export interface ParameterEvaluatedConstraint_StringLength extends StringLength {
    type: "stringLength";
}

export interface ParameterEvaluatedConstraint_StringRegexMatch extends StringRegexMatch {
    type: "stringRegexMatch";
}

export interface ParameterEvaluatedConstraint_Unevaluable extends Unevaluable {
    type: "unevaluable";
}

export type ParameterEvaluatedConstraint = ParameterEvaluatedConstraint_ArraySize | ParameterEvaluatedConstraint_GroupMember | ParameterEvaluatedConstraint_ObjectPropertyValue | ParameterEvaluatedConstraint_ObjectQueryResult | ParameterEvaluatedConstraint_OneOf | ParameterEvaluatedConstraint_Range | ParameterEvaluatedConstraint_StringLength | ParameterEvaluatedConstraint_StringRegexMatch | ParameterEvaluatedConstraint_Unevaluable;
