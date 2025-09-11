/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: loadAbsoluteTimeSeriesPointsSnippet

import { Employee } from "../../../generatedNoCheck";

function getAbsoluteTimeSeriesPoints(obj: Employee) {
    return obj.fullName.getAllPoints({
        $startTime: "2022-08-13T12:34:56Z",
        $endTime: "2022-08-14T12:34:56Z",
    });
}