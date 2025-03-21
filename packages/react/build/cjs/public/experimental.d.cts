import { Client, ActionDefinition, ActionValidationError, ObjectTypeDefinition as ObjectTypeDefinition$1, InterfaceDefinition, WhereClause, PropertyKeys, Osdk as Osdk$1 } from '@osdk/client';
import { ObservableClient, ActionSignatureFromDef } from '@osdk/client/unstable-do-not-use';
import React from 'react';
import { ObjectTypeDefinition, Osdk, PrimaryKeyType } from '@osdk/api';
export { u as useOsdkClient } from '../useOsdkClient-B4iwHO1H.cjs';

interface OsdkProviderOptions {
    children: React.ReactNode;
    client: Client;
    observableClient?: ObservableClient;
}
declare function OsdkProvider2({ children, client, observableClient, }: OsdkProviderOptions): React.JSX.Element;

type ApplyActionParams<Q extends ActionDefinition<any>> = Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0] & {
    [K in keyof ObservableClient.ApplyActionOptions as `$${K}`]: ObservableClient.ApplyActionOptions[K];
};
interface UseOsdkActionResult<Q extends ActionDefinition<any>> {
    applyAction: (args: ApplyActionParams<Q>) => Promise<unknown>;
    error: undefined | Partial<{
        actionValidation: ActionValidationError;
        unknown: unknown;
    }>;
    data: unknown;
    isPending: boolean;
}
declare function useOsdkAction<Q extends ActionDefinition<any>>(actionDef: Q): UseOsdkActionResult<Q>;

interface UseOsdkObjectResult<Q extends ObjectTypeDefinition> {
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
declare function useOsdkObject<Q extends ObjectTypeDefinition>(obj: Osdk.Instance<Q>): UseOsdkObjectResult<Q>;
/**
 * Loads an object by type and primary key.
 *
 * @param type
 * @param primaryKey
 */
declare function useOsdkObject<Q extends ObjectTypeDefinition>(type: Q, primaryKey: PrimaryKeyType<Q>): UseOsdkObjectResult<Q>;

interface UseOsdkObjectsOptions<T extends ObjectTypeDefinition$1 | InterfaceDefinition> {
    /**
     * Standard OSDK Where
     */
    where?: WhereClause<T>;
    /**
     *  The preferred page size for the list.
     */
    pageSize?: number;
    /** */
    orderBy?: {
        [K in PropertyKeys<T>]?: "asc" | "desc";
    };
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
interface UseOsdkListResult<T extends ObjectTypeDefinition$1 | InterfaceDefinition> {
    fetchMore: (() => Promise<unknown>) | undefined;
    data: Osdk$1.Instance<T>[] | undefined;
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
declare function useOsdkObjects<Q extends ObjectTypeDefinition$1 | InterfaceDefinition>(type: Q, { pageSize, orderBy, dedupeIntervalMs, where, streamUpdates, }?: UseOsdkObjectsOptions<Q>): UseOsdkListResult<Q>;

export { OsdkProvider2, useOsdkAction, useOsdkObject, useOsdkObjects };
