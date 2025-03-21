import type { ColumnLocator } from "./ColumnLocator.js";
import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ObjectDisplayMetadata } from "./ObjectDisplayMetadata.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { PropertyId } from "./PropertyId.js";
import type { PropertyWithoutRid } from "./PropertyWithoutRid.js";
export interface PartialObjectTypeWithoutRids {
	id: ObjectTypeId;
	authorizationRidColumnLocator: ColumnLocator | undefined;
	displayMetadata: ObjectDisplayMetadata | undefined;
	titlePropertyId: PropertyId;
	properties: Array<PropertyWithoutRid>;
	primaryKey: PropertyId;
	description: string | undefined;
	editsConfiguration: EditsConfiguration | undefined;
	metadata: Record<string, any | undefined>;
}
