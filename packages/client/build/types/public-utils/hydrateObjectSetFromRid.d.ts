import type { ObjectOrInterfaceDefinition, ObjectSet } from "@osdk/api";
import type { Client } from "../Client.js";
/**
* Creates an OSDK object set from an object set RID.
* @param client - An OSDK client.
* @param definition - An OSDK object or interface definition.
* @param rid - The RID of an object set.
* @returns An OSDK object set.
*/
export declare function hydrateObjectSetFromRid<T extends ObjectOrInterfaceDefinition>(client: Client, definition: T, rid: string): ObjectSet<T>;
