export { PalantirApiError, UnknownError } from '@osdk/shared.net.errors';
export { createFetchHeaderMutator, createFetchOrThrow } from '@osdk/shared.net.fetch';
import { SharedClientContext } from '@osdk/shared.client2';

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */
/**
 * @deprecated use `createSharedClientContext` from `@osdk/shared.client.impl` instead
 */
declare function createClientContext(baseUrl: string, tokenProvider: () => Promise<string> | string, userAgent: string, fetchFn?: typeof globalThis.fetch): SharedClientContext;

/**
 * Fetches the given URL, converting the body to JSON, setting the Content-Type header to application/json,
 * and calling .json() on the response.
 */
/** @deprecated */
type FetchAsJsonFn = (url: URL, requestInit: Omit<RequestInit, "body"> & {
    body?: object | undefined;
}) => Promise<any>;

type ResultOrError<T extends object> = ({
    type: "ok";
    err?: never;
} & T) | {
    type: "err";
    data?: never;
    err?: unknown;
};
declare function isOk(result: ResultOrError<any>): result is {
    type: "ok";
};

declare function replaceHttpIfNotLocalhost(url: string): string;

export { type FetchAsJsonFn, type ResultOrError, createClientContext, isOk, replaceHttpIfNotLocalhost };
