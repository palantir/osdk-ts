import type { ParameterId } from "./ParameterId.js";
export interface SectionContent_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
/**
* Items that we can place in a section.
*/
export type SectionContent = SectionContent_parameterId;
