import type { SafeArg } from "./SafeArg.js";
import type { UnsafeArg } from "./UnsafeArg.js";
/**
* Represents an unexpected OntologyMetadataError thrown during the creation of the Ontology Modification Context.
*/
export interface GenericOntologyMetadataError {
	errorName: string;
	httpErrorCode: number;
	errorInstanceId: string;
	message: string;
	safeArgs: Array<SafeArg>;
	unsafeArgs: Array<UnsafeArg>;
}
