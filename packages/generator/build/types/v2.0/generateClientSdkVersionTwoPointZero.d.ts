import type { MinimalFs } from "../MinimalFs.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
export declare function generateClientSdkVersionTwoPointZero(ontology: WireOntologyDefinition, userAgent: string, fs: MinimalFs, outDir: string, packageType?: "module" | "commonjs", externalObjects?: Map<string, string>, externalInterfaces?: Map<string, string>, externalSpts?: Map<string, string>, forInternalUse?: boolean): Promise<void>;
