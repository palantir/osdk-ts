import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Todo } from "../Todo";

/** @deprecated Use ObjectSetFilterArg<Todo> instead */
export type TodoFilter = ObjectSetFilterArg<Todo>;
/** @deprecated Use ObjectSetOrderByArg<Todo> instead */
export type TodoOrderBy = ObjectSetOrderByArg<Todo>;
/** @deprecated Use ObjectSetGroupByArg<Todo> instead */
export type TodoGroupByProperties = ObjectSetGroupByArg<Todo>;
/**
        * Aggregation properties for Todo
        * @deprecated Use ObjectSetAggregateArg<Todo> instead
        */
export type TodoAggregationProperties = ObjectSetAggregateArg<Todo>;
/**
        * Multiple aggregation properties for Todo.
        * @deprecated Use ObjectSetMultipleAggregateArg<Todo> instead
        */
export type TodoMultipleAggregationProperties = ObjectSetMultipleAggregateArg<Todo>;