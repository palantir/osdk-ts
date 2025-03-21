import { MultiMap } from "mnemonist";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListCacheKey } from "./ListQuery.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
export declare class Changes {
	modifiedObjects: MultiMap<string, ObjectHolder>;
	addedObjects: MultiMap<string, ObjectHolder>;
	added: Set<ListCacheKey | ObjectCacheKey>;
	modified: Set<ListCacheKey | ObjectCacheKey>;
	registerObject: (cacheKey: ObjectCacheKey, data: ObjectHolder, isNew: boolean) => void;
	registerList: (key: ListCacheKey) => void;
	isEmpty(): boolean;
}
export declare function createChangedObjects(): Changes;
export declare function DEBUG_ONLY__changesToString(changes: Changes): string;
