/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Object set operations/Set operations
// Title: Combining object sets using set operations
// Description: No description provided

import { Employee } from "../../../generatedNoCheck/ontology/objects";

const objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: "a"}})
const objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: "b"}})
const objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: "c"}})

// Object set operations can be chained. e.g. To find all objects in objectSetA 
// that are present in objectSetB but do not exist in objectSetC:
const result = objectSetA
  .intersect(objectSetB)
  .subtract(objectSetC);