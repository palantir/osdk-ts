import React from "react";
import type { ReorgStep } from "../hooks/useReorgState.js";

interface StepConfig {
  id: ReorgStep;
  label: string;
  shortLabel: string;
}

const steps: StepConfig[] = [
  { id: "configure", label: "Configure", shortLabel: "1" },
  { id: "select", label: "Select", shortLabel: "2" },
  { id: "preview", label: "Preview", shortLabel: "3" },
  { id: "execute", label: "Execute", shortLabel: "4" },
];

interface ReorgHeaderProps {
  currentStep: ReorgStep;
}

export function ReorgHeader({ currentStep }: ReorgHeaderProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="px-4 py-3 border-b border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
      <div className="flex items-center gap-2">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentIndex;

          return (
            <React.Fragment key={step.id}>
              <div className="flex items-center gap-1.5">
                <div
                  className={`size-6 rounded flex items-center justify-center text-xs font-bold transition-colors ${
                    isActive
                      ? "bg-[var(--officenetwork-status-warning)] text-[var(--officenetwork-bg-base)]"
                      : isCompleted
                      ? "bg-[var(--officenetwork-status-ready)] text-[var(--officenetwork-bg-base)]"
                      : "bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)] border border-[var(--officenetwork-border-default)]"
                  }`}
                >
                  {isCompleted
                    ? (
                      <svg
                        className="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )
                    : (
                      step.shortLabel
                    )}
                </div>
                <span
                  className={`text-xs font-medium ${
                    isActive
                      ? "text-[var(--officenetwork-status-warning)]"
                      : isCompleted
                      ? "text-[var(--officenetwork-status-ready)]"
                      : "text-[var(--officenetwork-text-muted)]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-px max-w-8 ${
                    index < currentIndex
                      ? "bg-[var(--officenetwork-status-ready)]"
                      : "bg-[var(--officenetwork-border-default)]"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
