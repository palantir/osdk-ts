import type { Assignment } from "../../generatedNoCheck2/index.js";
import type { IdentifiedFilterDef } from "../../types/filters.js";

/**
 * Property filter definitions for the Assignments tab. Every definition has an `id` so
 * per-filter UI state can be keyed and persisted.
 */
export const ASSIGNMENT_FILTER_DEFS: Array<IdentifiedFilterDef<Assignment>> = [
  {
    type: "PROPERTY",
    id: "title",
    key: "title",
    label: "Title",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    id: "function",
    key: "function",
    label: "Function",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "assignmentType",
    key: "assignmentType",
    label: "Type",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "PROPERTY",
    id: "startDate",
    key: "startDate",
    label: "Start date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
  {
    type: "PROPERTY",
    id: "tenureDays",
    key: "tenureDays",
    label: "Tenure (days)",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  },
];
