import type { Employee } from "../generatedNoCheck2/index.js";
import { getHierarchyLevel, HIERARCHY_COLORS } from "../utils/hierarchy.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface PersonListSectionProps {
  title: string;
  people: Employee.OsdkInstance[] | undefined;
  count?: number;
  isLoading: boolean;
  maxVisible: number;
  maxHeight?: string;
  countColor: string;
  emptyMessage: string;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
}

export function PersonListSection({
  title,
  people,
  count,
  isLoading,
  maxVisible,
  maxHeight = "max-h-24",
  countColor,
  emptyMessage,
  onSelectEmployee,
}: PersonListSectionProps) {
  const displayCount = count ?? people?.length;
  const hasCount = displayCount !== undefined;

  return (
    <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="officenetwork-section-label">{title}</div>
        <div
          className="text-lg font-semibold tabular-nums"
          style={{ color: countColor }}
        >
          {hasCount ? displayCount : "—"}
        </div>
        {isLoading && <LoadingIndicator size="sm" />}
      </div>
      {people && people.length > 0
        ? (
          <div className={`space-y-px ${maxHeight} overflow-auto`}>
            {people.slice(0, maxVisible).map((person) => {
              const level = getHierarchyLevel(person.jobTitle);
              return (
                <button
                  key={person.employeeNumber}
                  onClick={() => onSelectEmployee(person)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-left hover:bg-[var(--officenetwork-bg-elevated)] transition-colors group"
                >
                  <div
                    className="size-2 rounded-sm shrink-0"
                    style={{ backgroundColor: HIERARCHY_COLORS[level] }}
                  />
                  <span className="text-sm text-[var(--officenetwork-text-secondary)] group-hover:text-[var(--officenetwork-accent-cyan)] truncate">
                    {person.fullName ?? `#${person.employeeNumber}`}
                  </span>
                </button>
              );
            })}
            {people.length > maxVisible && (
              <div className="text-[10px] text-[var(--officenetwork-text-muted)] px-2 py-1 officenetwork-mono">
                +{people.length - maxVisible} more
              </div>
            )}
          </div>
        )
        : !isLoading
        ? (
          <div className="text-sm text-[var(--officenetwork-text-muted)]">
            {emptyMessage}
          </div>
        )
        : null}
    </div>
  );
}
