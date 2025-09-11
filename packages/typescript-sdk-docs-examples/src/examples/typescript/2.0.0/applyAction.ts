/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: applyAction

import {  } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";



const result = await client().applyAction(
{},

    {
    $returnEdits: true,
    }
);

if (result.type === "edits") {
    // for new objects and updated objects edits will contain the primary key of the object
    const updatedObject = result.editedObjectTypes[0];
    console.log("Updated object", updatedObject);
}