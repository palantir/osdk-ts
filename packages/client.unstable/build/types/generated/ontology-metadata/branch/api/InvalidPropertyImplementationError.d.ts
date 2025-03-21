import type { InterfacePropertyNotFound } from "./InterfacePropertyNotFound.js";
import type { InvalidDataConstraintsError } from "./InvalidDataConstraintsError.js";
import type { InvalidIsIndexedForSearchError } from "./InvalidIsIndexedForSearchError.js";
import type { InvalidPropertyTypeError } from "./InvalidPropertyTypeError.js";
import type { InvalidTypeClassesError } from "./InvalidTypeClassesError.js";
import type { InvalidValueTypeError } from "./InvalidValueTypeError.js";
import type { MissingImplementingPropertyError } from "./MissingImplementingPropertyError.js";
export interface InvalidPropertyImplementationError_invalidPropertyType {
	type: "invalidPropertyType";
	invalidPropertyType: InvalidPropertyTypeError;
}
export interface InvalidPropertyImplementationError_invalidTypeClasses {
	type: "invalidTypeClasses";
	invalidTypeClasses: InvalidTypeClassesError;
}
export interface InvalidPropertyImplementationError_invalidDataConstraints {
	type: "invalidDataConstraints";
	invalidDataConstraints: InvalidDataConstraintsError;
}
export interface InvalidPropertyImplementationError_invalidValueType {
	type: "invalidValueType";
	invalidValueType: InvalidValueTypeError;
}
export interface InvalidPropertyImplementationError_invalidIsIndexedForSearch {
	type: "invalidIsIndexedForSearch";
	invalidIsIndexedForSearch: InvalidIsIndexedForSearchError;
}
export interface InvalidPropertyImplementationError_propertyIdNotFound {
	type: "propertyIdNotFound";
	propertyIdNotFound: MissingImplementingPropertyError;
}
export interface InvalidPropertyImplementationError_interfacePropertyNotFound {
	type: "interfacePropertyNotFound";
	interfacePropertyNotFound: InterfacePropertyNotFound;
}
export type InvalidPropertyImplementationError = InvalidPropertyImplementationError_invalidPropertyType | InvalidPropertyImplementationError_invalidTypeClasses | InvalidPropertyImplementationError_invalidDataConstraints | InvalidPropertyImplementationError_invalidValueType | InvalidPropertyImplementationError_invalidIsIndexedForSearch | InvalidPropertyImplementationError_propertyIdNotFound | InvalidPropertyImplementationError_interfacePropertyNotFound;
