import type { TypeClass } from "./TypeClass.js";
export interface ValidationRuleDisplayMetadata {
	failureMessage: string;
	typeClasses: Array<TypeClass>;
}
