import {
  GeoPoint as OG_GeoPoint,
  isGeoPoint as OG_isGeoPoint,
  mapCoordinatesToGeoPoint as OG_mapCoordinatesToGeoPoint,
} from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export const isGeoPoint = OG_isGeoPoint;

/** @deprecated submodule imports arent public api **/
export const GeoPoint = OG_GeoPoint;

/** @deprecated submodule imports arent public api **/
export const mapCoordinatesToGeoPoint = OG_mapCoordinatesToGeoPoint;

import type { Coordinates as OG_Coordinates, GeoHash as OG_GeoHash } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type GeoHash = OG_GeoHash;

/** @deprecated submodule imports arent public api **/
export type Coordinates = OG_Coordinates;

/** @deprecated submodule imports arent public api **/
export type GeoPoint = OG_GeoPoint;
