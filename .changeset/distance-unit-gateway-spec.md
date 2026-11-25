---
"@osdk/api": minor
"@osdk/client": patch
---

Add `DistanceUnit` matching the gateway specification ("MILLIMETERS" | "CENTIMETERS" | "METERS" | "KILOMETERS" | "INCHES" | "FEET" | "YARDS" | "MILES" | "NAUTICAL_MILES") and restrict `$distance` in `WhereClause` and `GeoFilterOptions` to `DistanceUnit`. `DistanceUnitMapping` is deprecated in favor of `DistanceUnit`.
