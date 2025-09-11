/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadObjectMetadataSnippet

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const objectTypeMetadata = await client.fetchMetadata(Employee);

if (objectTypeMetadata.icon.type === "blueprint") {
    const blueprintIconName = objectTypeMetadata.icon.name;
}
const currentVisibility = objectTypeMetadata.visibility;
const currentDescription = objectTypeMetadata.description;