import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Employee as OG_Employee } from "../Employee";
/** @deprecated Use Employee from ontology/objects instead */
export type Employee = OG_Employee;
/** @deprecated Use ObjectSetFilterArg<Employee> instead */
export type EmployeeFilter = ObjectSetFilterArg<OG_Employee>;
/** @deprecated Use ObjectSetOrderByArg<Employee> instead */
export type EmployeeOrderBy = ObjectSetOrderByArg<OG_Employee>;
/** @deprecated Use ObjectSetGroupByArg<Employee> instead */
export type EmployeeGroupByProperties = ObjectSetGroupByArg<OG_Employee>;
/**
  * Aggregation properties for Employee
  * @deprecated Use ObjectSetAggregateArg<Employee> instead
  */
export type EmployeeAggregationProperties = ObjectSetAggregateArg<OG_Employee>;
/**
  * Multiple aggregation properties for Employee.
  * @deprecated Use ObjectSetMultipleAggregateArg<Employee> instead
  */
export type EmployeeMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_Employee>;
