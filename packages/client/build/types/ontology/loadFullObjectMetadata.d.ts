import type { ObjectMetadata } from "@osdk/api";
import type { MinimalClient } from "../MinimalClientContext.js";
export declare function loadFullObjectMetadata(client: MinimalClient, objectType: string): Promise<ObjectMetadata & {
	rid: string
}>;
