import { Aggregation } from "./Aggregation";
import { SearchJsonQuery } from "./SearchJsonQuery";
import { AggregationGroupBy } from "./AggregationGroupBy";

export type AggregateObjectsRequest = { aggregation: Array<Aggregation>; query?: SearchJsonQuery; groupBy: Array<AggregationGroupBy>; };
