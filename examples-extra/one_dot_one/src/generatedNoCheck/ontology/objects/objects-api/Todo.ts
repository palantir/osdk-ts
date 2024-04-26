import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Todo as OG_Todo } from "../Todo";

/** @deprecated Use Todo from ontology/objects instead */
export type Todo = OG_Todo;
/** @deprecated Use ObjectSetFilterArg<Todo> instead */
export type TodoFilter = ObjectSetFilterArg<OG_Todo>;
/** @deprecated Use ObjectSetOrderByArg<Todo> instead */
export type TodoOrderBy = ObjectSetOrderByArg<OG_Todo>;
/** @deprecated Use ObjectSetGroupByArg<Todo> instead */
export type TodoGroupByProperties = ObjectSetGroupByArg<OG_Todo>;

      /**
        * Aggregation properties for Todo
        * @deprecated Use ObjectSetAggregateArg<Todo> instead
        */
export type TodoAggregationProperties = ObjectSetAggregateArg<OG_Todo>;

      /**
        * Multiple aggregation properties for Todo.
        * @deprecated Use ObjectSetMultipleAggregateArg<Todo> instead
        */
export type TodoMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_Todo>;