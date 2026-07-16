import { useLinks } from "@osdk/react";
import React from "react";

import {
  type ConnectionCollection,
  type ConnectionFeature,
  type ConnectionProperties,
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

// The selected employee's own office, resolved to map coordinates. All
// connections originate from here, so it is threaded through every builder.
interface EmployeeContext {
  empOffice: Office.OsdkInstance | undefined;
  empCoords: [number, number];
  officeMap: ReadonlyMap<string, Office.OsdkInstance>;
}

interface NetworkLinks {
  selectedEmployee: Employee.OsdkInstance | null;
  managerOffice: ReadonlyArray<Office.OsdkInstance> | undefined;
  skipLevelOffice: ReadonlyArray<Office.OsdkInstance> | undefined;
  peers: ReadonlyArray<Employee.OsdkInstance> | undefined;
  directReports: ReadonlyArray<Employee.OsdkInstance> | undefined;
}

function getOfficeCoords(
  office: Office.OsdkInstance | undefined
): [number, number] | null {
  if (!office?.location) return null;
  return getPointCoords(office.location);
}

// One connection per distinct destination office (excluding the employee's own
// office), keeping the first-seen occurrence.
function officeConnections(
  linkedEmployees: ReadonlyArray<Employee.OsdkInstance>,
  ctx: EmployeeContext,
  type: ConnectionProperties["type"],
  label: string
): ConnectionFeature[] {
  const empPk = ctx.empOffice?.primaryKey_;
  const uniqueOfficeIds = [
    ...new Set(
      linkedEmployees
        .map((emp) => emp.primaryOfficeId)
        .filter(
          (officeId): officeId is string => !!officeId && officeId !== empPk
        )
    ),
  ];
  return uniqueOfficeIds.flatMap((officeId) => {
    const coords = getOfficeCoords(ctx.officeMap.get(officeId));
    if (!coords) return [];
    return [
      createConnection(
        ctx.empCoords,
        coords,
        type,
        empPk ?? "",
        officeId,
        label
      ),
    ];
  });
}

// Employee -> manager ("Reports to") and employee -> skip-level lead.
function networkLeadershipConnections(
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  const connections: ConnectionFeature[] = [];
  const empPk = ctx.empOffice?.primaryKey_;

  const mgrOffice = links.managerOffice?.[0];
  const mgrCoords = getOfficeCoords(mgrOffice);
  const mgrPk = mgrOffice?.primaryKey_;
  if (mgrCoords && mgrPk !== empPk) {
    connections.push(
      createConnection(
        ctx.empCoords,
        mgrCoords,
        "manager",
        empPk ?? "",
        mgrPk ?? "",
        "Reports to"
      )
    );
  }

  const skipOffice = links.skipLevelOffice?.[0];
  const skipCoords = getOfficeCoords(skipOffice);
  const skipPk = skipOffice?.primaryKey_;
  if (skipCoords && skipPk !== empPk && skipPk !== mgrPk) {
    connections.push(
      createConnection(
        ctx.empCoords,
        skipCoords,
        "skip-level",
        empPk ?? "",
        skipPk ?? "",
        "Skip-level"
      )
    );
  }

  return connections;
}

// Employee -> peers, one per distinct office, excluding the employee itself.
function peerConnections(
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  if (!links.peers) return [];
  const withoutSelf = links.peers.filter(
    (peer) => peer.employeeNumber !== links.selectedEmployee?.employeeNumber
  );
  return officeConnections(withoutSelf, ctx, "peer", "Peer");
}

// Employee -> direct reports, one per distinct office.
function reportConnections(
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  if (!links.directReports) return [];
  return officeConnections(links.directReports, ctx, "report", "Report");
}

// The vertical chain: employee -> manager -> skip-level lead.
function chainConnections(
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  const mgrOffice = links.managerOffice?.[0];
  const mgrCoords = getOfficeCoords(mgrOffice);
  if (!mgrCoords) return [];

  const empPk = ctx.empOffice?.primaryKey_;
  const mgrPk = mgrOffice?.primaryKey_;
  const connections: ConnectionFeature[] = [
    createConnection(
      ctx.empCoords,
      mgrCoords,
      "manager",
      empPk ?? "",
      mgrPk ?? "",
      "Manager"
    ),
  ];

  const skipOffice = links.skipLevelOffice?.[0];
  const skipCoords = getOfficeCoords(skipOffice);
  if (skipCoords) {
    connections.push(
      createConnection(
        mgrCoords,
        skipCoords,
        "manager",
        mgrPk ?? "",
        skipOffice?.primaryKey_ ?? "",
        "Skip-level"
      )
    );
  }

  return connections;
}

// Employee -> every direct report (no office de-duplication), labelled by name.
function teamConnections(
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  const empPk = ctx.empOffice?.primaryKey_;
  return (links.directReports ?? []).flatMap((report) => {
    const officeId = report.primaryOfficeId;
    if (!officeId) return [];
    const coords = getOfficeCoords(ctx.officeMap.get(officeId));
    if (!coords) return [];
    return [
      createConnection(
        ctx.empCoords,
        coords,
        "report",
        empPk ?? "",
        officeId,
        report.fullName ?? "Report"
      ),
    ];
  });
}

function buildConnections(
  lensMode: LensMode,
  ctx: EmployeeContext,
  links: NetworkLinks
): ConnectionFeature[] {
  switch (lensMode) {
    case "network":
      return [
        ...networkLeadershipConnections(ctx, links),
        ...peerConnections(ctx, links),
        ...reportConnections(ctx, links),
      ];
    case "chain":
      return chainConnections(ctx, links);
    case "team":
      return teamConnections(ctx, links);
    default:
      return [];
  }
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
    { enabled: !!selectedEmployee }
  );

  const { links: manager, isLoading: managerLoading } = useLinks(
    selectedEmployee ?? undefined,
    "lead",
    { enabled: !!selectedEmployee }
  );

  const { links: managerOffice, isLoading: managerOfficeLoading } = useLinks(
    manager?.[0],
    "primaryOffice",
    { enabled: !!manager?.[0] }
  );

  const { links: skipLevel, isLoading: skipLoading } = useLinks(
    manager?.[0],
    "lead",
    { enabled: !!manager?.[0] }
  );

  const { links: skipLevelOffice, isLoading: skipOfficeLoading } = useLinks(
    skipLevel?.[0],
    "primaryOffice",
    { enabled: !!skipLevel?.[0] }
  );

  const { links: peers, isLoading: peersLoading } = useLinks(
    manager?.[0],
    "peeps",
    { enabled: !!manager?.[0] }
  );

  const { links: directReports, isLoading: reportsLoading } = useLinks(
    selectedEmployee ?? undefined,
    "peeps",
    { enabled: !!selectedEmployee }
  );

  const connections = React.useMemo((): ConnectionCollection => {
    const empOffice = employeeOffice?.[0];
    const empCoords = getOfficeCoords(empOffice);
    if (!empCoords) {
      return createConnectionCollection([]);
    }

    const ctx: EmployeeContext = { empOffice, empCoords, officeMap };
    const links: NetworkLinks = {
      selectedEmployee,
      managerOffice,
      skipLevelOffice,
      peers,
      directReports,
    };

    return createConnectionCollection(buildConnections(lensMode, ctx, links));
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

  const isLoading =
    officeLoading ||
    managerLoading ||
    managerOfficeLoading ||
    skipLoading ||
    skipOfficeLoading ||
    peersLoading ||
    reportsLoading;

  return { connections, isLoading };
}
