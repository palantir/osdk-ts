import { PageToken } from "./PageToken";
import { AggregateObjectsResponseItem } from "./AggregateObjectsResponseItem";

export type AggregateObjectsResponse = { excludedItems?: number; nextPageToken?: PageToken; data: Array<AggregateObjectsResponseItem>; };
