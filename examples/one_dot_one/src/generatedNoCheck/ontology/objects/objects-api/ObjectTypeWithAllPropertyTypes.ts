import { ObjectTypeFilter, OrderBy, GroupBySelections, AggregateSelection, MultipleAggregateSelection } from "@osdk/legacy-client";
import { ObjectTypeWithAllPropertyTypes } from "../ObjectTypeWithAllPropertyTypes";

export type ObjectTypeWithAllPropertyTypesFilter = ObjectTypeFilter<ObjectTypeWithAllPropertyTypes>;
export type ObjectTypeWithAllPropertyTypesOrderBy = OrderBy<ObjectTypeWithAllPropertyTypes>;
export type ObjectTypeWithAllPropertyTypesGroupByProperties = GroupBySelections<ObjectTypeWithAllPropertyTypes>;
/** Aggregation properties for ObjectTypeWithAllPropertyTypes. */
export type ObjectTypeWithAllPropertyTypesAggregationProperties = AggregateSelection<ObjectTypeWithAllPropertyTypes>;
/** Multiple aggregation properties for ObjectTypeWithAllPropertyTypes. */
export type ObjectTypeWithAllPropertyTypesMultipleAggregationProperties = MultipleAggregateSelection<ObjectTypeWithAllPropertyTypes>;