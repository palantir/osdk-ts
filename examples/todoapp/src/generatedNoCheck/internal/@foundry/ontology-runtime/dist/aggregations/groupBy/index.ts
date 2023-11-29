import {
  BooleanGroupBy as OG_BooleanGroupBy,
  LocalDateGroupBy as OG_LocalDateGroupBy,
  NumericGroupBy as OG_NumericGroupBy,
  StringGroupBy as OG_StringGroupBy,
  TimestampGroupBy as OG_TimestampGroupBy,
} from '@osdk/legacy-client';
import { BucketKey } from '../Aggregations';

/** @deprecated **/
export const BooleanGroupBy = OG_BooleanGroupBy;

/** @deprecated **/
export const LocalDateGroupBy = OG_LocalDateGroupBy;

/** @deprecated **/
export const NumericGroupBy = OG_NumericGroupBy;

/** @deprecated **/
export const StringGroupBy = OG_StringGroupBy;

/** @deprecated **/
export const TimestampGroupBy = OG_TimestampGroupBy;

/** @deprecated **/
export type BooleanGroupBy<T extends BucketKey> = OG_BooleanGroupBy<T>;

/** @deprecated **/
export type LocalDateGroupBy<T extends BucketKey> = OG_LocalDateGroupBy<T>;

/** @deprecated **/
export type NumericGroupBy<T extends BucketKey> = OG_NumericGroupBy<T>;

/** @deprecated **/
export type StringGroupBy<T extends BucketKey> = OG_StringGroupBy<T>;

/** @deprecated **/
export type TimestampGroupBy<T extends BucketKey> = OG_TimestampGroupBy<T>;

export { GroupKeyType } from '@osdk/legacy-client';
