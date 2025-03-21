import type { PropertyTypeLocator } from "./PropertyTypeLocator.js";
import type { SoftLinkType } from "./SoftLinkType.js";
/**
* A mapping from a property of the given ObjectType to the property of another.
*/
export interface SoftLink {
	softLinkType: SoftLinkType;
	fromProperty: PropertyTypeLocator;
	toProperty: PropertyTypeLocator;
}
