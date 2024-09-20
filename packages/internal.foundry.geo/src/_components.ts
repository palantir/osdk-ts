/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface MultiPolygon {
  coordinates: Array<Array<LinearRing>>;
  bbox?: BBox;
}

/**
   * A linear ring is a closed LineString with four or more positions.
The first and last positions are equivalent, and they MUST contain
identical values; their representation SHOULD also be identical.
A linear ring is the boundary of a surface or the boundary of a hole in
a surface.
A linear ring MUST follow the right-hand rule with respect to the area
it bounds, i.e., exterior rings are counterclockwise, and holes are
clockwise.
   *
   * Log Safety: UNSAFE
   */
export type LinearRing = Array<Position>;

/**
   * GeoJSon geometry collection
GeometryCollections composed of a single part or a number of parts of a
single type SHOULD be avoided when that single part or a single object
of multipart type (MultiPoint, MultiLineString, or MultiPolygon) could
be used instead.
   *
   * Log Safety: UNSAFE
   */
export interface GeometryCollection {
  geometries: Array<Geometry>;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface GeoPoint {
  coordinates: Position;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export type FeatureCollectionTypes = { type: "Feature" } & Feature;

/**
   * GeoJSon object
The coordinate reference system for all GeoJSON coordinates is a
geographic coordinate reference system, using the World Geodetic System
1984 (WGS 84) datum, with longitude and latitude units of decimal
degrees.
This is equivalent to the coordinate reference system identified by the
Open Geospatial Consortium (OGC) URN
An OPTIONAL third-position element SHALL be the height in meters above
or below the WGS 84 reference ellipsoid.
In the absence of elevation values, applications sensitive to height or
depth SHOULD interpret positions as being at local ground or sea level.
   *
   * Log Safety: UNSAFE
   */
export type GeoJsonObject =
  | ({ type: "MultiPoint" } & MultiPoint)
  | ({ type: "GeometryCollection" } & GeometryCollection)
  | ({ type: "MultiLineString" } & MultiLineString)
  | ({ type: "FeatureCollection" } & FeatureCollection)
  | ({ type: "LineString" } & LineString)
  | ({ type: "MultiPolygon" } & MultiPolygon)
  | ({ type: "Point" } & GeoPoint)
  | ({ type: "Polygon" } & Polygon)
  | ({ type: "Feature" } & Feature);

/**
   * GeoJSon fundamental geometry construct.
A position is an array of numbers. There MUST be two or more elements.
The first two elements are longitude and latitude, precisely in that order and using decimal numbers.
Altitude or elevation MAY be included as an optional third element.
Implementations SHOULD NOT extend positions beyond three elements
because the semantics of extra elements are unspecified and ambiguous.
Historically, some implementations have used a fourth element to carry
a linear referencing measure (sometimes denoted as "M") or a numerical
timestamp, but in most situations a parser will not be able to properly
interpret these values. The interpretation and meaning of additional
elements is beyond the scope of this specification, and additional
elements MAY be ignored by parsers.
   *
   * Log Safety: UNSAFE
   */
export type Position = Array<Coordinate>;

/**
 * Abstract type for all GeoJSon object except Feature and FeatureCollection
 *
 * Log Safety: UNSAFE
 */
export type Geometry =
  | ({ type: "MultiPoint" } & MultiPoint)
  | ({ type: "GeometryCollection" } & GeometryCollection)
  | ({ type: "MultiLineString" } & MultiLineString)
  | ({ type: "LineString" } & LineString)
  | ({ type: "MultiPolygon" } & MultiPolygon)
  | ({ type: "Point" } & GeoPoint)
  | ({ type: "Polygon" } & Polygon);

/**
 * Log Safety: UNSAFE
 */
export interface MultiLineString {
  coordinates: Array<LineStringCoordinates>;
  bbox?: BBox;
}

/**
 * GeoJSon 'Feature' object
 *
 * Log Safety: UNSAFE
 */
export interface Feature {
  geometry?: Geometry;
  properties: Record<FeaturePropertyKey, any>;
  id?: any;
  bbox?: BBox;
}

/**
   * A GeoJSON object MAY have a member named "bbox" to include
information on the coordinate range for its Geometries, Features, or
FeatureCollections. The value of the bbox member MUST be an array of
length 2*n where n is the number of dimensions represented in the
contained geometries, with all axes of the most southwesterly point
followed by all axes of the more northeasterly point. The axes order
of a bbox follows the axes order of geometries.
   *
   * Log Safety: UNSAFE
   */
export type BBox = Array<Coordinate>;

/**
 * Log Safety: UNSAFE
 */
export interface Polygon {
  coordinates: Array<LinearRing>;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export interface LineString {
  coordinates?: LineStringCoordinates;
  bbox?: BBox;
}

/**
 * Log Safety: UNSAFE
 */
export type FeaturePropertyKey = LooselyBrandedString<"FeaturePropertyKey">;

/**
 * Log Safety: UNSAFE
 */
export type Coordinate = number;

/**
 * GeoJSon fundamental geometry construct, array of two or more positions.
 *
 * Log Safety: UNSAFE
 */
export type LineStringCoordinates = Array<Position>;

/**
 * Log Safety: UNSAFE
 */
export interface MultiPoint {
  coordinates: Array<Position>;
  bbox?: BBox;
}

/**
 * GeoJSon 'FeatureCollection' object
 *
 * Log Safety: UNSAFE
 */
export interface FeatureCollection {
  features: Array<FeatureCollectionTypes>;
  bbox?: BBox;
}
