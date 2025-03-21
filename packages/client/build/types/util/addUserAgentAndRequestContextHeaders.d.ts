import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare const addUserAgentAndRequestContextHeaders: (client: MinimalClient, withMetadata: Pick<ObjectOrInterfaceDefinition, "osdkMetadata">) => MinimalClient;
