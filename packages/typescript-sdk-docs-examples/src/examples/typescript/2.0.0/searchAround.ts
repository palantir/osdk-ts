/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: searchAround

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

// Object set containing objects a, b and c
const objects = client(Employee)
    .where({ : { $in: ["a", "b", "c"]}});

// Traverse the selected link type to find all objects of type
// Employee linked to objects a, b and c
const linkedObjects = await objects.pivotTo("lead");