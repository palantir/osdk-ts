import type { DerivedPropertiesDefinition } from "./derivedproperties/DerivedPropertiesDefinition.js";
/**
* Object type datasource which is backed by derived properties definition.
*
* This source provides property values that are derived from property types on other object type(s)
* via links or additional aggregations and computations.
*
* Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
* type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
*
* This type is only compatible with object storage v2.
*/
export interface ObjectTypeDerivedPropertiesDatasource {
	definition: DerivedPropertiesDefinition;
}
