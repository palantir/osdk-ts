export type OpenApiRequest<TExpectedResponse, TResponse = TExpectedResponse> = (
    method: string,
    endpointPath: string,
    data?: any,
    queryArguments?: { [paramName: string]: any; },
    headers?: { [header: string]: string | number | boolean | undefined | null; },
    requestMediaType?: string,
    responseMediaType?: string
) => Promise<TResponse>;
