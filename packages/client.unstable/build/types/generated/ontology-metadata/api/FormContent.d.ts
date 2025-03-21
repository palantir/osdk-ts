import type { ParameterId } from "./ParameterId.js";
import type { SectionId } from "./SectionId.js";
export interface FormContent_parameterId {
	type: "parameterId";
	parameterId: ParameterId;
}
export interface FormContent_sectionId {
	type: "sectionId";
	sectionId: SectionId;
}
/**
* Items that we can place on the action form.
*/
export type FormContent = FormContent_parameterId | FormContent_sectionId;
