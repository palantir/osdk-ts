import { FoundryApiError } from '@osdk/legacy-client';

import type { Err as OG_Err, Ok as OG_Ok } from '@osdk/legacy-client';

/** @deprecated **/
export type Ok<T> = OG_Ok<T>;

/** @deprecated **/
export type Err<T> = OG_Err<T>;

import type { Result as OG_Result } from '@osdk/legacy-client';

/** @deprecated **/
export type Result<V, E = FoundryApiError> = OG_Result<V, E>;

import { isErr as OG_isErr, isOk as OG_isOk, visitError as OG_visitError } from '@osdk/legacy-client';

/** @deprecated **/
export const isOk = OG_isOk;

/** @deprecated **/
export const isErr = OG_isErr;

/** @deprecated **/
export const visitError = OG_visitError;

import type { ErrorVisitor as OG_ErrorVisitor } from '@osdk/legacy-client';

/** @deprecated **/
export type ErrorVisitor<E extends FoundryApiError, R> = OG_ErrorVisitor<E, R>;

import type { ExtractKeysWithType as OG_ExtractKeysWithType } from '@osdk/legacy-client';

/** @deprecated **/
export type ExtractKeysWithType<T, K extends keyof T> = OG_ExtractKeysWithType<T, K>;
