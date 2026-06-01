import type { Osdk } from "@osdk/api";
import type { Assignment } from "../generatedNoCheck2/index.js";

export type AssignmentInstance = Osdk.Instance<typeof Assignment>;

export type PinDirection = "left" | "right" | "none";
