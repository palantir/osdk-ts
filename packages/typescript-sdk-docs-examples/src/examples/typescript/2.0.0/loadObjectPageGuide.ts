/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Loading data/Load pages of Employees
// Title: Loading pages of employees
// Description: Load a list of objects of a requested page size, after a given page token if present.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { isOk, type Osdk, type PageResult, type Result } from "@osdk/client";

const firstPage: Result<PageResult<Osdk.Instance<Employee>>>
    = await client(Employee).fetchPageWithErrors({ $pageSize: 30 });

if (isOk(firstPage)) {
    const secondPage: Result<PageResult<Osdk.Instance<Employee, never, "fullName">>>
    // You can also down select properties to only get the properties you need from the object
    = await client(Employee).fetchPageWithErrors({ $select: ["fullName"], $pageSize: 30, $nextPageToken: firstPage.value.nextPageToken });

    const objects = isOk(secondPage) ? [...firstPage.value.data, ...secondPage.value.data] : firstPage.value.data;
    const object = objects[0];
}

 // If you want to get rids, you need to add a flag to specifically request for it. Note how the return type now includes $rid rather than never
const secondPageWithRids: Result<PageResult<Osdk.Instance<Employee, "$rid", "fullName">>>
    = await client(Employee).fetchPageWithErrors({ $select: ["fullName"], $includeRid:true, $pageSize: 30, $nextPageToken: firstPage.value.nextPageToken });

// To fetch a page without a result wrapper, use fetchPage with a try/catch instead
try {
    const firstPage: PageResult<Osdk.Instance<Employee>>
        = await client(Employee).fetchPage({ $pageSize: 30 });
    const secondPage: PageResult<Osdk.Instance<Employee>>
     = await client(Employee).fetchPage({ $pageSize: 30, $nextPageToken: firstPage.nextPageToken });
    const objects = [...firstPage.data, ...secondPage.data];
    const object = objects[0];
}
catch (e) {
    console.error(e);
}