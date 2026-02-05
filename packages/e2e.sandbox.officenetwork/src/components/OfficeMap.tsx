import type { Point } from "geojson";
import type { StyleSpecification } from "maplibre-gl";
import React from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  Map,
  type MapRef,
  Marker,
  type MarkerEvent,
} from "react-map-gl/maplibre";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import { useNetworkConnections } from "../hooks/useNetworkConnections.js";
import { isPoint } from "../utils/geo.js";
import {
  getHierarchyLevel,
  HIERARCHY_COLORS,
  HIERARCHY_LABELS,
  HIERARCHY_ORDER,
  type HierarchyLevel,
} from "../utils/hierarchy.js";
import type { LensMode } from "../utils/lensTheme.js";
import { ConnectionLayer } from "./ConnectionLayer.js";

interface OfficeMapProps {
  offices: ReadonlyArray<Office.OsdkInstance>;
  employees: ReadonlyArray<Employee.OsdkInstance>;
  selectedOffice: Office.OsdkInstance | null;
  selectedEmployee: Employee.OsdkInstance | null;
  onSelectOffice: (office: Office.OsdkInstance) => void;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  lensMode: LensMode;
  filteredLevel: HierarchyLevel | null;
  onFilterLevelChange: (level: HierarchyLevel | null) => void;
  freezeMap?: boolean;
}

// Custom navy-tinted dark map style
const mapStyle: StyleSpecification = {
  version: 8,
  glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  sources: {
    "carto-dark": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
        "https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
        "https://c.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png",
      ],
      tileSize: 256,
      attribution:
        "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",
    },
  },
  layers: [
    // Blue-navy base layer
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#0f2847",
      },
    },
    // Map tiles with blue tint
    {
      id: "carto-layer",
      type: "raster",
      source: "carto-dark",
      minzoom: 0,
      maxzoom: 19,
      paint: {
        "raster-opacity": 0.85,
        "raster-hue-rotate": 20,
        "raster-brightness-min": 0.1,
        "raster-brightness-max": 0.8,
      },
    },
  ],
};

interface EmployeeWithLocation {
  employee: Employee.OsdkInstance;
  location: Point;
  officeName: string;
}

const showsOfficeMarkers = (mode: LensMode): boolean => mode === "offices";

const showsEmployeeMarkers = (mode: LensMode): boolean =>
  mode === "employees" || mode === "network" || mode === "chain"
  || mode === "team";

const showsConnectionLines = (mode: LensMode): boolean =>
  mode === "network" || mode === "chain" || mode === "team";

const usesHierarchyColors = (mode: LensMode): boolean =>
  mode === "network" || mode === "chain" || mode === "team";

function getOffset(index: number, total: number): { x: number; y: number } {
  if (total === 1) return { x: 0, y: 0 };
  const angle = (index / total) * 2 * Math.PI;
  const radius = 20 + Math.floor(index / 8) * 15;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export function OfficeMap({
  offices,
  employees,
  selectedOffice,
  selectedEmployee,
  onSelectOffice,
  onSelectEmployee,
  lensMode,
  filteredLevel,
  onFilterLevelChange,
  freezeMap = false,
}: OfficeMapProps) {
  const mapRef = React.useRef<MapRef>(null);

  const officesWithLocation = offices.filter(
    (o): o is typeof o & { location: Point } => isPoint(o.location),
  );

  const officeLocationMap = React.useMemo(() => {
    const map = new globalThis.Map<string, { location: Point; name: string }>();
    for (const office of officesWithLocation) {
      map.set(office.primaryKey_, {
        location: office.location,
        name: office.name ?? "Unknown",
      });
    }
    return map;
  }, [officesWithLocation]);

  const employeesWithLocation = React.useMemo((): EmployeeWithLocation[] => {
    const result: EmployeeWithLocation[] = [];
    for (const employee of employees) {
      const officeId = employee.primaryOfficeId;
      if (officeId) {
        const officeInfo = officeLocationMap.get(officeId);
        if (officeInfo) {
          result.push({
            employee,
            location: officeInfo.location,
            officeName: officeInfo.name,
          });
        }
      }
    }
    return result;
  }, [employees, officeLocationMap]);

  const employeesByOffice = React.useMemo(() => {
    const map = new globalThis.Map<string, EmployeeWithLocation[]>();
    for (const emp of employeesWithLocation) {
      const officeId = emp.employee.primaryOfficeId;
      if (officeId) {
        const existing = map.get(officeId) ?? [];
        existing.push(emp);
        map.set(officeId, existing);
      }
    }
    return map;
  }, [employeesWithLocation]);

  const { connections } = useNetworkConnections({
    selectedEmployee,
    offices: officesWithLocation,
    employees,
    lensMode,
  });

  const defaultCenter = officesWithLocation.length > 0
    ? {
      longitude: officesWithLocation[0].location.coordinates[0],
      latitude: officesWithLocation[0].location.coordinates[1],
    }
    : { longitude: -98, latitude: 39 };

  React.useEffect(() => {
    if (freezeMap) return;
    if (
      selectedOffice?.location && mapRef.current
      && isPoint(selectedOffice.location)
    ) {
      mapRef.current.flyTo({
        center: [
          selectedOffice.location.coordinates[0],
          selectedOffice.location.coordinates[1],
        ],
        zoom: 6,
        duration: 1000,
      });
    }
  }, [selectedOffice, freezeMap]);

  React.useEffect(() => {
    if (freezeMap) return;
    if (
      selectedEmployee?.primaryOfficeId && mapRef.current
      && showsEmployeeMarkers(lensMode)
    ) {
      const officeInfo = officeLocationMap.get(
        selectedEmployee.primaryOfficeId,
      );
      if (officeInfo) {
        mapRef.current.flyTo({
          center: [
            officeInfo.location.coordinates[0],
            officeInfo.location.coordinates[1],
          ],
          zoom: 6,
          duration: 1000,
        });
      }
    }
  }, [selectedEmployee, officeLocationMap, lensMode, freezeMap]);

  return (
    <div className="absolute inset-0">
      <Map
        ref={mapRef}
        mapLib={import("maplibre-gl")}
        mapStyle={mapStyle}
        initialViewState={{
          longitude: defaultCenter.longitude,
          latitude: defaultCenter.latitude,
          zoom: 3,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ConnectionLayer
          connections={connections}
          visible={showsConnectionLines(lensMode)}
        />

        {/* Office markers - dark background with cyan border, fills cyan when selected */}
        {showsOfficeMarkers(lensMode) && officesWithLocation.map((office) => {
          const [longitude, latitude] = office.location.coordinates;
          const isSelected = selectedOffice?.primaryKey_ === office.primaryKey_;

          return (
            <Marker
              key={office.primaryKey_}
              longitude={longitude}
              latitude={latitude}
              anchor="bottom"
              onClick={(e: MarkerEvent<MouseEvent>) => {
                e.originalEvent.stopPropagation();
                onSelectOffice(office);
              }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`Select office ${office.name ?? "Unknown"}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectOffice(office);
                  }
                }}
                className={`cursor-pointer transition-transform ${
                  isSelected ? "scale-125" : "hover:scale-110"
                } focus:outline-none focus:ring-2 focus:ring-[var(--officenetwork-accent-cyan)] focus:ring-offset-2 focus:ring-offset-[var(--officenetwork-bg-base)]`}
              >
                <div
                  className="size-8 rounded flex items-center justify-center text-xs font-semibold"
                  style={{
                    boxShadow: isSelected
                      ? "0 0 0 2px var(--officenetwork-accent-cyan), 0 2px 12px rgba(88,166,255,0.5)"
                      : "0 2px 8px rgba(0,0,0,0.5)",
                    backgroundColor: isSelected
                      ? "var(--officenetwork-accent-cyan)"
                      : "var(--officenetwork-bg-surface)",
                    color: isSelected
                      ? "var(--officenetwork-bg-base)"
                      : "var(--officenetwork-accent-cyan)",
                    border: isSelected
                      ? "2px solid var(--officenetwork-accent-cyan)"
                      : "2px solid var(--officenetwork-accent-cyan)",
                  }}
                >
                  {office.name?.charAt(0) ?? "?"}
                </div>
                {isSelected && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-[var(--officenetwork-accent-cyan)] bg-[var(--officenetwork-bg-surface)]/95 px-2 py-0.5 rounded border border-[var(--officenetwork-border-default)]">
                    {office.name}
                  </div>
                )}
              </div>
            </Marker>
          );
        })}

        {/* Employee markers - dark background with colored border/text, fills when selected */}
        {showsEmployeeMarkers(lensMode)
          && Array.from(employeesByOffice.entries()).map(([officeId, emps]) => {
            return emps.map((emp, index) => {
              const [longitude, latitude] = emp.location.coordinates;
              const isSelected = selectedEmployee?.employeeNumber
                === emp.employee.employeeNumber;
              const offset = getOffset(index, emps.length);
              const initials = emp.employee.fullName
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2) ?? "?";

              const useHierarchy = usesHierarchyColors(lensMode);
              const hierarchyLevel = useHierarchy
                ? getHierarchyLevel(emp.employee.jobTitle)
                : null;
              const hierarchyColor = hierarchyLevel
                ? HIERARCHY_COLORS[hierarchyLevel]
                : "var(--officenetwork-hier-evp)";
              const matchesFilter = !filteredLevel
                || hierarchyLevel === filteredLevel || isSelected;
              const isDimmed = filteredLevel && !matchesFilter;

              return (
                <Marker
                  key={`${officeId}-${emp.employee.employeeNumber}`}
                  longitude={longitude}
                  latitude={latitude}
                  anchor="center"
                  onClick={(e: MarkerEvent<MouseEvent>) => {
                    e.originalEvent.stopPropagation();
                    if (!isDimmed) {
                      onSelectEmployee(emp.employee);
                    }
                  }}
                >
                  <div
                    role="button"
                    tabIndex={isDimmed ? -1 : 0}
                    aria-label={`Select employee ${
                      emp.employee.fullName ?? `#${emp.employee.employeeNumber}`
                    }`}
                    aria-disabled={isDimmed ? true : undefined}
                    onKeyDown={(e) => {
                      if (!isDimmed && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        onSelectEmployee(emp.employee);
                      }
                    }}
                    className={`transition-all duration-200 ${
                      isSelected ? "scale-125 z-10" : "hover:scale-110"
                    } ${
                      isDimmed ? "pointer-events-none" : "cursor-pointer"
                    } focus:outline-none focus:ring-2 focus:ring-[var(--officenetwork-accent-cyan)] focus:ring-offset-2 focus:ring-offset-[var(--officenetwork-bg-base)]`}
                    style={{
                      transform: `translate(${offset.x}px, ${offset.y}px)`,
                      opacity: isDimmed ? 0.15 : 1,
                    }}
                  >
                    {/* Node: dark background with colored border/text, fills when selected */}
                    <div
                      className="size-7 rounded flex items-center justify-center text-[10px] font-bold"
                      style={{
                        backgroundColor: isSelected
                          ? hierarchyColor
                          : "var(--officenetwork-bg-surface)",
                        color: isSelected
                          ? "var(--officenetwork-bg-base)"
                          : hierarchyColor,
                        boxShadow: isSelected
                          ? `0 0 0 2px ${hierarchyColor}, 0 2px 12px ${hierarchyColor}80`
                          : "0 2px 8px rgba(0,0,0,0.5)",
                        border: `2px solid ${hierarchyColor}`,
                      }}
                    >
                      {initials}
                    </div>
                    {isSelected && (
                      <div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium bg-[var(--officenetwork-bg-surface)]/95 px-2 py-0.5 rounded border border-[var(--officenetwork-border-default)]"
                        style={{ color: hierarchyColor }}
                      >
                        {emp.employee.fullName}
                      </div>
                    )}
                  </div>
                </Marker>
              );
            });
          })}
      </Map>

      {usesHierarchyColors(lensMode) && (
        <div className="absolute bottom-4 left-4 z-10 bg-[var(--officenetwork-bg-surface)]/95 backdrop-blur px-3 py-2 rounded border border-[var(--officenetwork-border-default)]">
          <div className="flex items-center gap-1 text-[10px]">
            <span className="officenetwork-section-label mr-2">Filter</span>
            {HIERARCHY_ORDER.map((level) => {
              const isActive = filteredLevel === level;
              return (
                <button
                  key={level}
                  onClick={() => onFilterLevelChange(isActive ? null : level)}
                  className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${
                    isActive
                      ? "bg-[var(--officenetwork-bg-elevated)] ring-1 ring-[var(--officenetwork-accent-cyan)]/50"
                      : filteredLevel
                      ? "opacity-40 hover:opacity-70"
                      : "hover:bg-[var(--officenetwork-bg-elevated)]"
                  }`}
                >
                  <span
                    className="size-2 rounded-sm"
                    style={{ backgroundColor: HIERARCHY_COLORS[level] }}
                  />
                  <span
                    className={isActive
                      ? "text-[var(--officenetwork-text-primary)]"
                      : "text-[var(--officenetwork-text-muted)]"}
                  >
                    {HIERARCHY_LABELS[level]}
                  </span>
                </button>
              );
            })}
            {filteredLevel && (
              <button
                onClick={() => onFilterLevelChange(null)}
                className="ml-1 text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] px-1.5 py-1 rounded hover:bg-[var(--officenetwork-bg-elevated)]"
                title="Clear filter"
                aria-label="Clear filter"
              >
                <svg
                  className="size-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
