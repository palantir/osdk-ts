import type { ApplicationDescription } from "./ApplicationDescription.js";
import type { ApplicationName } from "./ApplicationName.js";
import type { ClientSpecification } from "./ClientSpecification.js";
import type { LegacyDataScope } from "./LegacyDataScope.js";
import type { LogoUri } from "./LogoUri.js";
import type { MarkingId } from "./MarkingId.js";
import type { PackageName } from "./PackageName.js";
export interface CreateApplicationRequest {
	name: ApplicationName;
	description: ApplicationDescription | undefined;
	packageName: PackageName | undefined;
	logoUri: LogoUri | undefined;
	clientSpecification: ClientSpecification;
	dataScope: LegacyDataScope;
	cbacMarkingIds: Array<MarkingId>;
}
