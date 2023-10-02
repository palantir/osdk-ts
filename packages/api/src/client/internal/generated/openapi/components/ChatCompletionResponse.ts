import { ChatCompletionChoice } from "./ChatCompletionChoice";

/** Contains `n` different completion choices as specified in the request parameter. */
export type ChatCompletionResponse = { choices: Array<ChatCompletionChoice>; };
