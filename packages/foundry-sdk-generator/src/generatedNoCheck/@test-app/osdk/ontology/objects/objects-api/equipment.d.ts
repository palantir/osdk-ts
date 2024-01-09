import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { equipment as OG_equipment } from "../equipment";
/** @deprecated Use equipment from ontology/objects instead */
export type equipment = OG_equipment;
/** @deprecated Use ObjectSetFilterArg<equipment> instead */
export type equipmentFilter = ObjectSetFilterArg<OG_equipment>;
/** @deprecated Use ObjectSetOrderByArg<equipment> instead */
export type equipmentOrderBy = ObjectSetOrderByArg<OG_equipment>;
/** @deprecated Use ObjectSetGroupByArg<equipment> instead */
export type equipmentGroupByProperties = ObjectSetGroupByArg<OG_equipment>;
/**
  * Aggregation properties for equipment
  * @deprecated Use ObjectSetAggregateArg<equipment> instead
  */
export type equipmentAggregationProperties = ObjectSetAggregateArg<OG_equipment>;
/**
  * Multiple aggregation properties for equipment.
  * @deprecated Use ObjectSetMultipleAggregateArg<equipment> instead
  */
export type equipmentMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_equipment>;
