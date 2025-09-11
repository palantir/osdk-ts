/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadInterfacesReference

import {  } from "../../../generatedNoCheck";
// Edit this import if your client location differs
import { client } from "./client";
import { type Osdk, type PageResult, type Result } from "@osdk/client";

const response:  Result<PageResult<Osdk<>>>
    = await client().fetchPageWithErrors({ $pageSize: 30 });

// To fetch a page without a result wrapper, use fetchPage instead
const responseNoErrorWrapper: PageResult<Osdk<>>
    = await client().fetchPage({ $pageSize: 30 });