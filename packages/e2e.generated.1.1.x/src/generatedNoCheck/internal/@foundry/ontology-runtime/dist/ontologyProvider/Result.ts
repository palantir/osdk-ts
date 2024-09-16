import { FoundryApiError } from '@osdk/legacy-client';

import { Err as OG_Err, Ok as OG_Ok } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type Ok<T> = OG_Ok<T>;

/** @deprecated submodule imports aren't public api **/
export type Err<T> = OG_Err<T>;

import { Result as OG_Result } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type Result<V, E = FoundryApiError> = OG_Result<V, E>;

import { isErr as OG_isErr, isOk as OG_isOk, visitError as OG_visitError } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export const isOk = OG_isOk;

/** @deprecated submodule imports aren't public api **/
export const isErr = OG_isErr;

/** @deprecated submodule imports aren't public api **/
export const visitError = OG_visitError;

import { ErrorVisitor as OG_ErrorVisitor } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ErrorVisitor<E extends FoundryApiError, R> = OG_ErrorVisitor<E, R>;

import { ExtractKeysWithType as OG_ExtractKeysWithType } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type ExtractKeysWithType<T, K extends keyof T> = OG_ExtractKeysWithType<T, K>;
