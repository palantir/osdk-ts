import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { objectTypeWithAllPropertyTypes as OG_objectTypeWithAllPropertyTypes } from "../objectTypeWithAllPropertyTypes";
/** @deprecated Use objectTypeWithAllPropertyTypes from ontology/objects instead */
export type objectTypeWithAllPropertyTypes = OG_objectTypeWithAllPropertyTypes;
/** @deprecated Use ObjectSetFilterArg<objectTypeWithAllPropertyTypes> instead */
export type objectTypeWithAllPropertyTypesFilter = ObjectSetFilterArg<OG_objectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetOrderByArg<objectTypeWithAllPropertyTypes> instead */
export type objectTypeWithAllPropertyTypesOrderBy = ObjectSetOrderByArg<OG_objectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetGroupByArg<objectTypeWithAllPropertyTypes> instead */
export type objectTypeWithAllPropertyTypesGroupByProperties = ObjectSetGroupByArg<OG_objectTypeWithAllPropertyTypes>;
/**
  * Aggregation properties for objectTypeWithAllPropertyTypes
  * @deprecated Use ObjectSetAggregateArg<objectTypeWithAllPropertyTypes> instead
  */
export type objectTypeWithAllPropertyTypesAggregationProperties = ObjectSetAggregateArg<OG_objectTypeWithAllPropertyTypes>;
/**
  * Multiple aggregation properties for objectTypeWithAllPropertyTypes.
  * @deprecated Use ObjectSetMultipleAggregateArg<objectTypeWithAllPropertyTypes> instead
  */
export type objectTypeWithAllPropertyTypesMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_objectTypeWithAllPropertyTypes>;
