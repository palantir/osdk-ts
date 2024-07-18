import {
  BooleanGroupBy as OG_BooleanGroupBy,
  LocalDateGroupBy as OG_LocalDateGroupBy,
  NumericGroupBy as OG_NumericGroupBy,
  StringGroupBy as OG_StringGroupBy,
  TimestampGroupBy as OG_TimestampGroupBy,
} from '@osdk/legacy-client';
import { BucketKey } from '../Aggregations.js';

/** @deprecated submodule imports aren't public api **/
export const BooleanGroupBy = OG_BooleanGroupBy;

/** @deprecated submodule imports aren't public api **/
export const LocalDateGroupBy = OG_LocalDateGroupBy;

/** @deprecated submodule imports aren't public api **/
export const NumericGroupBy = OG_NumericGroupBy;

/** @deprecated submodule imports aren't public api **/
export const StringGroupBy = OG_StringGroupBy;

/** @deprecated submodule imports aren't public api **/
export const TimestampGroupBy = OG_TimestampGroupBy;

/** @deprecated submodule imports aren't public api **/
export type BooleanGroupBy<T extends BucketKey> = OG_BooleanGroupBy<T>;

/** @deprecated submodule imports aren't public api **/
export type LocalDateGroupBy<T extends BucketKey> = OG_LocalDateGroupBy<T>;

/** @deprecated submodule imports aren't public api **/
export type NumericGroupBy<T extends BucketKey> = OG_NumericGroupBy<T>;

/** @deprecated submodule imports aren't public api **/
export type StringGroupBy<T extends BucketKey> = OG_StringGroupBy<T>;

/** @deprecated submodule imports aren't public api **/
export type TimestampGroupBy<T extends BucketKey> = OG_TimestampGroupBy<T>;

export { GroupKeyType } from '@osdk/legacy-client';
