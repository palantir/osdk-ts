import { Aggregation } from "./Aggregation";
import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";
import { AggregationGroupByV2 } from "./AggregationGroupByV2";

export type AggregateObjectsRequestV2 = { aggregation: Array<Aggregation>; where?: SearchJsonQueryV2; groupBy: Array<AggregationGroupByV2>; };
