/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: numericAggregationTemplate

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const ltEmployee = await client(Employee)
    .aggregation({
        $select: { "fullName:lt" : "unordered" }
    });