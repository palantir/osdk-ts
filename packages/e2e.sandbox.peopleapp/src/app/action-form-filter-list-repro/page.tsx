import type { WhereClause } from "@osdk/api";
import type {
  ActionDefinition,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from "@osdk/client";
import type {
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
import { Employee, modifyEmployee } from "../../generatedNoCheck2/index.js";

import "./page.css";

interface ModifyEmployeeDepartmentAction
  extends ActionDefinition<ModifyEmployeeDepartmentSignatures>
{
  apiName: "modifyEmployee";
  type: "action";
  unsanitizedApiName: "modify-employee";
  osdkMetadata: typeof modifyEmployee.osdkMetadata;
}

interface ModifyEmployeeDepartmentParams {
  readonly employee: ActionParam.ObjectType<Employee>;
  readonly department: ActionParam.PrimitiveType<"string">;
}

interface ModifyEmployeeDepartmentSignatures {
  applyAction<OP extends ApplyActionOptions>(
    args: ModifyEmployeeDepartmentParams,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;

  batchApplyAction<OP extends ApplyBatchActionOptions>(
    args: ReadonlyArray<ModifyEmployeeDepartmentParams>,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Local repro only: the generated sandbox SDK still models modifyEmployee with
// primary_office_id. This wrapper lets the ActionForm exercise the department
// parameter shape while the real sandbox action metadata catches up.
const modifyEmployeeDepartment =
  modifyEmployee as unknown as ModifyEmployeeDepartmentAction;

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
    locator: { type: "property", id: "workerType" },
    columnName: "Worker type",
    width: 160,
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
] satisfies ReadonlyArray<FormFieldDefinition<typeof modifyEmployeeDepartment>>;

interface StatusMessage {
  kind: "success" | "error";
  text: string;
}

export const EmployeeActionFormFilterListReproPage = React.memo(
  function EmployeeActionFormFilterListReproPageFn() {
    const [filterClause, setFilterClause] = useState<WhereClause<Employee>>({});
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
          "Department update submitted. Check Network for refreshes from ObjectTable and FilterList.",
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
                actionDefinition={modifyEmployeeDepartment}
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
