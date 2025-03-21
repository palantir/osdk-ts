import type { OneOfStringTypeConstraint } from "./OneOfStringTypeConstraint.js";
import type { RegexConstraint } from "./RegexConstraint.js";
import type { StringTypeIsRidConstraint } from "./StringTypeIsRidConstraint.js";
import type { StringTypeIsUuidConstraint } from "./StringTypeIsUuidConstraint.js";
import type { StringTypeLengthConstraint } from "./StringTypeLengthConstraint.js";
export interface StringTypeDataConstraints_regex {
	type: "regex";
	regex: RegexConstraint;
}
export interface StringTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfStringTypeConstraint;
}
export interface StringTypeDataConstraints_length {
	type: "length";
	length: StringTypeLengthConstraint;
}
export interface StringTypeDataConstraints_isUuid {
	type: "isUuid";
	isUuid: StringTypeIsUuidConstraint;
}
export interface StringTypeDataConstraints_isRid {
	type: "isRid";
	isRid: StringTypeIsRidConstraint;
}
export type StringTypeDataConstraints = StringTypeDataConstraints_regex | StringTypeDataConstraints_oneOf | StringTypeDataConstraints_length | StringTypeDataConstraints_isUuid | StringTypeDataConstraints_isRid;
