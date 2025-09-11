/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadAllObjectsReference

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import type { Osdk } from "@osdk/client";

const objects: Osdk.Instance<Employee>[]= [];

for await(const obj of client(Employee).asyncIter()) {
    objects.push(obj);
}
const object = objects[0];