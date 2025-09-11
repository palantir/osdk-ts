/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadSingleObjectReference

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import type { Osdk, Result } from "@osdk/client";

const response: Result<Osdk.Instance<Employee>> = await client(Employee).fetchOneWithErrors("<primaryKey>");

// You can also fetch a single object without the Result wrapper

const responseNoErrorWrapper: Osdk.Instance<Employee> = await client(Employee).fetchOne("<primaryKey>");

