/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Filtering/Comparison Filters
// Title: Filtering employees by salary range
// Description: Compare values using different operators for filtering data.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({
        salary: { $gt: 50000, $lt: 100000 }
    });