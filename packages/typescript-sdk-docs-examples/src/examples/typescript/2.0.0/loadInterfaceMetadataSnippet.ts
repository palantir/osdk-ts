/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadInterfaceMetadataSnippet

import {  } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";

const interfaceTypeMetadata = await client.fetchMetadata();

const implementingObjectTypes = interfaceTypeMetadata.implementedBy;
const interfaceRid = interfaceTypeMetadata.rid;