import type { DerivedProperty } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react/experimental";
import React from "react";
import { AggregationStatsPanel } from "./components/AggregationStatsPanel.js";
import { EmployeePanel } from "./components/EmployeePanel.js";
import { LeftSidebar } from "./components/LeftSidebar.js";
import { OfficeMap } from "./components/OfficeMap.js";
import { OfficePanel } from "./components/OfficePanel.js";
import { ReorgWizard } from "./components/ReorgWizard.js";
import { StatusBar } from "./components/StatusBar.js";
import { TopBar } from "./components/TopBar.js";
import { Employee, Office } from "./generatedNoCheck2/index.js";
import { getHierarchyLevel, type HierarchyLevel } from "./utils/hierarchy.js";
import type { LensMode } from "./utils/lensTheme.js";

const officeWithRdps = {
  employeeCount: (base: DerivedProperty.Builder<Office, false>) =>
    base.pivotTo("occupants").aggregate("$count"),
};

type OfficeWithRdps = Office.OsdkInstance & { employeeCount?: number };

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="h-dvh flex items-center justify-center bg-[var(--officenetwork-bg-base)]">
          <div className="text-center max-w-md p-8">
            <div className="size-12 mx-auto mb-4 rounded-full bg-[var(--officenetwork-status-error)]/10 flex items-center justify-center">
              <svg
                className="size-6 text-[var(--officenetwork-status-error)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-[var(--officenetwork-text-primary)] mb-2">
              Something went wrong
            </h1>
            <p className="text-sm text-[var(--officenetwork-text-muted)] mb-4 text-pretty">
              {this.state.error?.message ?? "An unexpected error occurred"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 text-sm font-medium bg-[var(--officenetwork-accent-cyan)] text-[var(--officenetwork-bg-base)] rounded hover:bg-[var(--officenetwork-accent-cyan)]/90 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [selectedOffice, setSelectedOffice] = React.useState<
    Office.OsdkInstance | null
  >(null);
  const [selectedEmployee, setSelectedEmployee] = React.useState<
    Employee.OsdkInstance | null
  >(null);
  const [lensMode, setLensMode] = React.useState<LensMode>("offices");
  const [filteredLevel, setFilteredLevel] = React.useState<
    HierarchyLevel | null
  >(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const { data: offices, isLoading: officesLoading, error: officesError } =
    useOsdkObjects(Office, {
      pageSize: 100,
      orderBy: { name: "asc" },
      withProperties: officeWithRdps,
    });

  const {
    data: employees,
    isLoading: employeesLoading,
    error: employeesError,
  } = useOsdkObjects(Employee, {
    pageSize: 200,
    orderBy: { fullName: "asc" },
  });

  if (officesError) {
    console.error("Error loading offices:", officesError);
  }

  if (employeesError) {
    console.error("Error loading employees:", employeesError);
  }

  const handleSelectOffice = React.useCallback(
    (office: OfficeWithRdps) => {
      setSelectedOffice(office);
      setSelectedEmployee(null);
    },
    [],
  );

  const handleSelectEmployee = React.useCallback(
    (employee: Employee.OsdkInstance) => {
      setSelectedEmployee(employee);
    },
    [],
  );

  const handleSelectEmployeeWithOffice = React.useCallback(
    (employee: Employee.OsdkInstance) => {
      const level = getHierarchyLevel(employee.jobTitle);

      if (selectedEmployee?.employeeNumber === employee.employeeNumber) {
        setFilteredLevel(filteredLevel ? null : level);
      } else {
        setSelectedEmployee(employee);
        setFilteredLevel(level);
        const employeeOfficeId = employee.primaryOfficeId;
        if (employeeOfficeId && offices) {
          const office = offices.find((o) =>
            o.primaryKey_ === employeeOfficeId
          );
          if (office) {
            setSelectedOffice(office);
          }
        }
      }
    },
    [offices, selectedEmployee, filteredLevel],
  );

  const handleCloseOfficePanel = React.useCallback(() => {
    setSelectedOffice(null);
    setSelectedEmployee(null);
  }, []);

  const handleCloseEmployeePanel = React.useCallback(() => {
    setSelectedEmployee(null);
  }, []);

  const handlePanToEmployee = React.useCallback(
    (employee: Employee.OsdkInstance) => {
      const employeeOfficeId = employee.primaryOfficeId;
      if (employeeOfficeId && offices) {
        const office = offices.find((o) => o.primaryKey_ === employeeOfficeId);
        if (office) {
          setSelectedOffice(office);
        }
      }
    },
    [offices],
  );

  const handleLensModeChange = React.useCallback((mode: LensMode) => {
    setLensMode(mode);
    setFilteredLevel(null);
  }, []);

  const handleFilterLevelChange = React.useCallback(
    (level: HierarchyLevel | null) => {
      setFilteredLevel(level);
    },
    [],
  );

  const handleGenerateData = React.useCallback(() => {
    window.location.reload();
  }, []);

  const showOfficePanel = selectedOffice && !selectedEmployee
    && lensMode === "offices";
  const showEmployeePanel = selectedEmployee;
  const showReorgWizard = lensMode === "reorg";

  return (
    <div className="h-dvh flex flex-col bg-[var(--officenetwork-bg-base)]">
      {/* Top Bar */}
      <TopBar
        lensMode={lensMode}
        onLensModeChange={handleLensModeChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onGenerateData={handleGenerateData}
        isLoading={officesLoading || employeesLoading}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar
          offices={offices ?? []}
          employees={employees ?? []}
          selectedOffice={selectedOffice}
          selectedEmployee={selectedEmployee}
          onSelectOffice={handleSelectOffice}
          onSelectEmployee={handleSelectEmployeeWithOffice}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          isLoadingOffices={officesLoading}
          isLoadingEmployees={employeesLoading}
        />

        {/* Map Area */}
        <div className="flex-1 relative">
          {offices && offices.length > 0
            ? (
              <OfficeMap
                offices={offices}
                employees={employees ?? []}
                selectedOffice={selectedOffice}
                selectedEmployee={selectedEmployee}
                onSelectOffice={handleSelectOffice}
                onSelectEmployee={handleSelectEmployeeWithOffice}
                lensMode={lensMode}
                filteredLevel={filteredLevel}
                onFilterLevelChange={handleFilterLevelChange}
                freezeMap={lensMode === "reorg"}
              />
            )
            : !officesLoading
            ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg text-[var(--officenetwork-text-muted)] text-balance">
                    No offices found
                  </div>
                  <div className="text-xs text-[var(--officenetwork-text-muted)] mt-2 text-pretty">
                    Click "Generate Data" to create sample data
                  </div>
                </div>
              </div>
            )
            : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 text-[var(--officenetwork-text-muted)]">
                  <svg
                    className="size-5 animate-spin"
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
                  <span className="text-sm">Loading data...</span>
                </div>
              </div>
            )}

          {/* Error indicators */}
          {(officesError || employeesError) && (
            <div className="absolute top-4 left-4 z-10">
              <div className="officenetwork-badge officenetwork-badge-error">
                {officesError
                  ? "Failed to load offices"
                  : "Failed to load employees"}
              </div>
            </div>
          )}

          {/* Aggregation Stats Panel */}
          <div className="absolute bottom-4 right-4 z-10">
            <AggregationStatsPanel />
          </div>
        </div>

        {/* Right Panels */}
        {showOfficePanel && (
          <div className="w-80 shrink-0 h-full border-l border-[var(--officenetwork-border-default)]">
            <OfficePanel
              office={selectedOffice}
              onSelectEmployee={handleSelectEmployee}
              onClose={handleCloseOfficePanel}
            />
          </div>
        )}

        {showEmployeePanel && (
          <div className="w-96 shrink-0 h-full border-l border-[var(--officenetwork-border-default)]">
            <EmployeePanel
              employee={selectedEmployee}
              currentOffice={selectedOffice}
              onSelectEmployee={handleSelectEmployee}
              onPanToEmployee={handlePanToEmployee}
              onClose={handleCloseEmployeePanel}
              lensMode={lensMode}
            />
          </div>
        )}

        {showReorgWizard && offices && employees && (
          <div className="w-[480px] shrink-0 h-full border-l border-[var(--officenetwork-border-default)]">
            <ReorgWizard
              employees={employees}
              offices={offices}
              onClose={() => handleLensModeChange("offices")}
            />
          </div>
        )}
      </div>

      {/* Status Bar */}
      <StatusBar
        officeCount={offices?.length ?? 0}
        employeeCount={employees?.length ?? 0}
        isLoadingOffices={officesLoading}
        isLoadingEmployees={employeesLoading}
        lensMode={lensMode}
        selectedOffice={selectedOffice?.name ?? null}
        selectedEmployee={selectedEmployee?.fullName ?? null}
      />
    </div>
  );
}

function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

export default AppWithErrorBoundary;
