import React from "react";
import type { Office } from "../generatedNoCheck2/index.js";
import type {
  ReorgAlgorithm,
  ReorgConfig,
  ReorgConstraints,
  ReorgType,
} from "../hooks/useReorgState.js";

interface ReorgConfigStepProps {
  config: ReorgConfig;
  offices: Office.OsdkInstance[];
  onUpdateConfig: (config: Partial<ReorgConfig>) => void;
  onUpdateConstraints: (constraints: Partial<ReorgConstraints>) => void;
}

const reorgTypes: { id: ReorgType; label: string; description: string }[] = [
  {
    id: "office",
    label: "Office Only",
    description: "Move employees between offices",
  },
  { id: "team", label: "Team Only", description: "Reassign team memberships" },
  { id: "both", label: "Both", description: "Office and team changes" },
];

const algorithms: { id: ReorgAlgorithm; label: string; description: string }[] =
  [
    {
      id: "manual",
      label: "Manual",
      description: "Manually assign each employee",
    },
    {
      id: "shuffle",
      label: "Shuffle All",
      description: "Randomly redistribute all employees",
    },
    {
      id: "swap",
      label: "Swap Offices",
      description: "Exchange employees between two offices",
    },
    {
      id: "consolidate",
      label: "Consolidate",
      description: "Move selected employees to one office",
    },
  ];

export function ReorgConfigStep({
  config,
  offices,
  onUpdateConfig,
  onUpdateConstraints,
}: ReorgConfigStepProps) {
  return (
    <div className="p-4 space-y-6">
      {/* Reorg Type */}
      <section>
        <h3 className="officenetwork-section-label mb-3">
          Reorg Type
        </h3>
        <div className="space-y-2">
          {reorgTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition-colors ${
                config.reorgType === type.id
                  ? "border-[var(--officenetwork-status-warning)]/50 bg-[var(--officenetwork-status-warning)]/10"
                  : "border-[var(--officenetwork-border-default)] hover:bg-[var(--officenetwork-bg-elevated)]"
              }`}
            >
              <input
                type="radio"
                name="reorgType"
                value={type.id}
                checked={config.reorgType === type.id}
                onChange={() => onUpdateConfig({ reorgType: type.id })}
                className="mt-0.5 accent-[var(--officenetwork-status-warning)]"
              />
              <div>
                <div className="text-sm font-medium text-[var(--officenetwork-text-primary)]">
                  {type.label}
                </div>
                <div className="text-xs text-[var(--officenetwork-text-muted)] text-pretty">
                  {type.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Algorithm */}
      <section>
        <h3 className="officenetwork-section-label mb-3">
          Algorithm
        </h3>
        <div className="space-y-2">
          {algorithms.map((algo) => (
            <label
              key={algo.id}
              className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition-colors ${
                config.algorithm === algo.id
                  ? "border-[var(--officenetwork-status-warning)]/50 bg-[var(--officenetwork-status-warning)]/10"
                  : "border-[var(--officenetwork-border-default)] hover:bg-[var(--officenetwork-bg-elevated)]"
              }`}
            >
              <input
                type="radio"
                name="algorithm"
                value={algo.id}
                checked={config.algorithm === algo.id}
                onChange={() => onUpdateConfig({ algorithm: algo.id })}
                className="mt-0.5 accent-[var(--officenetwork-status-warning)]"
              />
              <div>
                <div className="text-sm font-medium text-[var(--officenetwork-text-primary)]">
                  {algo.label}
                </div>
                <div className="text-xs text-[var(--officenetwork-text-muted)] text-pretty">
                  {algo.description}
                </div>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Swap Offices */}
      {config.algorithm === "swap" && (
        <section>
          <h3 className="officenetwork-section-label mb-3">
            Swap Offices
          </h3>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-[var(--officenetwork-text-secondary)] mb-1 block">
                Office A
              </label>
              <select
                value={config.swapOfficeIds?.[0] ?? ""}
                onChange={(e) =>
                  onUpdateConfig({
                    swapOfficeIds: [
                      e.target.value,
                      config.swapOfficeIds?.[1] ?? "",
                    ],
                  })}
                className="w-full px-3 py-2 text-sm bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-primary)]"
              >
                <option value="">Select office...</option>
                {offices.map((office) => (
                  <option key={office.primaryKey_} value={office.primaryKey_}>
                    {office.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-[var(--officenetwork-text-secondary)] mb-1 block">
                Office B
              </label>
              <select
                value={config.swapOfficeIds?.[1] ?? ""}
                onChange={(e) =>
                  onUpdateConfig({
                    swapOfficeIds: [
                      config.swapOfficeIds?.[0] ?? "",
                      e.target.value,
                    ],
                  })}
                className="w-full px-3 py-2 text-sm bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-primary)]"
              >
                <option value="">Select office...</option>
                {offices.map((office) => (
                  <option key={office.primaryKey_} value={office.primaryKey_}>
                    {office.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
      )}

      {/* Consolidate Target */}
      {config.algorithm === "consolidate" && (
        <section>
          <h3 className="officenetwork-section-label mb-3">
            Target Office
          </h3>
          <select
            value={config.consolidateOfficeId ?? ""}
            onChange={(e) =>
              onUpdateConfig({ consolidateOfficeId: e.target.value })}
            className="w-full px-3 py-2 text-sm bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-primary)]"
          >
            <option value="">Select target office...</option>
            {offices.map((office) => (
              <option key={office.primaryKey_} value={office.primaryKey_}>
                {office.name}
              </option>
            ))}
          </select>
        </section>
      )}

      {/* Constraints */}
      <section>
        <h3 className="officenetwork-section-label mb-3">
          Constraints
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={config.constraints.keepHeadcountBalanced}
              onChange={(e) =>
                onUpdateConstraints({
                  keepHeadcountBalanced: e.target.checked,
                })}
              className="accent-[var(--officenetwork-status-warning)]"
            />
            <div>
              <div className="text-sm text-[var(--officenetwork-text-primary)]">
                Keep headcount balanced
              </div>
              <div className="text-xs text-[var(--officenetwork-text-muted)]">
                Maintain office sizes within tolerance
              </div>
            </div>
          </label>

          {config.constraints.keepHeadcountBalanced && (
            <div className="ml-6">
              <label className="text-xs text-[var(--officenetwork-text-secondary)] mb-1 block officenetwork-mono">
                Tolerance: ±{config.constraints.headcountTolerance}
              </label>
              <input
                type="range"
                min={0}
                max={10}
                value={config.constraints.headcountTolerance}
                onChange={(e) =>
                  onUpdateConstraints({
                    headcountTolerance: Number(e.target.value),
                  })}
                className="w-full accent-[var(--officenetwork-status-warning)]"
              />
            </div>
          )}

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={config.constraints.keepTeamComposition}
              onChange={(e) =>
                onUpdateConstraints({ keepTeamComposition: e.target.checked })}
              className="accent-[var(--officenetwork-status-warning)]"
            />
            <div>
              <div className="text-sm text-[var(--officenetwork-text-primary)]">
                Keep team composition
              </div>
              <div className="text-xs text-[var(--officenetwork-text-muted)]">
                Maintain manager/IC ratios
              </div>
            </div>
          </label>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={config.constraints.maxMovesPerOffice != null}
                onChange={(e) =>
                  onUpdateConstraints({
                    maxMovesPerOffice: e.target.checked ? 50 : null,
                  })}
                className="accent-[var(--officenetwork-status-warning)]"
              />
              <div>
                <div className="text-sm text-[var(--officenetwork-text-primary)]">
                  Limit moves per office
                </div>
                <div className="text-xs text-[var(--officenetwork-text-muted)]">
                  Cap churn in any single location
                </div>
              </div>
            </label>

            {config.constraints.maxMovesPerOffice != null && (
              <div className="ml-6 mt-2">
                <label className="text-xs text-[var(--officenetwork-text-secondary)] mb-1 block officenetwork-mono">
                  Max moves: {config.constraints.maxMovesPerOffice}%
                </label>
                <input
                  type="range"
                  min={10}
                  max={100}
                  step={10}
                  value={config.constraints.maxMovesPerOffice}
                  onChange={(e) =>
                    onUpdateConstraints({
                      maxMovesPerOffice: Number(e.target.value),
                    })}
                  className="w-full accent-[var(--officenetwork-status-warning)]"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
