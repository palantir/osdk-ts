import { FoundryApiError } from '@osdk/legacy-client';
import type { Err as OG_Err, Ok as OG_Ok } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type Ok<T> = OG_Ok<T>;
/** @deprecated submodule imports arent public api **/
export type Err<T> = OG_Err<T>;
import type { Result as OG_Result } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type Result<V, E = FoundryApiError> = OG_Result<V, E>;
import { isErr as OG_isErr, isOk as OG_isOk, visitError as OG_visitError } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export declare const isOk: typeof OG_isOk;
/** @deprecated submodule imports arent public api **/
export declare const isErr: typeof OG_isErr;
/** @deprecated submodule imports arent public api **/
export declare const visitError: typeof OG_visitError;
import type { ErrorVisitor as OG_ErrorVisitor } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type ErrorVisitor<E extends FoundryApiError, R> = OG_ErrorVisitor<E, R>;
import type { ExtractKeysWithType as OG_ExtractKeysWithType } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type ExtractKeysWithType<T, K extends keyof T> = OG_ExtractKeysWithType<T, K>;
