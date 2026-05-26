import type { WhereClause } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react";
import type {
  BaseFormFieldProps,
  FormError,
  FormFieldDefinition,
} from "@osdk/react-components/experimental/action-form";
import { ActionForm } from "@osdk/react-components/experimental/action-form";
import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "../../components/Button.js";
import { $ } from "../../foundryClient.js";
import {
  Employee,
  modifyEmployee,
  Office,
} from "../../generatedNoCheck2/index.js";
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
];

const EMPLOYEE_COLUMNS: Array<ColumnDefinition<Employee>> = [
  {
    locator: { type: "property", id: "fullName" },
    columnName: "Name",
    width: 220,
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
    locator: { type: "property", id: "primaryOfficeId" },
    columnName: "Primary office id",
    width: 180,
  },
];

const DEFAULT_ORDER_BY: Array<{
  property: Employee.PropertyKeys;
  direction: "asc" | "desc";
}> = [{ property: "fullName", direction: "asc" }];
const EMPTY_OFFICES: ReadonlyArray<Office.OsdkInstance> = [];

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
    fieldKey: "primary_office_id",
    fieldComponent: "CUSTOM",
    label: "Target primary office",
    helperText:
      "Pick the office to assign. The form submits the selected Office primary key to modifyEmployee.",
    helperTextPlacement: "bottom",
    fieldComponentProps: {
      customRenderer: PrimaryOfficeField,
    },
  },
] satisfies ReadonlyArray<FormFieldDefinition<typeof modifyEmployee>>;

interface StatusMessage {
  kind: "success" | "error";
  text: string;
}

export const EmployeeActionFormFilterListReproPage = React.memo(
  function EmployeeActionFormFilterListReproPageFn() {
    const [filterClause, setFilterClause] = useState<WhereClause<Employee>>(
      {},
    );
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState<StatusMessage>();
    const employeeObjectSet = useMemo(() => $(Employee), []);

    const openDialog = useCallback(function openDialog() {
      setIsDialogOpen(true);
    }, []);

    const closeDialog = useCallback(function closeDialog() {
      setIsDialogOpen(false);
    }, []);

    const handleActionSuccess = useCallback(function handleActionSuccess() {
      setStatusMessage({
        kind: "success",
        text:
          "Office assignment submitted. Check Network for refetches from ObjectTable and FilterList.",
      });
      setIsDialogOpen(false);
    }, []);

    const handleActionError = useCallback(function handleActionError(
      error: FormError,
    ) {
      setStatusMessage({
        kind: "error",
        text: `Office assignment failed: ${formatFormError(error)}`,
      });
    }, []);

    return (
      <div className="actionFormFilterListReproPage">
        <div className="actionFormFilterListReproHeader">
          <div>
            <h2 className="actionFormFilterListReproTitle">
              Employee office assignment repro
            </h2>
            <p className="actionFormFilterListReproDescription">
              Filter employees, then assign an employee to an office from the
              dialog and watch Network calls.
            </p>
          </div>
          <Button onClick={openDialog}>Open office assignment form</Button>
        </div>

        {statusMessage != null && (
          <div
            className={statusMessage.kind === "error"
              ? "actionFormFilterListReproStatus actionFormFilterListReproStatusError"
              : "actionFormFilterListReproStatus"}
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
            filterClause={filterClause}
            onFilterClauseChanged={setFilterClause}
            title="Employee filters"
            showActiveFilterCount={true}
            showResetButton={true}
            enableSorting={true}
          />

          <ObjectTable
            objectType={Employee}
            columnDefinitions={EMPLOYEE_COLUMNS}
            filter={filterClause}
            defaultOrderBy={DEFAULT_ORDER_BY}
            pageSize={50}
          />
        </div>

        {isDialogOpen && (
          <div
            className="actionFormFilterListReproDialogBackdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assign-employee-office-dialog-title"
          >
            <div className="actionFormFilterListReproDialog">
              <div className="actionFormFilterListReproDialogHeader">
                <h3
                  id="assign-employee-office-dialog-title"
                  className="actionFormFilterListReproDialogTitle"
                >
                  Assign employee to office
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

function PrimaryOfficeField({
  id,
  value,
  onChange,
  disabled = false,
  error,
}: BaseFormFieldProps<unknown>): React.ReactElement {
  const offices = useOsdkObjects(Office, {
    orderBy: { name: "asc" },
    pageSize: 100,
  });
  const officeOptions = offices.data ?? EMPTY_OFFICES;
  const selectedOfficeId = typeof value === "string" ? value : "";

  const handleOfficeChange = useCallback(
    function handleOfficeChange(event: React.ChangeEvent<HTMLSelectElement>) {
      const nextOfficeId = event.currentTarget.value;
      onChange?.(nextOfficeId === "" ? undefined : nextOfficeId);
    },
    [onChange],
  );

  if (offices.error != null) {
    return (
      <div className="actionFormFilterListReproFieldError" role="alert">
        Failed to load offices: {offices.error.message}
      </div>
    );
  }

  return (
    <div className="actionFormFilterListReproOfficeField">
      <select
        id={id}
        className="actionFormFilterListReproOfficeSelect"
        value={selectedOfficeId}
        onChange={handleOfficeChange}
        disabled={disabled || offices.isLoading}
        aria-invalid={error != null ? "true" : undefined}
      >
        <option value="">
          {offices.isLoading ? "Loading offices…" : "Clear office assignment"}
        </option>
        {officeOptions.map(office => (
          <option key={office.$primaryKey} value={office.$primaryKey}>
            {office.name ?? `Office ${office.$primaryKey}`}
          </option>
        ))}
      </select>
      <div className="actionFormFilterListReproOfficeHint">
        {selectedOfficeId === ""
          ? "Submitting without an office clears the employee assignment."
          : `Selected office id: ${selectedOfficeId}`}
      </div>
    </div>
  );
}
