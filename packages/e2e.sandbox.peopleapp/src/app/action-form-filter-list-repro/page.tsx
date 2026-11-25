import type { ObjectSet } from "@osdk/api";
import type {
  FormError,
  FormFieldDefinition,
} from "@osdk/react-components/action-form";
import { ActionForm } from "@osdk/react-components/action-form";
import type {
  FilterChangeEvent,
  FilterDefinitionUnion,
} from "@osdk/react-components/filter-list";
import { FilterList } from "@osdk/react-components/filter-list";
import type { ColumnDefinition } from "@osdk/react-components/object-table";
import { ObjectTable } from "@osdk/react-components/object-table";
import React, { useCallback, useMemo, useState } from "react";

import { Button } from "../../components/Button.js";
import { $ } from "../../foundryClient.js";
import { Employee, modifyEmployee } from "../../generatedNoCheck2/index.js";
import { useFilterStatesContext } from "../filterStatesContext.js";

import "./page.css";

const EMPLOYEE_FILTERS: Array<FilterDefinitionUnion<Employee>> = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "locationCity",
    key: "locationCity",
    label: "Location city",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "workerType",
    key: "workerType",
    label: "Worker type",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "team",
    key: "team",
    label: "Team contains",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT", value: "" },
  },
  {
    type: "PROPERTY",
    id: "firstFullTimeStartDate",
    key: "firstFullTimeStartDate",
    label: "Full-time start date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
  {
    type: "HAS_LINK",
    id: "hasManager",
    linkName: "lead",
    label: "Has a manager",
  },
  {
    type: "LINKED_PROPERTY",
    id: "managerName",
    linkName: "lead",
    linkedPropertyKey: "fullName",
    filterComponent: "MULTI_SELECT",
    label: "Manager Name",
  },
  {
    type: "LINKED_PROPERTY",
    id: "officeName",
    linkName: "primaryOffice",
    linkedPropertyKey: "name",
    filterComponent: "LISTOGRAM",
    label: "Office Name",
  },
];

type RDP = { primaryOfficeName: "string"; managerName: "string" };
const EMPLOYEE_COLUMNS: Array<ColumnDefinition<Employee, RDP>> = [
  {
    locator: { type: "property", id: "fullName" },
    columnName: "Name",
    width: 220,
  },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (os) => os.pivotTo("lead").selectProperty("fullName"),
    },
    columnName: "Manager Name",
  },
  {
    locator: { type: "property", id: "department" },
    columnName: "Department",
    width: 180,
  },
  {
    locator: { type: "property", id: "team" },
    columnName: "Team",
    width: 180,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    columnName: "Job title",
    width: 220,
  },
  {
    locator: { type: "property", id: "locationCity" },
    columnName: "City",
    width: 160,
  },
  {
    locator: { type: "property", id: "workerType" },
    columnName: "Worker type",
    width: 160,
  },
  {
    locator: {
      type: "rdp",
      id: "primaryOfficeName",
      creator: (os) => os.pivotTo("primaryOffice").selectProperty("name"),
    },
    columnName: "Linked Office Name",
  },
];

const DEFAULT_ORDER_BY: Array<{
  property: Employee.PropertyKeys;
  direction: "asc" | "desc";
}> = [{ property: "fullName", direction: "asc" }];
const MODIFY_EMPLOYEE_FIELDS = [
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee to update",
    isRequired: true,
    helperText:
      "Pick any employee from the ontology. The submit path uses ActionForm → useOsdkAction.",
    helperTextPlacement: "bottom",
    fieldComponentProps: {
      objectType: Employee,
      placeholder: "Search employees…",
    },
  },
  {
    fieldKey: "department",
    fieldComponent: "TEXT_INPUT",
    label: "New department",
    isRequired: true,
    placeholder: "Engineering",
    helperText: "Enter the department value to write to the selected employee.",
    helperTextPlacement: "bottom",
    fieldComponentProps: {},
  },
  {
    fieldKey: "firstFullTimeStartDate",
    fieldComponent: "DATETIME_PICKER",
    label: "First full-time start date",
    fieldComponentProps: {},
  },
  {
    fieldKey: "firstInternStartDate",
    fieldComponent: "DATETIME_PICKER",
    label: "First intern start date",
    fieldComponentProps: {},
  },
  {
    fieldKey: "leadEmployeeNumber",
    fieldComponent: "NUMBER_INPUT",
    label: "Lead employee number",
    fieldComponentProps: {},
  },
  {
    fieldKey: "mentorEmployeeNumber",
    fieldComponent: "NUMBER_INPUT",
    label: "Mentor employee number",
    fieldComponentProps: {},
  },
  {
    fieldKey: "stockOptions",
    fieldComponent: "NUMBER_INPUT",
    label: "Stock options",
    fieldComponentProps: {},
  },
  {
    fieldKey: "workerType",
    fieldComponent: "TEXT_INPUT",
    label: "Worker type",
    fieldComponentProps: {},
  },
] satisfies ReadonlyArray<FormFieldDefinition<typeof modifyEmployee>>;

interface StatusMessage {
  kind: "success" | "error";
  text: string;
}

export const EmployeeActionFormFilterListReproPage = React.memo(
  function EmployeeActionFormFilterListReproPageFn() {
    // HAS_LINK and LINKED_PROPERTY narrow by counting linked objects, which has
    // no `WhereClause` form — the table has to consume the object set
    // FilterList hands back, not just the clause.
    const [effectiveObjectSet, setEffectiveObjectSet] =
      useState<ObjectSet<Employee>>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>();
    const employeeObjectSet = useMemo(() => $(Employee), []);
    const {
      filterStates,
      setFilterState,
      clearFilterState,
      resetFilterStates,
    } = useFilterStatesContext();

    const handleFilterListChanged = useCallback(
      (event: FilterChangeEvent<Employee>) => {
        setEffectiveObjectSet(event.snapshot.filteredObjectSet);
        switch (event.reason.type) {
          case "FILTER_STATE_CHANGED":
            setFilterState(event.reason.filterKey, event.reason.newState);
            break;
          case "FILTER_REMOVED":
            clearFilterState(event.reason.filterKey);
            break;
          case "FILTER_LIST_RESET":
            resetFilterStates();
            break;
          case "FILTER_LIST_INITIALIZED":
            break;
        }
      },
      [setFilterState, clearFilterState, resetFilterStates],
    );

    const openDialog = useCallback(function openDialog() {
      setIsDialogOpen(true);
    }, []);

    const closeDialog = useCallback(function closeDialog() {
      setIsDialogOpen(false);
    }, []);

    const handleActionSuccess = useCallback(function handleActionSuccess() {
      setStatusMessage({
        kind: "success",
        text: "Department update submitted. Check Network for refreshes from ObjectTable and FilterList.",
      });
      setIsDialogOpen(false);
    }, []);

    const handleActionError = useCallback(function handleActionError(
      error: FormError,
    ) {
      setStatusMessage({
        kind: "error",
        text: `Department update failed: ${formatFormError(error)}`,
      });
    }, []);

    return (
      <div className="actionFormFilterListReproPage">
        <div className="actionFormFilterListReproHeader">
          <div>
            <h2 className="actionFormFilterListReproTitle">
              Employee department update repro
            </h2>
            <p className="actionFormFilterListReproDescription">
              Filter employees, then update an employee department from the
              dialog and watch Network calls.
            </p>
          </div>
          <Button onClick={openDialog}>Open department update form</Button>
        </div>

        {statusMessage != null && (
          <div
            className={
              statusMessage.kind === "error"
                ? "actionFormFilterListReproStatus actionFormFilterListReproStatusError"
                : "actionFormFilterListReproStatus"
            }
            role={statusMessage.kind === "error" ? "alert" : "status"}
          >
            {statusMessage.text}
          </div>
        )}
        <div className="actionFormFilterListReproContent">
          <FilterList
            objectType={Employee}
            objectSet={employeeObjectSet}
            filterDefinitions={EMPLOYEE_FILTERS}
            defaultFilterStates={filterStates}
            onFilterListChanged={handleFilterListChanged}
            title="Employee filters"
            showActiveFilterCount={true}
            showResetButton={true}
            enableSorting={true}
          />

          <ObjectTable
            objectType={Employee}
            objectSet={effectiveObjectSet}
            columnDefinitions={EMPLOYEE_COLUMNS}
            defaultOrderBy={DEFAULT_ORDER_BY}
            pageSize={50}
          />
        </div>

        {isDialogOpen && (
          <div
            className="actionFormFilterListReproDialogBackdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="update-employee-department-dialog-title"
          >
            <div className="actionFormFilterListReproDialog">
              <div className="actionFormFilterListReproDialogHeader">
                <h3
                  id="update-employee-department-dialog-title"
                  className="actionFormFilterListReproDialogTitle"
                >
                  Update employee department
                </h3>
                <Button variant="secondary" onClick={closeDialog}>
                  Close
                </Button>
              </div>

              <ActionForm
                actionDefinition={modifyEmployee}
                formFieldDefinitions={MODIFY_EMPLOYEE_FIELDS}
                onSuccess={handleActionSuccess}
                onError={handleActionError}
              />
            </div>
          </div>
        )}
      </div>
    );
  },
);

function formatFormError(error: FormError): string {
  if (error.error instanceof Error) {
    return error.error.message;
  }

  const serializedError = JSON.stringify(error.error);
  return serializedError ?? String(error.error);
}
