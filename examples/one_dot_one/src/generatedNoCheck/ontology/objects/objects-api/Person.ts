import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Person } from "../Person";

export type PersonFilter = ObjectSetFilterArg<Person>;
export type PersonOrderBy = ObjectSetOrderByArg<Person>;
export type PersonGroupByProperties = ObjectSetGroupByArg<Person>;
/** Aggregation properties for Person. */
export type PersonAggregationProperties = ObjectSetAggregateArg<Person>;
/** Multiple aggregation properties for Person. */
export type PersonMultipleAggregationProperties = ObjectSetMultipleAggregateArg<Person>;