import type { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
export interface Identifiers extends Record<"osdkObjectIdentifier" | "propertyKeysIdentifier" | "osdkObjectPropsIdentifier" | "objectDefIdentifier" | "osdkObjectLinksIdentifier" | "osdkObjectStrictPropsIdentifier" | "objectSetIdentifier", string> {}
export declare function createOsdkObject(object: EnhancedObjectType | EnhancedInterfaceType, identifier: string, { osdkObjectPropsIdentifier, objectDefIdentifier, osdkObjectStrictPropsIdentifier, osdkObjectLinksIdentifier }: Identifiers): string;
export declare function createObjectSet(object: EnhancedObjectType | EnhancedInterfaceType, { objectDefIdentifier, objectSetIdentifier, propertyKeysIdentifier, osdkObjectIdentifier }: Identifiers): string;
export declare function createProps(type: EnhancedInterfaceType | EnhancedObjectType, identifier: string, strict: boolean): string;
export declare function createDefinition(object: EnhancedObjectType | EnhancedInterfaceType, ontology: EnhancedOntologyDefinition, identifier: string, { objectDefIdentifier, objectSetIdentifier, osdkObjectPropsIdentifier, osdkObjectStrictPropsIdentifier, osdkObjectLinksIdentifier }: Identifiers): string;
export declare function createLinks(ontology: EnhancedOntologyDefinition, object: EnhancedObjectType | EnhancedInterfaceType, identifier: string): string;
export declare function createPropertyKeys(type: EnhancedObjectType | EnhancedInterfaceType): string;
