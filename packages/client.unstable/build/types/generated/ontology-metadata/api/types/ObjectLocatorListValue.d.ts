import type { ObjectLocator } from "./ObjectLocator.js";
/**
* A parameter value type that consists of a list of ObjectLocators.
*/
export interface ObjectLocatorListValue {
	objectLocatorList: Array<ObjectLocator>;
}
