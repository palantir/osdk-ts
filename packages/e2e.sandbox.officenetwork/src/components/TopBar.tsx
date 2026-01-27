import React from "react";
import type { LensMode } from "../utils/lensTheme.js";

interface TopBarProps {
  lensMode: LensMode;
  onLensModeChange: (mode: LensMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onGenerateData: () => void;
  isLoading: boolean;
}

interface TabConfig {
  id: LensMode;
  label: string;
  shortcut: string;
}

const lenses: TabConfig[] = [
  { id: "offices", label: "Offices", shortcut: "1" },
  { id: "employees", label: "People", shortcut: "2" },
  { id: "network", label: "Network", shortcut: "3" },
  { id: "chain", label: "Org Chain", shortcut: "4" },
  { id: "team", label: "Team", shortcut: "5" },
];

const workflows: TabConfig[] = [
  { id: "reorg", label: "Reorg", shortcut: "6" },
];

function TabButton({
  tab,
  isActive,
  activeColor,
  onClick,
}: {
  tab: TabConfig;
  isActive: boolean;
  activeColor: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-3 py-2 text-xs font-medium transition-colors
        ${
        !isActive
          ? "text-[var(--gotham-text-secondary)] hover:text-[var(--gotham-text-primary)]"
          : ""
      }
      `}
      style={isActive ? { color: activeColor } : undefined}
    >
      {tab.label}
      {isActive && (
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: activeColor }}
        />
      )}
    </button>
  );
}

export function TopBar({
  lensMode,
  onLensModeChange,
  searchQuery,
  onSearchChange,
  onGenerateData,
  isLoading,
}: TopBarProps) {
  return (
    <header className="h-10 flex items-center justify-between px-3 bg-[var(--gotham-bg-surface)] border-b border-[var(--gotham-border-default)]">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-[var(--gotham-accent-cyan)] flex items-center justify-center">
            <svg
              className="size-4 text-[var(--gotham-bg-base)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-[var(--gotham-text-primary)] tracking-tight">
            Office Network
          </span>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-4">
          {/* Lenses */}
          <div className="flex items-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gotham-accent-cyan)] bg-[var(--gotham-accent-cyan)]/10 border border-[var(--gotham-accent-cyan)]/30 px-2 py-0.5 rounded mr-2">
              Lenses
            </span>
            <div className="flex items-center">
              {lenses.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={lensMode === tab.id}
                  activeColor="var(--gotham-accent-cyan)"
                  onClick={() => onLensModeChange(tab.id)}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-[var(--gotham-border-default)]" />

          {/* Workflows */}
          <div className="flex items-center">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gotham-status-warning)] bg-[var(--gotham-status-warning)]/10 border border-[var(--gotham-status-warning)]/30 px-2 py-0.5 rounded mr-2">
              Workflows
            </span>
            <div className="flex items-center">
              {workflows.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={lensMode === tab.id}
                  activeColor="var(--gotham-status-error)"
                  onClick={() => onLensModeChange(tab.id)}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-[var(--gotham-text-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="w-48 h-7 pl-8 pr-3 text-xs bg-[var(--gotham-bg-elevated)] border border-[var(--gotham-border-default)] rounded text-[var(--gotham-text-primary)] placeholder:text-[var(--gotham-text-muted)] focus:outline-none focus:border-[var(--gotham-accent-cyan)]"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--gotham-text-muted)] font-mono">
            /
          </kbd>
        </div>

        {/* Generate Data Button */}
        <button
          onClick={onGenerateData}
          disabled={isLoading}
          className="h-7 px-3 text-xs font-medium bg-[var(--gotham-bg-elevated)] border border-[var(--gotham-border-default)] rounded text-[var(--gotham-text-secondary)] hover:text-[var(--gotham-text-primary)] hover:border-[var(--gotham-text-muted)] transition-colors disabled:opacity-50"
        >
          {isLoading
            ? (
              <span className="flex items-center gap-1.5">
                <svg
                  className="size-3 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading
              </span>
            )
            : (
              "Generate Data"
            )}
        </button>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[var(--gotham-status-ready)]" />
          <span className="text-[10px] text-[var(--gotham-text-muted)] uppercase tracking-wider">
            Connected
          </span>
        </div>
      </div>
    </header>
  );
}
