/**/
import type { ValueTypeCreated } from "./ValueTypeCreated.js";
import type { ValueTypeMetadataUpdated } from "./ValueTypeMetadataUpdated.js";
import type { ValueTypeDeleted } from "./ValueTypeDeleted.js";
import type { ValueTypeVersionCreated } from "./ValueTypeVersionCreated.js";
export interface ValueTypeModificationEvent_valueTypeCreated {
type: "valueTypeCreated";
valueTypeCreated: ValueTypeCreated
}

export interface ValueTypeModificationEvent_valueTypeMetadataUpdated {
type: "valueTypeMetadataUpdated";
valueTypeMetadataUpdated: ValueTypeMetadataUpdated
}

export interface ValueTypeModificationEvent_valueTypeDeleted {
type: "valueTypeDeleted";
valueTypeDeleted: ValueTypeDeleted
}

export interface ValueTypeModificationEvent_valueTypeVersionCreated {
type: "valueTypeVersionCreated";
valueTypeVersionCreated: ValueTypeVersionCreated
}export type ValueTypeModificationEvent = ValueTypeModificationEvent_valueTypeCreated | ValueTypeModificationEvent_valueTypeMetadataUpdated | ValueTypeModificationEvent_valueTypeDeleted | ValueTypeModificationEvent_valueTypeVersionCreated