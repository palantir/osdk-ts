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

function isArraySize(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_ArraySize {
    return (obj.type === "arraySize");
}

function arraySize(obj: ArraySize): ParameterEvaluatedConstraint_ArraySize {
    return {
        ...obj,
        type: "arraySize",
    };
}

export interface ParameterEvaluatedConstraint_GroupMember extends GroupMember {
    type: "groupMember";
}

function isGroupMember(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_GroupMember {
    return (obj.type === "groupMember");
}

function groupMember(obj: GroupMember): ParameterEvaluatedConstraint_GroupMember {
    return {
        ...obj,
        type: "groupMember",
    };
}

export interface ParameterEvaluatedConstraint_ObjectPropertyValue extends ObjectPropertyValue {
    type: "objectPropertyValue";
}

function isObjectPropertyValue(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_ObjectPropertyValue {
    return (obj.type === "objectPropertyValue");
}

function objectPropertyValue(obj: ObjectPropertyValue): ParameterEvaluatedConstraint_ObjectPropertyValue {
    return {
        ...obj,
        type: "objectPropertyValue",
    };
}

export interface ParameterEvaluatedConstraint_ObjectQueryResult extends ObjectQueryResult {
    type: "objectQueryResult";
}

function isObjectQueryResult(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_ObjectQueryResult {
    return (obj.type === "objectQueryResult");
}

function objectQueryResult(obj: ObjectQueryResult): ParameterEvaluatedConstraint_ObjectQueryResult {
    return {
        ...obj,
        type: "objectQueryResult",
    };
}

export interface ParameterEvaluatedConstraint_OneOf extends OneOf {
    type: "oneOf";
}

function isOneOf(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_OneOf {
    return (obj.type === "oneOf");
}

function oneOf(obj: OneOf): ParameterEvaluatedConstraint_OneOf {
    return {
        ...obj,
        type: "oneOf",
    };
}

export interface ParameterEvaluatedConstraint_Range extends Range {
    type: "range";
}

function isRange(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_Range {
    return (obj.type === "range");
}

function range(obj: Range): ParameterEvaluatedConstraint_Range {
    return {
        ...obj,
        type: "range",
    };
}

export interface ParameterEvaluatedConstraint_StringLength extends StringLength {
    type: "stringLength";
}

function isStringLength(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_StringLength {
    return (obj.type === "stringLength");
}

function stringLength(obj: StringLength): ParameterEvaluatedConstraint_StringLength {
    return {
        ...obj,
        type: "stringLength",
    };
}

export interface ParameterEvaluatedConstraint_StringRegexMatch extends StringRegexMatch {
    type: "stringRegexMatch";
}

function isStringRegexMatch(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_StringRegexMatch {
    return (obj.type === "stringRegexMatch");
}

function stringRegexMatch(obj: StringRegexMatch): ParameterEvaluatedConstraint_StringRegexMatch {
    return {
        ...obj,
        type: "stringRegexMatch",
    };
}

export interface ParameterEvaluatedConstraint_Unevaluable extends Unevaluable {
    type: "unevaluable";
}

function isUnevaluable(obj: ParameterEvaluatedConstraint): obj is ParameterEvaluatedConstraint_Unevaluable {
    return (obj.type === "unevaluable");
}

function unevaluable(obj: Unevaluable): ParameterEvaluatedConstraint_Unevaluable {
    return {
        ...obj,
        type: "unevaluable",
    };
}

export interface ParameterEvaluatedConstraintVisitor<T> {
    arraySize: (obj: ArraySize) => T;
    groupMember: (obj: GroupMember) => T;
    objectPropertyValue: (obj: ObjectPropertyValue) => T;
    objectQueryResult: (obj: ObjectQueryResult) => T;
    oneOf: (obj: OneOf) => T;
    range: (obj: Range) => T;
    stringLength: (obj: StringLength) => T;
    stringRegexMatch: (obj: StringRegexMatch) => T;
    unevaluable: (obj: Unevaluable) => T;
    unknown: (obj: ParameterEvaluatedConstraint) => T;
}

function visit<T>(obj: ParameterEvaluatedConstraint, visitor: ParameterEvaluatedConstraintVisitor<T>): T {
    if (isArraySize(obj)) {
        return visitor.arraySize(obj);
    }

    if (isGroupMember(obj)) {
        return visitor.groupMember(obj);
    }

    if (isObjectPropertyValue(obj)) {
        return visitor.objectPropertyValue(obj);
    }

    if (isObjectQueryResult(obj)) {
        return visitor.objectQueryResult(obj);
    }

    if (isOneOf(obj)) {
        return visitor.oneOf(obj);
    }

    if (isRange(obj)) {
        return visitor.range(obj);
    }

    if (isStringLength(obj)) {
        return visitor.stringLength(obj);
    }

    if (isStringRegexMatch(obj)) {
        return visitor.stringRegexMatch(obj);
    }

    if (isUnevaluable(obj)) {
        return visitor.unevaluable(obj);
    }

    return visitor.unknown(obj);
}

export type ParameterEvaluatedConstraint = ParameterEvaluatedConstraint_ArraySize | ParameterEvaluatedConstraint_GroupMember | ParameterEvaluatedConstraint_ObjectPropertyValue | ParameterEvaluatedConstraint_ObjectQueryResult | ParameterEvaluatedConstraint_OneOf | ParameterEvaluatedConstraint_Range | ParameterEvaluatedConstraint_StringLength | ParameterEvaluatedConstraint_StringRegexMatch | ParameterEvaluatedConstraint_Unevaluable;

export const ParameterEvaluatedConstraint = {
    isArraySize: isArraySize,
    arraySize: arraySize,
    isGroupMember: isGroupMember,
    groupMember: groupMember,
    isObjectPropertyValue: isObjectPropertyValue,
    objectPropertyValue: objectPropertyValue,
    isObjectQueryResult: isObjectQueryResult,
    objectQueryResult: objectQueryResult,
    isOneOf: isOneOf,
    oneOf: oneOf,
    isRange: isRange,
    range: range,
    isStringLength: isStringLength,
    stringLength: stringLength,
    isStringRegexMatch: isStringRegexMatch,
    stringRegexMatch: stringRegexMatch,
    isUnevaluable: isUnevaluable,
    unevaluable: unevaluable,
    visit: visit,
};
