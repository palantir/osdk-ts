import { Aggregation } from "./Aggregation";
import { ObjectSet } from "./ObjectSet";
import { AggregationGroupByV2 } from "./AggregationGroupByV2";

/** */
export type AggregateObjectSetRequestV2 = { aggregation: Array<Aggregation>; objectSet: ObjectSet; groupBy: Array<AggregationGroupByV2>; };
