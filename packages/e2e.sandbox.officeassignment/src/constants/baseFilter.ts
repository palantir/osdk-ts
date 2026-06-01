import type { WhereClause } from "@osdk/api";
import type { Assignment } from "../generatedNoCheck2/index.js";

/**
 * The app only ever looks at active, permanent assignments. Both tabs scope their object sets to
 * this base filter before any user filtering is applied.
 */
export const ASSIGNMENT_BASE_WHERE: WhereClause<Assignment> = {
  assignmentType: { $eq: "Permanent" },
  assignmentStatus: { $eq: "Active" },
};
