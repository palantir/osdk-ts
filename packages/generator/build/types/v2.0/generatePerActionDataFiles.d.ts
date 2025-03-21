import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
export declare function generatePerActionDataFiles({ sanitizedOntology: ontology, fs, outDir: rootOutDir, importExt, ontology: enhancedOntology, forInternalUse }: Pick<GenerateContext, "sanitizedOntology" | "fs" | "outDir" | "importExt" | "ontology" | "forInternalUse">): Promise<void>;
