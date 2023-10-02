import { LanguageModel } from "./LanguageModel";

export interface ListLanguageModelsResponse {
    /** The list of language models. */
    data: Array<LanguageModel>;
}
