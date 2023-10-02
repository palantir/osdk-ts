import { ChatCompletionChoice } from "./ChatCompletionChoice";

/** Contains `n` different completion choices as specified in the request parameter. */
export interface ChatCompletionResponse {
    choices: Array<ChatCompletionChoice>;
}
