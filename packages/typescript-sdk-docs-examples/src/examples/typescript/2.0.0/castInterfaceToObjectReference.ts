/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: castInterfaceToObjectReference

import { ,  } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { isOk, type Osdk } from "@osdk/client";

const page = await client().fetchPageWithErrors();

if (isOk(page)) {
    const interfaces = page.value.data;
    const : Osdk<> = interfaces[0];

    // Cast from interface to object type
    const : Osdk<> = .$as();
    // Or from object type back to interface
    const 2: Osdk<> = .$as();
}