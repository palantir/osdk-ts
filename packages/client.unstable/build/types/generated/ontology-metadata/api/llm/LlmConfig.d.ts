import type { LanguageModel } from "./LanguageModel.js";
/**
* The configuration settings for the LLM.
* This is used to override the default settings used to query the LLM for optimal performance.
*/
export interface LlmConfig {
	maxTokens: number | undefined;
	temperature: number | undefined;
	languageModel: LanguageModel | undefined;
}
