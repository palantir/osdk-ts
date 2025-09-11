/**
 * WARNING: This file is generated automatically by the generateExample.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: Load Employee metadata
// Title: Loading object type metadata
// Description: Load up-to-date metadata for the Employee object type, such as the display name, icon, visibility, and status.

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const objectTypeMetadata = await client.fetchMetadata(Employee);

if (objectTypeMetadata.icon.type === "blueprint") {
    const blueprintIconName = objectTypeMetadata.icon.name;
}
const currentVisibility = objectTypeMetadata.visibility;
const currentDescription = objectTypeMetadata.description;