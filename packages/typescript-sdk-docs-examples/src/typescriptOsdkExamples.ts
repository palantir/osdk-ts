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
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk } from \"@osdk/client\";\n\ntry {\n    const object: Osdk.Instance<Employee> = await client(Employee).fetchOne(12345);\n}\ncatch(e) {\n    throw(e);\n}",
        },
        "loadObjectPageGuide": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\nasync function getPagedData() {\n    try {\n        const firstPage: PageResult<Osdk.Instance<Employee>>\n            = await client(Employee).fetchPage({ $pageSize: 30 });\n        if (firstPage.nextPageToken === undefined) {\n            return firstPage.data;\n        }\n        const secondPage: PageResult<Osdk.Instance<Employee>>\n        = await client(Employee).fetchPage({ $pageSize: 30, $nextPageToken: firstPage.nextPageToken });\n        return [...firstPage.data, ...secondPage.data];\n    }\n    catch (e) {\n        throw e;\n    }\n}",
        },
        "orderObjectsGuide": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk.Instance<Employee>> = await client(Employee)\n        .fetchPage({\n            $orderBy: {\"fullName\": \"asc\"},\n            $pageSize: 30\n        });\n    const objects = page.data;\n    const object = objects[0];\n} catch (e) {\n    throw e;\n}",
        },
        "searchObjectsGuide": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk.Instance<Employee>> = await client(Employee)\n        .where({\n            fullName: {$isNull: true}\n        })\n        .fetchPage({\n            $pageSize: 30\n        });\n    const objects = page.data;\n    const object = objects[0];\n} catch (e) {\n    throw e;\n}",
        },
        "loadSingleObjectReference": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst responseNoErrorWrapper: Osdk.Instance<Employee> = await client(Employee).fetchOne(12345);",
        },
        "loadObjectsReference": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk, PageResult } from \"@osdk/client\";\ntry {\n    const responseNoErrorWrapper: PageResult<Osdk.Instance<Employee>>\n        = await client(Employee).fetchPage({ $pageSize: 30 });\n} catch (e) {\n    throw e;\n}",
        },
        "loadAllObjectsReference": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst objects: Osdk.Instance<Employee>[]= [];\n\nfor await(const obj of client(Employee).asyncIter()) {\n    objects.push(obj);\n}\nconst object = objects[0];",
        },
        "loadLinkedObjectReference": {
          "code":
            "import { type Employee } from \"../../../generatedNoCheck/index.js\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getLinkedEquipment(source: Osdk.Instance<Employee>) {\n    try {\n        return await source.$link.assignedEquipment.fetchPage();\n    } catch (error) {\n        return { error };\n    }\n}",
        },
        "loadLinkedObjectsReference": {
          "code":
            "import { Equipment } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nasync function getLinkedWithPivotEmployee(){\n    return await client(Equipment).pivotTo(\"assignedTo\").fetchPage();\n}",
        },
        "aggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst numEmployee = await client(Employee)\n    .where({ department: { $isNull : false }})\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { department: \"exact\" },\n    });",
        },
        "countAggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst numEmployee = await client(Employee)\n    .aggregate({\n        $select: {$count: \"unordered\"},\n    });",
        },
        "approximateDistinctAggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst distinctEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"department:approximateDistinct\" : \"unordered\" },\n    });",
        },
        "exactDistinctAggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst distinctEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"department:exactDistinct\" : \"unordered\" },\n    });",
        },
        "numericAggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .aggregate({\n        $select: { \"salary:sum\" : \"unordered\" }\n    });",
        },
        "fixedWidthGroupByTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate : { $fixedWidth: 10 } }\n    });",
        },
        "durationGroupByTemplate_#durationText": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { startDate : { $duration: [ 1, \"days\"] } }\n    });",
        },
        "exactGroupByTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate : \"exact\" }\n    })",
        },
        "rangeGroupByTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { salary : { $ranges: [[100, 200 ]]} }\n    });",
        },
        "applyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_#hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_^hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            documentFile: attachment\n        },\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "applyAction_#hasParameters": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_^hasParameters": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(refreshData).applyAction(\n        {},\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "applyAction_^last": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\", \n            \"documentType\": \"active\"\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { documentEquipment, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callActionWithAttachmentLoaded(objectTypeWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectTypeWithAttachment.invoice?.rid;\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                documentFile: attachment\n            },\n        ],\n        {\n        $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }\n}",
        },
        "batchApplyAction_#hasParameters": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_^hasParameters": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(refreshData).batchApplyAction([\n            {},\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "batchApplyAction_^last": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n            {\n                \"equipmentId\": \"mac-1234\", \n                \"documentType\": \"active\"\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n    }",
        },
        "uploadAttachment": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n// To call an action with an attachment property, you first need to upload the file\nasync function uploadMyFile() {\n    const file = await fetch(\"file.json\");\n    const blob = await file.blob();\n    return createAttachmentUpload(blob, \"myFile\");\n}\n\nconst myAttachmentUpload: AttachmentUpload = await uploadMyFile();\n// then pass the attachment to the action in the action parameter.\nconst actionResult = client(documentEquipment).applyAction({ \n    equipmentId: \"mac-1234\",\n    documentFile: myAttachmentUpload\n    });",
        },
        "castInterfaceToObjectReference": {
          "code":
            "import { Employee, HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { isOk, type Osdk } from \"@osdk/client\";\n\nconst page = await client(HasAddress).fetchPageWithErrors();\n\nif (isOk(page)) {\n    const interfaces = page.value.data;\n    const hasAddress: Osdk<HasAddress> = interfaces[0];\n\n    // Cast from interface to object type\n    const employee: Osdk<Employee> = hasAddress.$as(Employee);\n    // Or from object type back to interface\n    const hasAddress2: Osdk<HasAddress> = employee.$as(HasAddress);\n}",
        },
        "executeFunction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { getTotalEmployeeCount } from \"../../../generatedNoCheck/index.js\";\n\nconst result = await client(getTotalEmployeeCount).executeFunction();",
        },
        "executeFunction_#hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { calculateTotal } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentUpload() {\n    async function uploadMyFile() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await uploadMyFile();\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "stringStartsWithTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $startsWith: \"foo\" }}\n    })",
        },
        "stringStartsWithTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $startsWith: \"foo\" }\n    })",
        },
        "containsAllTermsInOrderTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTermsInOrder: \"foo bar\" }}\n    })",
        },
        "containsAllTermsInOrderTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAllTermsInOrder: \"foo bar\" }\n    })",
        },
        "containsAnyTermTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAnyTerm: \"foo bar\" }}\n    })",
        },
        "containsAnyTermTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAnyTerm: \"foo bar\" }\n    })",
        },
        "containsAllTermsTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTerms: \"foo bar\" }}\n    })",
        },
        "containsAllTermsTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName : { $containsAllTerms: \"foo bar\" }\n    })",
        },
        "equalityTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $eq: \"555-1234\" }}\n    });",
        },
        "equalityTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $eq: \"Engineering\" }\n    });",
        },
        "inFilterTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $in: [\"555-1234\"] }}\n    });",
        },
        "inFilterTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $in: [\"Engineering\"] }\n    });",
        },
        "nullTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $isNull: true }}\n    });",
        },
        "nullTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $isNull: true }\n    });",
        },
        "rangeTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { houseNumber: { $lt: 100 }}\n    });",
        },
        "rangeTemplate_^hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        salary: { $lt: 100 }\n    });",
        },
        "withinDistanceTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]} }}\n    })",
        },
        "withinDistanceTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]}}\n    })",
        },
        "withinBoundingBoxTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "withinBoundingBoxTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
        },
        "withinPolygonTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "withinPolygonTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsPolygonTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "intersectsPolygonTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsBboxTemplate_#hasStructSubProperty": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance : { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "intersectsBboxTemplate_^hasStructSubProperty": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance : { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
        },
        "notTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $not: { fullName: { $eq: \"John Doe\" }}});",
        },
        "andTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $and:[\n        { $not: { employeeId: { $isNull: true }}},\n        { fullName: { $eq: \"John Doe\" }}\n    ]});",
        },
        "orTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({ $or:[\n        { $not: { employeeId: { $isNull: true }}},\n        { fullName: { $eq: \"John Doe\" }}\n    ]});",
        },
        "containsTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst filteredObjects = client(Employee)\n    .where({\n        previousTitles : { $contains: \"Product manager\" }\n    })",
        },
        "loadInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult, type Result } from \"@osdk/client\";\n\nconst response:  Result<PageResult<Osdk<HasAddress>>>\n    = await client(HasAddress).fetchPageWithErrors({ $pageSize: 30 });\n\n// To fetch a page without a result wrapper, use fetchPage instead\nconst responseNoErrorWrapper: PageResult<Osdk<HasAddress>>\n    = await client(HasAddress).fetchPage({ $pageSize: 30 });",
        },
        "loadAllInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst interfaces: Osdk<HasAddress>[] = [];\n\nfor await(const int of client(HasAddress).asyncIter()) {\n    interfaces.push(int);\n}\nconst interface1 = interfaces[0];",
        },
        "loadOrderedInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk<HasAddress>> = await client(HasAddress)\n        .fetchPage({\n            $orderBy: { address: \"asc\"},\n            $pageSize: 30\n        });\n} catch (e) {\n    throw e;\n}",
        },
        "searchInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { isOk, type Osdk, type PageResult, type Result } from \"@osdk/client\";\n\nconst page: Result<PageResult<Osdk<HasAddress>>> = await client(HasAddress)\n    .where({\n        $and:[\n            { $not: { address: { $isNull: true }}},\n            { address: { $eq: \"foo\" }}\n        ]\n    })\n    .fetchPageWithErrors({\n        $pageSize: 30\n    });\n\nif (isOk(page)) {\n    const interfaces = page.value.data;\n    const interface1 = interfaces[0];\n}",
        },
        "loadTimeSeriesPointsSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getAllTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getAllPoints();\n}",
        },
        "loadRelativeTimeSeriesPointsSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\n// Only supports ranges in the past\nfunction getRelativeTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getAllPoints({\n        $before: 1,\n        $unit: \"hours\",\n    })\n}",
        },
        "loadAbsoluteTimeSeriesPointsSnippet": {
          "code":
            "import { type Employee } from \"../../../generatedNoCheck/index.js\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getAbsoluteTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return await obj.employeeStatus?.getAllPoints({\n        $startTime: \"2022-08-13T12:34:56Z\",\n        $endTime: \"2022-08-14T12:34:56Z\",\n    });\n}",
        },
        "loadTimeSeriesFirstPointSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getFirstTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getFirstPoint();\n}",
        },
        "loadTimeSeriesLastPointSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getLastTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.employeeStatus?.getLastPoint();\n}",
        },
        "loadObjectMetadataSnippet": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst objectTypeMetadata = await client.fetchMetadata(Employee);\n\nif (objectTypeMetadata?.icon?.type === \"blueprint\") {\n    const blueprintIconName = objectTypeMetadata.icon.name;\n}\nconst currentVisibility = objectTypeMetadata.visibility;\nconst currentDescription = objectTypeMetadata.description;",
        },
        "loadInterfaceMetadataSnippet": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst interfaceTypeMetadata = await client.fetchMetadata(HasAddress);\n\nconst implementingObjectTypes = interfaceTypeMetadata.implementedBy;\nconst interfaceRid = interfaceTypeMetadata.rid;",
        },
        "derivedPropertyBaseExample": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"lead\").selectProperty(\"fullName\")\n    })\n    .where({\n      \"newPropertyName\": { $startsWith: \"foo\" }\n    }).fetchPage();",
        },
        "derivedPropertyApproximateDistinctAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:approximateDistinct\")\n    }).fetchPage();",
        },
        "derivedPropertyExactDistinctAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:exactDistinct\")\n    }).fetchPage();",
        },
        "derivedPropertyCollectToListAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst maxObjectsInList = 75; // Adjust this value as needed between 1 and 100\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:collectList\", { limit: maxObjectsInList })\n    }).fetchPage();",
        },
        "derivedPropertyCollectToSetAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst maxObjectsInSet = 75; // Adjust this value as needed between 1 and 100\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:collectSet\", { limit: maxObjectsInSet })\n    }).fetchPage();",
        },
        "derivedPropertyCountAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\")\n    }).fetchPage();",
        },
        "derivedPropertySelectPropertyAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"lead\").selectProperty(\"fullName\")\n    }).fetchPage();",
        },
        "derivedPropertyApproximatePercentileAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"purchasePrice:approximatePercentile\", { percentile: 95 })\n    }).fetchPage();",
        },
        "derivedPropertyNumericAggregation": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"peeps\").aggregate(\"salary:sum\")\n    }).fetchPage();",
        },
        "objectSetOperationsGuide": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Object set operations can be chained. e.g. To find all objects in objectSetA \n// that are present in objectSetB but do not exist in objectSetC:\nconst result = objectSetA\n  .intersect(objectSetB)\n  .subtract(objectSetC).fetchPage();",
        },
        "objectSetOperationsUnion": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Combine objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .union(objectSetB)\n  .union(objectSetC).fetchPage(); // alternatively: objectSetA.union(objectSetB, objectSetC)",
        },
        "objectSetOperationsSubtract": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return objects in objectSetA that are not present in either objectSetB or objectSetC\nconst result = objectSetA\n  .subtract(objectSetB)\n  .subtract(objectSetC).fetchPage(); // alternatively: objectSetA.subtract(objectSetB, objectSetC)",
        },
        "objectSetOperationsIntersect": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return all objects common to objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .intersect(objectSetB)\n  .intersect(objectSetC).fetchPage(); // alternatively: objectSetA.intersect(objectSetB, objectSetC)",
        },
        "searchAround": {
          "code":
            "import { Equipment } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\n// Object set containing objects a, b and c\nconst objects = client(Equipment)\n    .where({ equipmentId: { $in: [\"a\", \"b\", \"c\"]}});\n\n// Traverse the selected link type to find all objects of type\n// Employee linked to Equipment with equipmentId is a or b or c]\nconst linkedObjects = await objects.pivotTo(\"assignedTo\").fetchPage();",
        },
      },
    },
    "2.1.0": {
      "examples": {
        "loadGeotimeSeriesPointsSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getAllTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues();\n}",
        },
        "loadRelativeGeotimeSeriesPointsSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\n// Only supports ranges in the past\nfunction getRelativeTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues({\n        $before: 1,\n        $unit: \"hours\",\n    })\n}",
        },
        "loadAbsoluteGeotimeSeriesPointsSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getAbsoluteTimeSeriesPoints(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getAllValues({\n        $startTime: \"2022-08-13T12:34:56Z\",\n        $endTime: \"2022-08-14T12:34:56Z\",\n    });\n}",
        },
        "loadGeotimeSeriesLastPointSnippet": {
          "code":
            "import type { Osdk } from \"@osdk/client\";\nimport { type Employee } from \"../../../generatedNoCheck/index.js\";\n\nfunction getLastTimeSeriesPoint(obj: Osdk.Instance<Employee>) {\n    return obj.travelHistory?.getLatestValue();\n}",
        },
        "subscribeToObjectSetInstructions": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\ntype subscriptionError = {\n    subscriptionClosed: boolean;\n    error: any;\n}\n\nconst subscription = client(Employee).subscribe(\n    {\n        onChange(update) {\n            if (update.state === \"ADDED_OR_UPDATED\") {\n                // An object has received an update or an object was added to the object set\n                // Get the object using the $primaryKey from your cache\n                // const currentObject = objects[update.object.$primaryKey];\n                // use the update.object[\"<propertyName>\"] to update your cache \n                //currentObject[\"<propertyName>\"] = update.object[\"<propertyName>\"] ?? currentObject[\"<propertyName>\"];\n            }\n            else if (update.state === \"REMOVED\") {\n                // The object was removed from the object set, which could mean it was deleted or no longer meets the filter criteria\n                // Remove the object from your cache using the $primaryKey\n                // delete objects[update.object.$primaryKey];\n            }\n        },\n        onSuccessfulSubscription() {\n            // The subscription was successful and you can expect to receive updates\n        },\n        onError(err: subscriptionError) {\n            // There was an error with the subscription and you will not receive any more updates\n            throw new Error(err.error instanceof Error ? err.error.message : String(err.error));\n        },\n        onOutOfDate() {\n            // We could not keep track of all changes. Please reload the objects in your set.\n        },\n    },\n    { properties: [ \"fullName\",\"salary\" ] }\n);\n\n// On dismount unsubscribe\nsubscription.unsubscribe();",
        },
      },
    },
    "2.4.0": {
      "examples": {
        "derivedPropertyNumericExpression_#isUnary": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n          .selectProperty(\"salary\")\n          .subtract(baseObjectSet.selectProperty(\"salary\"))\n    }).fetchPage();",
        },
        "derivedPropertyNumericExpression_^isUnary": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .aggregate(\"purchasePrice:avg\").divide(\n                  baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\"))\n    }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_#isExtractPart": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"YEARS_part_of_birthDate_of_lead\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n              .selectProperty(\"birthDate\").extractPart(\"YEARS\")\n    }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_^isExtractPart": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"min_between_purchaseDate:min_and_lastMaintenanceDate:min\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .aggregate(\"purchaseDate:min\")\n              .min(baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"lastMaintenanceDate:min\"))\n    }).fetchPage();",
        },
        "nearestNeighborsTextQuery": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst result = await client(Employee)\n  .nearestNeighbors(\"coffee\", 5, \"skillVector\")\n  .fetchPage();",
        },
        "nearestNeighborsVectorQuery": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\n// Note that this vector maps to an arbitrary string\n// It must match the dimension of the \"skillVector\" property: 128\nconst vector_query = Array.from({ length: 128 }, () => 0.3);\nconst result = await client(Employee)\n  .nearestNeighbors(vector_query, 5, \"skillVector\")\n  .fetchPage();",
        },
      },
    },
  },
} as const;
