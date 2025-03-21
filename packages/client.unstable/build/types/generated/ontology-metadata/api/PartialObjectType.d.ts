import type { ColumnLocator } from "./ColumnLocator.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ObjectDisplayMetadata } from "./ObjectDisplayMetadata.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { Property } from "./Property.js";
import type { PropertyId } from "./PropertyId.js";
export interface PartialObjectType {
	id: ObjectTypeId;
	authorizationRidColumnLocator: ColumnLocator | undefined;
	displayMetadata: ObjectDisplayMetadata | undefined;
	titlePropertyId: PropertyId;
	properties: Array<Property>;
	primaryKey: PropertyId;
	description: string | undefined;
	metadata: Record<string, any | undefined>;
	rid: ObjectTypeRid;
	editsConfiguration: EditsConfiguration;
}
