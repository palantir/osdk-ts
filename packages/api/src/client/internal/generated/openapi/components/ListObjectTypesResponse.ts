import { PageToken } from "./PageToken";
import { ObjectType } from "./ObjectType";

/** */
export type ListObjectTypesResponse = { nextPageToken?: PageToken; data: Array<ObjectType>; };
