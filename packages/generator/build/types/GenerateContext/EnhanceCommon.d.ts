import type { EnhancedOntologyDefinition } from "./EnhancedOntologyDefinition.js";
export interface EnhanceCommon {
	importExt: string;
	/** DO NOT USE THIS IN THE CONSTRUCTOR(S) */
	enhancedOntology: EnhancedOntologyDefinition;
}
