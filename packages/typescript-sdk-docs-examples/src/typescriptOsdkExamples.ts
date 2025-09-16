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
    "2.0.0": {
      "examples": {
        "loadSingleObjectGuide": {
          "filePath": "examples/typescript/2.0.0/loadSingleObjectGuide.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk } from \"@osdk/client\";\n\ntry {\n    const object: Osdk.Instance<Employee> = await client(Employee).fetchOne(12345);\n}\ncatch(e) {\n    throw(e);\n}",
        },
        "orderObjectsGuide": {
          "filePath": "examples/typescript/2.0.0/orderObjectsGuide.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk.Instance<Employee>> = await client(Employee)\n        .fetchPage({\n            $orderBy: {\"fullName\": \"asc\"},\n            $pageSize: 30\n        });\n    const objects = page.data;\n    const object = objects[0];\n} catch (e) {\n    throw e;\n}",
        },
        "searchObjectsGuide": {
          "filePath": "examples/typescript/2.0.0/searchObjectsGuide.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk.Instance<Employee>> = await client(Employee)\n        .where({\n            fullName: {$isNull: true}\n        })\n        .fetchPage({\n            $pageSize: 30\n        });\n    const objects = page.data;\n    const object = objects[0];\n} catch (e) {\n    throw e;\n}",
        },
        "loadSingleObjectReference": {
          "filePath": "examples/typescript/2.0.0/loadSingleObjectReference.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst responseNoErrorWrapper: Osdk.Instance<Employee> = await client(Employee).fetchOne(12345);",
        },
        "loadObjectsReference": {
          "filePath": "examples/typescript/2.0.0/loadObjectsReference.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk, PageResult } from \"@osdk/client\";\ntry {\n    const responseNoErrorWrapper: PageResult<Osdk.Instance<Employee>>\n        = await client(Employee).fetchPage({ $pageSize: 30 });\n} catch (e) {\n    throw e;\n}",
        },
        "loadAllObjectsReference": {
          "filePath": "examples/typescript/2.0.0/loadAllObjectsReference.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst objects: Osdk.Instance<Employee>[]= [];\n\nfor await(const obj of client(Employee).asyncIter()) {\n    objects.push(obj);\n}\nconst object = objects[0];",
        },
        "loadLinkedObjectReference": {
          "filePath": "examples/typescript/2.0.0/loadLinkedObjectReference.ts",
          "code":
            "import { type Employee } from \"../../../generatedNoCheck\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getLinkedEquipment(source: Osdk.Instance<Employee>) {\n    try {\n        return await source.$link.assignedEquipment.fetchPage();\n    } catch (error) {\n        return { error };\n    }\n}",
        },
        "loadLinkedObjectsReference": {
          "filePath": "examples/typescript/2.0.0/loadLinkedObjectsReference.ts",
          "code":
            "import { Equipment } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nasync function getLinkedWithPivotEmployee(){\n    return await client(Equipment).pivotTo(\"assignedTo\").fetchPage();\n}",
        },
        "aggregationTemplate": {
          "filePath": "examples/typescript/2.0.0/aggregationTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst numEmployee = await client(Employee)\n    .where({ department: { $isNull : false }})\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { department: \"exact\" },\n    });",
        },
        "countAggregationTemplate": {
          "filePath": "examples/typescript/2.0.0/countAggregationTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst numEmployee = await client(Employee)\n    .aggregate({\n        $select: {$count: \"unordered\"},\n    });",
        },
        "approximateDistinctAggregationTemplate": {
          "filePath":
            "examples/typescript/2.0.0/approximateDistinctAggregationTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst distinctEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"department:approximateDistinct\" : \"unordered\" },\n    });",
        },
        "exactDistinctAggregationTemplate": {
          "filePath":
            "examples/typescript/2.0.0/exactDistinctAggregationTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst distinctEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"department:exactDistinct\" : \"unordered\" },\n    });",
        },
        "numericAggregationTemplate": {
          "filePath": "examples/typescript/2.0.0/numericAggregationTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"salary:sum\" : \"unordered\" }\n    });",
        },
        "fixedWidthGroupByTemplate": {
          "filePath": "examples/typescript/2.0.0/fixedWidthGroupByTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate : { $fixedWidth: 10 } }\n    });",
        },
        "durationGroupByTemplate_#durationText": {
          "filePath":
            "examples/typescript/2.0.0/durationGroupByTemplate_#durationText.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { startDate : { $duration: [ 1, \"days\"] } }\n    });",
        },
        "exactGroupByTemplate": {
          "filePath": "examples/typescript/2.0.0/exactGroupByTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate : \"exact\" }\n    })",
        },
        "rangeGroupByTemplate": {
          "filePath": "examples/typescript/2.0.0/rangeGroupByTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { salary : { $ranges: [[100, 200 ]]} }\n    });",
        },
        "applyAction_#hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/applyAction_#hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_^hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/applyAction_^hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_#hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/applyAction_#hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_^hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/applyAction_^hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_#hasParameters": {
          "filePath": "examples/typescript/2.0.0/applyAction_#hasParameters.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_^hasParameters": {
          "filePath": "examples/typescript/2.0.0/applyAction_^hasParameters.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData } from \"../../../generatedNoCheck\";\n\n    const result = await client(refreshData).applyAction(\n        {},\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_#actionParameterSampleValuesV2": {
          "filePath":
            "examples/typescript/2.0.0/applyAction_#actionParameterSampleValuesV2.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_^last": {
          "filePath": "examples/typescript/2.0.0/applyAction_^last.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_#hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_^hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_#hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_^hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_#hasParameters": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_#hasParameters.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_^hasParameters": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_^hasParameters.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData } from \"../../../generatedNoCheck\";\n\n    const result = await client(refreshData).batchApplyAction([\n            {},\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#actionParameterSampleValuesV2": {
          "filePath":
            "examples/typescript/2.0.0/batchApplyAction_#actionParameterSampleValuesV2.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_^last": {
          "filePath": "examples/typescript/2.0.0/batchApplyAction_^last.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "uploadAttachment": {
          "filePath": "examples/typescript/2.0.0/uploadAttachment.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { documentEquipment } from \"../../../generatedNoCheck\";\n\n// To call an action with an attachment property, you first need to upload the file\nasync function uploadMyFile() {\n    const file = await fetch(\"file.json\");\n    const blob = await file.blob();\n    return createAttachmentUpload(blob, \"myFile\");\n}\n\nconst myAttachmentUpload: AttachmentUpload = await uploadMyFile();\n// then pass the attachment to the action in the action parameter.\nconst actionResult = client(documentEquipment).applyAction({ \n    equipmentId: \"mac-1234\",\n    documentFile: myAttachmentUpload\n    });",
        },
        "castInterfaceToObjectReference": {
          "filePath":
            "examples/typescript/2.0.0/castInterfaceToObjectReference.ts",
          "code":
            "import { Employee, HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { isOk, type Osdk } from \"@osdk/client\";\n\nconst page = await client(HasAddress).fetchPageWithErrors();\n\nif (isOk(page)) {\n    const interfaces = page.value.data;\n    const hasAddress: Osdk<HasAddress> = interfaces[0];\n\n    // Cast from interface to object type\n    const employee: Osdk<Employee> = hasAddress.$as(Employee);\n    // Or from object type back to interface\n    const hasAddress2: Osdk<HasAddress> = employee.$as(HasAddress);\n}",
        },
        "executeFunction_#hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/executeFunction_#hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentProperty": {
          "filePath":
            "examples/typescript/2.0.0/executeFunction_^hasAttachmentProperty.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { getTotalEmployeeCount } from \"../../../generatedNoCheck\";\n\nconst result = await client(getTotalEmployeeCount).executeFunction();",
        },
        "executeFunction_#hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/executeFunction_#hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { calculateTotal } from \"../../../generatedNoCheck\";\n\nasync function callFunctionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentUpload": {
          "filePath":
            "examples/typescript/2.0.0/executeFunction_^hasAttachmentUpload.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "stringStartsWithTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/stringStartsWithTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $startsWith: \"foo\" }}\n    })",
        },
        "stringStartsWithTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/stringStartsWithTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $startsWith: \"foo\" }\n    })",
        },
        "containsAllTermsInOrderTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAllTermsInOrderTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTermsInOrder: \"foo bar\" }}\n    })",
        },
        "containsAllTermsInOrderTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAllTermsInOrderTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAllTermsInOrder: \"foo bar\" }\n    })",
        },
        "containsAnyTermTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAnyTermTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAnyTerm: \"foo bar\" }}\n    })",
        },
        "containsAnyTermTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAnyTermTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAnyTerm: \"foo bar\" }\n    })",
        },
        "containsAllTermsTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAllTermsTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTerms: \"foo bar\" }}\n    })",
        },
        "containsAllTermsTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/containsAllTermsTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAllTerms: \"foo bar\" }\n    })",
        },
        "equalityTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/equalityTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $eq: \"555-1234\" }}\n    });",
        },
        "equalityTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/equalityTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $eq: \"Engineering\" }\n    });",
        },
        "inFilterTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/inFilterTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $in: [\"555-1234\"] }}\n    });",
        },
        "inFilterTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/inFilterTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $in: [\"Engineering\"] }\n    });",
        },
        "nullTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/nullTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $isNull: true }}\n    });",
        },
        "nullTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/nullTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $isNull: true }\n    });",
        },
        "rangeTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/rangeTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { houseNumber: { $lt: 100 }}\n    });",
        },
        "rangeTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/rangeTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        salary: { $lt: 100 }\n    });",
        },
        "withinDistanceTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinDistanceTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]} }}\n    })",
        },
        "withinDistanceTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinDistanceTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]}}\n    })",
        },
        "withinBoundingBoxTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinBoundingBoxTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "withinBoundingBoxTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinBoundingBoxTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
        },
        "withinPolygonTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinPolygonTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "withinPolygonTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/withinPolygonTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsPolygonTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/intersectsPolygonTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "intersectsPolygonTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/intersectsPolygonTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsBboxTemplate_#hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/intersectsBboxTemplate_#hasStructSubProperty.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance : { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "intersectsBboxTemplate_^hasStructSubProperty": {
          "filePath":
            "examples/typescript/2.0.0/intersectsBboxTemplate_^hasStructSubProperty.ts",
          "code":
            "import { Office } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance : { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
        },
        "notTemplate": {
          "filePath": "examples/typescript/2.0.0/notTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $not: { fullName: { $eq: \"John Doe\" }}});",
        },
        "andTemplate": {
          "filePath": "examples/typescript/2.0.0/andTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $and:[\n        { $not: { employeeId: { $isNull: true }}},\n        { fullName: { $eq: \"John Doe\" }}\n    ]});",
        },
        "orTemplate": {
          "filePath": "examples/typescript/2.0.0/orTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $or:[\n        { $not: { employeeId: { $isNull: true }}},\n        { fullName: { $eq: \"John Doe\" }}\n    ]});",
        },
        "containsTemplate": {
          "filePath": "examples/typescript/2.0.0/containsTemplate.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst filteredObjects = client(Employee)\n    .where({\n        previousTitles : { $contains: \"Product manager\" }\n    })",
        },
        "loadInterfacesReference": {
          "filePath": "examples/typescript/2.0.0/loadInterfacesReference.ts",
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult, type Result } from \"@osdk/client\";\n\nconst response:  Result<PageResult<Osdk<HasAddress>>>\n    = await client(HasAddress).fetchPageWithErrors({ $pageSize: 30 });\n\n// To fetch a page without a result wrapper, use fetchPage instead\nconst responseNoErrorWrapper: PageResult<Osdk<HasAddress>>\n    = await client(HasAddress).fetchPage({ $pageSize: 30 });",
        },
        "loadAllInterfacesReference": {
          "filePath": "examples/typescript/2.0.0/loadAllInterfacesReference.ts",
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst interfaces: Osdk<HasAddress>[] = [];\n\nfor await(const int of client(HasAddress).asyncIter()) {\n    interfaces.push(int);\n}\nconst interface1 = interfaces[0];",
        },
        "loadOrderedInterfacesReference": {
          "filePath":
            "examples/typescript/2.0.0/loadOrderedInterfacesReference.ts",
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk<HasAddress>> = await client(HasAddress)\n        .fetchPage({\n            $orderBy: { address: \"asc\"},\n            $pageSize: 30\n        });\n} catch (e) {\n    throw e;\n}",
        },
        "searchInterfacesReference": {
          "filePath": "examples/typescript/2.0.0/searchInterfacesReference.ts",
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { isOk, type Osdk, type PageResult, type Result } from \"@osdk/client\";\n\nconst page: Result<PageResult<Osdk<HasAddress>>> = await client(HasAddress)\n    .where({\n        $and:[\n            { $not: { address: { $isNull: true }}},\n            { address: { $eq: \"foo\" }}\n        ]\n    })\n    .fetchPageWithErrors({\n        $pageSize: 30\n    });\n\nif (isOk(page)) {\n    const interfaces = page.value.data;\n    const interface1 = interfaces[0];\n}",
        },
        "loadTimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadTimeSeriesPointsSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getAllTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getAllPoints();\n}",
        },
        "loadRelativeTimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadRelativeTimeSeriesPointsSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\n// Only supports ranges in the past\nfunction getRelativeTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getAllPoints({\n        $before: 1,\n        $unit: \"hours\",\n    })\n}",
        },
        "loadAbsoluteTimeSeriesPointsSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadAbsoluteTimeSeriesPointsSnippet.ts",
          "code":
            "import { type Employee } from \"../../../generatedNoCheck\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getAbsoluteTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return await obj.employeeStatus?.getAllPoints({\n        $startTime: \"2022-08-13T12:34:56Z\",\n        $endTime: \"2022-08-14T12:34:56Z\",\n    });\n}",
        },
        "loadTimeSeriesFirstPointSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadTimeSeriesFirstPointSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getFirstTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getFirstPoint();\n}",
        },
        "loadTimeSeriesLastPointSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadTimeSeriesLastPointSnippet.ts",
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck\";\n\nfunction getLastTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getLastPoint();\n}",
        },
        "loadObjectMetadataSnippet": {
          "filePath": "examples/typescript/2.0.0/loadObjectMetadataSnippet.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst objectTypeMetadata = await client.fetchMetadata(Employee);\n\nif (objectTypeMetadata?.icon?.type === \"blueprint\") {\n    const blueprintIconName = objectTypeMetadata.icon.name;\n}\nconst currentVisibility = objectTypeMetadata.visibility;\nconst currentDescription = objectTypeMetadata.description;",
        },
        "loadInterfaceMetadataSnippet": {
          "filePath":
            "examples/typescript/2.0.0/loadInterfaceMetadataSnippet.ts",
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst interfaceTypeMetadata = await client.fetchMetadata(HasAddress);\n\nconst implementingObjectTypes = interfaceTypeMetadata.implementedBy;\nconst interfaceRid = interfaceTypeMetadata.rid;",
        },
        "derivedPropertyBaseExample": {
          "filePath": "examples/typescript/2.0.0/derivedPropertyBaseExample.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"lead\").selectProperty(\"fullName\")\n    })\n    .where({\n      \"newPropertyName\": { $startsWith: \"foo\" }\n    }).fetchPage();",
        },
        "derivedPropertyApproximateDistinctAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyApproximateDistinctAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:approximateDistinct\")\n    }).fetchPage();",
        },
        "derivedPropertyExactDistinctAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyExactDistinctAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:exactDistinct\")\n    }).fetchPage();",
        },
        "derivedPropertyCollectToListAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyCollectToListAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst maxObjectsInList = 75; // Adjust this value as needed between 1 and 100\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:collectList\", { limit: maxObjectsInList })\n    }).fetchPage();",
        },
        "derivedPropertyCollectToSetAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyCollectToSetAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst maxObjectsInSet = 75; // Adjust this value as needed between 1 and 100\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:collectSet\", { limit: maxObjectsInSet })\n    }).fetchPage();",
        },
        "derivedPropertyCountAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyCountAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\")\n    }).fetchPage();",
        },
        "derivedPropertySelectPropertyAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertySelectPropertyAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"lead\").selectProperty(\"fullName\")\n    }).fetchPage();",
        },
        "derivedPropertyApproximatePercentileAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyApproximatePercentileAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:approximatePercentile\", { percentile: 95 })\n    }).fetchPage();",
        },
        "derivedPropertyNumericAggregation": {
          "filePath":
            "examples/typescript/2.0.0/derivedPropertyNumericAggregation.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"peeps\").aggregate(\"salary:sum\")\n    }).fetchPage();",
        },
        "objectSetOperationsGuide": {
          "filePath": "examples/typescript/2.0.0/objectSetOperationsGuide.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/ontology/objects\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Object set operations can be chained. e.g. To find all objects in objectSetA \n// that are present in objectSetB but do not exist in objectSetC:\nconst result = objectSetA\n  .intersect(objectSetB)\n  .subtract(objectSetC).fetchPage();",
        },
        "objectSetOperationsUnion": {
          "filePath": "examples/typescript/2.0.0/objectSetOperationsUnion.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/ontology/objects\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Combine objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .union(objectSetB)\n  .union(objectSetC).fetchPage(); // alternatively: objectSetA.union(objectSetB, objectSetC)",
        },
        "objectSetOperationsSubtract": {
          "filePath":
            "examples/typescript/2.0.0/objectSetOperationsSubtract.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/ontology/objects\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return objects in objectSetA that are not present in either objectSetB or objectSetC\nconst result = objectSetA\n  .subtract(objectSetB)\n  .subtract(objectSetC).fetchPage(); // alternatively: objectSetA.subtract(objectSetB, objectSetC)",
        },
        "objectSetOperationsIntersect": {
          "filePath":
            "examples/typescript/2.0.0/objectSetOperationsIntersect.ts",
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/ontology/objects\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return all objects common to objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .intersect(objectSetB)\n  .intersect(objectSetC).fetchPage(); // alternatively: objectSetA.intersect(objectSetB, objectSetC)",
        },
        "searchAround": {
          "filePath": "examples/typescript/2.0.0/searchAround.ts",
          "code":
            "import { Equipment } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\n// Object set containing objects a, b and c\nconst objects = client(Equipment)\n    .where({ equipmentId: { $in: [\"a\", \"b\", \"c\"]}});\n\n// Traverse the selected link type to find all objects of type\n// Employee linked to Equipment with equipmentId is a or b or c]\nconst linkedObjects = await objects.pivotTo(\"assignedTo\").fetchPage();",
        },
      },
    },
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
      },
    },
    "2.4.0": {
      "examples": {
        "derivedPropertyNumericExpression_#isUnary": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyNumericExpression_#isUnary.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n          .selectProperty(\"salary\")\n          .subtract(baseObjectSet.selectProperty(\"salary\"))\n    }).fetchPage();",
        },
        "derivedPropertyNumericExpression_^isUnary": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyNumericExpression_^isUnary.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .aggregate(\"purchasePrice:avg\").divide(\n                  baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\"))\n    }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_#isExtractPart": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyDatetimeExpression_#isExtractPart.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"YEARS_part_of_birthDate_of_lead\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n              .selectProperty(\"birthDate\").extractPart(\"YEARS\")\n    }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_^isExtractPart": {
          "filePath":
            "examples/typescript/2.4.0/derivedPropertyDatetimeExpression_^isExtractPart.ts",
          "code":
            "import { Employee } from \"../../../generatedNoCheck\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"min_between_purchaseDate:min_and_lastMaintenanceDate:min\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .aggregate(\"purchaseDate:min\")\n              .min(baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"lastMaintenanceDate:min\"))\n    }).fetchPage();",
        },
      },
    },
  },
} as const;
