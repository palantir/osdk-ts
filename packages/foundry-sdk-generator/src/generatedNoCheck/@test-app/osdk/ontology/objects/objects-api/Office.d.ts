import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { Office as OG_Office } from "../Office";
/** @deprecated Use Office from ontology/objects instead */
export type Office = OG_Office;
/** @deprecated Use ObjectSetFilterArg<Office> instead */
export type OfficeFilter = ObjectSetFilterArg<OG_Office>;
/** @deprecated Use ObjectSetOrderByArg<Office> instead */
export type OfficeOrderBy = ObjectSetOrderByArg<OG_Office>;
/** @deprecated Use ObjectSetGroupByArg<Office> instead */
export type OfficeGroupByProperties = ObjectSetGroupByArg<OG_Office>;
/**
  * Aggregation properties for Office
  * @deprecated Use ObjectSetAggregateArg<Office> instead
  */
export type OfficeAggregationProperties = ObjectSetAggregateArg<OG_Office>;
/**
  * Multiple aggregation properties for Office.
  * @deprecated Use ObjectSetMultipleAggregateArg<Office> instead
  */
export type OfficeMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_Office>;
