import { PageToken } from "./PageToken";
import { File } from "./File";

/** A page of Files and an optional page token that can be used to retrieve the next page. */
export type ListFilesResponse = { nextPageToken?: PageToken; data: Array<File>; };
