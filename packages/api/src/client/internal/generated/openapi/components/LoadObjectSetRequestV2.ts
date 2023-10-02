import { ObjectSet } from "./ObjectSet";
import { SearchOrderBy } from "./SearchOrderBy";
import { SelectedPropertyApiName } from "./SelectedPropertyApiName";
import { PageToken } from "./PageToken";
import { PageSize } from "./PageSize";

/** Represents the API POST body when loading an `ObjectSet`. */
export type LoadObjectSetRequestV2 = { objectSet: ObjectSet; orderBy?: SearchOrderBy; select: Array<SelectedPropertyApiName>; pageToken?: PageToken; pageSize?: PageSize; };
