import type { MissingDatasourceMigrationError } from "./MissingDatasourceMigrationError.js";
import type { MissingDeletedPropertyTypeSchemaMigrationError } from "./MissingDeletedPropertyTypeSchemaMigrationError.js";
import type { MissingPropertyDataTypeSchemaMigrationError } from "./MissingPropertyDataTypeSchemaMigrationError.js";
import type { PrimaryKeyChangeMigrationError } from "./PrimaryKeyChangeMigrationError.js";
export interface SchemaMigrationError_propertyDataType {
	type: "propertyDataType";
	propertyDataType: MissingPropertyDataTypeSchemaMigrationError;
}
export interface SchemaMigrationError_deletedPropertyType {
	type: "deletedPropertyType";
	deletedPropertyType: MissingDeletedPropertyTypeSchemaMigrationError;
}
export interface SchemaMigrationError_datasource {
	type: "datasource";
	datasource: MissingDatasourceMigrationError;
}
export interface SchemaMigrationError_primaryKeyChange {
	type: "primaryKeyChange";
	primaryKeyChange: PrimaryKeyChangeMigrationError;
}
export type SchemaMigrationError = SchemaMigrationError_propertyDataType | SchemaMigrationError_deletedPropertyType | SchemaMigrationError_datasource | SchemaMigrationError_primaryKeyChange;
