import type { ChatCompletionRequest } from "../components/ChatCompletionRequest";
import type { LanguageModelApiName } from "../components/LanguageModelApiName";
import type { ChatCompletionResponse } from "../components/ChatCompletionResponse";
import type { ListLanguageModelsResponse } from "../components/ListLanguageModelsResponse";
import type { LanguageModelSource } from "../components/LanguageModelSource";
import { OpenApiRequest } from "../request";

/**
 * Creates a chat completion for a prompt.
 *
 */
export function createChatCompletion<TResponse>(_request: OpenApiRequest<ChatCompletionResponse, TResponse>, modelName: LanguageModelApiName, request: ChatCompletionRequest): Promise<TResponse> {
    return _request(
        "POST",
        `/v1/models/languageModels/${modelName}/chatCompletions`,
        request,
        __undefined,
        __undefined,
    );
}

/**
 * Runs the same query as create chat completion, but streams the raw response as a string of UTF8 encoded bytes.
 *   Note: This endpoint returns only the string response.
 *
 */
export function streamChatCompletion<TResponse>(_request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>, modelName: LanguageModelApiName, request: ChatCompletionRequest): Promise<TResponse> {
    return _request(
        "POST",
        `/v1/models/languageModels/${modelName}/chatCompletions/stream`,
        request,
        __undefined,
        __undefined,
        "application/json",
        AnyMediaType
    );
}

/**
 * Lists the language models available. Can be filtered by source.
 *
 */
export function listLanguageModels<TResponse>(_request: OpenApiRequest<ListLanguageModelsResponse, TResponse>, queryParameters?: {
    "source"?: LanguageModelSource,
}): Promise<TResponse> {
    return _request(
        "GET",
        `/v1/models/languageModels`,
        __undefined,
        queryParameters,
        __undefined,
    );
}

const AnyMediaType: string = "*/*";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
