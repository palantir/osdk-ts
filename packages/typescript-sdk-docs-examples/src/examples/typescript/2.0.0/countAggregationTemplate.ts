/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Aggregations/Types of aggregations
// Title: Using aggregation operators
// Description: Operators for computing statistical aggregations across records.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const numEmployee = await client(Employee)
    .aggregate({
        $select: {$count: "unordered"},
    });