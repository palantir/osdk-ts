import { PageToken } from "./PageToken";
import { Branch } from "./Branch";

export type ListBranchesResponse = { nextPageToken?: PageToken; data: Array<Branch>; };
