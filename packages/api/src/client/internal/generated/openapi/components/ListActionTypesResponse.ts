import { PageToken } from "./PageToken";
import { ActionType } from "./ActionType";

export type ListActionTypesResponse = { nextPageToken?: PageToken; data: Array<ActionType>; };
