/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadRelativeTimeSeriesPointsSnippet

import { Employee } from "../../../generatedNoCheck";

// Only supports ranges in the past
function getRelativeTimeSeriesPoints(obj: Employee) {
    return obj.fullName.getAllPoints({
        $before: 1,
        $unit: "",
    })
}