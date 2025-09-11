/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Filtering/Boolean Filters
// Title: Using boolean operators for complex filtering
// Description: Combine and modify search queries with logical operators.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({ $not: { employeeId: { $isNull: true }}});