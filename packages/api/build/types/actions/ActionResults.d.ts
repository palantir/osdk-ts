export type ActionResults = (ObjectEdits | LargeScaleObjectEdits) & {
	editedObjectTypes: Array<String>
};
interface ObjectEdits {
	type: "edits";
	addedObjects: Array<ObjectReference>;
	modifiedObjects: Array<ObjectReference>;
	deletedObjects?: Array<ObjectReference>;
	addedLinks: Array<LinkReference>;
	deletedLinks?: Array<LinkReference>;
	deletedObjectsCount: number;
	deletedLinksCount: number;
}
interface LargeScaleObjectEdits {
	type: "largeScaleEdits";
	addedObjects?: never;
	modifiedObjects?: never;
	deletedObjects?: never;
	addedLinks?: never;
	deletedLinks?: never;
	deletedObjectsCount?: never;
	deletedLinksCount?: never;
}
type LinkReference = {
	linkTypeApiNameAtoB: string
	linkTypeApiNameBtoA: string
	aSideObject: ObjectReference
	bSideObject: ObjectReference
};
interface ObjectReference {
	primaryKey: string | number;
	objectType: string;
}
export interface ValidateActionResponseV2 {
	result: "VALID" | "INVALID";
	submissionCriteria: Array<{
		configuredFailureMessage?: string
		result: "VALID" | "INVALID"
	}>;
	parameters: Record<string, {
		result: "VALID" | "INVALID"
		evaluatedConstraints: Array<ParameterEvaluatedConstraint>
		required: boolean
	}>;
}
type ParameterEvaluatedConstraint = {
	type: "arraySize"
	lt?: any
	lte?: any
	gt?: any
	gte?: any
} | {
	type: "groupMember"
} | {
	type: "objectPropertyValue"
} | {
	type: "objectQueryResult"
} | {
	type: "oneOf"
	options: Array<{
		displayName?: string
		value?: any
	}>
	otherValuesAllowed: boolean
} | {
	type: "range"
	lt?: any
	lte?: any
	gt?: any
	gte?: any
} | {
	type: "stringLength"
	lt?: any
	lte?: any
	gt?: any
	gte?: any
} | {
	type: "stringRegexMatch"
	regex: string
	configuredFailureMessage?: string
} | {
	type: "unevaluable"
};
export {};
