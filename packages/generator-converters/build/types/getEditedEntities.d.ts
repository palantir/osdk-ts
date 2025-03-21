import type { ActionTypeV2 } from "@osdk/foundry.ontologies";
export type ModifiedEntityTypes = {
	addedObjects: Set<string>
	modifiedObjects: Set<string>
};
export declare function getModifiedEntityTypes(action: ActionTypeV2): ModifiedEntityTypes;
