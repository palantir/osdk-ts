import type { LlmConfig } from "./LlmConfig.js";
/**
* Request to use pass in a string prompt that will be directly used as the prompt for the LMS and have the
* resulting string returned. This plugin has little validation and is mostly used for testing new prompts.
* Once tested and accepted, prompts should be used to create a new bespoke plugin, with additional validation
* and type checking.
*/
export interface StringPluginRequest {
	userPrompt: string;
	config: LlmConfig | undefined;
}
