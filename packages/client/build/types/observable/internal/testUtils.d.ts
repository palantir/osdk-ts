import type { ActionEditResponse, InterfaceDefinition, ObjectOrInterfaceDefinition, ObjectTypeDefinition, Osdk, PageResult, WhereClause } from "@osdk/api";
import type { DeferredPromise } from "p-defer";
import type { Observer } from "rxjs";
import type { Mock, MockedObject } from "vitest";
import type { Client } from "../../Client.js";
import type { Logger } from "../../logger/Logger.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { OrderBy, Status, Unsubscribable } from "../ObservableClient.js";
import type { Entry } from "./Layer.js";
import type { ListQueryOptions } from "./ListQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import type { Store } from "./Store.js";
export interface MockClientHelper {
	client: Mock<Client> & Client;
	mockApplyActionOnce: () => DeferredPromise<Partial<ActionEditResponse>>;
	mockFetchOneOnce: <Q extends ObjectTypeDefinition>(expectedId?: string | number | boolean) => DeferredPromise<Partial<Osdk.Instance<Q>>>;
	mockObjectFactory2Once: () => DeferredPromise<Array<Osdk.Instance<ObjectOrInterfaceDefinition, never, any, {}> | ObjectHolder>>;
	mockFetchPageOnce: <Q extends ObjectTypeDefinition>(expected?: {
		where: WhereClause<any>
		orderBy: Record<string, "asc" | "desc" | undefined>
	}) => DeferredPromise<PageResult<Partial<Osdk.Instance<Q>>>>;
}
export declare function createTestLogger(bindings: Record<string, any>, options?: {
	level?: string
	msgPrefix?: string
}): Logger;
export declare function createClientMockHelper(): MockClientHelper;
export declare function createDefer(): (x: Unsubscribable) => Unsubscribable;
export declare function expectSingleListCallAndClear<T extends ObjectTypeDefinition>(subFn: MockedObject<Observer<ListPayload | undefined>>, resolvedList: ObjectHolder[] | Osdk.Instance<T>[], payloadOptions?: Omit<Partial<ListPayload>, "resolvedList">): void;
export declare function expectSingleObjectCallAndClear<T extends ObjectTypeDefinition>(subFn: MockedObject<Observer<ObjectPayload | undefined>>, object: Osdk.Instance<T>, status?: Status): void;
export declare function waitForCall(subFn: Mock<(e: any) => void> | MockedObject<Observer<any>>, times?: number): Promise<void>;
export declare function expectNoMoreCalls(observer: MockedObject<Observer<any>>): void;
export declare function mockSingleSubCallback(): MockedObject<Observer<ObjectPayload | undefined>> & {
	expectLoadingAndLoaded: (q: {
		loading?: unknown
		loaded: unknown
	}) => Promise<void>
};
export declare function mockObserver<T>(): MockedObject<Observer<T>>;
export declare function mockListSubCallback(): MockedObject<Observer<ListPayload | undefined>>;
export declare function cacheEntryContaining(x: Partial<Entry<any>>): Entry<any>;
export declare function objectPayloadContaining(x: Partial<ObjectPayload>): ObjectPayload;
export declare function listPayloadContaining(x: Partial<ListPayload>): ListPayload;
export declare function applyCustomMatchers(): void;
interface CustomMatchers<R = any> {
	toBeGreaterThan: (n: number) => R;
}
interface CustomAsymmetricMatchers<R = any> {
	toBeGreaterThan: (n: number) => R;
}
declare module "vitest" {
	interface Assertion<T = any> extends CustomMatchers<T> {}
	interface AsymmetricMatchersContaining extends CustomAsymmetricMatchers {}
}
/**
* Updates the internal state of a list and will create a new internal query if needed.
*
* Helper method only for tests right now. May be removed later.
*
* @param apiName
* @param where
* @param orderBy
* @param objects
* @param param4
* @param opts
*/
export declare function updateList<T extends ObjectTypeDefinition | InterfaceDefinition>(store: Store, { type, where, orderBy }: {
	type: Pick<T, "apiName" | "type">
	where: WhereClause<T>
	orderBy: OrderBy<T>
}, objects: ObjectHolder[] | Osdk.Instance<T>[], { optimisticId }?: {
	optimisticId?: OptimisticId
}, opts?: ListQueryOptions): void;
export declare function getObject(store: Store, type: string, pk: number): ObjectHolder | undefined;
export declare function updateObject<T extends ObjectOrInterfaceDefinition>(store: Store, value: Osdk.Instance<T>, { optimisticId }?: {
	optimisticId?: OptimisticId
}): Osdk.Instance<T>;
export {};
