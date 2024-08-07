import { ArrayFilter as OG_ArrayFilter } from '@osdk/legacy-client';
import { Attachment, GeoPoint, GeoShape, LocalDate, Timestamp } from '../baseTypes/index.js';

/** @deprecated submodule imports aren't public api **/
export const ArrayFilter = OG_ArrayFilter;

/** @deprecated submodule imports aren't public api **/
export type ArrayFilter<
  T extends string | number | Timestamp | LocalDate | boolean | GeoShape | GeoPoint | Attachment,
> = OG_ArrayFilter<T>;
