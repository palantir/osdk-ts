import type { ActionMetadata } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare function loadActionMetadata(client: MinimalClient, actionType: string): Promise<ActionMetadata>;
