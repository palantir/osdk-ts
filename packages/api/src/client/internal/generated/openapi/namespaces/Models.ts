import type { LanguageModelApiName } from "../components/LanguageModelApiName";
import type { ChatCompletionRequest } from "../components/ChatCompletionRequest";
import type { ChatCompletionResponse } from "../components/ChatCompletionResponse";
import type { LanguageModelSource } from "../components/LanguageModelSource";
import type { ListLanguageModelsResponse } from "../components/ListLanguageModelsResponse";
import { OpenApiRequest } from "../request";

/**
 * Creates a chat completion for a prompt.
 *
 */
export function createChatCompletion<TResponse>(_request: OpenApiRequest<ChatCompletionResponse, TResponse>, modelName: LanguageModelApiName, request: ChatCompletionRequest): Promise<TResponse> {
    return _request(
        "createChatCompletion",
        "POST",
        "/v1/models/languageModels/{modelName}/chatCompletions",
        request,
        __undefined,
        __undefined,
        {
            modelName,
        },
        "application/json",
        "application/json",
    );
}

/**
 * Runs the same query as create chat completion, but streams the raw response as a string of UTF8 encoded bytes.
 *   Note: This endpoint returns only the string response.
 *
 */
export function streamChatCompletion<TResponse>(_request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>, modelName: LanguageModelApiName, request: ChatCompletionRequest): Promise<TResponse> {
    return _request(
        "streamChatCompletion",
        "POST",
        "/v1/models/languageModels/{modelName}/chatCompletions/stream",
        request,
        __undefined,
        __undefined,
        {
            modelName,
        },
        "application/json",
        AnyMediaType,
    );
}

/**
 * Lists the language models available. Can be filtered by source.
 *
 */
export function listLanguageModels<TResponse>(_request: OpenApiRequest<ListLanguageModelsResponse, TResponse>, source?: LanguageModelSource): Promise<TResponse> {
    return _request(
        "listLanguageModels",
        "GET",
        "/v1/models/languageModels",
        __undefined,
        __undefined,
        {
            source,
        },
        __undefined,
        __undefined,
        "application/json",
    );
}

const AnyMediaType: string = "*/*";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
