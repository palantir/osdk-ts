import type { QueryMetadata } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare function loadQueryMetadata(client: MinimalClient, queryType: string): Promise<QueryMetadata>;
