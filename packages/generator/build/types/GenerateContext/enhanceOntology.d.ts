import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { EnhancedOntologyDefinition } from "./EnhancedOntologyDefinition.js";
export declare function enhanceOntology({ sanitized, importExt, externalObjects, externalInterfaces, externalSpts }: {
	sanitized: WireOntologyDefinition
	externalObjects?: Map<string, string>
	externalInterfaces?: Map<string, string>
	externalSpts?: Map<string, string>
	importExt: string
}): EnhancedOntologyDefinition;
