export type OpenApiRequest<TExpectedResponse, TResponse = TExpectedResponse> = (
    endpointName: string,
    method: string,
    endpointPath: string,
    data?: any,
    headers?: { [header: string]: string | number | boolean | undefined | null; },
    queryArguments?: { [paramName: string]: any; },
    pathArguments?: { [paramName: string]: any; },
    requestMediaType?: string,
    responseMediaType?: string
) => Promise<TResponse>;
