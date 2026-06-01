import type { StatusUpdate } from "../../generatedNoCheck2/index.js";
import type { IdentifiedFilterDef } from "../../types/filters.js";

/** Property filter definitions for the Status Updates tab. Each has an `id`. */
export const STATUS_UPDATE_FILTER_DEFS: Array<
  IdentifiedFilterDef<StatusUpdate>
> = [
  {
    type: "PROPERTY",
    id: "type",
    key: "type",
    label: "Type",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "value",
    key: "value",
    label: "Value",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "isExcluded",
    key: "isExcluded",
    label: "Excluded",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
];
