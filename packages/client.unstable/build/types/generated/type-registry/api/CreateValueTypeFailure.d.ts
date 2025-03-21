import type { CreateValueTypePermissionDeniedFailure } from "./CreateValueTypePermissionDeniedFailure.js";
import type { DisabledBaseTypeFailure } from "./DisabledBaseTypeFailure.js";
import type { MissingNamespaceFailure } from "./MissingNamespaceFailure.js";
import type { MissingNamespacePathFailure } from "./MissingNamespacePathFailure.js";
import type { MissingNamespaceRoleSetsFailure } from "./MissingNamespaceRoleSetsFailure.js";
import type { MultipleConstraintsFailure } from "./MultipleConstraintsFailure.js";
import type { NamespaceAttachedToDefaultOntologyDisallowedFailure } from "./NamespaceAttachedToDefaultOntologyDisallowedFailure.js";
import type { ServiceNamespaceDisallowedFailure } from "./ServiceNamespaceDisallowedFailure.js";
import type { ValueTypeValidationFailure } from "./ValueTypeValidationFailure.js";
export interface CreateValueTypeFailure_createValueTypePermissionDenied {
	type: "createValueTypePermissionDenied";
	createValueTypePermissionDenied: CreateValueTypePermissionDeniedFailure;
}
export interface CreateValueTypeFailure_disabledBaseType {
	type: "disabledBaseType";
	disabledBaseType: DisabledBaseTypeFailure;
}
export interface CreateValueTypeFailure_multipleConstraints {
	type: "multipleConstraints";
	multipleConstraints: MultipleConstraintsFailure;
}
export interface CreateValueTypeFailure_validationFailure {
	type: "validationFailure";
	validationFailure: ValueTypeValidationFailure;
}
export interface CreateValueTypeFailure_missingNamespace {
	type: "missingNamespace";
	missingNamespace: MissingNamespaceFailure;
}
export interface CreateValueTypeFailure_missingNamespacePath {
	type: "missingNamespacePath";
	missingNamespacePath: MissingNamespacePathFailure;
}
export interface CreateValueTypeFailure_missingNamespaceRoleSets {
	type: "missingNamespaceRoleSets";
	missingNamespaceRoleSets: MissingNamespaceRoleSetsFailure;
}
export interface CreateValueTypeFailure_serviceNamespaceDisallowed {
	type: "serviceNamespaceDisallowed";
	serviceNamespaceDisallowed: ServiceNamespaceDisallowedFailure;
}
export interface CreateValueTypeFailure_namespaceAttachedToDefaultOntologyDisallowed {
	type: "namespaceAttachedToDefaultOntologyDisallowed";
	namespaceAttachedToDefaultOntologyDisallowed: NamespaceAttachedToDefaultOntologyDisallowedFailure;
}
export type CreateValueTypeFailure = CreateValueTypeFailure_createValueTypePermissionDenied | CreateValueTypeFailure_disabledBaseType | CreateValueTypeFailure_multipleConstraints | CreateValueTypeFailure_validationFailure | CreateValueTypeFailure_missingNamespace | CreateValueTypeFailure_missingNamespacePath | CreateValueTypeFailure_missingNamespaceRoleSets | CreateValueTypeFailure_serviceNamespaceDisallowed | CreateValueTypeFailure_namespaceAttachedToDefaultOntologyDisallowed;
