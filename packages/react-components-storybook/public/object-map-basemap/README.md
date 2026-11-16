# Bundled ObjectMap demo geography

<!-- cspell:ignore Peucker nvkelso demotiles openmaptiles unicodedata pathlib isinstance elif LABELRANK nameascii removesuffix scalerank -->

The Storybook overview uses these local files for recognizable geographic context without a tile service, API key, or external font request. `demoBasemap.ts` resolves them through Vite's `BASE_URL`, including production and PR-preview subpaths. The five GeoJSON files and one glyph range total **1,004,066 bytes** before compression.

The overview is a generalized regional map. Coordinates are rounded to three decimal places; polygon rings use Douglas–Peucker simplification with a 0.02-degree tolerance, dropping rings that collapse below four vertices. It is suitable for the Northeast office prototype, not street-level navigation. Countries follow Natural Earth's boundary conventions. Office names and occupancy figures remain synthetic and separate from this geographic data.

## Sources and licenses

All geographic data comes from [Natural Earth](https://www.naturalearthdata.com/), pinned to [`nvkelso/natural-earth-vector` at `ca96624a56bd078437bca8184e78163e5039ad19`](https://github.com/nvkelso/natural-earth-vector/tree/ca96624a56bd078437bca8184e78163e5039ad19/geojson). The source data is public domain; its original terms are retained verbatim in [NATURAL-EARTH-LICENSE.txt](./NATURAL-EARTH-LICENSE.txt).

| Bundled file                 | Original dataset in `geojson/`                                                                                           | Transformation                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `land.geojson`               | `ne_50m_land.geojson`                                                                                                    | World land polygons; simplify rings and remove properties.                                                                                                       |
| `country-boundaries.geojson` | `ne_110m_admin_0_boundary_lines_land.geojson`                                                                            | Country border lines; remove properties.                                                                                                                         |
| `lakes.geojson`              | `ne_110m_lakes.geojson`                                                                                                  | World lake polygons, including the Great Lakes; simplify rings and remove properties.                                                                            |
| `us-states.geojson`          | `ne_50m_admin_1_states_provinces.geojson`                                                                                | Keep `adm0_a3 == USA`; simplify rings and remove properties.                                                                                                     |
| `places.geojson`             | `ne_110m_admin_0_countries.geojson`, `ne_50m_admin_1_states_provinces.geojson`, `ne_50m_populated_places_simple.geojson` | Country label points, US state label points, and US city points. Keep only label kind, name, and rank. Transliterate names to ASCII so one glyph range suffices. |

The unmodified [`Open Sans Semibold/0-255.pbf`](https://raw.githubusercontent.com/maplibre/demotiles/601ae60796ceceda2cbd2ed3d2ea92d17a84be4b/font/Open%20Sans%20Semibold/0-255.pbf) is from [`maplibre/demotiles` at `601ae60796ceceda2cbd2ed3d2ea92d17a84be4b`](https://github.com/maplibre/demotiles/tree/601ae60796ceceda2cbd2ed3d2ea92d17a84be4b). That repository [identifies `openmaptiles/fonts` as its glyph source](https://github.com/maplibre/demotiles/blob/601ae60796ceceda2cbd2ed3d2ea92d17a84be4b/README.md). Its BSD-3-Clause notice is retained in [MAPLIBRE-DEMOTILES-LICENSE.txt](./MAPLIBRE-DEMOTILES-LICENSE.txt).

The original [Open Sans Semibold font](https://github.com/openmaptiles/fonts/blob/d48c5fce2fc58b55c98d353558d807cac45e7262/open-sans/OpenSans-Semibold.ttf) is version 1.10, with the embedded notice: **Digitized data copyright © 2011, Google Corporation.** It is licensed under Apache-2.0; the [source license at `openmaptiles/fonts` revision `d48c5fce2fc58b55c98d353558d807cac45e7262`](https://github.com/openmaptiles/fonts/blob/d48c5fce2fc58b55c98d353558d807cac45e7262/open-sans/LICENSE.txt) is retained verbatim in [OPEN-SANS-LICENSE.txt](./OPEN-SANS-LICENSE.txt). No font modifications were made here. Only glyphs 0–255 are bundled; adding non-ASCII labels may require more glyph ranges.

The optional street mode requests `https://tile.openstreetmap.org/{z}/{x}/{y}.png`, with visible [OpenStreetMap contributor attribution](https://www.openstreetmap.org/copyright). Those tiles are not bundled. They render over the complete local overview, which remains visible where remote tiles are unavailable. The public endpoint is a prototype convenience; deployed applications should choose a provider appropriate for their usage and its terms.

## Reproducing the files

Run these commands from the repository root. They require `curl` and Python 3.9 or later, with no additional Python packages. Keep the pinned revisions unless deliberately refreshing the assets.

```sh
mkdir -p /tmp/osdk-object-map-sources
natural_earth_url=https://raw.githubusercontent.com/nvkelso/natural-earth-vector/ca96624a56bd078437bca8184e78163e5039ad19
curl -fsSL "$natural_earth_url/geojson/ne_50m_land.geojson" -o /tmp/osdk-object-map-sources/land.geojson
curl -fsSL "$natural_earth_url/geojson/ne_110m_admin_0_boundary_lines_land.geojson" -o /tmp/osdk-object-map-sources/boundaries.geojson
curl -fsSL "$natural_earth_url/geojson/ne_110m_lakes.geojson" -o /tmp/osdk-object-map-sources/lakes.geojson
curl -fsSL "$natural_earth_url/geojson/ne_50m_admin_1_states_provinces.geojson" -o /tmp/osdk-object-map-sources/states.geojson
curl -fsSL "$natural_earth_url/geojson/ne_50m_populated_places_simple.geojson" -o /tmp/osdk-object-map-sources/cities.geojson
curl -fsSL "$natural_earth_url/geojson/ne_110m_admin_0_countries.geojson" -o /tmp/osdk-object-map-sources/countries.geojson
```

Run the following Python to regenerate the compact GeoJSON:

```python
import json
import unicodedata
from pathlib import Path

SOURCE = Path('/tmp/osdk-object-map-sources')
OUTPUT = Path('packages/react-components-storybook/public/object-map-basemap')
OUTPUT.mkdir(parents=True, exist_ok=True)

def source(name):
    return json.loads((SOURCE / (name + '.geojson')).read_text())['features']

def distance_squared(point, start, end):
    dx, dy = end[0] - start[0], end[1] - start[1]
    t = max(0, min(1, ((point[0]-start[0])*dx + (point[1]-start[1])*dy) / (dx*dx+dy*dy))) if dx or dy else 0
    return (point[0]-start[0]-t*dx)**2 + (point[1]-start[1]-t*dy)**2

def simplify(points):
    if len(points) <= 2:
        return points
    index, distance = max(((i, distance_squared(p, points[0], points[-1])) for i,p in enumerate(points[1:-1], 1)), key=lambda v:v[1])
    if distance > 0.02**2:
        return simplify(points[:index+1])[:-1] + simplify(points[index:])
    return [points[0], points[-1]]

def coordinates(value):
    if isinstance(value[0], (int, float)):
        return [round(v,3) for v in value]
    return [coordinates(v) for v in value]

def polygon(rings):
    rings = [coordinates(simplify(ring)) for ring in rings]
    if len(rings[0]) < 4:
        return []
    return [ring for ring in rings if len(ring) >= 4]

def geometry(g):
    if g['type'] == 'Polygon':
        c = polygon(g['coordinates'])
    elif g['type'] == 'MultiPolygon':
        c = [p for rings in g['coordinates'] if (p := polygon(rings))]
    else:
        c = coordinates(g['coordinates'])
    return {'type': g['type'], 'coordinates': c}

def feature(g, properties=None):
    return {'type': 'Feature', 'properties': properties or {}, 'geometry': g}

def write(name, features):
    features = [f for f in features if f['geometry']['coordinates']]
    out = OUTPUT / (name + '.geojson')
    out.write_text(json.dumps({'type':'FeatureCollection', 'features':features}, separators=(',',':'), ensure_ascii=True) + '\n')
    print(name, len(features), out.stat().st_size)

def ascii_label(value):
    return unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode()

write('land', [feature(geometry(f['geometry'])) for f in source('land')])
write('country-boundaries', [feature(geometry(f['geometry'])) for f in source('boundaries')])
write('lakes', [feature(geometry(f['geometry'])) for f in source('lakes')])
states = [f for f in source('states') if f['properties']['adm0_a3'] == 'USA']
write('us-states', [feature(geometry(f['geometry'])) for f in states])
places = []
for f in source('countries'):
    p = f['properties']
    places.append(feature({'type':'Point','coordinates':[round(p['LABEL_X'],3), round(p['LABEL_Y'],3)]}, {'kind':'country','name':ascii_label(p['NAME_EN']),'rank':p['LABELRANK']}))
for f in states:
    p = f['properties']
    places.append(feature({'type':'Point','coordinates':[round(p['longitude'],3), round(p['latitude'],3)]}, {'kind':'state','name':ascii_label(p['name']),'rank':p['labelrank']}))
for f in source('cities'):
    p = f['properties']
    if p['adm0_a3'] == 'USA':
        name = p['nameascii'].removesuffix(', D.C.')
        places.append(feature(geometry(f['geometry']), {'kind':'city','name':ascii_label(name),'rank':p['scalerank']}))
write('places', places)

```

Download the unmodified glyph and license files:

```sh
basemap_assets=packages/react-components-storybook/public/object-map-basemap
mkdir -p "$basemap_assets/fonts/Open Sans Semibold"
curl -fsSL 'https://raw.githubusercontent.com/maplibre/demotiles/601ae60796ceceda2cbd2ed3d2ea92d17a84be4b/font/Open%20Sans%20Semibold/0-255.pbf' -o "$basemap_assets/fonts/Open Sans Semibold/0-255.pbf"
curl -fsSL 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/ca96624a56bd078437bca8184e78163e5039ad19/LICENSE.md' -o "$basemap_assets/NATURAL-EARTH-LICENSE.txt"
curl -fsSL 'https://raw.githubusercontent.com/maplibre/demotiles/601ae60796ceceda2cbd2ed3d2ea92d17a84be4b/LICENSE' -o "$basemap_assets/MAPLIBRE-DEMOTILES-LICENSE.txt"
curl -fsSL 'https://raw.githubusercontent.com/openmaptiles/fonts/d48c5fce2fc58b55c98d353558d807cac45e7262/open-sans/LICENSE.txt' -o "$basemap_assets/OPEN-SANS-LICENSE.txt"
```
