/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: intersectsBboxTemplate

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const EmployeeObjectSet = client(Employee)
    .where({
        : {  : { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}
    });