import type { RuleSetsAlreadyExistError } from "./RuleSetsAlreadyExistError.js";
import type { RuleSetsNotFoundError } from "./RuleSetsNotFoundError.js";
export interface RuleSetError_ruleSetsNotFound {
	type: "ruleSetsNotFound";
	ruleSetsNotFound: RuleSetsNotFoundError;
}
export interface RuleSetError_ruleSetsAlreadyExist {
	type: "ruleSetsAlreadyExist";
	ruleSetsAlreadyExist: RuleSetsAlreadyExistError;
}
export type RuleSetError = RuleSetError_ruleSetsNotFound | RuleSetError_ruleSetsAlreadyExist;
