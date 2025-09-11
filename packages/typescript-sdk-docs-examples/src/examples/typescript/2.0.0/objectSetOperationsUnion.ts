/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: objectSetOperationsUnion

import { Employee } from "../../../generatedNoCheck/ontology/objects";

const objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: "a"}})
const objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: "b"}})
const objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: "c"}})

// Combine objectSetA, objectSetB and objectSetC
const result = objectSetA
  .union(objectSetB)
  .union(objectSetC); // alternatively: objectSetA.union(objectSetB, objectSetC)