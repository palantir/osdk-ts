import type { PropertyRenderHint } from "./PropertyRenderHint.js";
import type { Visibility } from "./Visibility.js";
export interface FieldDisplayMetadata {
	displayName: string | undefined;
	visibility: Visibility | undefined;
	renderHints: Array<PropertyRenderHint>;
}
