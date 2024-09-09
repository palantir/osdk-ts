/**/
import type { DisplayName } from "./DisplayName.js";
import type { Description } from "./Description.js";
export interface ValueTypeDisplayMetadata {
displayName: DisplayName;
description: Description | undefined;
}