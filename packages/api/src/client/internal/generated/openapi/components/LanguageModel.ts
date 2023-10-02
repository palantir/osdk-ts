import { LanguageModelApiName } from "./LanguageModelApiName";
import { LanguageModelSource } from "./LanguageModelSource";

/** Represents a language model. */
export interface LanguageModel {
    apiName?: LanguageModelApiName;
    source?: LanguageModelSource;
}
