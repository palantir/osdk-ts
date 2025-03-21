import type { InterfaceDefinition, ObjectTypeDefinition, Osdk, PropertyKeys, WhereClause } from "@osdk/client";
export interface UseOsdkObjectsOptions<T extends ObjectTypeDefinition | InterfaceDefinition> {
	/**
	* Standard OSDK Where
	*/
	where?: WhereClause<T>;
	/**
	*  The preferred page size for the list.
	*/
	pageSize?: number;
	/** */
	orderBy?: { [K in PropertyKeys<T>]? : "asc" | "desc" };
	/**
	* Causes the list to automatically fetch more as soon as the previous page
	* has been loaded. If a number is provided, it will continue to automatically
	* fetch more until the list is at least that long.
	*/
	/**
	* Upon a list being revalidated, this option determines how the component
	* will be re-rendered with the data.
	*
	* An example to help understand the options:
	*
	* Suppose pageSize is 10 and we have called `fetchMore()` twice. The list is
	* now 30 items long.
	*
	* Upon revalidation, we get the first 10 items of the list. The options behave
	* as follows:
	*
	* - `"in-place"`: The first 10 items of the list are replaced with the new 10
	*   items. The list is now 30 items long, but only the first 10 items are valid.
	* - `"wait"`: The old list is returned until after the next 20 items are loaded
	*   (which will happen automatically). The list is now 30 items long.
	* - `"reset"`: The entire list is replaced with the new 10 items. The list is
	*   now 10 items long.
	*/
	/**
	* The number of milliseconds to wait after the last observed list change.
	*
	* Two uses of `useOsdkObjects` with the where clause will only trigger one
	* network request if the second is within `dedupeIntervalMs`.
	*/
	dedupeIntervalMs?: number;
	/**
	* If provided, the list will be considered this length for the purposes of
	* `invalidationMode` when using the `wait` option. If not provided,
	* the internal expectedLength will be determined by the number of times
	* `fetchMore` has been called.
	*/
	streamUpdates?: boolean;
}
export interface UseOsdkListResult<T extends ObjectTypeDefinition | InterfaceDefinition> {
	fetchMore: (() => Promise<unknown>) | undefined;
	data: Osdk.Instance<T>[] | undefined;
	isLoading: boolean;
	error: Error | undefined;
	/**
	* Refers to whether the ordered list of objects (only considering the $primaryKey)
	* is optimistic or not.
	*
	* If you need to know if the contents of the list are optimistic you can
	* do that on a per object basis with useOsdkObject
	*/
	isOptimistic: boolean;
}
export declare function useOsdkObjects<Q extends ObjectTypeDefinition | InterfaceDefinition>(type: Q, { pageSize, orderBy, dedupeIntervalMs, where, streamUpdates }?: UseOsdkObjectsOptions<Q>): UseOsdkListResult<Q>;
