import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { ObjectTypeWithAllPropertyTypes } from "../ObjectTypeWithAllPropertyTypes";

export type ObjectTypeWithAllPropertyTypesFilter = ObjectSetFilterArg<ObjectTypeWithAllPropertyTypes>;
export type ObjectTypeWithAllPropertyTypesOrderBy = ObjectSetOrderByArg<ObjectTypeWithAllPropertyTypes>;
export type ObjectTypeWithAllPropertyTypesGroupByProperties = ObjectSetGroupByArg<ObjectTypeWithAllPropertyTypes>;
/** Aggregation properties for ObjectTypeWithAllPropertyTypes. */
export type ObjectTypeWithAllPropertyTypesAggregationProperties = ObjectSetAggregateArg<ObjectTypeWithAllPropertyTypes>;
/** Multiple aggregation properties for ObjectTypeWithAllPropertyTypes. */
export type ObjectTypeWithAllPropertyTypesMultipleAggregationProperties = ObjectSetMultipleAggregateArg<ObjectTypeWithAllPropertyTypes>;