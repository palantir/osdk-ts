import React from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import {
  type EmployeeChange,
  type ReorgConfig,
  type ReorgConstraints,
  useReorgState,
} from "../hooks/useReorgState.js";
import { ReorgConfigStep } from "./ReorgConfigStep.js";
import { ReorgExecuteStep } from "./ReorgExecuteStep.js";
import { ReorgHeader } from "./ReorgHeader.js";
import { ReorgPreviewStep } from "./ReorgPreviewStep.js";
import { ReorgSelectStep } from "./ReorgSelectStep.js";

interface ReorgWizardProps {
  employees: Employee.OsdkInstance[];
  offices: Office.OsdkInstance[];
  onClose: () => void;
}

export function ReorgWizard({ employees, offices, onClose }: ReorgWizardProps) {
  const {
    state,
    dispatch,
    selectedCount,
    changesCount,
    canProceedToSelect,
    canProceedToPreview,
    canProceedToExecute,
    isExecuting,
  } = useReorgState();

  const handleNextStep = React.useCallback(() => {
    const steps = ["configure", "select", "preview", "execute"] as const;
    const currentIndex = steps.indexOf(state.step);
    if (currentIndex < steps.length - 1) {
      dispatch({ type: "SET_STEP", step: steps[currentIndex + 1] });
    }
  }, [state.step, dispatch]);

  const handlePrevStep = React.useCallback(() => {
    const steps = ["configure", "select", "preview", "execute"] as const;
    const currentIndex = steps.indexOf(state.step);
    if (currentIndex > 0) {
      dispatch({ type: "SET_STEP", step: steps[currentIndex - 1] });
    }
  }, [state.step, dispatch]);

  const handleReset = React.useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  const handleUpdateConfig = React.useCallback(
    (config: Partial<ReorgConfig>) =>
      dispatch({ type: "UPDATE_CONFIG", config }),
    [dispatch],
  );

  const handleUpdateConstraints = React.useCallback(
    (constraints: Partial<ReorgConstraints>) =>
      dispatch({ type: "UPDATE_CONSTRAINTS", constraints }),
    [dispatch],
  );

  const handleToggleEmployee = React.useCallback(
    (employeeNumber: number) =>
      dispatch({ type: "TOGGLE_EMPLOYEE", employeeNumber }),
    [dispatch],
  );

  const handleSelectAll = React.useCallback(
    (employeeNumbers: number[]) =>
      dispatch({ type: "SELECT_ALL", employeeNumbers }),
    [dispatch],
  );

  const handleSelectByOffice = React.useCallback(
    (employeeNumbers: number[]) =>
      dispatch({ type: "SELECT_BY_OFFICE", employeeNumbers }),
    [dispatch],
  );

  const handleClearSelection = React.useCallback(
    () => dispatch({ type: "CLEAR_SELECTION" }),
    [dispatch],
  );

  const handleSetAllChanges = React.useCallback(
    (changes: Map<number, EmployeeChange>) =>
      dispatch({ type: "SET_ALL_CHANGES", changes }),
    [dispatch],
  );

  const handleSetChange = React.useCallback(
    (employeeNumber: number, change: EmployeeChange) =>
      dispatch({ type: "SET_CHANGE", employeeNumber, change }),
    [dispatch],
  );

  const canProceed = React.useMemo(() => {
    switch (state.step) {
      case "configure":
        return canProceedToSelect;
      case "select":
        return canProceedToPreview;
      case "preview":
        return canProceedToExecute;
      case "execute":
        return false;
      default:
        return false;
    }
  }, [
    state.step,
    canProceedToSelect,
    canProceedToPreview,
    canProceedToExecute,
  ]);

  const canGoBack = state.step !== "configure" && !isExecuting;

  return (
    <div className="h-full flex flex-col bg-[var(--officenetwork-bg-surface)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)] flex items-start justify-between">
        <div>
          <div className="officenetwork-section-label text-[var(--officenetwork-status-error)] mb-1">
            Reorg Mode
          </div>
          <h2 className="text-lg font-semibold text-[var(--officenetwork-text-primary)] text-balance">
            Office Reorganization
          </h2>
        </div>
        <button
          onClick={onClose}
          disabled={isExecuting}
          className="p-1.5 text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Close reorg wizard"
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

      <ReorgHeader currentStep={state.step} />

      <div className="flex-1 overflow-auto">
        <div className={state.step === "configure" ? "block" : "hidden"}>
          <ReorgConfigStep
            config={state.config}
            offices={offices}
            onUpdateConfig={handleUpdateConfig}
            onUpdateConstraints={handleUpdateConstraints}
          />
        </div>

        <div className={state.step === "select" ? "block" : "hidden"}>
          <ReorgSelectStep
            employees={employees}
            offices={offices}
            selectedIds={state.selection.employeeIds}
            config={state.config}
            onToggleEmployee={handleToggleEmployee}
            onSelectAll={handleSelectAll}
            onSelectByOffice={handleSelectByOffice}
            onClearSelection={handleClearSelection}
          />
        </div>

        <div className={state.step === "preview" ? "block" : "hidden"}>
          <ReorgPreviewStep
            employees={employees}
            offices={offices}
            selectedIds={state.selection.employeeIds}
            changes={state.selection.changes}
            config={state.config}
            onSetAllChanges={handleSetAllChanges}
            onSetChange={handleSetChange}
          />
        </div>

        <div className={state.step === "execute" ? "block" : "hidden"}>
          <ReorgExecuteStep
            employees={employees}
            offices={offices}
            changes={state.selection.changes}
            execution={state.execution}
            metrics={state.metrics}
            dispatch={dispatch}
            onComplete={handleReset}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
        <div className="flex items-center justify-between">
          <div className="text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono tabular-nums">
            {selectedCount > 0 && (
              <span>
                <span className="text-[var(--officenetwork-status-warning)]">
                  {selectedCount}
                </span>{" "}
                selected
                {changesCount > 0 && (
                  <span className="ml-2">
                    <span className="text-[var(--officenetwork-status-ready)]">
                      {changesCount}
                    </span>{" "}
                    changes
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                onClick={handlePrevStep}
                className="px-3 py-1.5 text-xs font-medium text-[var(--officenetwork-text-secondary)] hover:text-[var(--officenetwork-text-primary)] border border-[var(--officenetwork-border-default)] rounded transition-colors"
              >
                Back
              </button>
            )}
            {state.step !== "execute" && (
              <button
                onClick={handleNextStep}
                disabled={!canProceed}
                className="px-4 py-1.5 text-xs font-medium bg-[var(--officenetwork-status-warning)] text-[var(--officenetwork-bg-base)] rounded hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.step === "preview" ? "Execute" : "Next"}
              </button>
            )}
            {state.step === "execute" && state.execution.status === "success"
              && (
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 text-xs font-medium bg-[var(--officenetwork-status-ready)] text-[var(--officenetwork-bg-base)] rounded hover:opacity-90 transition-opacity"
                >
                  Done
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
