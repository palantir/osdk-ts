import type { AsyncOperation } from "../components/AsyncOperation";
import type { PreviewMode } from "../components/PreviewMode";
import { OpenApiRequest } from "../request";

/**
 * Get an asynchronous operation by its ID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 */
export function getOperation<TResponse>(_request: OpenApiRequest<AsyncOperation, TResponse>, operationId: string, queryParameters?: {
    preview?: PreviewMode,
}): Promise<TResponse> {
    return _request(
        "GET",
        `/v2/operations/${operationId}`,
        __undefined,
        queryParameters,
        __undefined,
    );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
