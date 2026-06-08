---
"@osdk/functions": patch
"@osdk/client": patch
"@osdk/faux": patch
---

Stop serializing GeoJSON `Point` geometries into a `"lat,lon"` string when sending object property/parameter values. This broke geoshape values that are Points (the transaction edits and action endpoints rejected `"lat,lon"` with `InvalidTransactionEditPropertyValue` / invalid parameter for `GeoShape`). GeoJSON values are now passed through as objects, which the server accepts for both geoshape and geopoint/geohash targets. The FauxFoundry geohash action-parameter validator now also accepts GeoJSON objects, matching the real server.
