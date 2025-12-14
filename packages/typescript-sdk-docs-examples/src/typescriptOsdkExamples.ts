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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk } from \"@osdk/client\";\n\ntry {\n    const object: Osdk.Instance<Employee> = await client(Employee).fetchOne(12345);\n}\ncatch(e) {\n    throw e;\n}",
        },
        "loadObjectPageGuide": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const firstPage: PageResult<Osdk.Instance<Employee>>\n        = await client(Employee).fetchPage({ $pageSize: 30 });\n    if (firstPage.nextPageToken === undefined) {\n        console.log(firstPage.data);\n    }\n    const secondPage: PageResult<Osdk.Instance<Employee>>\n    = await client(Employee).fetchPage({ $pageSize: 30, $nextPageToken: firstPage.nextPageToken });\n    console.log([...firstPage.data, ...secondPage.data]);\n}\ncatch (e) {\n    throw e;\n}",
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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nasync function getAll(): Promise<Array<Osdk.Instance<Employee>>> {\n    const objects: Osdk.Instance<Employee>[]= [];\n    for await(const obj of client(Employee).asyncIter()) {\n        objects.push(obj);\n    }\n\n    return objects;\n}\n\n// If Array.fromAsync() is available in your target environment\nfunction getAllFromAsync(): Promise<Array<Osdk.Instance<Employee>>> {\n    return Array.fromAsync(client(Employee).asyncIter());\n}",
        },
        "loadLinkedObjectReference_#isLinkManySided": {
          "code":
            "import { type Employee } from \"../../../generatedNoCheck/index.js\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getLinkedEmployee(source: Osdk.Instance<Employee>) {\n    try {\n        return await source.$link.assignedEquipment.fetchPage();\n    } catch (error) {\n        return { error };\n    }\n}",
        },
        "loadLinkedObjectReference_^isLinkManySided": {
          "code":
            "import { type Employee } from \"../../../generatedNoCheck/index.js\";\nimport { type Osdk } from \"@osdk/client\";\n\nasync function getLinkedEmployee(source: Osdk.Instance<Employee>) {\n    try {\n        return await source.$link.lead.fetchOne();\n    } catch (error) {\n        return { error };\n    }\n}",
        },
        "loadLinkedObjectsReference": {
          "code":
            "import { Equipment } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nasync function getLinkedWithPivotEmployee(){\n    return await client(Equipment).pivotTo(\"assignedTo\").fetchPage();\n}",
        },
        "aggregationTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst numEmployee = await client(Employee)\n    .where({ department: { $isNull : false }})\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        //$groupBy: { department: \"exact\" },\n    });",
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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate: { $fixedWidth: 10 } }\n    });",
        },
        "durationGroupByTemplate_#durationText": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { startDate: { $duration: [ 1, \"days\"] } }\n    });",
        },
        "exactGroupByTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { hourlyRate: \"exact\" }\n    })",
        },
        "rangeGroupByTemplate": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst groupedEmployee = await client(Employee)\n    .aggregate({\n        $select: { $count: \"unordered\" },\n        $groupBy: { salary: { $ranges: [[100, 200 ]]} }\n    });",
        },
        "applyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    // alternatively, you can get the Rid from the attachment property on the object type you are modifying \n    // const attachmentRid = objectTypeWithAttachment.{attachmentProperty}?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"documentType\": \"invoice\",\n            \"documentFile\": attachment,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaReference } from \"@osdk/api\";\nimport { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // Create media reference\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaReference: MediaReference = await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data: mediaBlob,\n        fileName: \"myMedia\",\n        objectType: Equipment,\n        propertyType: \"trainingMaterial\",\n    });\n    // alternatively, you can get the Rid from the media property on the object type you are modifying\n    // const mediaRid = objectTypeWithMedia.{mediaProperty}?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"instructionalVideo\": mediaReference,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_#hasMediaParameter": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload , MediaReference  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    // alternatively, you can get the Rid from the attachment property on the object type you are modifying \n    // const attachmentRid = objectTypeWithAttachment.{attachmentProperty}?.rid;\n    // Create media reference\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaReference: MediaReference = await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data: mediaBlob,\n        fileName: \"myMedia\",\n        objectType: Equipment,\n        propertyType: \"trainingMaterial\",\n    });\n    // alternatively, you can get the Rid from the media property on the object type you are modifying\n    // const mediaRid = objectTypeWithMedia.{mediaProperty}?.rid;\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"documentFile\": attachment,\n            \"instructionalVideo\": mediaReference,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    const result = await client(refreshData).applyAction(\n        {\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentType\": \"invoice\",\n                \"documentFile\": attachment,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentType\": \"invoice\",\n                \"documentFile\": attachment,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaReference } from \"@osdk/api\";\nimport { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // Create media reference\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaReference: MediaReference = await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data: mediaBlob,\n        fileName: \"myMedia\",\n        objectType: Equipment,\n        propertyType: \"trainingMaterial\",\n    });\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"instructionalVideo\": mediaReference,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"instructionalVideo\": mediaReference,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#hasMediaParameter": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload , MediaReference  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    // Create media reference\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaReference: MediaReference = await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data: mediaBlob,\n        fileName: \"myMedia\",\n        objectType: Equipment,\n        propertyType: \"trainingMaterial\",\n    });\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentFile\": attachment,\n                \"instructionalVideo\": mediaReference,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentFile\": attachment,\n                \"instructionalVideo\": mediaReference,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    const result = await client(refreshData).batchApplyAction([\n            {\n            },\n            {\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "uploadAttachment": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { documentEquipment } from \"../../../generatedNoCheck/index.js\";\n\n// To call an action with an attachment property, you first need to upload the file\nasync function createAttachmentReference() {\n    const file = await fetch(\"file.json\");\n    const blob = await file.blob();\n    return createAttachmentUpload(blob, \"myFile\");\n}\n\nconst myAttachmentUpload: AttachmentUpload = await createAttachmentReference();\n// then pass the attachment to the action in the action parameter.\nconst actionResult = client(documentEquipment).applyAction({ \n    equipmentId: \"mac-1234\",\n    documentFile: myAttachmentUpload\n    });",
        },
        "castInterfaceToObjectReference": {
          "code":
            "import { Employee, HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk } from \"@osdk/client\";\n    try {\n        const page = await client(HasAddress).fetchPage();\n\n        const interfaces = page.data;\n        const hasAddress: Osdk<HasAddress> = interfaces[0];\n\n        // Cast from interface to object type\n        const employee: Osdk<Employee> = hasAddress.$as(Employee);\n        // Or from object type back to interface\n        const hasAddress2: Osdk<HasAddress> = employee.$as(HasAddress);\n    } catch (e) {\n        throw e;\n    }",
        },
        "executeFunction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { getTotalEmployeeCount } from \"../../../generatedNoCheck/index.js\";\n\nconst result = await client(getTotalEmployeeCount).executeFunction({\n          \"departmentId\": \"engineering\"\n        });",
        },
        "executeFunction_#hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { calculateTotal } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentUpload() {\n    async function createAttachmentReference() {\n        const file = await fetch(\"file.json\");\n        const blob = await file.blob();\n        return createAttachmentUpload(blob, \"myFile\");\n    }\n    const attachment: AttachmentUpload = await createAttachmentReference();\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "executeFunction_^hasAttachmentUpload": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\nimport { calculateTotal, type Equipment } from \"../../../generatedNoCheck/index.js\";\n\nasync function callFunctionWithAttachmentLoaded(objectWithAttachment: Osdk.Instance<Equipment>) {\n    const attachment = objectWithAttachment.invoice?.rid;\n    if (attachment == null) {\n        throw new Error(\"Attachment is required\");\n    }\n    const result = await client(calculateTotal).executeFunction({ documentFile: attachment, includeMetadata: true });\n    return result;\n}",
        },
        "stringStartsWithTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $startsWith: \"foo\" }}\n    })",
        },
        "stringStartsWithTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName: { $startsWith: \"foo\" }\n    })",
        },
        "containsAllTermsInOrderTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTermsInOrder: \"foo bar\" }}\n    })",
        },
        "containsAllTermsInOrderTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName: { $containsAllTermsInOrder: \"foo bar\" }\n    })",
        },
        "containsAnyTermTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAnyTerm: \"foo bar\" }}\n    })",
        },
        "containsAnyTermTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName: { $containsAnyTerm: \"foo bar\" }\n    })",
        },
        "containsAllTermsTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $containsAllTerms: \"foo bar\" }}\n    })",
        },
        "containsAllTermsTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        fullName: { $containsAllTerms: \"foo bar\" }\n    })",
        },
        "equalityTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $eq: \"555-1234\" }}\n    });",
        },
        "equalityTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $eq: \"Engineering\" }\n    });",
        },
        "inFilterTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { phone: { $in: [\"555-1234\"] }}\n    });",
        },
        "inFilterTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        department: { $in: [\"Engineering\"] }\n    });",
        },
        "nullTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $isNull: true }}\n    });",
        },
        "nullTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $isNull: true }\n    });",
        },
        "rangeTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { houseNumber: { $lt: 100 }}\n    });",
        },
        "rangeTemplate_^structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        salary: { $lt: 100 }\n    });",
        },
        "withinDistanceTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]} }}\n    })",
        },
        "withinDistanceTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $distance: [100, \"miles\"], $of: [-74.0060, 40.7128]}}\n    })",
        },
        "withinBoundingBoxTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "withinBoundingBoxTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
        },
        "withinPolygonTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "withinPolygonTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $within: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsPolygonTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}}\n    });",
        },
        "intersectsPolygonTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $intersects: { type: \"Polygon\", coordinates: [[[10.0, 40.0], [20.0, 50.0], [20.0, 30.0], [10.0, 40.0]]]}}\n    });",
        },
        "intersectsBboxTemplate_#structSubPropertyApiName": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeObjectSet = client(Employee)\n    .where({\n        contactInfo: { entrance: { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}}\n    });",
        },
        "intersectsBboxTemplate_^structSubPropertyApiName": {
          "code":
            "import { Office } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst OfficeObjectSet = client(Office)\n    .where({\n        entrance: { $intersects: { $bbox: [-74.0060, 25.123, 80.4231, 40.7128]}}\n    });",
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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst filteredObjects = client(Employee)\n    .where({\n        previousTitles: { $contains: \"Product manager\" }\n    })",
        },
        "loadInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\nconst response:  PageResult<Osdk<HasAddress>>\n    = await client(HasAddress).fetchPage({ $pageSize: 30 });",
        },
        "loadAllInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { Osdk } from \"@osdk/client\";\n\nconst interfaces: Osdk<HasAddress>[] = [];\n\nfor await(const int of client(HasAddress).asyncIter()) {\n    interfaces.push(int);\n}\nconst interface1 = interfaces[0];",
        },
        "loadOrderedInterfacesReference": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk<HasAddress>> = await client(HasAddress)\n        .fetchPage({\n            $orderBy: { address: \"asc\"},\n            $pageSize: 30\n        });\n} catch (e) {\n    throw e;\n}",
        },
        "searchInterfacesReference_#structSubPropertyApiName": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk<HasAddress>> = await client(HasAddress)\n        .where({\n            contactInfo: { phone: { $startsWith: \"foo\" }}\n        })\n        .fetchPage({\n            $pageSize: 30\n        });\n\n    const interfaces = page.data;\n    const interface1 = interfaces[0];\n} catch (e) {\n    throw e;\n}",
        },
        "searchInterfacesReference_^structSubPropertyApiName": {
          "code":
            "import { HasAddress } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { type Osdk, type PageResult } from \"@osdk/client\";\n\ntry {\n    const page: PageResult<Osdk<HasAddress>> = await client(HasAddress)\n        .where({\n            address: { $startsWith: \"foo\" }\n        })\n        .fetchPage({\n            $pageSize: 30\n        });\n\n    const interfaces = page.data;\n    const interface1 = interfaces[0];\n} catch (e) {\n    throw e;\n}",
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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst sumEmployee = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n        baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\")\n    })\n    .where({\n      \"newPropertyName\": { $gt: 0 }\n    }).aggregate({\n      $select: { \"newPropertyName:max\": \"unordered\" }\n    })",
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
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Object set operations can be chained. e.g. To find all objects in objectSetA \n// that are present in objectSetB but do not exist in objectSetC:\nconst result = objectSetA\n  .intersect(objectSetB)\n  .subtract(objectSetC)",
        },
        "objectSetOperationsUnion": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n// Combine objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .union(objectSetB)\n  .union(objectSetC) // alternatively: objectSetA.union(objectSetB, objectSetC)",
        },
        "objectSetOperationsSubtract": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return objects in objectSetA that are not present in either objectSetB or objectSetC\nconst result = objectSetA\n  .subtract(objectSetB)\n  .subtract(objectSetC) // alternatively: objectSetA.subtract(objectSetB, objectSetC)",
        },
        "objectSetOperationsIntersect": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\n\nconst objectSetA = client(Employee).where({ fullName: { $containsAnyTerm: \"a\"}})\nconst objectSetB = client(Employee).where({ fullName: { $containsAnyTerm: \"b\"}})\nconst objectSetC = client(Employee).where({ fullName: { $containsAnyTerm: \"c\"}})\n\n\n// Return all objects common to objectSetA, objectSetB and objectSetC\nconst result = objectSetA\n  .intersect(objectSetB)\n  .intersect(objectSetC) // alternatively: objectSetA.intersect(objectSetB, objectSetC)",
        },
        "searchAround": {
          "code":
            "import { Equipment } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\n// Object set containing objects a, b and c\nconst objects = client(Equipment)\n    .where({ equipmentId: { $in: [\"a\", \"b\", \"c\"]}});\n\n// Traverse the selected link type to find all objects of type\n// Find Employee objects linked to the filtered Equipment objects\nconst linkedObjects = await objects.pivotTo(\"assignedTo\").fetchPage();",
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
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst subscription = client(Employee).subscribe(\n    {\n        onChange(update) {\n            if (update.state === \"ADDED_OR_UPDATED\") {\n                // An object has received an update or an object was added to the object set\n                // Get the object using the $primaryKey from your cache\n                // const currentObject = objects[update.object.$primaryKey];\n                // use the update.object[\"<propertyName>\"] to update your cache \n                //currentObject[\"<propertyName>\"] = update.object[\"<propertyName>\"] ?? currentObject[\"<propertyName>\"];\n            }\n            else if (update.state === \"REMOVED\") {\n                // The object was removed from the object set, which could mean it was deleted or no longer meets the filter criteria\n                // Remove the object from your cache using the $primaryKey\n                // delete objects[update.object.$primaryKey];\n            }\n        },\n        onSuccessfulSubscription() {\n            // The subscription was successful and you can expect to receive updates\n        },\n        onError(err) {\n            // There was an error with the subscription and you will not receive any more updates\n            throw new Error(err.error instanceof Error ? err.error.message : String(err.error));\n        },\n        onOutOfDate() {\n            // We could not keep track of all changes. Please reload the objects in your set.\n        },\n    },\n    { properties: [ \"fullName\",\"salary\" ] }\n);\n\n// To stop receiving updates, call unsubscribe\nsubscription.unsubscribe();",
        },
        "applyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    // alternatively, you can get the Rid from the attachment property on the object type you are modifying \n    // const attachmentRid = objectTypeWithAttachment.{attachmentProperty}?.rid;\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"documentType\": \"invoice\",\n            \"documentFile\": attachment,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaReference, MediaUpload } from \"@osdk/api\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // You can upload media data via your Action\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaUpload: MediaUpload = { data: mediaBlob, fileName: \"myMedia\" };\n    \n    // You can also pass an existing media reference into your Action\n    const objectPage = await client(Equipment).fetchPage();\n    const mediaReference: MediaReference = objectPage.data[0].trainingMaterial!.getMediaReference();\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"instructionalVideo\": mediaReference,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_#hasMediaParameter": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload , MediaReference, MediaUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n    // alternatively, you can get the Rid from the attachment property on the object type you are modifying \n    // const attachmentRid = objectTypeWithAttachment.{attachmentProperty}?.rid;\n\n    // You can upload media data via your Action\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaUpload: MediaUpload = { data: mediaBlob, fileName: \"myMedia\" };\n    \n    // You can also pass an existing media reference into your Action\n    const objectPage = await client(Equipment).fetchPage();\n    const mediaReference: MediaReference = objectPage.data[0].trainingMaterial!.getMediaReference();\n\n    const result = await client(documentEquipment).applyAction(\n        {\n            \"equipmentId\": \"mac-1234\",\n            \"documentFile\": attachment,\n            \"instructionalVideo\": mediaReference,\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "applyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callAction() {\n    const result = await client(refreshData).applyAction(\n        {\n        },\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n\n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentType\": \"invoice\",\n                \"documentFile\": attachment,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentType\": \"invoice\",\n                \"documentFile\": attachment,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_^hasAttachmentProperty": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaReference, MediaUpload } from \"@osdk/api\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // You can upload media data via your Action\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaUpload: MediaUpload = { data: mediaBlob, fileName: \"myMedia\" };\n    \n    // You can also pass an existing media reference into your Action\n    const objectPage = await client(Equipment).fetchPage();\n    const mediaReference: MediaReference = objectPage.data[0].trainingMaterial!.getMediaReference();\n    \n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"instructionalVideo\": mediaReference,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"instructionalVideo\": mediaReference,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#hasMediaParameter": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { AttachmentUpload , MediaReference, MediaUpload  } from \"@osdk/api\";\nimport { createAttachmentUpload } from \"@osdk/client\";\nimport { documentEquipment , Equipment  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    // Create attachment upload\n    const attachmentFile = await fetch(\"file.json\");\n    const attachmentBlob = await attachmentFile.blob();\n    const attachment: AttachmentUpload = createAttachmentUpload(attachmentBlob, \"myFile\");\n\n    // You can upload media data via your Action\n    const mediaFile = await fetch(\"media.mp4\");\n    const mediaBlob = await mediaFile.blob();\n    const mediaUpload: MediaUpload = { data: mediaBlob, fileName: \"myMedia\" };\n    \n    // You can also pass an existing media reference into your Action\n    const objectPage = await client(Equipment).fetchPage();\n    const mediaReference: MediaReference = objectPage.data[0].trainingMaterial!.getMediaReference();\n    \n    const result = await client(documentEquipment).batchApplyAction([\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentFile\": attachment,\n                \"instructionalVideo\": mediaReference,\n            },\n            {\n                \"equipmentId\": \"mac-1234\",\n                \"documentFile\": attachment,\n                \"instructionalVideo\": mediaReference,\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "batchApplyAction_#actionParameterSampleValuesV2": {
          "code":
            "// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport { refreshData  } from \"../../../generatedNoCheck/index.js\";\n\nasync function callBatchAction() {\n    const result = await client(refreshData).batchApplyAction([\n            {\n            },\n            {\n            },\n        ],\n        {\n            $returnEdits: true,\n        }\n    );\n    if (result.type === \"edits\") {\n        // use the result object to report back on action results\n        const updatedObject = result.editedObjectTypes[0];\n        console.log(\"Updated object\", updatedObject);\n    }\n}",
        },
        "uploadMediaOntologyEdits": {
          "code":
            "import type { Client } from \"@osdk/client\";\nimport { Employee } from \"../../../generatedNoCheck/index.js\";\nimport type { Edits } from \"@osdk/functions\";\nimport { createEditBatch, uploadMedia } from \"@osdk/functions\";\n\nasync function createObject(client: Client): Promise<Edits.Object<Employee>[]> {\n    const batch = createEditBatch<Edits.Object<Employee>>(client);\n    \n    const blob = new Blob([\"Hello, world\"], { type: \"text/plain\" });\n    const mediaReference = await uploadMedia(client, { data: blob, fileName: \"foundryFile.txt\" });\n\n    // @ts-ignore \n    batch.create(Employee, { myMediaProperty: mediaReference, /* Other properties... */ });\n\n    return batch.getEdits();\n}\n\nexport default createObject;",
        },
        "uploadMedia": {
          "code":
            "import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference } from \"@osdk/api/unstable\";\nimport { Equipment, documentEquipment } from \"../../../generatedNoCheck/index.js\"\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nimport type { MediaReference } from \"@osdk/api\";\n// To upload media with 2.x, it has to be linked to an Action call\nasync function createMediaReference() {\n    const file = await fetch(\"file.json\");\n    const data = await file.blob();\n    // Upload media to an object type with a media property. This returns a media reference that can passed to\n    // a media parameter in an Action.\n    return await client(\n        __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference,\n    ).createMediaReference({\n        data,\n        fileName: \"myFile\",\n        objectType: Equipment,\n        propertyType: \"trainingMaterial\",\n    });\n}\nconst mediaReference: MediaReference = await createMediaReference();\nconst actionResult = client(documentEquipment).applyAction({ \n    equipmentId: \"mac-1234\",\n    instructionalVideo: mediaReference \n});",
        },
        "readMedia": {
          "code":
            "import { Equipment } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\nconst result = await client(Equipment).fetchOne(\"mac-1234\");\n// Fetch metadata of a media property\nconst mediaMetadata = await result.trainingMaterial?.fetchMetadata();\nconsole.log(mediaMetadata?.mediaType, mediaMetadata?.sizeBytes, mediaMetadata?.path);\n// Fetch contents of a media property\nconst mediaContent = await result.trainingMaterial?.fetchContents();\nif (mediaContent?.ok) {\n    const data = await mediaContent.blob();\n}",
        },
      },
    },
    "2.4.0": {
      "examples": {
        "derivedPropertyNumericExpression_#isUnary": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"abs_salary\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n          .selectProperty(\"salary\").abs()\n    }).fetchPage();",
        },
        "derivedPropertyNumericExpression_^isUnary": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n      \"newPropertyName\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"assignedEquipment\")\n              .aggregate(\"purchasePrice:avg\").divide(\n                  baseObjectSet.pivotTo(\"assignedEquipment\").aggregate(\"$count\"))\n      }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_#isExtractPart": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"YEARS_part_of_birthDate_of_lead\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n              .selectProperty(\"birthDate\").extractPart(\"YEARS\")\n    }).fetchPage();",
        },
        "derivedPropertyDatetimeExpression_^isExtractPart": {
          "code":
            "import { Employee } from \"../../../generatedNoCheck/index.js\";\n// Edit this import if your client location differs\nimport { client } from \"./client\";\n\nconst EmployeeWithExpression = await client(Employee)\n    .withProperties({\n          \"derivedPropertyDatetime_min\": (baseObjectSet) =>\n          baseObjectSet.pivotTo(\"lead\")\n              .selectProperty(\"startDate\")\n              .min(baseObjectSet.pivotTo(\"lead\").selectProperty(\"startDate\"))\n    }).fetchPage();",
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
