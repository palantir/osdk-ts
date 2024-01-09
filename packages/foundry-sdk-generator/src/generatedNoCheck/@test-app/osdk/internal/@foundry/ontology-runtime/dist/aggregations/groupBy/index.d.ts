import { BooleanGroupBy as OG_BooleanGroupBy, LocalDateGroupBy as OG_LocalDateGroupBy, NumericGroupBy as OG_NumericGroupBy, StringGroupBy as OG_StringGroupBy, TimestampGroupBy as OG_TimestampGroupBy } from '@osdk/legacy-client';
import { BucketKey } from '../Aggregations';
/** @deprecated submodule imports arent public api **/
export declare const BooleanGroupBy: (propertyApiName: string) => OG_BooleanGroupBy<string>;
/** @deprecated submodule imports arent public api **/
export declare const LocalDateGroupBy: (propertyApiName: string) => OG_LocalDateGroupBy<string>;
/** @deprecated submodule imports arent public api **/
export declare const NumericGroupBy: (propertyApiName: string) => OG_NumericGroupBy<string>;
/** @deprecated submodule imports arent public api **/
export declare const StringGroupBy: (propertyApiName: string) => OG_StringGroupBy<string>;
/** @deprecated submodule imports arent public api **/
export declare const TimestampGroupBy: (propertyApiName: string) => OG_TimestampGroupBy<string>;
/** @deprecated submodule imports arent public api **/
export type BooleanGroupBy<T extends BucketKey> = OG_BooleanGroupBy<T>;
/** @deprecated submodule imports arent public api **/
export type LocalDateGroupBy<T extends BucketKey> = OG_LocalDateGroupBy<T>;
/** @deprecated submodule imports arent public api **/
export type NumericGroupBy<T extends BucketKey> = OG_NumericGroupBy<T>;
/** @deprecated submodule imports arent public api **/
export type StringGroupBy<T extends BucketKey> = OG_StringGroupBy<T>;
/** @deprecated submodule imports arent public api **/
export type TimestampGroupBy<T extends BucketKey> = OG_TimestampGroupBy<T>;
export { GroupKeyType } from '@osdk/legacy-client';
