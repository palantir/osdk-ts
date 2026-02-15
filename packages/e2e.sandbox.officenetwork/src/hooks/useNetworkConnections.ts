import { useLinks } from "@osdk/react/experimental";
import React from "react";
import {
  type ConnectionCollection,
  type ConnectionFeature,
  createConnection,
  createConnectionCollection,
} from "../components/ConnectionLayer.js";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import { getPointCoords } from "../utils/geo.js";
import type { LensMode } from "../utils/lensTheme.js";

interface UseNetworkConnectionsProps {
  selectedEmployee: Employee.OsdkInstance | null;
  offices: ReadonlyArray<Office.OsdkInstance>;
  employees: ReadonlyArray<Employee.OsdkInstance>;
  lensMode: LensMode;
}

interface UseNetworkConnectionsResult {
  connections: ConnectionCollection;
  isLoading: boolean;
}

function getOfficeCoords(
  office: Office.OsdkInstance | undefined,
): [number, number] | null {
  if (!office?.location) return null;
  return getPointCoords(office.location);
}

export function useNetworkConnections({
  selectedEmployee,
  offices,
  employees,
  lensMode,
}: UseNetworkConnectionsProps): UseNetworkConnectionsResult {
  const officeMap = React.useMemo(() => {
    const map = new globalThis.Map<string, Office.OsdkInstance>();
    for (const office of offices) {
      map.set(office.primaryKey_, office);
    }
    return map;
  }, [offices]);

  const { links: employeeOffice, isLoading: officeLoading } = useLinks(
    selectedEmployee ?? undefined,
    "primaryOffice",
    { enabled: !!selectedEmployee },
  );

  const { links: manager, isLoading: managerLoading } = useLinks(
    selectedEmployee ?? undefined,
    "lead",
    { enabled: !!selectedEmployee },
  );

  const { links: managerOffice, isLoading: managerOfficeLoading } = useLinks(
    manager?.[0],
    "primaryOffice",
    { enabled: !!manager?.[0] },
  );

  const { links: skipLevel, isLoading: skipLoading } = useLinks(
    manager?.[0],
    "lead",
    { enabled: !!manager?.[0] },
  );

  const { links: skipLevelOffice, isLoading: skipOfficeLoading } = useLinks(
    skipLevel?.[0],
    "primaryOffice",
    { enabled: !!skipLevel?.[0] },
  );

  const { links: peers, isLoading: peersLoading } = useLinks(
    manager?.[0],
    "peeps",
    { enabled: !!manager?.[0] },
  );

  const { links: directReports, isLoading: reportsLoading } = useLinks(
    selectedEmployee ?? undefined,
    "peeps",
    { enabled: !!selectedEmployee },
  );

  const connections = React.useMemo((): ConnectionCollection => {
    const features: ConnectionFeature[] = [];
    const empOffice = employeeOffice?.[0];
    const empCoords = getOfficeCoords(empOffice);

    if (!empCoords) {
      return createConnectionCollection([]);
    }

    switch (lensMode) {
      case "network": {
        const mgrOffice = managerOffice?.[0];
        const mgrCoords = getOfficeCoords(mgrOffice);
        if (mgrCoords && mgrOffice?.primaryKey_ !== empOffice?.primaryKey_) {
          features.push(
            createConnection(
              empCoords,
              mgrCoords,
              "manager",
              empOffice?.primaryKey_ ?? "",
              mgrOffice?.primaryKey_ ?? "",
              "Reports to",
            ),
          );
        }

        const skipOffice = skipLevelOffice?.[0];
        const skipCoords = getOfficeCoords(skipOffice);
        if (
          skipCoords && skipOffice?.primaryKey_ !== empOffice?.primaryKey_
          && skipOffice?.primaryKey_ !== mgrOffice?.primaryKey_
        ) {
          features.push(
            createConnection(
              empCoords,
              skipCoords,
              "skip-level",
              empOffice?.primaryKey_ ?? "",
              skipOffice?.primaryKey_ ?? "",
              "Skip-level",
            ),
          );
        }

        if (peers) {
          const peerOfficeIds = new Set<string>();
          for (const peer of peers) {
            if (peer.employeeNumber === selectedEmployee?.employeeNumber) {
              continue;
            }
            const peerOfficeId = peer.primaryOfficeId;
            if (
              peerOfficeId && peerOfficeId !== empOffice?.primaryKey_
              && !peerOfficeIds.has(peerOfficeId)
            ) {
              peerOfficeIds.add(peerOfficeId);
              const peerOffice = officeMap.get(peerOfficeId);
              const peerCoords = getOfficeCoords(peerOffice);
              if (peerCoords) {
                features.push(
                  createConnection(
                    empCoords,
                    peerCoords,
                    "peer",
                    empOffice?.primaryKey_ ?? "",
                    peerOfficeId,
                    "Peer",
                  ),
                );
              }
            }
          }
        }

        if (directReports) {
          const reportOfficeIds = new Set<string>();
          for (const report of directReports) {
            const reportOfficeId = report.primaryOfficeId;
            if (
              reportOfficeId && reportOfficeId !== empOffice?.primaryKey_
              && !reportOfficeIds.has(reportOfficeId)
            ) {
              reportOfficeIds.add(reportOfficeId);
              const reportOffice = officeMap.get(reportOfficeId);
              const reportCoords = getOfficeCoords(reportOffice);
              if (reportCoords) {
                features.push(
                  createConnection(
                    empCoords,
                    reportCoords,
                    "report",
                    empOffice?.primaryKey_ ?? "",
                    reportOfficeId,
                    "Report",
                  ),
                );
              }
            }
          }
        }
        break;
      }

      case "chain": {
        const mgrOffice = managerOffice?.[0];
        const mgrCoords = getOfficeCoords(mgrOffice);
        if (mgrCoords) {
          features.push(
            createConnection(
              empCoords,
              mgrCoords,
              "manager",
              empOffice?.primaryKey_ ?? "",
              mgrOffice?.primaryKey_ ?? "",
              "Manager",
            ),
          );

          const skipOffice = skipLevelOffice?.[0];
          const skipCoords = getOfficeCoords(skipOffice);
          if (skipCoords) {
            features.push(
              createConnection(
                mgrCoords,
                skipCoords,
                "manager",
                mgrOffice?.primaryKey_ ?? "",
                skipOffice?.primaryKey_ ?? "",
                "Skip-level",
              ),
            );
          }
        }
        break;
      }

      case "team": {
        if (directReports) {
          for (const report of directReports) {
            const reportOfficeId = report.primaryOfficeId;
            if (reportOfficeId) {
              const reportOffice = officeMap.get(reportOfficeId);
              const reportCoords = getOfficeCoords(reportOffice);
              if (reportCoords) {
                features.push(
                  createConnection(
                    empCoords,
                    reportCoords,
                    "report",
                    empOffice?.primaryKey_ ?? "",
                    reportOfficeId,
                    report.fullName ?? "Report",
                  ),
                );
              }
            }
          }
        }
        break;
      }

      default:
        break;
    }

    return createConnectionCollection(features);
  }, [
    lensMode,
    selectedEmployee,
    employeeOffice,
    managerOffice,
    skipLevelOffice,
    peers,
    directReports,
    officeMap,
  ]);

  const isLoading = officeLoading
    || managerLoading
    || managerOfficeLoading
    || skipLoading
    || skipOfficeLoading
    || peersLoading
    || reportsLoading;

  return { connections, isLoading };
}
