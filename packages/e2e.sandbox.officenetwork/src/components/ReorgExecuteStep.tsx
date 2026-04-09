import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import { modifyEmployee } from "../generatedNoCheck2/index.js";
import type {
  EmployeeChange,
  EmployeeSnapshot,
  ExecutionError,
  ReorgAction,
  ReorgExecution,
  ReorgMetrics,
} from "../hooks/useReorgState.js";

interface ReorgExecuteStepProps {
  employees: Employee.OsdkInstance[];
  offices: Office.OsdkInstance[];
  changes: Map<number, EmployeeChange>;
  execution: ReorgExecution;
  metrics: ReorgMetrics;
  dispatch: React.Dispatch<ReorgAction>;
  onComplete: () => void;
}

const ACTION_TIMEOUT_MS = 30000;

class TimeoutError extends Error {
  constructor(timeoutMs: number) {
    super(`Request timed out after ${timeoutMs}ms`);
    this.name = "TimeoutError";
  }
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new TimeoutError(timeoutMs));
    }, timeoutMs);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error: unknown) => {
        clearTimeout(timer);
        reject(error instanceof Error ? error : new Error(String(error)));
      });
  });
}

function isNetworkError(error: unknown): boolean {
  if (error instanceof TimeoutError) {
    return true;
  }
  if (error instanceof TypeError) {
    const message = error.message.toLowerCase();
    return message.includes("network") || message.includes("fetch failed")
      || message.includes("failed to fetch");
  }
  if (typeof DOMException !== "undefined" && error instanceof DOMException) {
    return error.name === "NetworkError";
  }
  return false;
}

export function ReorgExecuteStep({
  employees,
  offices,
  changes,
  execution,
  metrics,
  dispatch,
  onComplete,
}: ReorgExecuteStepProps) {
  const { applyAction } = useOsdkAction(modifyEmployee);
  const [logs, setLogs] = React.useState<string[]>([]);
  const hasStartedRef = React.useRef(false);

  const employeeMap = React.useMemo(() => {
    const map = new Map<number, Employee.OsdkInstance>();
    employees.forEach((e) => map.set(e.employeeNumber, e));
    return map;
  }, [employees]);

  const officeMap = React.useMemo(() => {
    const map = new Map<string, Office.OsdkInstance>();
    offices.forEach((o) => map.set(o.primaryKey_, o));
    return map;
  }, [offices]);

  const addLog = React.useCallback((message: string) => {
    setLogs((
      prev,
    ) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }, []);

  const executeReorg = React.useCallback(async () => {
    const changesToExecute = Array.from(changes.entries()).filter(
      ([employeeNumber, change]) => {
        const employee = employeeMap.get(employeeNumber);
        return employee && change.targetOfficeId
          && change.targetOfficeId !== employee.primaryOfficeId;
      },
    );

    if (changesToExecute.length === 0) {
      addLog("No changes to execute");
      return;
    }

    dispatch({ type: "START_EXECUTION", total: changesToExecute.length });
    addLog(`Starting reorg: ${changesToExecute.length} changes`);

    for (let i = 0; i < changesToExecute.length; i++) {
      const [employeeNumber, change] = changesToExecute[i];
      const employee = employeeMap.get(employeeNumber);

      if (!employee) {
        addLog(`Skipping employee ${employeeNumber}: not found`);
        continue;
      }

      const snapshot: EmployeeSnapshot = {
        employeeNumber,
        originalValues: {
          primaryOfficeId: employee.primaryOfficeId ?? undefined,
          team: employee.team ?? undefined,
          department: employee.department ?? undefined,
          leadEmployeeNumber: employee.leadEmployeeNumber ?? undefined,
          emailPrimaryWork: employee.emailPrimaryWork ?? undefined,
        },
      };

      dispatch({ type: "ADD_SNAPSHOT", snapshot });

      const fromOffice = employee.primaryOfficeId
        ? officeMap.get(employee.primaryOfficeId)
        : null;
      const toOffice = change.targetOfficeId
        ? officeMap.get(change.targetOfficeId)
        : null;

      try {
        addLog(
          `Moving ${employee.fullName}: ${fromOffice?.name ?? "none"} → ${
            toOffice?.name ?? "none"
          }`,
        );

        await withTimeout(
          applyAction({
            employee,
            emailPrimaryWork: employee.emailPrimaryWork
              ?? `employee${employeeNumber}@example.com`,
            primary_office_id: change.targetOfficeId,
            team: change.targetTeam,
            department: change.targetDepartment,
            leadEmployeeNumber: change.targetLeadEmployeeNumber,
          }),
          ACTION_TIMEOUT_MS,
        );

        dispatch({ type: "UPDATE_PROGRESS", completed: i + 1 });
        addLog(`✓ ${employee.fullName} moved successfully`);
      } catch (error) {
        const execError: ExecutionError = {
          type: "unknown",
          message: error instanceof Error ? error.message : String(error),
          employeeNumber,
          retryable: false,
        };

        if (isNetworkError(error)) {
          execError.type = "network";
          execError.retryable = true;
        }

        addLog(`✗ Failed to move ${employee.fullName}: ${execError.message}`);
        dispatch({ type: "EXECUTION_ERROR", error: execError });
        return;
      }
    }

    dispatch({ type: "EXECUTION_SUCCESS" });
    addLog("Reorg completed successfully!");
  }, [changes, employeeMap, officeMap, dispatch, applyAction, addLog]);

  const executeRollback = React.useCallback(async () => {
    if (execution.snapshots.length === 0) {
      addLog("No snapshots to rollback");
      return;
    }

    dispatch({ type: "START_ROLLBACK" });
    addLog(`Starting rollback: ${execution.snapshots.length} changes`);

    const reversedSnapshots = [...execution.snapshots].reverse();

    for (const snapshot of reversedSnapshots) {
      const employee = employeeMap.get(snapshot.employeeNumber);

      if (!employee) {
        addLog(`Skipping rollback for ${snapshot.employeeNumber}: not found`);
        continue;
      }

      try {
        addLog(`Rolling back ${employee.fullName}...`);

        await withTimeout(
          applyAction({
            employee,
            emailPrimaryWork: snapshot.originalValues.emailPrimaryWork
              ?? employee.emailPrimaryWork
              ?? `employee${snapshot.employeeNumber}@example.com`,
            primary_office_id: snapshot.originalValues.primaryOfficeId,
            team: snapshot.originalValues.team,
            department: snapshot.originalValues.department,
            leadEmployeeNumber: snapshot.originalValues.leadEmployeeNumber,
          }),
          ACTION_TIMEOUT_MS,
        );

        addLog(`✓ ${employee.fullName} rolled back`);
      } catch (error) {
        addLog(`✗ Failed to rollback ${employee.fullName}: ${error}`);
      }
    }

    dispatch({ type: "ROLLBACK_COMPLETE" });
    addLog("Rollback completed");
  }, [execution.snapshots, employeeMap, dispatch, applyAction, addLog]);

  const handleRollback = React.useCallback(() => {
    if (
      window.confirm(
        `This will revert ${execution.snapshots.length} changes. This cannot be undone. Continue?`,
      )
    ) {
      void executeRollback();
    }
  }, [execution.snapshots.length, executeRollback]);

  React.useEffect(() => {
    if (
      !hasStartedRef.current && execution.status === "idle" && changes.size > 0
    ) {
      hasStartedRef.current = true;
      void executeReorg();
    }
  }, [execution.status, changes.size, executeReorg]);

  const progressPercent = execution.progress.total > 0
    ? (execution.progress.completed / execution.progress.total) * 100
    : 0;

  const elapsedTime = metrics.startTime
    ? ((metrics.endTime ?? Date.now()) - metrics.startTime) / 1000
    : 0;

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-[var(--officenetwork-text-primary)]">
            {execution.status === "idle" && "Preparing..."}
            {execution.status === "running" && "Executing reorg..."}
            {execution.status === "success" && "Reorg complete!"}
            {execution.status === "error" && "Reorg failed"}
            {execution.status === "rolling-back" && "Rolling back..."}
          </div>
          <div className="text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono tabular-nums">
            {execution.progress.completed} / {execution.progress.total}
          </div>
        </div>

        <div className="h-2 bg-[var(--officenetwork-bg-elevated)] rounded overflow-hidden">
          <div
            className={`h-full rounded transition-all duration-150 ${
              execution.status === "error"
                ? "bg-[var(--officenetwork-status-error)]"
                : execution.status === "success"
                ? "bg-[var(--officenetwork-status-ready)]"
                : "bg-[var(--officenetwork-status-warning)]"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {execution.status !== "idle" && (
          <div className="flex items-center gap-4 mt-3 text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono">
            <span className="tabular-nums">
              {elapsedTime.toFixed(1)}s elapsed
            </span>
            <span className="tabular-nums">
              {metrics.actionsExecuted} actions
            </span>
          </div>
        )}
      </div>

      {/* Logs */}
      <div className="flex-1 overflow-auto p-4">
        <div className="officenetwork-mono text-xs space-y-1 text-[var(--officenetwork-text-secondary)]">
          {logs.map((log, i) => (
            <div
              key={i}
              className={log.includes("✓")
                ? "text-[var(--officenetwork-status-ready)]"
                : log.includes("✗")
                ? "text-[var(--officenetwork-status-error)]"
                : ""}
            >
              {log}
            </div>
          ))}
          {execution.status === "running" && (
            <div className="animate-pulse text-[var(--officenetwork-status-warning)]">
              Processing...
            </div>
          )}
        </div>
      </div>

      {/* Error state */}
      {execution.status === "error" && execution.snapshots.length > 0 && (
        <div className="p-4 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-status-error)]/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[var(--officenetwork-status-error)]">
                Execution failed
              </div>
              <div className="text-xs text-[var(--officenetwork-text-muted)]">
                {execution.snapshots.length}{" "}
                changes were applied before the error
              </div>
            </div>
            <button
              onClick={handleRollback}
              className="px-3 py-1.5 text-xs font-medium text-[var(--officenetwork-status-error)] border border-[var(--officenetwork-status-error)]/50 rounded hover:bg-[var(--officenetwork-status-error)]/10 transition-colors"
            >
              Rollback Changes
            </button>
          </div>
        </div>
      )}

      {/* Success state */}
      {execution.status === "success" && (
        <div className="p-4 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-status-ready)]/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[var(--officenetwork-status-ready)]">
                Reorg completed successfully
              </div>
              <div className="text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono tabular-nums">
                {execution.progress.completed} employees moved in{" "}
                {elapsedTime.toFixed(1)}s
              </div>
            </div>
            <button
              onClick={onComplete}
              className="px-3 py-1.5 text-xs font-medium bg-[var(--officenetwork-status-ready)] text-[var(--officenetwork-bg-base)] rounded hover:opacity-90 transition-opacity"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
