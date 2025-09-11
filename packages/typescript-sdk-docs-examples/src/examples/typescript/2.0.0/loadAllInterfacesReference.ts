/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadAllInterfacesReference

import {  } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import type { Osdk } from "@osdk/client";

const interfaces: Osdk<>[] = [];

for await(const int of client().asyncIter()) {
    interfaces.push(int);
}
const interface1 = interfaces[0];