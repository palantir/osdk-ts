import type { ActionDefinition, InterfaceDefinition, ObjectTypeDefinition, PrimaryKeyType, WhereClause } from "@osdk/api";
import type { Observer } from "rxjs";
import { BehaviorSubject } from "rxjs";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { type Client } from "../../Client.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { ObserveListOptions, ObserveObjectOptions, OrderBy, Unsubscribable } from "../ObservableClient.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes } from "./Changes.js";
import { Entry } from "./Layer.js";
import type { ListQueryOptions } from "./ListQuery.js";
import { ListQuery } from "./ListQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";
export interface SubjectPayload<KEY extends CacheKey> extends Entry<KEY> {
	isOptimistic: boolean;
}
export interface BatchContext {
	changes: Changes;
	createLayerIfNeeded: () => void;
	optimisticWrite: boolean;
	write: <K extends CacheKey<string, any, any>>(k: K, v: Entry<K>["value"], status: Entry<K>["status"]) => Entry<K>;
	read: <K extends CacheKey<string, any, any>>(k: K) => Entry<K> | undefined;
}
export declare namespace Store {
	interface ApplyActionOptions {
		optimisticUpdate?: (ctx: OptimisticBuilder) => void;
	}
}
export declare class Store {
	#private;
	whereCanonicalizer: WhereClauseCanonicalizer;
	orderByCanonicalizer: OrderByCanonicalizer;
	client: Client;
	constructor(client: Client);
	applyAction: <Q extends ActionDefinition<any>>(action: Q, args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0], opts?: Store.ApplyActionOptions) => Promise<unknown>;
	removeLayer(layerId: OptimisticId): void;
	getCacheKey<K extends CacheKey<string, any, any>>(type: K["type"], ...args: K["__cacheKey"]["args"]): K;
	peekSubject: <KEY extends CacheKey<string, any, any>>(cacheKey: KEY) => BehaviorSubject<SubjectPayload<KEY>> | undefined;
	getSubject: <KEY extends CacheKey<string, any, any>>(cacheKey: KEY) => BehaviorSubject<SubjectPayload<KEY>>;
	canonicalizeWhereClause<T extends ObjectTypeDefinition | InterfaceDefinition>(where: WhereClause<T>): Canonical<SimpleWhereClause>;
	observeObject<T extends ObjectTypeDefinition | InterfaceDefinition>(apiName: T["apiName"] | T, pk: PrimaryKeyType<T>, options: ObserveObjectOptions<T>, subFn: Observer<ObjectPayload>): Unsubscribable;
	observeList<T extends ObjectTypeDefinition | InterfaceDefinition>(options: ObserveListOptions<T>, subFn: Observer<ListPayload>): Unsubscribable;
	peekQuery<K extends CacheKey>(cacheKey: K): K["__cacheKey"]["query"] | undefined;
	getListQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(def: Pick<T, "type" | "apiName">, where: WhereClause<T>, orderBy: Record<string, "asc" | "desc" | undefined>, opts: ListQueryOptions): ListQuery;
	getObjectQuery<T extends ObjectTypeDefinition>(apiName: T["apiName"] | T, pk: PrimaryKeyType<T>): ObjectQuery;
	getValue<K extends CacheKey<string, any, any>>(cacheKey: K): Entry<K> | undefined;
	batch: <X>({ optimisticId, changes }: {
		optimisticId?: OptimisticId
		changes?: Changes
	}, batchFn: (batchContext: BatchContext) => X) => {
		batchResult: BatchContext
		retVal: X
		changes: Changes
	};
	invalidateObject<T extends ObjectTypeDefinition>(apiName: T["apiName"] | T, pk: PrimaryKeyType<T>): Promise<unknown>;
	maybeRevalidateQueries(changes: Changes, optimisticId?: OptimisticId | undefined): Promise<void>;
	/**
	* @param apiName
	* @param changes The changes we know about / to update
	* @returns
	*/
	invalidateObjectType<T extends ObjectTypeDefinition>(apiName: T["apiName"] | T, changes: Changes | undefined): Promise<void>;
	retain(cacheKey: CacheKey<string, any, any>): void;
	release(cacheKey: CacheKey<string, any, any>): void;
}
export declare function invalidateList<T extends ObjectTypeDefinition>(store: Store, args: {
	type: Pick<T, "apiName" | "type">
	where?: WhereClause<T> | SimpleWhereClause
	orderBy?: OrderBy<T>
}): Promise<void>;
