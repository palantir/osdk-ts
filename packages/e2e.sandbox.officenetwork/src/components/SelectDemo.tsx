import { useOsdkObjects } from "@osdk/react/experimental";
import React from "react";
import { Employee } from "../generatedNoCheck2/index.js";
import {
  getHierarchyLevel,
  HIERARCHY_COLORS,
  HIERARCHY_LABELS,
} from "../utils/hierarchy.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface SelectDemoProps {
  onClose: () => void;
}

const COMPACT_SELECT = [
  "fullName",
  "employeeNumber",
  "jobTitle",
] as const;

export function SelectDemo({ onClose }: SelectDemoProps) {
  const [selectedPk, setSelectedPk] = React.useState<number | null>(null);

  const { data: compactList, isLoading: compactLoading } = useOsdkObjects(
    Employee,
    {
      pageSize: 20,
      orderBy: { fullName: "asc" },
      $select: COMPACT_SELECT,
    },
  );

  const { data: fullList, isLoading: fullLoading } = useOsdkObjects(
    Employee,
    {
      pageSize: 20,
      orderBy: { fullName: "asc" },
    },
  );

  const selectedFull = fullList?.find(
    (e) => e.employeeNumber === selectedPk,
  );

  return (
    <div className="h-full flex flex-col bg-[var(--officenetwork-bg-surface)]">
      {/* Header */}
      <div className="p-3 border-b border-[var(--officenetwork-border-default)] flex items-start justify-between">
        <div>
          <div className="officenetwork-section-label text-[var(--officenetwork-accent-teal)] mb-1">
            $select Demo
          </div>
          <div className="text-[10px] text-[var(--officenetwork-text-muted)]">
            Compact list fetches 3 props, detail view fetches all
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] rounded transition-colors"
          aria-label="Close select demo"
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

      <div className="flex-1 flex overflow-hidden">
        {/* Compact List */}
        <div className="flex-1 border-r border-[var(--officenetwork-border-default)] overflow-auto">
          <div className="p-2">
            <div className="flex items-center gap-2 px-2 py-1 mb-1">
              <div className="officenetwork-section-label text-[var(--officenetwork-accent-cyan)]">
                Compact
              </div>
              <span className="officenetwork-badge officenetwork-badge-info">
                $select: 3 props
              </span>
              {compactLoading && <LoadingIndicator size="sm" />}
            </div>
            {compactList?.map((emp) => {
              const level = getHierarchyLevel(emp.jobTitle);
              const isSelected = emp.employeeNumber === selectedPk;
              return (
                <button
                  key={emp.employeeNumber}
                  onClick={() => setSelectedPk(emp.employeeNumber)}
                  className={`w-full text-left px-3 py-1.5 rounded transition-colors ${
                    isSelected
                      ? "bg-[var(--officenetwork-accent-cyan)]/10"
                      : "hover:bg-[var(--officenetwork-bg-elevated)]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="size-2 rounded-sm shrink-0"
                      style={{ backgroundColor: HIERARCHY_COLORS[level] }}
                    />
                    <span className="text-xs text-[var(--officenetwork-text-primary)] truncate">
                      {emp.fullName ?? `#${emp.employeeNumber}`}
                    </span>
                  </div>
                  <div className="text-[9px] text-[var(--officenetwork-text-muted)] ml-4">
                    {emp.jobTitle ?? "No title"}{" "}
                    <span style={{ color: HIERARCHY_COLORS[level] }}>
                      {HIERARCHY_LABELS[level]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full Detail */}
        <div className="flex-1 overflow-auto">
          <div className="p-2">
            <div className="flex items-center gap-2 px-2 py-1 mb-1">
              <div className="officenetwork-section-label text-[var(--officenetwork-status-warning)]">
                Full Detail
              </div>
              <span className="officenetwork-badge officenetwork-badge-warning">
                no $select
              </span>
              {fullLoading && <LoadingIndicator size="sm" />}
            </div>
            {selectedFull
              ? (
                <div className="px-2 space-y-2">
                  <div className="text-sm font-semibold text-[var(--officenetwork-text-primary)]">
                    {selectedFull.fullName
                      ?? `#${selectedFull.employeeNumber}`}
                  </div>
                  <PropertyRow
                    label="employeeNumber"
                    value={String(selectedFull.employeeNumber)}
                  />
                  <PropertyRow
                    label="jobTitle"
                    value={selectedFull.jobTitle}
                  />
                  <PropertyRow
                    label="department"
                    value={selectedFull.department}
                  />
                  <PropertyRow
                    label="businessArea"
                    value={selectedFull.businessArea}
                  />
                  <PropertyRow
                    label="emailPrimaryWork"
                    value={selectedFull.emailPrimaryWork}
                  />
                  <PropertyRow
                    label="primaryOfficeId"
                    value={selectedFull.primaryOfficeId}
                  />
                  <PropertyRow
                    label="leadEmployeeNumber"
                    value={selectedFull.leadEmployeeNumber != null
                      ? String(selectedFull.leadEmployeeNumber)
                      : undefined}
                  />
                  <PropertyRow
                    label="locationCity"
                    value={selectedFull.locationCity}
                  />
                  <PropertyRow
                    label="locationCountry"
                    value={selectedFull.locationCountry}
                  />
                  <PropertyRow
                    label="workerType"
                    value={selectedFull.workerType}
                  />
                  <PropertyRow label="team" value={selectedFull.team} />
                  <PropertyRow
                    label="adUsername"
                    value={selectedFull.adUsername}
                  />
                  <div className="mt-3 text-[9px] text-[var(--officenetwork-text-muted)] italic">
                    Full object: all 29 properties available
                  </div>
                </div>
              )
              : (
                <div className="px-3 py-8 text-center text-sm text-[var(--officenetwork-text-muted)]">
                  Select an employee from the compact list
                </div>
              )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
        <div className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--officenetwork-accent-teal)]" />
          <span>$select · cache merge · partial objects</span>
        </div>
      </div>
    </div>
  );
}

function PropertyRow(
  { label, value }: { label: string; value: string | undefined | null },
) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono shrink-0 w-28">
        {label}
      </span>
      <span className="text-[11px] text-[var(--officenetwork-text-secondary)] truncate">
        {value ?? "—"}
      </span>
    </div>
  );
}
