import { PageToken } from "./PageToken";
import { AggregateObjectsResponseItem } from "./AggregateObjectsResponseItem";

export interface AggregateObjectsResponse {
    excludedItems?: number;
    nextPageToken?: PageToken;
    data: Array<AggregateObjectsResponseItem>;
}
