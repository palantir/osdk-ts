import type { Attachment } from "@osdk/api";
import { type Client } from "../Client.js";
/**
* Helper function to create an attachment type from a rid
* @param client -  An OSDK client.
* @param rid - The rid of attachment in Foundry.
* @returns An OSDK attachment object
*/
export declare function hydrateAttachmentFromRid(client: Client, rid: string): Attachment;
