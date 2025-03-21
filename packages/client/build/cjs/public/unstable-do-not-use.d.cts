import { ObjectOrInterfaceDefinition, PropertyKeys, Augment, ObjectTypeDefinition, Osdk, PrimaryKeyType, InterfaceDefinition, ActionDefinition, WhereClause } from '@osdk/api';
import { A as ActionSignatureFromDef, C as Client } from '../Client-DBTcM9gB.cjs';
import '@osdk/shared.client';
import '@osdk/api/unstable';
import '@osdk/shared.client2';

declare function augment<Q extends ObjectOrInterfaceDefinition, T extends PropertyKeys<Q>>(type: Q, ...properties: T[]): Augment<Q, T>;

type Canonical<T> = T & {
    __canonical: true;
};

interface OptimisticBuilder {
    updateObject: <T extends ObjectTypeDefinition>(value: Osdk.Instance<T>) => this;
    createObject: <T extends ObjectTypeDefinition>(type: T, primaryKey: PrimaryKeyType<T>, properties: Pick<Osdk.Instance<T>, PropertyKeys<T>>) => this;
}

type Status = "init" | "loading" | "loaded" | "error";
interface Observer<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
interface CommonObserveOptions {
    dedupeInterval?: number;
}
interface ObserveOptions {
    mode?: "offline" | "force";
}
type OrderBy<Q extends ObjectTypeDefinition | InterfaceDefinition> = {
    [K in PropertyKeys<Q>]?: "asc" | "desc" | undefined;
};
interface ObserveListOptions<Q extends ObjectTypeDefinition | InterfaceDefinition> extends CommonObserveOptions, ObserveOptions {
    type: Pick<Q, "apiName" | "type">;
    where?: WhereClause<Q>;
    pageSize?: number;
    orderBy?: OrderBy<Q>;
    invalidationMode?: "in-place" | "wait" | "reset";
    expectedLength?: number;
    streamUpdates?: boolean;
}
interface ObserveObjectArgs<T extends ObjectTypeDefinition> {
    object: Osdk.Instance<T> | undefined;
    isOptimistic: boolean;
    status: Status;
    lastUpdated: number;
}
interface ObserveObjectsArgs<T extends ObjectTypeDefinition | InterfaceDefinition> {
    resolvedList: Array<Osdk.Instance<T>>;
    isOptimistic: boolean;
    lastUpdated: number;
    fetchMore: () => Promise<unknown>;
    hasMore: boolean;
    status: Status;
}
declare namespace ObservableClient {
    interface ApplyActionOptions {
        optimisticUpdate?: (ctx: OptimisticBuilder) => void;
    }
}
interface ObservableClient {
    observeObject<T extends ObjectTypeDefinition>(apiName: T["apiName"] | T, pk: PrimaryKeyType<T>, options: ObserveOptions, subFn: Observer<ObserveObjectArgs<T>>): Unsubscribable;
    observeList<T extends ObjectTypeDefinition | InterfaceDefinition>(options: ObserveListOptions<T>, subFn: Observer<ObserveObjectsArgs<T>>): Unsubscribable;
    applyAction: <Q extends ActionDefinition<any>>(action: Q, args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0], opts?: ObservableClient.ApplyActionOptions) => Promise<unknown>;
    canonicalizeWhereClause: <T extends ObjectTypeDefinition | InterfaceDefinition>(where: WhereClause<T>) => Canonical<WhereClause<T>>;
}
declare function createObservableClient(client: Client): ObservableClient;
interface Unsubscribable {
    unsubscribe: () => void;
}

export { ActionSignatureFromDef, ObservableClient, type ObserveObjectArgs, type ObserveObjectsArgs, type Observer, type Unsubscribable, augment, createObservableClient };
