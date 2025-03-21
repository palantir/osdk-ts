import type { ActionTypeModificationRequest } from "../ActionTypeModificationRequest.js";
/**
* Request for ActionTypeDescriptionGenerator Plugin which takes in an Action Type and summarizes what the
* actionType is set up to do and generates a human readable description.
* The plugin will generate a few suggestions that the user could then accept and save to the actionType.
*/
export interface ActionTypeDescriptionGeneratorPluginRequest {
	actionType: ActionTypeModificationRequest;
}
