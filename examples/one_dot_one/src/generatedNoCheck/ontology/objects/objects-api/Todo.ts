import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Todo } from "../Todo";

export type TodoFilter = ObjectSetFilterArg<Todo>;
export type TodoOrderBy = ObjectSetOrderByArg<Todo>;
export type TodoGroupByProperties = ObjectSetGroupByArg<Todo>;
/** Aggregation properties for Todo. */
export type TodoAggregationProperties = ObjectSetAggregateArg<Todo>;
/** Multiple aggregation properties for Todo. */
export type TodoMultipleAggregationProperties = ObjectSetMultipleAggregateArg<Todo>;