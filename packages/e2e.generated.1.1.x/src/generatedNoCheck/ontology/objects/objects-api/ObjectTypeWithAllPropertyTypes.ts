import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { ObjectTypeWithAllPropertyTypes as OG_ObjectTypeWithAllPropertyTypes } from "../ObjectTypeWithAllPropertyTypes.js";

/** @deprecated Use ObjectTypeWithAllPropertyTypes from ontology/objects instead */
export type ObjectTypeWithAllPropertyTypes = OG_ObjectTypeWithAllPropertyTypes;
/** @deprecated Use ObjectSetFilterArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesFilter = ObjectSetFilterArg<OG_ObjectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetOrderByArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesOrderBy = ObjectSetOrderByArg<OG_ObjectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetGroupByArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesGroupByProperties = ObjectSetGroupByArg<OG_ObjectTypeWithAllPropertyTypes>;

      /**
        * Aggregation properties for ObjectTypeWithAllPropertyTypes
        * @deprecated Use ObjectSetAggregateArg<ObjectTypeWithAllPropertyTypes> instead
        */
export type ObjectTypeWithAllPropertyTypesAggregationProperties = ObjectSetAggregateArg<OG_ObjectTypeWithAllPropertyTypes>;

      /**
        * Multiple aggregation properties for ObjectTypeWithAllPropertyTypes.
        * @deprecated Use ObjectSetMultipleAggregateArg<ObjectTypeWithAllPropertyTypes> instead
        */
export type ObjectTypeWithAllPropertyTypesMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_ObjectTypeWithAllPropertyTypes>;