import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Person as OG_Person } from "../Person.js";

/** @deprecated Use Person from ontology/objects instead */
export type Person = OG_Person;
/** @deprecated Use ObjectSetFilterArg<Person> instead */
export type PersonFilter = ObjectSetFilterArg<OG_Person>;
/** @deprecated Use ObjectSetOrderByArg<Person> instead */
export type PersonOrderBy = ObjectSetOrderByArg<OG_Person>;
/** @deprecated Use ObjectSetGroupByArg<Person> instead */
export type PersonGroupByProperties = ObjectSetGroupByArg<OG_Person>;

      /**
        * Aggregation properties for Person
        * @deprecated Use ObjectSetAggregateArg<Person> instead
        */
export type PersonAggregationProperties = ObjectSetAggregateArg<OG_Person>;

      /**
        * Multiple aggregation properties for Person.
        * @deprecated Use ObjectSetMultipleAggregateArg<Person> instead
        */
export type PersonMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_Person>;