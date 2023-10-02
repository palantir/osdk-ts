import { AggregateObjectsResponseItemV2 } from "./AggregateObjectsResponseItemV2";

export interface AggregateObjectsResponseV2 {
    excludedItems?: number;
    data: Array<AggregateObjectsResponseItemV2>;
}
