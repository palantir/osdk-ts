/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import * as Geohash from "ngeohash";
import type { GeoJsonPoint } from "./GeoJson.js";
import type { Geometry } from "./Geometry.js";

export type GeoHash = string;
export interface Coordinates {
  latitude: number;
  longitude: number;
}

// https://www.elastic.co/guide/en/elasticsearch/reference/6.0/search-aggregations-bucket-geohashgrid-aggregation.html#_cell_dimensions_at_the_equator
enum Precision {
  ONE_DIGIT = 1,
  TWO_DIGITS = 2,
  THREE_DIGITS = 3,
  FOUR_DIGITS = 4,
  FIVE_DIGITS = 5,
  SIX_DIGITS = 6,
  SEVEN_DIGITS = 7,
  EIGHT_DIGITS = 8,
  NINE_DIGITS = 9,
  TEN_DIGITS = 10,
  ELEVEN_DIGITS = 11,
  TWELVE_DIGITS = 12,
}

export interface GeoPoint extends Geometry {
  toCoordinates(): Coordinates;
  toGeoHash(): GeoHash;
  toGeoJson(): GeoJsonPoint;
}

export function isGeoPoint(obj: any): obj is GeoPoint {
  return obj?.type === "GeoPoint";
}

export class GeoPoint implements GeoPoint {
  public type = "GeoPoint" as const;

  private static geoHashRegex = /^([0123456789bcdefghjkmnpqrstuvwxyz])+$/i;

  #coordinates: Coordinates;
  #precision?: Precision;

  private constructor(
    coordinates: Coordinates,
    precision?: Precision,
  ) {
    this.#coordinates = coordinates;
    this.#precision = precision;
  }

  public toCoordinates() {
    return this.#coordinates;
  }

  public toGeoHash() {
    return Geohash.encode(
      this.#coordinates.latitude,
      this.#coordinates.longitude,
      this.#precision ?? Precision.TWELVE_DIGITS,
    );
  }

  public toGeoJson(): GeoJsonPoint {
    return {
      type: "Point",
      coordinates: [this.#coordinates.longitude, this.#coordinates.latitude],
    };
  }

  public static fromGeoHash(geoHash: GeoHash): GeoPoint {
    if (geoHash.includes(",")) {
      return this.fromCoordinatesString(geoHash);
    }

    if (!this.geoHashRegex.test(geoHash)) {
      this.throwInvalidGeoHashError(geoHash);
    }
    const { latitude, longitude } = Geohash.decode(geoHash);
    return new GeoPoint({ latitude, longitude }, geoHash.length);
  }

  public static fromCoordinates(coordinates: Coordinates): GeoPoint {
    return new GeoPoint(coordinates);
  }

  public static fromGeoJson(geoJsonPoint: GeoJsonPoint): GeoPoint {
    return GeoPoint.fromCoordinates({
      longitude: geoJsonPoint.coordinates[0]!,
      latitude: geoJsonPoint.coordinates[1]!,
    });
  }

  private static fromCoordinatesString(geoHash: string) {
    const geohashParts = geoHash.split(",").map(s => s.trim());
    if (geohashParts.length !== 2 || !geohashParts.every(p => p.length > 0)) {
      this.throwInvalidGeoHashError(geoHash);
    }
    const [latitude, longitude] = geohashParts.map(Number) as [number, number];
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      this.throwInvalidGeoHashError(geoHash);
    }

    return new GeoPoint({ latitude, longitude });
  }

  private static throwInvalidGeoHashError(geoHash: GeoHash) {
    throw new Error(
      `Received invalid geohash ${geoHash}. An acceptable value should either be a geohash string or a "lat, long" string`,
    );
  }
}

export function mapCoordinatesToGeoPoint(coordinate: number[]) {
  return GeoPoint.fromCoordinates({
    longitude: coordinate[0]!,
    latitude: coordinate[1]!,
  });
}
