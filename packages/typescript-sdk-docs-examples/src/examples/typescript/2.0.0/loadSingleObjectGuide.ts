/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadSingleObjectGuide

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { isOk, type Osdk, type Result } from "@osdk/client";

const result: Result<Osdk.Instance<Employee>> = await client(Employee).fetchOneWithErrors("<primaryKey>");
if (isOk(result)) {
    const object: Osdk.Instance<Employee> = result.value;
} else {
    console.error(result.error.message);
}
// You can also fetch a single object without the Result wrapper
try {
    const object: Osdk.Instance<Employee> = await client(Employee).fetchOne("<primaryKey>");
}
catch(e) {
    console.error(e);
}