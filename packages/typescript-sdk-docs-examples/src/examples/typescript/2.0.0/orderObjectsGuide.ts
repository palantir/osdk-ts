/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Loading data/Load pages of Employees
// Title: Loading ordered results
// Description: Load a list of objects of a requested page size, after a given page token if present.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { isOk, type Osdk, type PageResult, type Result } from "@osdk/client";

const page: Result<PageResult<Osdk.Instance<Employee>>> = await client(Employee)
    .fetchPageWithErrors({
        $orderBy: {"fullName": "asc"},
        $pageSize: 30
    });

if (isOk(page)) {
    const objects = page.value.data;
    const object = objects[0];
}