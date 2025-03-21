import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type { Connectable, Observable, Subject } from "rxjs";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import { Query } from "./Query.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";
export interface ObjectEntry extends Entry<ObjectCacheKey> {}
export interface ObjectCacheKey extends CacheKey<"object", ObjectHolder, ObjectQuery, [string, pk: PrimaryKeyType<ObjectTypeDefinition>]> {}
export declare class ObjectQuery extends Query<ObjectCacheKey, ObjectPayload, CommonObserveOptions> {
	#private;
	constructor(store: Store, subject: Subject<SubjectPayload<ObjectCacheKey>>, type: string, pk: PrimaryKeyType<ObjectTypeDefinition>, cacheKey: ObjectCacheKey, opts: CommonObserveOptions);
	protected _createConnectable(subject: Observable<SubjectPayload<ObjectCacheKey>>): Connectable<ObjectPayload>;
	_fetchAndStore(): Promise<void>;
	writeToStore(data: ObjectHolder, status: Status, batch: BatchContext): Entry<ObjectCacheKey>;
}
