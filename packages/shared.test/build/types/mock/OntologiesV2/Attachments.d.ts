import { Attachments } from "@osdk/foundry.ontologies";
import type { CallFactory } from "../../handlers/util/handleOpenApiCall.js";
export declare const upload: CallFactory<never, typeof Attachments.upload>;
export declare const get: CallFactory<"attachmentRid", typeof Attachments.get>;
export declare const read: CallFactory<"attachmentRid", typeof Attachments.read>;
