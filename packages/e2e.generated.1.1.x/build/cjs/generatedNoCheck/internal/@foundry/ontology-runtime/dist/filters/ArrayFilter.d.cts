import { ArrayFilter as OG_ArrayFilter } from '@osdk/legacy-client';
import { Attachment, GeoPoint, GeoShape, LocalDate, Timestamp } from '../baseTypes/index.cjs';
/** @deprecated submodule imports aren't public api **/
export declare const ArrayFilter: <T extends string | number>(property: string) => OG_ArrayFilter<T>;
/** @deprecated submodule imports aren't public api **/
export type ArrayFilter<T extends string | number | Timestamp | LocalDate | boolean | GeoShape | GeoPoint | Attachment> = OG_ArrayFilter<T>;
//# sourceMappingURL=ArrayFilter.d.ts.map