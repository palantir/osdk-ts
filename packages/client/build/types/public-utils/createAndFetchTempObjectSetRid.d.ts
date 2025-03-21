import type { CompileTimeMetadata, ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import { type Client } from "../Client.js";
/**
* Fetches a temporary object set RID from the Foundry stack for the given object set.
*
* @param client - An OSDK client.
* @param objectSet - The object set to fetch a RID for.
* @returns A promise that resolves to the RID of the temporary object set.
*/
export declare function createAndFetchTempObjectSetRid<Q extends ObjectOrInterfaceDefinition>(client: Client, objectSet: unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"]): Promise<string>;
