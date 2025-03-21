import type { Connectable, Observable, Subscription } from "rxjs";
import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../ListPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import { type CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes } from "./Changes.js";
import type { Entry } from "./Layer.js";
import { type ObjectCacheKey } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Query } from "./Query.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";
interface ListStorageData {
	data: ObjectCacheKey[];
}
export interface ListCacheKey extends CacheKey<"list", ListStorageData, ListQuery, [type: "object" | "interface", apiName: string, whereClause: Canonical<SimpleWhereClause>, orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>]> {}
export interface BaseListCacheKey<
	T_Type extends string,
	T_Query extends Query<any, any, any>,
	T_KeyFactoryArgs extends any[] = any[]
> extends CacheKey<T_Type, ListStorageData, T_Query, T_KeyFactoryArgs> {}
export declare const API_NAME_IDX = 1;
export declare const TYPE_IDX = 0;
export declare const WHERE_IDX = 2;
export declare const ORDER_BY_IDX = 3;
export interface ListQueryOptions extends CommonObserveOptions {
	pageSize?: number;
}
type ExtractRelevantObjectsResult = Record<"added" | "modified", {
	all: (ObjectHolder | InterfaceHolder)[]
	strictMatches: Set<(ObjectHolder | InterfaceHolder)>
	sortaMatches: Set<(ObjectHolder | InterfaceHolder)>
}>;
declare abstract class BaseListQuery<
	KEY extends ListCacheKey,
	PAYLOAD,
	O extends CommonObserveOptions
> extends Query<KEY, PAYLOAD, O> {
	#private;
	protected abstract _sortCacheKeys(objectCacheKeys: ObjectCacheKey[], batch: BatchContext): ObjectCacheKey[];
	/**
	* Only intended to be "protected" and used by subclasses but exposed for
	* testing.
	*
	* @param objectCacheKeys
	* @param append
	* @param status
	* @param batch
	* @returns
	*/
	_updateList(objectCacheKeys: Array<ObjectCacheKey>, append: boolean, status: Status, batch: BatchContext): Entry<ListCacheKey>;
	writeToStore(data: ListStorageData, status: Status, batch: BatchContext): Entry<KEY>;
	_dispose(): void;
}
export declare class ListQuery extends BaseListQuery<ListCacheKey, ListPayload, ListQueryOptions> {
	#private;
	constructor(store: Store, subject: Observable<SubjectPayload<ListCacheKey>>, apiType: "object" | "interface", apiName: string, whereClause: Canonical<SimpleWhereClause>, orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>, cacheKey: ListCacheKey, opts: ListQueryOptions);
	get canonicalWhere(): Canonical<SimpleWhereClause>;
	protected _createConnectable(subject: Observable<SubjectPayload<ListCacheKey>>): Connectable<ListPayload>;
	protected _preFetch(): void;
	protected _fetchAndStore(): Promise<void>;
	fetchMore: () => Promise<unknown>;
	/**
	* Will revalidate the list if its query is affected by invalidating the
	* apiName of the object type passed in.
	*
	* @param apiName to invalidate
	* @returns
	*/
	revalidateObjectType: (apiName: string) => Promise<void>;
	/**
	* Note: This method is not async because I want it to return right after it
	*       finishes the synchronous updates. The promise that is returned
	*       will resolve after the revalidation is complete.
	* @param changes
	* @param optimisticId
	* @returns If revalidation is needed, a promise that resolves after the
	*          revalidation is complete. Otherwise, undefined.
	*/
	maybeUpdateAndRevalidate: (changes: Changes, optimisticId: OptimisticId | undefined) => Promise<void> | undefined;
	protected _extractRelevantObjects(changes: Changes): ExtractRelevantObjectsResult;
	_sortCacheKeys(objectCacheKeys: ObjectCacheKey[], batch: BatchContext): ObjectCacheKey[];
	registerStreamUpdates(sub: Subscription): void;
}
export declare function isListCacheKey(cacheKey: CacheKey): cacheKey is ListCacheKey;
export {};
