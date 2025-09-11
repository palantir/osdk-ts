/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: derivedPropertyApproximateDistinctAggregation

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const sumEmployee = await client(Employee)
    .withProperties({
      "newPropertyName": (baseObjectSet) =>
        baseObjectSet.pivotTo("").aggregate("fullName:approximateDistinct")
    })