import { ObjectTypeFilter, OrderBy, GroupBySelections, AggregateSelection, MultipleAggregateSelection } from "@osdk/legacy-client";
import { Todo } from "../Todo";

export type TodoFilter = ObjectTypeFilter<Todo>;
export type TodoOrderBy = OrderBy<Todo>;
export type TodoGroupByProperties = GroupBySelections<Todo>;
/** Aggregation properties for Todo. */
export type TodoAggregationProperties = AggregateSelection<Todo>;
/** Multiple aggregation properties for Todo. */
export type TodoMultipleAggregationProperties = MultipleAggregateSelection<Todo>;