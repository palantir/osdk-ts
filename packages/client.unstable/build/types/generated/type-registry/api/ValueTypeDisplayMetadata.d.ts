import type { Description } from "./Description.js";
import type { DisplayName } from "./DisplayName.js";
export interface ValueTypeDisplayMetadata {
	displayName: DisplayName;
	description: Description | undefined;
}
