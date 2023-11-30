import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Person } from "../Person";

/** @deprecated Use ObjectSetFilterArg<Person> instead */
export type PersonFilter = ObjectSetFilterArg<Person>;
/** @deprecated Use ObjectSetOrderByArg<Person> instead */
export type PersonOrderBy = ObjectSetOrderByArg<Person>;
/** @deprecated Use ObjectSetGroupByArg<Person> instead */
export type PersonGroupByProperties = ObjectSetGroupByArg<Person>;
/**
        * Aggregation properties for Person
        * @deprecated Use ObjectSetAggregateArg<Person> instead
        */
export type PersonAggregationProperties = ObjectSetAggregateArg<Person>;
/**
        * Multiple aggregation properties for Person.
        * @deprecated Use ObjectSetMultipleAggregateArg<Person> instead
        */
export type PersonMultipleAggregationProperties = ObjectSetMultipleAggregateArg<Person>;