import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { RuleSet } from "../formatting/RuleSet.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { ActionTypeBlockDataV2 } from "./ActionTypeBlockDataV2.js";
import type { BlockPermissionInformation } from "./BlockPermissionInformation.js";
import type { BlockShapeId } from "./BlockShapeId.js";
import type { InstallLocationBlockShapeId } from "./InstallLocationBlockShapeId.js";
import type { InterfaceTypeBlockDataV2 } from "./InterfaceTypeBlockDataV2.js";
import type { KnownMarketplaceIdentifiers } from "./KnownMarketplaceIdentifiers.js";
import type { LinkTypeBlockDataV2 } from "./LinkTypeBlockDataV2.js";
import type { ObjectTypeBlockDataV2 } from "./ObjectTypeBlockDataV2.js";
import type { SharedPropertyTypeBlockDataV2 } from "./SharedPropertyTypeBlockDataV2.js";
export interface OntologyBlockDataV2 {
	objectTypes: Record<ObjectTypeRid, ObjectTypeBlockDataV2>;
	sharedPropertyTypes: Record<SharedPropertyTypeRid, SharedPropertyTypeBlockDataV2>;
	linkTypes: Record<LinkTypeRid, LinkTypeBlockDataV2>;
	ruleSets: Record<RuleSetRid, RuleSet>;
	actionTypes: Record<ActionTypeRid, ActionTypeBlockDataV2>;
	interfaceTypes: Record<InterfaceTypeRid, InterfaceTypeBlockDataV2>;
	blockOutputCompassLocations: Record<BlockShapeId, InstallLocationBlockShapeId>;
	knownIdentifiers: KnownMarketplaceIdentifiers;
	blockPermissionInformation: BlockPermissionInformation | undefined;
}
