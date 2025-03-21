import type { Connectable, Observable, Observer, Subscribable, Subscription } from "rxjs";
import type { Logger } from "../../logger/Logger.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import type { CacheKey } from "./CacheKey.js";
import type { Changes } from "./Changes.js";
import type { Entry } from "./Layer.js";
import type { OptimisticId } from "./OptimisticId.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";
export declare abstract class Query<
	KEY extends CacheKey,
	PAYLOAD,
	O extends CommonObserveOptions
> implements Subscribable<PAYLOAD> {
	#private;
	lastFetchStarted?: number;
	pendingFetch?: Promise<unknown>;
	retainCount: number;
	options: O;
	cacheKey: KEY;
	store: Store;
	abortController?: AbortController;
	constructor(store: Store, observable: Observable<SubjectPayload<KEY>>, opts: O, cacheKey: KEY, logger?: Logger);
	protected abstract _createConnectable(subject: Observable<SubjectPayload<KEY>>): Connectable<PAYLOAD>;
	subscribe(observer: Observer<PAYLOAD>): Subscription;
	/**
	* Causes the query to revalidate. This will cause the query to fetch
	* the latest data from the server and update the store if it is deemed
	* "stale" or if `force` is true.
	*
	* @param force
	* @returns
	*/
	revalidate(force?: boolean): Promise<void>;
	protected _preFetch(): void;
	protected abstract _fetchAndStore(): Promise<unknown>;
	/**
	* Sets the status of the query in the store (but does not store that in `changes`).
	*
	* @param status
	* @param batch
	* @returns
	*/
	setStatus(status: Status, batch: BatchContext): void;
	dispose(): void;
	/**
	* Per query type dispose functionality
	*/
	protected _dispose(): void;
	/**
	* The purpose of this method is to provide a way for others to write
	* directly into the store for this query.
	*
	* @param data
	* @param status
	* @param batch
	*/
	abstract writeToStore(data: KEY["__cacheKey"]["value"], status: Status, batch: BatchContext): Entry<KEY>;
	/**
	* @param changes
	* @param optimisticId
	* @returns If revalidation is needed, a promise that resolves after the
	*          revalidation is complete. Otherwise, undefined.
	*/
	maybeUpdateAndRevalidate?: (changes: Changes, optimisticId: OptimisticId | undefined) => Promise<void> | undefined;
}
