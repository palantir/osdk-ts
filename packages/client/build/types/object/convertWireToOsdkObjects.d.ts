import type { NullabilityAdherence } from "@osdk/api";
import type { InterfaceToObjectTypeMappings, InterfaceTypeApiName, OntologyObjectV2 } from "@osdk/foundry.ontologies";
import type { MinimalClient } from "../MinimalClientContext.js";
import type { InterfaceHolder } from "./convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "./convertWireToOsdkObjects/ObjectHolder.js";
export declare function convertWireToOsdkObjects2(client: MinimalClient, objects: OntologyObjectV2[], interfaceApiName: string, forceRemoveRid?: boolean, selectedProps?: ReadonlyArray<string>, strictNonNull?: NullabilityAdherence, interfaceToObjectTypeMappings?: Record<InterfaceTypeApiName, InterfaceToObjectTypeMappings>): Promise<Array<InterfaceHolder>>;
export declare function convertWireToOsdkObjects2(client: MinimalClient, objects: OntologyObjectV2[], interfaceApiName: undefined, forceRemoveRid?: boolean, selectedProps?: ReadonlyArray<string>, strictNonNull?: NullabilityAdherence, interfaceToObjectTypeMappings?: Record<InterfaceTypeApiName, InterfaceToObjectTypeMappings>): Promise<Array<ObjectHolder>>;
export declare function convertWireToOsdkObjects2(client: MinimalClient, objects: OntologyObjectV2[], interfaceApiName: string | undefined, forceRemoveRid?: boolean, selectedProps?: ReadonlyArray<string>, strictNonNull?: NullabilityAdherence, interfaceToObjectTypeMappings?: Record<InterfaceTypeApiName, InterfaceToObjectTypeMappings>): Promise<Array<ObjectHolder | InterfaceHolder>>;
