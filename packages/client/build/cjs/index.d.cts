import { ActionValidationResponse, AttachmentUpload, ObjectOrInterfaceDefinition, PrimaryKeyType, ObjectSpecifier } from '@osdk/api';
export { ActionDefinition, ActionEditResponse, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ActionValidationResponse, ApplyActionOptions, ApplyBatchActionOptions, InterfaceDefinition, ObjectMetadata, ObjectSet, ObjectSpecifier, ObjectTypeDefinition, Osdk, OsdkObject, PageResult, PropertyDef, PropertyKeys, PropertyValueWireToClient, QueryDefinition, QueryParam, QueryResult, Result, SingleLinkAccessor, VersionBound, WhereClause, isOk } from '@osdk/api';
export { PalantirApiError } from '@osdk/shared.net.errors';
import { C as Client } from './Client-DBTcM9gB.cjs';
import { SharedClientContext } from '@osdk/shared.client2';
import '@osdk/shared.client';
import '@osdk/api/unstable';

declare class ActionValidationError extends Error {
    validation: ActionValidationResponse;
    constructor(validation: ActionValidationResponse);
}

interface Logger {
    trace: LogFn;
    debug: LogFn;
    fatal: LogFn;
    error: LogFn;
    warn: LogFn;
    info: LogFn;
    isLevelEnabled(level: string): boolean;
    child(bindings: Record<string, any>, options?: {
        level?: string;
        msgPrefix?: string;
    }): Logger;
}
interface LogFn {
    (obj: unknown, msg?: string, ...args: any[]): void;
    (msg: string, ...args: any[]): void;
}

declare const createClient: (baseUrl: string, ontologyRid: string | Promise<string>, tokenProvider: () => Promise<string>, options?: {
    logger?: Logger;
} | undefined, fetchFn?: typeof fetch | undefined) => Client;

interface PlatformClient extends SharedClientContext {
}
/**
 * Creates a client that can only be used with Platform APIs.
 *
 * If you already have an OSDK Client (from `createClient`), you do not need to
 * create one of these - those clients can be used with Platform APIs as well.
 *
 * @param baseUrl
 * @param tokenProvider
 * @param options Currently unused, reserved for future use.
 * @param fetchFn
 * @returns
 */
declare function createPlatformClient(baseUrl: string, tokenProvider: () => Promise<string>, options?: undefined, fetchFn?: typeof globalThis.fetch): PlatformClient;

declare function createAttachmentUpload(data: Blob, name: string): AttachmentUpload;

declare function createObjectSpecifierFromPrimaryKey<Q extends ObjectOrInterfaceDefinition>(def: Q, primaryKey: PrimaryKeyType<Q>): ObjectSpecifier<Q>;

type ResultOrError<T extends object> = ({
    type: "ok";
    err?: never;
} & T) | {
    type: "err";
    data?: never;
    err?: unknown;
};

/**
 * Extracts the date from a ISO 8601 formatted date time string. Throws if the input is not in the correct format.
 *
 * @param dateTime An ISO 8601 formatted date time string
 * @returns The date part of the input string
 */
declare const extractDate: (dateTime: string) => string;
/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in UTC time.
 *
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
declare const extractDateInUTC: (date: Date) => string;
/**
 * Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in the local time zone.
 *
 * @param date
 * @returns The date part of a ISO 8601 formatted date time string
 */
declare const extractDateInLocalTime: (date: Date) => string;

export { ActionValidationError, Client, type Logger, type PlatformClient, type ResultOrError, createAttachmentUpload, createClient, createObjectSpecifierFromPrimaryKey, createPlatformClient, extractDate, extractDateInLocalTime, extractDateInUTC };
