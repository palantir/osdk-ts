/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/**
 * Generated examples hierarchy for SDK documentation
 * This provides a mapping of example names to their file paths
 * similar to how TYPESCRIPT_OSDK_SNIPPETS works for templates
 */
export const TYPESCRIPT_OSDK_EXAMPLES = {
  "kind": "examples",
  "versions": {
    "2.1.0": {
      "examples": {
        "loadGeotimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.1.0/loadGeotimeSeriesPointsSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getAllTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues();\n}",
        },
        "loadRelativeGeotimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.1.0/loadRelativeGeotimeSeriesPointsSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\n// Only supports ranges in the past\nfunction getRelativeTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues({\n        $before: 1,\n        $unit: \"hours\",\n    })\n}",
        },
        "loadAbsoluteGeotimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.1.0/loadAbsoluteGeotimeSeriesPointsSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getAbsoluteTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues({\n        $startTime: \"2022-08-13T12:34:56Z\",\n        $endTime: \"2022-08-14T12:34:56Z\",\n    });\n}",
        },
        "loadGeotimeSeriesLastPointSnippet": {
          "filePath":
            "examples/typescript/2.1.0/loadGeotimeSeriesLastPointSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getLastTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getLatestValue();\n}",
        },
        "subscribeToObjectSetInstructions_#propertyNames": {
          "filePath":
            "examples/typescript/2.1.0/subscribeToObjectSetInstructions_#propertyNames.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\n// A map of primary keys to objects loaded through the SDK\nconst objects: { [key: string]: Employee.OsdkInstance } = ...\n\nconst subscription = client(Employee).subscribe(\n    {\n        onChange(update) {\n            if (update.state === \"ADDED_OR_UPDATED\") {\n                // An object has received an update or an object was added to the object set\n                const currentObject = objects[update.object.$primaryKey];\n                if (currentObject !== undefined) {\n                    currentObject[\"<propertyName>\"] = update.object[\"<propertyName>\"] ?? currentObject[\"<propertyName>\"];\n                }\n            }\n            else if (update.state === \"REMOVED\") {\n                // The object was removed from the object set, which could mean it was deleted or no longer meets the filter criteria\n                delete objects[update.object.$primaryKey];\n            }\n        },\n        onSuccessfulSubscription() {\n            // The subscription was successful and you can expect to receive updates\n        },\n        onError(err) {\n            // There was an error with the subscription and you will not receive any more updates\n            console.error(err);\n        },\n        onOutOfDate() {\n            // We could not keep track of all changes. Please reload the objects in your set.\n        },\n    },\n    { properties: [ \"fullName\", \"salary\", ] }\n);\n\nsubscription.unsubscribe();",
        },
        "uploadMedia": {
          "filePath": "examples/typescript/2.1.0/uploadMedia.ts",
          "code":
            "import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { Employee } from \"../../../generatedNoCheck\"\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Result, isOk } from \"@osdk/client\";\nimport type { MediaReference } from \"@osdk/api\";\n\n// To upload media with 2.x, it has to be linked to an Action call\nasync function uploadMedia() {\n    const file = await fetch(\"file.json\");\n    const data = await file.blob();\n\n    // Upload media to an object type with a media property. This returns a media reference that can passed to\n    // a media parameter in an Action.\n    return await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data,\n        fileName: \"myFile\",\n        objectType: Employee,\n        propertyType: \"MediaPropertyApi\",\n    });\n}\n\nconst mediaReference: MediaReference = await uploadMedia();\nconst actionResult = client(mediaUploadingAction).applyAction({ media_parameter: mediaReference });",
        },
        "readMedia": {
          "filePath": "examples/typescript/2.1.0/readMedia.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaMetadata, MediaReference } from \"@osdk/api\";\nimport { Osdk, Result } from \"@osdk/client\";\n\nconst result = await client(Employee).fetchOne(\"<primaryKey>\");\n\n// Fetch metadata of a media property\nconst mediaMetadata = await result.profilePhoto?.fetchMetadata();\n\n// Fetch contents of a media property\nconst response = await result.profilePhoto?.fetchContents();\n\nif (response.ok) {\n    const data = await response.blob();\n    ...\n}",
        },
      },
    },
    "2.4.0": {
      "examples": {
        "derivedPropertyNumericExpression_#isUnary": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyNumericExpression_#isUnary.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .selectProperty(\"purchasePrice\").add(\n                  baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\"))\n    });",
        },
        "derivedPropertyNumericExpression_^isUnary": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyNumericExpression_^isUnary.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .selectProperty(\"purchasePrice\").add(\n                  baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\"))\n    });",
        },
        "derivedPropertyDatetimeExpression_#isExtractPart": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyDatetimeExpression_#isExtractPart.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .selectProperty(\"purchaseDate\")\n              .dateAdd(baseObjectSet.pivotTo(\"assignedEquipment\").selectProperty(\"purchaseDate\"))\n    });",
        },
        "derivedPropertyDatetimeExpression_^isExtractPart": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyDatetimeExpression_^isExtractPart.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .selectProperty(\"purchaseDate\")\n              .dateAdd(baseObjectSet.pivotTo(\"assignedEquipment\").selectProperty(\"purchaseDate\"))\n    });",
        },
      },
    },
  },
} as const;
