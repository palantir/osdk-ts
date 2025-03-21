import type { Template } from "../templates.js";
export declare function promptTemplate(parsed: {
	template?: string
	beta?: boolean
}): Promise<Template>;
/** Exported for testing only */
export declare function getAvailableTemplatesOrThrow(useBeta: boolean): Template[];
