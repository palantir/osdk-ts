/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Aggregations/Types of group bys
// Title: Using group by with aggregations
// Description: Operators for grouping records based on property values.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const groupedEmployee = await client(Employee)
    .aggregate({
        $select: { $count: "unordered" },
        $groupBy: { department : "exact" }
    })