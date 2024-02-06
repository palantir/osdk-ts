import { ObjectSetAggregateArg, ObjectSetFilterArg, ObjectSetGroupByArg, ObjectSetMultipleAggregateArg, ObjectSetOrderByArg } from "@osdk/legacy-client";
import { ObjectWithTimestampPrimaryKey as OG_ObjectWithTimestampPrimaryKey } from "../ObjectWithTimestampPrimaryKey";

/** @deprecated Use ObjectWithTimestampPrimaryKey from ontology/objects instead */
export type ObjectWithTimestampPrimaryKey = OG_ObjectWithTimestampPrimaryKey;
/** @deprecated Use ObjectSetFilterArg<ObjectWithTimestampPrimaryKey> instead */
export type ObjectWithTimestampPrimaryKeyFilter = ObjectSetFilterArg<OG_ObjectWithTimestampPrimaryKey>;
/** @deprecated Use ObjectSetOrderByArg<ObjectWithTimestampPrimaryKey> instead */
export type ObjectWithTimestampPrimaryKeyOrderBy = ObjectSetOrderByArg<OG_ObjectWithTimestampPrimaryKey>;
/** @deprecated Use ObjectSetGroupByArg<ObjectWithTimestampPrimaryKey> instead */
export type ObjectWithTimestampPrimaryKeyGroupByProperties = ObjectSetGroupByArg<OG_ObjectWithTimestampPrimaryKey>;

      /**
        * Aggregation properties for ObjectWithTimestampPrimaryKey
        * @deprecated Use ObjectSetAggregateArg<ObjectWithTimestampPrimaryKey> instead
        */
export type ObjectWithTimestampPrimaryKeyAggregationProperties = ObjectSetAggregateArg<OG_ObjectWithTimestampPrimaryKey>;

      /**
        * Multiple aggregation properties for ObjectWithTimestampPrimaryKey.
        * @deprecated Use ObjectSetMultipleAggregateArg<ObjectWithTimestampPrimaryKey> instead
        */
export type ObjectWithTimestampPrimaryKeyMultipleAggregationProperties = ObjectSetMultipleAggregateArg<OG_ObjectWithTimestampPrimaryKey>;