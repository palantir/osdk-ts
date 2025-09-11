/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadLinkedObjectReference

import { Employee, Equipment } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { type Osdk, type Result } from "@osdk/client";

function getLinkedEquipment(source: Osdk.Instance<Employee>, linkedObjectPrimaryKey: string): Result<Osdk.Instance<Equipment>>
{
    return source.$link.assignedEquipment.fetchOneWithErrors(linkedObjectPrimaryKey);
}

// You can also get a linked object without the result wrapper
function getLinkedNoWrapperEquipment(source: Osdk.Instance<Employee>, linkedObjectPrimaryKey: string): Osdk.Instance<Equipment> {
    return source.$link.assignedEquipment.fetchOne(linkedObjectPrimaryKey);
}