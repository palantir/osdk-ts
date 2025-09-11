/**
 * WARNING: This file is generated automatically by the updateDocsSnippets.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: uploadAttachment

// Edit this import if your client location differs
import { client } from "./client";
import { type Result, isOk } from "@osdk/client";
import type { AttachmentUpload } from "@osdk/api";

// To upload an attachment with 2.0, it has to be linked to an action call

async function uploadMyFile() {
    const file = await fetch("file.json");
    const blob = await file.blob();
    return createAttachmentUpload(blob, "myFile");
}

const myAttachmentUpload: AttachmentUpload = await uploadMyFile();

const actionResult = client(attachmentUploadingAction).applyAction({ attachment: myAttachmentUpload });
