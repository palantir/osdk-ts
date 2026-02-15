import React from "react";

export type ReorgStep = "configure" | "select" | "preview" | "execute";
export type ReorgType = "office" | "team" | "both";
export type ReorgAlgorithm = "manual" | "shuffle" | "swap" | "consolidate";

export interface EmployeeChange {
  targetOfficeId?: string;
  targetTeam?: string;
  targetDepartment?: string;
  targetLeadEmployeeNumber?: number;
}

export interface EmployeeSnapshot {
  employeeNumber: number;
  originalValues: {
    primaryOfficeId?: string;
    team?: string;
    department?: string;
    leadEmployeeNumber?: number;
    emailPrimaryWork?: string;
  };
}

export interface ExecutionError {
  type: "network" | "validation" | "server" | "unknown";
  message: string;
  employeeNumber?: number;
  retryable: boolean;
}

export interface ReorgConstraints {
  keepHeadcountBalanced: boolean;
  headcountTolerance: number;
  keepTeamComposition: boolean;
  maxMovesPerOffice: number | null;
}

export interface ReorgConfig {
  reorgType: ReorgType;
  algorithm: ReorgAlgorithm;
  constraints: ReorgConstraints;
  swapOfficeIds?: [string, string];
  consolidateOfficeId?: string;
  randomMoveCount?: number;
}

export interface ReorgSelection {
  employeeIds: Set<number>;
  changes: Map<number, EmployeeChange>;
}

export interface ReorgExecution {
  status: "idle" | "running" | "success" | "error" | "rolling-back";
  progress: { completed: number; total: number };
  snapshots: EmployeeSnapshot[];
  errors: ExecutionError[];
}

export interface ReorgMetrics {
  startTime: number | null;
  endTime: number | null;
  actionsExecuted: number;
}

export interface ReorgState {
  step: ReorgStep;
  config: ReorgConfig;
  selection: ReorgSelection;
  execution: ReorgExecution;
  metrics: ReorgMetrics;
}

export type ReorgAction =
  | { type: "SET_STEP"; step: ReorgStep }
  | { type: "UPDATE_CONFIG"; config: Partial<ReorgConfig> }
  | { type: "UPDATE_CONSTRAINTS"; constraints: Partial<ReorgConstraints> }
  | { type: "TOGGLE_EMPLOYEE"; employeeNumber: number }
  | { type: "SELECT_ALL"; employeeNumbers: number[] }
  | { type: "SELECT_BY_OFFICE"; employeeNumbers: number[] }
  | { type: "CLEAR_SELECTION" }
  | { type: "SET_CHANGE"; employeeNumber: number; change: EmployeeChange }
  | { type: "SET_ALL_CHANGES"; changes: Map<number, EmployeeChange> }
  | { type: "START_EXECUTION"; total: number }
  | { type: "ADD_SNAPSHOT"; snapshot: EmployeeSnapshot }
  | { type: "UPDATE_PROGRESS"; completed: number }
  | { type: "EXECUTION_SUCCESS" }
  | { type: "EXECUTION_ERROR"; error: ExecutionError }
  | { type: "START_ROLLBACK" }
  | { type: "ROLLBACK_COMPLETE" }
  | { type: "RESET" };

const initialConstraints: ReorgConstraints = {
  keepHeadcountBalanced: true,
  headcountTolerance: 2,
  keepTeamComposition: false,
  maxMovesPerOffice: null,
};

const initialConfig: ReorgConfig = {
  reorgType: "office",
  algorithm: "manual",
  constraints: initialConstraints,
};

const initialState: ReorgState = {
  step: "configure",
  config: initialConfig,
  selection: {
    employeeIds: new Set(),
    changes: new Map(),
  },
  execution: {
    status: "idle",
    progress: { completed: 0, total: 0 },
    snapshots: [],
    errors: [],
  },
  metrics: {
    startTime: null,
    endTime: null,
    actionsExecuted: 0,
  },
};

function reorgReducer(state: ReorgState, action: ReorgAction): ReorgState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.step };

    case "UPDATE_CONFIG":
      return {
        ...state,
        config: { ...state.config, ...action.config },
      };

    case "UPDATE_CONSTRAINTS":
      return {
        ...state,
        config: {
          ...state.config,
          constraints: { ...state.config.constraints, ...action.constraints },
        },
      };

    case "TOGGLE_EMPLOYEE": {
      const newIds = new Set(state.selection.employeeIds);
      if (newIds.has(action.employeeNumber)) {
        newIds.delete(action.employeeNumber);
        const newChanges = new Map(state.selection.changes);
        newChanges.delete(action.employeeNumber);
        return {
          ...state,
          selection: { employeeIds: newIds, changes: newChanges },
        };
      } else {
        newIds.add(action.employeeNumber);
        return {
          ...state,
          selection: { ...state.selection, employeeIds: newIds },
        };
      }
    }

    case "SELECT_ALL":
      return {
        ...state,
        selection: {
          ...state.selection,
          employeeIds: new Set(action.employeeNumbers),
        },
      };

    case "SELECT_BY_OFFICE":
      return {
        ...state,
        selection: {
          ...state.selection,
          employeeIds: new Set([
            ...state.selection.employeeIds,
            ...action.employeeNumbers,
          ]),
        },
      };

    case "CLEAR_SELECTION":
      return {
        ...state,
        selection: {
          employeeIds: new Set(),
          changes: new Map(),
        },
      };

    case "SET_CHANGE": {
      const newChanges = new Map(state.selection.changes);
      newChanges.set(action.employeeNumber, action.change);
      return {
        ...state,
        selection: { ...state.selection, changes: newChanges },
      };
    }

    case "SET_ALL_CHANGES":
      return {
        ...state,
        selection: { ...state.selection, changes: action.changes },
      };

    case "START_EXECUTION":
      return {
        ...state,
        execution: {
          status: "running",
          progress: { completed: 0, total: action.total },
          snapshots: [],
          errors: [],
        },
        metrics: {
          startTime: Date.now(),
          endTime: null,
          actionsExecuted: 0,
        },
      };

    case "ADD_SNAPSHOT":
      return {
        ...state,
        execution: {
          ...state.execution,
          snapshots: [...state.execution.snapshots, action.snapshot],
        },
      };

    case "UPDATE_PROGRESS":
      return {
        ...state,
        execution: {
          ...state.execution,
          progress: {
            ...state.execution.progress,
            completed: action.completed,
          },
        },
        metrics: {
          ...state.metrics,
          actionsExecuted: action.completed,
        },
      };

    case "EXECUTION_SUCCESS":
      return {
        ...state,
        execution: { ...state.execution, status: "success" },
        metrics: { ...state.metrics, endTime: Date.now() },
      };

    case "EXECUTION_ERROR":
      return {
        ...state,
        execution: {
          ...state.execution,
          status: "error",
          errors: [...state.execution.errors, action.error],
        },
        metrics: { ...state.metrics, endTime: Date.now() },
      };

    case "START_ROLLBACK":
      return {
        ...state,
        execution: { ...state.execution, status: "rolling-back" },
      };

    case "ROLLBACK_COMPLETE":
      return {
        ...state,
        execution: {
          ...state.execution,
          status: "idle",
          snapshots: [],
        },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export interface UseReorgStateResult {
  state: ReorgState;
  dispatch: React.Dispatch<ReorgAction>;
  selectedCount: number;
  changesCount: number;
  canProceedToSelect: boolean;
  canProceedToPreview: boolean;
  canProceedToExecute: boolean;
  isExecuting: boolean;
}

export function useReorgState(): UseReorgStateResult {
  const [state, dispatch] = React.useReducer(reorgReducer, initialState);

  const selectedCount = React.useMemo(
    () => state.selection.employeeIds.size,
    [state.selection.employeeIds],
  );

  const changesCount = React.useMemo(
    () => state.selection.changes.size,
    [state.selection.changes],
  );

  const canProceedToSelect = React.useMemo(() => {
    if (state.config.algorithm === "swap") {
      const [officeA, officeB] = state.config.swapOfficeIds ?? [];
      return Boolean(officeA && officeB);
    }
    if (state.config.algorithm === "consolidate") {
      return Boolean(state.config.consolidateOfficeId);
    }
    return true;
  }, [
    state.config.algorithm,
    state.config.swapOfficeIds,
    state.config.consolidateOfficeId,
  ]);

  const canProceedToPreview = React.useMemo(() => {
    return selectedCount > 0;
  }, [selectedCount]);

  const canProceedToExecute = React.useMemo(() => {
    return changesCount > 0;
  }, [changesCount]);

  const isExecuting = React.useMemo(() => {
    return state.execution.status === "running"
      || state.execution.status === "rolling-back";
  }, [state.execution.status]);

  return {
    state,
    dispatch,
    selectedCount,
    changesCount,
    canProceedToSelect,
    canProceedToPreview,
    canProceedToExecute,
    isExecuting,
  };
}
