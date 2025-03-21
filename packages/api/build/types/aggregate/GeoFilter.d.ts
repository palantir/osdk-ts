import type { BBox, Point, Polygon } from "geojson";
import type { Just } from "./Just.js";
import type { DistanceUnitMapping } from "./WhereClause.js";
export interface GeoFilterOptions {
	"$within": {
		$distance: [number, keyof typeof DistanceUnitMapping]
		$of: [number, number] | Readonly<Point>
		$bbox?: never
		$polygon?: never
	} | {
		$bbox: BBox
		$distance?: never
		$of?: never
		$polygon?: never
	} | BBox | {
		$polygon: Polygon["coordinates"]
		$bbox?: never
		$distance?: never
		$of?: never
	} | Polygon;
	"$intersects": {
		$bbox: BBox
		$polygon?: never
	} | BBox | {
		$polygon: Polygon["coordinates"]
		$bbox?: never
	} | Polygon;
	"$isNull": boolean;
}
export declare namespace GeoFilter {
	interface $within extends Just<"$within", GeoFilterOptions> {}
	interface $intersects extends Just<"$intersects", GeoFilterOptions> {}
	interface $isNull extends Just<"$isNull", GeoFilterOptions> {}
}
export type GeoFilter = GeoFilter.$within | GeoFilter.$intersects | GeoFilter.$isNull;
