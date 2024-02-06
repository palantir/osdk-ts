import { ArrayFilter as OG_ArrayFilter } from '@osdk/legacy-client';
import { Attachment, GeoPoint, GeoShape, LocalDate, Timestamp } from '../baseTypes/index';

/** @deprecated submodule imports arent public api **/
export const ArrayFilter = OG_ArrayFilter;

/** @deprecated submodule imports arent public api **/
export type ArrayFilter<
  T extends string | number | Timestamp | LocalDate | boolean | GeoShape | GeoPoint | Attachment,
> = OG_ArrayFilter<T>;
