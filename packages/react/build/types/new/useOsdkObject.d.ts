import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
export interface UseOsdkObjectResult<Q extends ObjectTypeDefinition> {
	object: Osdk.Instance<Q> | undefined;
	isLoading: boolean;
	error: Error | undefined;
	/**
	* Refers to whether the object is optimistic or not.
	*/
	isOptimistic: boolean;
	forceUpdate: () => void;
}
/**
* @param obj an existing `Osdk.Instance` object to get metadata for.
*/
export declare function useOsdkObject<Q extends ObjectTypeDefinition>(obj: Osdk.Instance<Q>): UseOsdkObjectResult<Q>;
/**
* Loads an object by type and primary key.
*
* @param type
* @param primaryKey
*/
export declare function useOsdkObject<Q extends ObjectTypeDefinition>(type: Q, primaryKey: PrimaryKeyType<Q>): UseOsdkObjectResult<Q>;
