import type { MinimalFs } from "../MinimalFs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import type { EnhancedOntologyDefinition } from "./EnhancedOntologyDefinition.js";
export interface GenerateContext {
	sanitizedOntology: WireOntologyDefinition;
	ontology: EnhancedOntologyDefinition;
	importExt?: string;
	fs: MinimalFs;
	outDir: string;
	ontologyApiNamespace?: string | undefined;
	apiNamespacePackageMap?: Map<string, string>;
	forInternalUse?: boolean;
}
