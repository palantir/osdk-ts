import type { ClientSpecification } from "./ClientSpecification.js";
import type { LegacyDataScope } from "./LegacyDataScope.js";
import type { OptionalStringModification } from "./OptionalStringModification.js";
/**
* Only fields that are present in the request will be updated.
*/
export interface UpdateApplicationRequest {
	name: string | undefined;
	description: OptionalStringModification | undefined;
	packageName: OptionalStringModification | undefined;
	logoUri: OptionalStringModification | undefined;
	clientSpecification: ClientSpecification | undefined;
	dataScope: LegacyDataScope | undefined;
}
