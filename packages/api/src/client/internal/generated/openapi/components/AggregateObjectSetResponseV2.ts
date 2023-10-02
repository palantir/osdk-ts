import { AggregateObjectsResponseItemV2 } from "./AggregateObjectsResponseItemV2";

export interface AggregateObjectSetResponseV2 {
    excludedItems?: number;
    data: Array<AggregateObjectsResponseItemV2>;
}
