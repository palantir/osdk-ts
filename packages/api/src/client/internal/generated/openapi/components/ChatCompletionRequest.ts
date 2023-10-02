import { ChatMessage } from "./ChatMessage";
import { ParameterKey } from "./ParameterKey";
import { ParameterValue } from "./ParameterValue";

export type ChatCompletionRequest = { messages: Array<ChatMessage>; parameters: Record<ParameterKey, ParameterValue>; };
