import { ObjectOrInterfaceDefinition, CompileTimeMetadata, ObjectSet, Attachment } from '@osdk/api';
import { C as Client } from '../Client-DBTcM9gB.cjs';
import '@osdk/shared.client';
import '@osdk/api/unstable';
import '@osdk/shared.client2';

/**
 * Fetches a temporary object set RID from the Foundry stack for the given object set.
 *
 * @param client - An OSDK client.
 * @param objectSet - The object set to fetch a RID for.
 * @returns A promise that resolves to the RID of the temporary object set.
 */
declare function createAndFetchTempObjectSetRid<Q extends ObjectOrInterfaceDefinition>(client: Client, objectSet: unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q> : CompileTimeMetadata<Q>["objectSet"]): Promise<string>;

/**
 * Helper function to create an attachment type from a rid
 * @param client -  An OSDK client.
 * @param rid - The rid of attachment in Foundry.
 * @returns An OSDK attachment object
 */
declare function hydrateAttachmentFromRid(client: Client, rid: string): Attachment;

/**
 * Creates an OSDK object set from an object set RID.
 * @param client - An OSDK client.
 * @param definition - An OSDK object or interface definition.
 * @param rid - The RID of an object set.
 * @returns An OSDK object set.
 */
declare function hydrateObjectSetFromRid<T extends ObjectOrInterfaceDefinition>(client: Client, definition: T, rid: string): ObjectSet<T>;

export { createAndFetchTempObjectSetRid, hydrateAttachmentFromRid, hydrateObjectSetFromRid };
