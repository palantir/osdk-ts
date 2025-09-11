/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: orderObjectsGuide

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