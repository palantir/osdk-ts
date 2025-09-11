/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: aggregationTemplate

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const numEmployee = await client(Employee)
    .where(fullName: { $isNull : false }})
    .aggregate({
        $select: { $count: "unordered" },
        $groupBy: { name: "exact" },
    });