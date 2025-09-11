/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Filtering/String Filters
// Title: Filtering Employees by name prefix
// Description: Search and filter string values with various matching operators.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({
        fullName: { $startsWith: "foo" }
    })