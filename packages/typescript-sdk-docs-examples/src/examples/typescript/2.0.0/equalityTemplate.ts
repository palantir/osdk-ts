/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Filtering/Comparison Filters
// Title: Filtering employees using equality and in operators
// Description: Compare values using different operators for filtering data.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({
        department: { $eq: "Engineering" },
        employeeId: { $in: ["101", "102", "103"] }
    });