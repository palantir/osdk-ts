import type { ColumnName } from "../ColumnName.js";
import type { OntologyIrObjectPropertyReference } from "./OntologyIrObjectPropertyReference.js";
/**
* Because complex objects can't be used as map keys over the wire, this is used in many to many link dataset datasource
*/
export interface OntologyIrPropertyToColumnMapping {
	property: OntologyIrObjectPropertyReference;
	column: ColumnName;
}
