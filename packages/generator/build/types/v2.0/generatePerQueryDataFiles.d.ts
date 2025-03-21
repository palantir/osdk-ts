import type { QueryParameterDefinition } from "@osdk/api";
import type { EnhancedOntologyDefinition } from "../GenerateContext/EnhancedOntologyDefinition.js";
import type { GenerateContext } from "../GenerateContext/GenerateContext.js";
export declare function generatePerQueryDataFilesV2({ fs, outDir: rootOutDir, ontology, importExt, forInternalUse }: Pick<GenerateContext, "fs" | "outDir" | "importExt" | "ontology" | "forInternalUse">, v2: boolean): Promise<void>;
export declare function queryParamJsDoc(param: QueryParameterDefinition<any>, { apiName }: {
	apiName: string
}): string;
export declare function getQueryParamType(enhancedOntology: EnhancedOntologyDefinition, input: QueryParameterDefinition, type: "Param" | "Result", isMapKey?: boolean): string;
