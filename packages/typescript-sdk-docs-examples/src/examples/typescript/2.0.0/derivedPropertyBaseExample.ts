/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Derived Properties/Types of link aggregations
// Title: Creating and using derived properties
// Description: Operators for aggregating values through object links.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const sumEmployee = await client(Employee)
    .withProperties({
      "newPropertyName": (baseObjectSet) =>
        baseObjectSet.pivotTo("fooLink").pivotTo("barLink").selectProperty("foo")
    })
    .where({
      "newPropertyName": { $gt: 10 }
    })
    .aggregate({
      $select: { "newPropertyName:max": "unordered" }
    });