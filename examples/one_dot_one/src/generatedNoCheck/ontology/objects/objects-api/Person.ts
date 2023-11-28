import { ObjectTypeFilter, OrderBy, GroupBySelections, AggregateSelection, MultipleAggregateSelection } from "@osdk/legacy-client";
import { Person } from "../Person";

export type PersonFilter = ObjectTypeFilter<Person>;
export type PersonOrderBy = OrderBy<Person>;
export type PersonGroupByProperties = GroupBySelections<Person>;
/** Aggregation properties for Person. */
export type PersonAggregationProperties = AggregateSelection<Person>;
/** Multiple aggregation properties for Person. */
export type PersonMultipleAggregationProperties = MultipleAggregateSelection<Person>;