import type { DerivedProperty } from "@osdk/api";
import { useLinks, useOsdkObjects } from "@osdk/react/experimental";
import React from "react";
import type { Office } from "../generatedNoCheck2/index.js";
import { $Interfaces, Employee } from "../generatedNoCheck2/index.js";
import { useFullChain } from "../hooks/useFullChain.js";
import { type OrgTreeNode, useOrgTree } from "../hooks/useOrgTree.js";
import {
  getHierarchyLevel,
  HIERARCHY_COLORS,
  HIERARCHY_LABELS,
} from "../utils/hierarchy.js";
import {
  LENS_ACCENT,
  LENS_PANEL_TITLE,
  type LensMode,
} from "../utils/lensTheme.js";
import { LoadingIndicator } from "./LoadingIndicator.js";
import { PersonListSection } from "./PersonListSection.js";

interface EmployeePanelProps {
  employee: Employee.OsdkInstance;
  currentOffice: Office.OsdkInstance | null;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  onPanToEmployee?: (employee: Employee.OsdkInstance) => void;
  onClose: () => void;
  lensMode: LensMode;
}

const employeeWithRdps = {
  managerName: (base: DerivedProperty.Builder<Employee, false>) =>
    base.pivotTo("lead").selectProperty("fullName"),
  reportCount: (base: DerivedProperty.Builder<Employee, false>) =>
    base.pivotTo("peeps").aggregate("$count"),
};

interface OrgTreeNodeViewProps {
  node: OrgTreeNode;
  depth: number;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  onToggleExpand: (employeeNumber: number) => void;
  isRoot?: boolean;
}

const OrgTreeNodeView = React.memo(
  function OrgTreeNodeView(
    { node, depth, onSelectEmployee, onToggleExpand, isRoot }:
      OrgTreeNodeViewProps,
  ) {
    const level = getHierarchyLevel(node.employee.jobTitle);
    const hasReports = node.reports.length > 0;
    const canExpand = !node.isExpanded && hasReports;
    const canCollapse = node.isExpanded && hasReports;

    return (
      <div>
        {!isRoot && (
          <div
            className="flex items-center gap-1"
            style={{ paddingLeft: `${(depth - 1) * 12}px` }}
          >
            <button
              onClick={() => onToggleExpand(node.employee.employeeNumber)}
              className="size-4 flex items-center justify-center text-[10px] text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] transition-colors"
              disabled={!hasReports && !node.isLoading}
            >
              {node.isLoading
                ? <span className="animate-spin">⟳</span>
                : canExpand
                ? (
                  "▶"
                )
                : canCollapse
                ? (
                  "▼"
                )
                : (
                  "·"
                )}
            </button>
            <div
              className="size-2 rounded-sm shrink-0"
              style={{ backgroundColor: HIERARCHY_COLORS[level] }}
            />
            <button
              onClick={() => onSelectEmployee(node.employee)}
              className="text-[11px] text-[var(--officenetwork-text-secondary)] hover:text-[var(--officenetwork-accent-cyan)] truncate transition-colors"
            >
              {node.employee.fullName ?? `#${node.employee.employeeNumber}`}
            </button>
            {node.reports.length > 0 && (
              <span className="text-[9px] text-[var(--officenetwork-text-muted)] officenetwork-mono">
                ({node.reports.length})
              </span>
            )}
          </div>
        )}
        {node.isExpanded && node.reports.map((child) => (
          <OrgTreeNodeView
            key={child.employee.employeeNumber}
            node={child}
            depth={depth + 1}
            onSelectEmployee={onSelectEmployee}
            onToggleExpand={onToggleExpand}
          />
        ))}
      </div>
    );
  },
);

export function EmployeePanel({
  employee,
  currentOffice,
  onSelectEmployee,
  onPanToEmployee,
  onClose,
  lensMode,
}: EmployeePanelProps) {
  const handleSelectAndPan = React.useCallback(
    (emp: Employee.OsdkInstance) => {
      onSelectEmployee(emp);
      onPanToEmployee?.(emp);
    },
    [onSelectEmployee, onPanToEmployee],
  );
  const { data: enrichedEmployees, isLoading: rdpLoading } = useOsdkObjects(
    Employee,
    {
      where: { employeeNumber: employee.employeeNumber },
      withProperties: employeeWithRdps,
      pageSize: 1,
    },
  );
  const enrichedEmployee = enrichedEmployees?.[0];

  const { data: workerData, isLoading: workerLoading } = useOsdkObjects(
    $Interfaces.Worker,
    {
      where: { employeeNumber: employee.employeeNumber },
      pageSize: 1,
    },
  );
  const worker = workerData?.[0];

  const { data: personData, isLoading: personLoading } = useOsdkObjects(
    $Interfaces.Person,
    {
      where: { employeeNumber: employee.employeeNumber },
      pageSize: 1,
    },
  );
  const person = personData?.[0];

  const {
    chain,
    isLoading: chainLoading,
    isComplete: chainComplete,
    depth: chainDepth,
  } = useFullChain(employee);
  const {
    tree: orgTree,
    totalCount: orgTotalCount,
    maxDepth: orgMaxDepth,
    isLoading: orgLoading,
    toggleExpand,
  } = useOrgTree(employee, 3);

  const { links: directReports, isLoading: reportsLoading } = useLinks(
    employee,
    "peeps",
    { orderBy: { fullName: "asc" } },
  );

  const { links: manager } = useLinks(employee, "lead");
  const managerObj = manager?.[0];

  const { links: employeeOffice, isLoading: officeLoading } = useLinks(
    employee,
    "primaryOffice",
  );
  const employeeOfficeObj = employeeOffice?.[0];

  const { links: managerOffice } = useLinks(managerObj, "primaryOffice", {
    enabled: !!managerObj,
  });
  const managerOfficeObj = managerOffice?.[0];
  const isCrossOffice = managerOfficeObj && employeeOfficeObj
    && managerOfficeObj.primaryKey_ !== employeeOfficeObj.primaryKey_;

  const { links: colleagues, isLoading: colleaguesLoading } = useLinks(
    employeeOfficeObj,
    "occupants",
    { enabled: !!employeeOfficeObj, orderBy: { fullName: "asc" } },
  );
  const colleaguesExcludingSelf = React.useMemo(
    () =>
      colleagues?.filter((c) => c.employeeNumber !== employee.employeeNumber),
    [colleagues, employee.employeeNumber],
  );

  const { links: peerReports, isLoading: peersLoading } = useLinks(
    managerObj,
    "peeps",
    { enabled: !!managerObj, orderBy: { fullName: "asc" } },
  );
  const peersExcludingSelf = React.useMemo(
    () =>
      peerReports?.filter((p) => p.employeeNumber !== employee.employeeNumber),
    [peerReports, employee.employeeNumber],
  );

  const { links: skipLevelManager, isLoading: skipLevelLoading } = useLinks(
    managerObj,
    "lead",
    { enabled: !!managerObj },
  );
  const skipLevelManagerObj = skipLevelManager?.[0];

  const { links: skipLevelOffice } = useLinks(
    skipLevelManagerObj,
    "primaryOffice",
    { enabled: !!skipLevelManagerObj },
  );
  const skipLevelOfficeObj = skipLevelOffice?.[0];

  const accentColor = LENS_ACCENT[lensMode];
  const lensTitle = LENS_PANEL_TITLE[lensMode];

  // Always show network info for employees unless in chain-only or team-only mode
  const showFullNetwork = lensMode !== "chain" && lensMode !== "team";
  const showChain = lensMode === "chain";
  const showTeam = lensMode === "team";

  const hierarchyLevel = getHierarchyLevel(employee.jobTitle);

  return (
    <div className="h-full flex flex-col bg-[var(--officenetwork-bg-surface)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)] flex items-start justify-between">
        <div>
          <div
            className="officenetwork-section-label mb-1"
            style={{ color: accentColor }}
          >
            {lensTitle}
          </div>
          <h2 className="text-lg font-semibold text-[var(--officenetwork-text-primary)]">
            {employee.fullName ?? `#${employee.employeeNumber}`}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-[var(--officenetwork-text-muted)]">
              {employee.jobTitle ?? "No title"}
            </span>
            <span
              className="officenetwork-badge"
              style={{
                backgroundColor: `${HIERARCHY_COLORS[hierarchyLevel]}20`,
                color: HIERARCHY_COLORS[hierarchyLevel],
              }}
            >
              {HIERARCHY_LABELS[hierarchyLevel]}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] rounded transition-colors"
          aria-label="Close panel"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {/* Works at */}
        <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
          <div className="officenetwork-section-label mb-1">Works at</div>
          {officeLoading
            ? <LoadingIndicator size="sm" />
            : employeeOfficeObj
            ? (
              <div className="text-sm font-medium text-[var(--officenetwork-accent-cyan)]">
                {employeeOfficeObj.name ?? "Unknown Office"}
              </div>
            )
            : (
              <div className="text-sm text-[var(--officenetwork-text-muted)]">
                No office assigned
              </div>
            )}
        </div>

        {/* Reports to */}
        <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
          <div className="officenetwork-section-label mb-1">Reports to</div>
          {managerObj
            ? (
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-sm shrink-0"
                  style={{
                    backgroundColor:
                      HIERARCHY_COLORS[getHierarchyLevel(managerObj.jobTitle)],
                  }}
                />
                <button
                  onClick={() => handleSelectAndPan(managerObj)}
                  className="text-sm font-medium text-[var(--officenetwork-status-ready)] hover:underline"
                >
                  {managerObj.fullName ?? `#${managerObj.employeeNumber}`}
                </button>
                {isCrossOffice && (
                  <span className="officenetwork-badge officenetwork-badge-warning">
                    {managerOfficeObj?.name ?? "Other office"}
                  </span>
                )}
              </div>
            )
            : (
              <div className="text-sm text-[var(--officenetwork-text-muted)]">
                No manager (top of org)
              </div>
            )}
        </div>

        {/* Skip-level manager */}
        {(showChain || showFullNetwork) && skipLevelManagerObj && (
          <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
            <div className="officenetwork-section-label mb-1">Skip-level</div>
            <div className="flex items-center gap-2">
              <div
                className="size-2 rounded-sm shrink-0"
                style={{
                  backgroundColor: HIERARCHY_COLORS[
                    getHierarchyLevel(skipLevelManagerObj.jobTitle)
                  ],
                }}
              />
              <button
                onClick={() => onSelectEmployee(skipLevelManagerObj)}
                className="text-sm font-medium text-[var(--officenetwork-status-warning)] hover:underline"
              >
                {skipLevelManagerObj.fullName
                  ?? `#${skipLevelManagerObj.employeeNumber}`}
              </button>
              {skipLevelOfficeObj && (
                <span className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono">
                  @ {skipLevelOfficeObj.name ?? "Unknown"}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Full Reporting Chain */}
        {showChain && chain.length > 0 && (
          <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
            <div className="flex items-center justify-between mb-3">
              <div
                className="officenetwork-section-label"
                style={{ color: "var(--officenetwork-status-warning)" }}
              >
                Full Reporting Chain
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono">
                <span>{chainDepth} lvl{chainDepth !== 1 ? "s" : ""}</span>
                {chainLoading && <LoadingIndicator size="sm" />}
                {chainComplete && (
                  <span className="text-[var(--officenetwork-status-ready)]">
                    ✓
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-1">
              {chain.map((node, index) => {
                const level = getHierarchyLevel(node.employee.jobTitle);
                const isFirst = index === 0;
                const isLast = index === chain.length - 1;
                const isCeo = node.employee.leadEmployeeNumber
                  === node.employee.employeeNumber;

                return (
                  <div
                    key={node.employee.employeeNumber}
                    className="flex items-center gap-2"
                  >
                    <div className="flex flex-col items-center w-4">
                      {!isFirst && (
                        <div className="w-0.5 h-2 bg-[var(--officenetwork-border-default)]" />
                      )}
                      <div
                        className="size-2.5 rounded-sm shrink-0"
                        style={{ backgroundColor: HIERARCHY_COLORS[level] }}
                      />
                      {!isLast && !node.isLoading && (
                        <div className="w-0.5 h-2 bg-[var(--officenetwork-border-default)]" />
                      )}
                      {node.isLoading && (
                        <div className="w-0.5 h-2 animate-pulse bg-[var(--officenetwork-status-warning)]" />
                      )}
                    </div>
                    <button
                      onClick={() => onSelectEmployee(node.employee)}
                      className={`text-xs hover:text-[var(--officenetwork-accent-cyan)] truncate transition-colors ${
                        isFirst
                          ? "font-semibold text-[var(--officenetwork-text-primary)]"
                          : "text-[var(--officenetwork-text-secondary)]"
                      }`}
                    >
                      {isCeo && "👑 "}
                      {node.employee.fullName
                        ?? `#${node.employee.employeeNumber}`}
                    </button>
                    <span
                      className="text-[9px] officenetwork-mono shrink-0"
                      style={{ color: HIERARCHY_COLORS[level] }}
                    >
                      {HIERARCHY_LABELS[level]}
                    </span>
                  </div>
                );
              })}
              {chainLoading && (
                <div className="flex items-center gap-2 text-[10px] text-[var(--officenetwork-text-muted)]">
                  <div className="w-4" />
                  <LoadingIndicator size="sm" />
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Direct reports */}
        {(showTeam || showFullNetwork) && (
          <PersonListSection
            title="Direct reports"
            people={directReports}
            count={enrichedEmployee?.reportCount ?? directReports?.length}
            isLoading={reportsLoading}
            maxVisible={5}
            maxHeight="max-h-32"
            countColor="var(--officenetwork-hier-evp)"
            emptyMessage="No direct reports"
            onSelectEmployee={onSelectEmployee}
          />
        )}

        {/* Organization Tree */}
        {showTeam && orgTree && orgTree.reports.length > 0 && (
          <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
            <div className="flex items-center justify-between mb-3">
              <div
                className="officenetwork-section-label"
                style={{ color: "var(--officenetwork-hier-evp)" }}
              >
                Organization Tree
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono">
                <span>{orgTotalCount} total</span>
                <span>·</span>
                <span>{orgMaxDepth} lvl{orgMaxDepth !== 1 ? "s" : ""}</span>
                {orgLoading && <LoadingIndicator size="sm" />}
              </div>
            </div>
            <div className="space-y-0.5 max-h-48 overflow-auto">
              <OrgTreeNodeView
                node={orgTree}
                depth={0}
                onSelectEmployee={onSelectEmployee}
                onToggleExpand={toggleExpand}
                isRoot
              />
            </div>
          </div>
        )}

        {/* Peers */}
        {showFullNetwork && (
          <PersonListSection
            title="Peers"
            people={peersExcludingSelf}
            isLoading={peersLoading && !!managerObj}
            maxVisible={4}
            countColor="var(--officenetwork-hier-evp)"
            emptyMessage={managerObj ? "No peers" : "No manager (no peers)"}
            onSelectEmployee={onSelectEmployee}
          />
        )}

        {/* Colleagues */}
        {showFullNetwork && (
          <PersonListSection
            title="Colleagues"
            people={colleaguesExcludingSelf}
            isLoading={colleaguesLoading && !!employeeOfficeObj}
            maxVisible={4}
            countColor="var(--officenetwork-status-ready)"
            emptyMessage={employeeOfficeObj
              ? "No colleagues"
              : "No office assigned"}
            onSelectEmployee={onSelectEmployee}
          />
        )}

        {/* Interface Comparison */}
        {lensMode === "employees" && (
          <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
            <div
              className="officenetwork-section-label mb-3"
              style={{ color: "var(--officenetwork-accent-teal)" }}
            >
              Interface Comparison
            </div>
            {(workerLoading || personLoading)
              ? <LoadingIndicator size="sm" />
              : (
                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-1 text-[10px] font-medium border-b border-[var(--officenetwork-border-default)] pb-2">
                    <span className="text-[var(--officenetwork-text-muted)] officenetwork-mono">
                      Property
                    </span>
                    <span className="text-[var(--officenetwork-hier-evp)]">
                      Employee
                    </span>
                    <span className="text-[var(--officenetwork-accent-teal)]">
                      Worker
                    </span>
                    <span className="text-[var(--officenetwork-status-ready)]">
                      Person
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[10px]">
                    <span className="text-[var(--officenetwork-text-muted)] officenetwork-mono">
                      name
                    </span>
                    <span className="text-[var(--officenetwork-text-secondary)] truncate">
                      {employee.fullName ?? "—"}
                    </span>
                    <span className="text-[var(--officenetwork-accent-teal)] truncate">
                      {worker?.name ?? "—"}
                    </span>
                    <span className="text-[var(--officenetwork-text-muted)]">
                      —
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[10px]">
                    <span className="text-[var(--officenetwork-text-muted)] officenetwork-mono">
                      email
                    </span>
                    <span className="text-[var(--officenetwork-text-secondary)] truncate">
                      {employee.emailPrimaryWork ?? "—"}
                    </span>
                    <span className="text-[var(--officenetwork-accent-teal)] truncate">
                      {worker?.email ?? "—"}
                    </span>
                    <span className="text-[var(--officenetwork-status-ready)] truncate">
                      {person?.email ?? "—"}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[10px]">
                    <span className="text-[var(--officenetwork-text-muted)] officenetwork-mono">
                      empNum
                    </span>
                    <span className="text-[var(--officenetwork-text-secondary)]">
                      {employee.employeeNumber}
                    </span>
                    <span className="text-[var(--officenetwork-accent-teal)]">
                      {worker?.employeeNumber ?? "—"}
                    </span>
                    <span className="text-[var(--officenetwork-status-ready)]">
                      {person?.employeeNumber ?? "—"}
                    </span>
                  </div>
                  <div className="mt-2 text-[9px] text-[var(--officenetwork-text-muted)] italic">
                    Same data accessed via 3 different views
                  </div>
                </div>
              )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
        <div className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono flex items-center gap-2">
          <span
            className="size-1.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span>
            {lensMode === "employees" && "Interface · "}
            Links · Nested
            {(showTeam || showFullNetwork) && " · RDPs"}
          </span>
        </div>
      </div>
    </div>
  );
}
