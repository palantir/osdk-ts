/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: withinPolygonTemplate

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({
        : { : { $within: { type: "Polygon", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}
    });