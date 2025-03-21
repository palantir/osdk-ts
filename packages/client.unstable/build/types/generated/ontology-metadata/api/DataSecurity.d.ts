import type { ClassificationConstraint } from "./ClassificationConstraint.js";
import type { MandatoryMarkingConstraint } from "./MandatoryMarkingConstraint.js";
/**
* Contains information about the different security controls applied on data in this datasource. Note that
* currently this is only allowed on Restricted View-like datasources.
*/
export interface DataSecurity {
	markingConstraint: MandatoryMarkingConstraint | undefined;
	classificationConstraint: ClassificationConstraint | undefined;
}
