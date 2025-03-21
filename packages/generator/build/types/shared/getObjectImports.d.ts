import type { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { ForeignType } from "../GenerateContext/ForeignType.js";
export declare function getObjectImports(objects: Set<EnhancedObjectType | ForeignType | EnhancedInterfaceType>, curApiName: string | undefined, currentFilePath: string, v2: boolean): string;
