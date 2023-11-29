import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { ObjectTypeWithAllPropertyTypes } from "../ObjectTypeWithAllPropertyTypes";

/** @deprecated Use ObjectSetFilterArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesFilter = ObjectSetFilterArg<ObjectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetOrderByArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesOrderBy = ObjectSetOrderByArg<ObjectTypeWithAllPropertyTypes>;
/** @deprecated Use ObjectSetGroupByArg<ObjectTypeWithAllPropertyTypes> instead */
export type ObjectTypeWithAllPropertyTypesGroupByProperties = ObjectSetGroupByArg<ObjectTypeWithAllPropertyTypes>;
/**
        * Aggregation properties for ObjectTypeWithAllPropertyTypes
        * @deprecated Use ObjectSetAggregateArg<ObjectTypeWithAllPropertyTypes> instead
        */
export type ObjectTypeWithAllPropertyTypesAggregationProperties = ObjectSetAggregateArg<ObjectTypeWithAllPropertyTypes>;
/**
        * Multiple aggregation properties for ObjectTypeWithAllPropertyTypes.
        * @deprecated Use ObjectSetMultipleAggregateArg<ObjectTypeWithAllPropertyTypes> instead
        */
export type ObjectTypeWithAllPropertyTypesMultipleAggregationProperties = ObjectSetMultipleAggregateArg<ObjectTypeWithAllPropertyTypes>;