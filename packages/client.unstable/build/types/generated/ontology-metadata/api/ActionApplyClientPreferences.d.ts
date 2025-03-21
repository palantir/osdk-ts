import type { ActionApplyDisallowedClients } from "./ActionApplyDisallowedClients.js";
export interface ActionApplyClientPreferences_disallowedClients {
	type: "disallowedClients";
	disallowedClients: ActionApplyDisallowedClients;
}
export type ActionApplyClientPreferences = ActionApplyClientPreferences_disallowedClients;
