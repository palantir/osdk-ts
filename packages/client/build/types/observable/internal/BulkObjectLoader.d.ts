import { type Client } from "../../Client.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
export declare function getBulkObjectLoader(client: Client): BulkObjectLoader;
export declare class BulkObjectLoader {
	#private;
	constructor(client: Client, maxWait?: number, maxEntries?: number);
	fetch(apiName: string, primaryKey: string | number | boolean): Promise<ObjectHolder>;
}
