import { ChatMessage } from "./ChatMessage";
import { ParameterKey } from "./ParameterKey";
import { ParameterValue } from "./ParameterValue";

export interface ChatCompletionRequest {
    messages: Array<ChatMessage>;
    /**
     * Any additional model-specific parameters:
     * - for global models, the keys can be one of the following
     *     (refer to https://platform.openai.com/docs/api-reference/chat/create for documentation on these parameters):
     *   - `temperature`
     *   - `top_p`
     *   - `n`
     *   - `stop`
     *   - `max_tokens`
     *   - `presence_penalty`
     *   - `frequency_penalty`
     *   - `logit_bias`
     *
     */
    parameters: Record<ParameterKey, ParameterValue>;
}
