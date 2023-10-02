import type { PreviewMode } from "../components/PreviewMode";
import type { AsyncOperation } from "../components/AsyncOperation";
import { OpenApiRequest } from "../request";

/**
 * Get an asynchronous operation by its ID.
 *
 * Third-party applications using this endpoint via OAuth2 must request the following operation scope: `api:read-data`.
 *
 */
export function getOperation<TResponse>(_request: OpenApiRequest<AsyncOperation, TResponse>, operationId: string, preview?: PreviewMode): Promise<TResponse> {
    return _request(
        "getOperation",
        "GET",
        "/v2/operations/{operationId}",
        __undefined,
        __undefined,
        {
            preview,
        },
        {
            operationId,
        },
        __undefined,
        "application/json",
    );
}

const AnyMediaType: string = "*/*";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
