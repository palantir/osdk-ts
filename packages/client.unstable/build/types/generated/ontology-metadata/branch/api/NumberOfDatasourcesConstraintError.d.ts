import type { LinkTypesHaveMultipleDatasourcesError } from "./LinkTypesHaveMultipleDatasourcesError.js";
import type { LinkTypesHaveNoDatasourcesError } from "./LinkTypesHaveNoDatasourcesError.js";
import type { ObjectTypesHaveNoDatasourcesError } from "./ObjectTypesHaveNoDatasourcesError.js";
import type { ObjectTypesHaveTooManyDatasourcesError } from "./ObjectTypesHaveTooManyDatasourcesError.js";
export interface NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources {
	type: "objectTypesHaveNoDatasources";
	objectTypesHaveNoDatasources: ObjectTypesHaveNoDatasourcesError;
}
export interface NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources {
	type: "objectTypesHaveTooManyDatasources";
	objectTypesHaveTooManyDatasources: ObjectTypesHaveTooManyDatasourcesError;
}
export interface NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources {
	type: "linkTypesHaveNoDatasources";
	linkTypesHaveNoDatasources: LinkTypesHaveNoDatasourcesError;
}
export interface NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources {
	type: "linkTypesHaveMultipleDatasources";
	linkTypesHaveMultipleDatasources: LinkTypesHaveMultipleDatasourcesError;
}
/**
* A type representing the Validation Errors associated with validations on the number of datasources.
*/
export type NumberOfDatasourcesConstraintError = NumberOfDatasourcesConstraintError_objectTypesHaveNoDatasources | NumberOfDatasourcesConstraintError_objectTypesHaveTooManyDatasources | NumberOfDatasourcesConstraintError_linkTypesHaveNoDatasources | NumberOfDatasourcesConstraintError_linkTypesHaveMultipleDatasources;
