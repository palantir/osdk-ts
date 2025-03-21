import type { ActionTypeIdentifier } from "../ActionTypeIdentifier.js";
/**
* This signals to OMA that the Object Type will be regenerated as the Action Type changes, rather than modified
* directly by the user. Also, OMA should not validate that the backing dataset has the required columns, as
* these will instead be generated on save.
*/
export interface ActionLogMetadataModification {
	actionTypeIdentifiers: Array<ActionTypeIdentifier>;
}
