import { PageToken } from "./PageToken";
import { ObjectTypeV2 } from "./ObjectTypeV2";

export type ListObjectTypesV2Response = { nextPageToken?: PageToken; data: Array<ObjectTypeV2>; };
