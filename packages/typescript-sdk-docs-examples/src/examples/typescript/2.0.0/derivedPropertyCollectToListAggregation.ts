/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: derivedPropertyCollectToListAggregation

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const maxObjectsInList = 75; // Adjust this value as needed between 1 and 100
const sumEmployee = await client(Employee)
    .withProperties({
      "newPropertyName": (baseObjectSet) =>
        baseObjectSet.pivotTo("").aggregate("fullName:collectList", maxObjectsInList)
    })