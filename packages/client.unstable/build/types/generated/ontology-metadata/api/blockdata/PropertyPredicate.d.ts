import type { PropertyId } from "../PropertyId.js";
import type { PropertyRid } from "./PropertyRid.js";
export interface PropertyPredicate_and {
	type: "and";
	and: Array<PropertyPredicate>;
}
export interface PropertyPredicate_or {
	type: "or";
	or: Array<PropertyPredicate>;
}
export interface PropertyPredicate_not {
	type: "not";
	not: PropertyPredicate;
}
export interface PropertyPredicate_hasId {
	type: "hasId";
	hasId: PropertyId;
}
export interface PropertyPredicate_hasRid {
	type: "hasRid";
	hasRid: PropertyRid;
}
export type PropertyPredicate = PropertyPredicate_and | PropertyPredicate_or | PropertyPredicate_not | PropertyPredicate_hasId | PropertyPredicate_hasRid;
