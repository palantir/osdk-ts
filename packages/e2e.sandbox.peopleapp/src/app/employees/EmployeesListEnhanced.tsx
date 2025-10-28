import type { Osdk, PropertyKeys } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type EmployeeWithEnhancedProperties = Osdk.Instance<
  Employee,
  "$allBaseProperties",
  PropertyKeys<Employee>,
  {
    managerName: "string";
    reportCount: "integer";
    departmentSize: "integer";
    teamSize: "integer";
  }
>;

interface EmployeeListItemProps {
  item: EmployeeWithEnhancedProperties;
  isSelected: boolean;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

function EmployeeListItem(
  { item, isSelected, onSelect }: EmployeeListItemProps,
) {
  return (
    <ListItem
      isSelected={isSelected}
      onClick={() => onSelect(item)}
      primaryContent={item.fullName ?? "<full-name-missing>"}
      secondaryContent={
        <>
          <div>
            {item.adUsername ?? "<username-missing>"} - #{item.employeeNumber}
          </div>
          {item.managerName && <div>Manager: {item.managerName}</div>}
          {item.reportCount !== undefined && (
            <div>Direct Reports: {item.reportCount}</div>
          )}
          {item.departmentSize !== undefined && (
            <div>Department Size: {item.departmentSize}</div>
          )}
          {item.teamSize !== undefined && <div>Team Size: {item.teamSize}</div>}
        </>
      }
    />
  );
}

interface EmployeesListEnhancedProps {
  selected: Employee.OsdkInstance | undefined;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

export function EmployeesListEnhanced(props: EmployeesListEnhancedProps) {
  const [filterMode, setFilterMode] = useState<
    "basic" | "managers" | "highPerformers" | "intersection"
  >("basic");
  const [showPivotedData, setShowPivotedData] = useState(false);

  const basicEmployees = useOsdkObjects(Employee, {
    withProperties: {
      managerName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      reportCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      departmentSize: (base) =>
        base.pivotTo("peeps").pivotTo("lead").aggregate("$count"),
      teamSize: (base) =>
        base.pivotTo("lead").pivotTo("peeps").aggregate("$count"),
    },
    where: {
      department: "Media Team",
    },
    orderBy: {
      fullName: "asc",
    },
    pageSize: 20,
  });

  const managers = useOsdkObjects(Employee, {
    withProperties: {
      managerName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      reportCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      departmentSize: (base) =>
        base.pivotTo("peeps").pivotTo("lead").aggregate("$count"),
      teamSize: (base) =>
        base.pivotTo("lead").pivotTo("peeps").aggregate("$count"),
    },
    where: {
      department: "Media Team",
      reportCount: { $gt: 0 },
    },
    orderBy: {
      fullName: "asc",
    },
  });

  const locationBasedEmployees = useOsdkObjects(Employee, {
    withProperties: {
      managerName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      reportCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      departmentSize: (base) =>
        base.pivotTo("peeps").pivotTo("lead").aggregate("$count"),
      teamSize: (base) =>
        base.pivotTo("lead").pivotTo("peeps").aggregate("$count"),
    },
    where: {
      department: "Media Team",
      locationCity: { $startsWith: "New" },
    },
    orderBy: {
      locationCity: "asc",
    },
  });

  const managerBusinessArea = useOsdkObjects(Employee, {
    where: {
      department: "Media Team",
    },
    intersectWith: [
      {
        where: {
          businessArea: { $startsWith: "" },
        },
      },
      {
        where: {
          jobTitle: { $startsWith: "" },
        },
      },
    ],
    orderBy: {
      fullName: "asc",
    },
  });

  const employeesThroughManager = showPivotedData
    ? useOsdkObjects(Employee, {
      where: {
        fullName: "John Smith",
      },
      pivotTo: "peeps" as const,
    })
    : null;

  let displayData;
  let headerText;

  if (showPivotedData && employeesThroughManager) {
    displayData = employeesThroughManager as any;
    headerText = "John Smith's Direct Reports (via pivotTo)";
  } else {
    switch (filterMode) {
      case "managers":
        displayData = managers;
        headerText = "Managers (with Direct Reports)";
        break;
      case "highPerformers":
        displayData = locationBasedEmployees;
        headerText = "Employees in Cities Starting with 'New'";
        break;
      case "intersection":
        displayData = managerBusinessArea;
        headerText = "Intersection: Media Team ∩ Business Area ∩ Job Title";
        break;
      default:
        displayData = basicEmployees;
        headerText = "All Media Team Employees";
    }
  }

  const EmployeeListItemWithRdp = EmployeeListItem as React.FC<{
    item: Employee.OsdkInstance;
    isSelected: boolean;
    onSelect: (item: Employee.OsdkInstance) => void;
  }>;

  return (
    <div>
      <div style={{ marginBottom: 16, padding: 8, backgroundColor: "#f0f0f0" }}>
        <h3>Filter Options (Showcasing new useOsdkObjects features)</h3>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <button
            onClick={() => {
              setFilterMode("basic");
              setShowPivotedData(false);
            }}
            style={{
              fontWeight: filterMode === "basic" && !showPivotedData
                ? "bold"
                : "normal",
            }}
          >
            All Employees
          </button>
          <button
            onClick={() => {
              setFilterMode("managers");
              setShowPivotedData(false);
            }}
            style={{
              fontWeight: filterMode === "managers" && !showPivotedData
                ? "bold"
                : "normal",
            }}
          >
            Managers Only (RDP Filter)
          </button>
          <button
            onClick={() => {
              setFilterMode("highPerformers");
              setShowPivotedData(false);
            }}
            style={{
              fontWeight: filterMode === "highPerformers" && !showPivotedData
                ? "bold"
                : "normal",
            }}
          >
            Location Filter
          </button>
          <button
            onClick={() => {
              setFilterMode("intersection");
              setShowPivotedData(false);
            }}
            style={{
              fontWeight: filterMode === "intersection" && !showPivotedData
                ? "bold"
                : "normal",
            }}
          >
            Intersection (Dept + Business + JobTitle)
          </button>
          <button
            onClick={() => setShowPivotedData(true)}
            style={{ fontWeight: showPivotedData ? "bold" : "normal" }}
          >
            PivotTo Example
          </button>
        </div>

        {displayData.isLoading && <div>Loading...</div>}
        {displayData.error && (
          <div style={{ color: "red" }}>Error: {displayData.error.message}</div>
        )}

        <div style={{ fontSize: 12, color: "#666" }}>
          {displayData.data && `Found ${displayData.data.length} employees`}
          {displayData.fetchMore && " (more available)"}
        </div>
      </div>

      <List<Employee>
        header={headerText}
        items={displayData}
        Component={EmployeeListItemWithRdp}
        {...props}
      />

      {displayData.fetchMore && (
        <button
          onClick={() => displayData.fetchMore?.()}
          disabled={displayData.isLoading}
          style={{ marginTop: 8 }}
        >
          Load More
        </button>
      )}
    </div>
  );
}
