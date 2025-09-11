/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadObjectsReference

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import type { Osdk, PageResult, Result } from "@osdk/client";

const response:  Result<PageResult<Osdk.Instance<Employee>>>
    = await client(Employee).fetchPageWithErrors({ $pageSize: 30 });

// To fetch a page without a result wrapper, use fetchPage instead
const responseNoErrorWrapper: PageResult<Osdk.Instance<Employee>>
    = await client(Employee).fetchPage({ $pageSize: 30 });
