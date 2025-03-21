import type { InterfaceMetadata } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare function loadInterfaceMetadata(client: MinimalClient, objectType: string): Promise<InterfaceMetadata>;
