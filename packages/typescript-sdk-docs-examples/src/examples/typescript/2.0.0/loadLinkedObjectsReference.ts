/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadLinkedObjectsReference

import { Employee } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

function getLinkedEmployee(source: Osdk.Instance<Employee>) {
    return source.$link.lead.fetchOneWithErrors();
}

// You can also get a linked object by doing an object set searcharound
function getLinkedWithPivotEmployee(){
    return client(Employee).pivotTo(lead).fetchPage();
}