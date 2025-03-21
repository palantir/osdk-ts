import type { MarkingId } from "./MarkingId.js";
/**
* Contains a set of markings that represents the max classification of this datasource.
*/
export interface ClassificationConstraint {
	markings: Array<MarkingId>;
	allowEmptyMarkings: boolean | undefined;
}
