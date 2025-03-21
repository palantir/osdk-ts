import type { DefaultBodyType, HttpHandler, HttpResponseResolver, RequestHandlerOptions } from "msw";
import type { BaseAPIError } from "../../BaseError.js";
export declare class OpenApiCallError extends Error {
	status: number;
	json: {
		errorCode: string
		errorName: string
		errorInstanceId: string
		parameters: Record<string, unknown>
	};
	constructor(status: number, json: {
		errorCode: string
		errorName: string
		errorInstanceId: string
		parameters: Record<string, unknown>
	});
}
type ExtractStringParams<T extends any[]> = T extends [infer A, ...infer B] ? A extends string ? [A, ...ExtractStringParams<B>] : [] : [];
export type SkipStringParams<T extends any[]> = T extends [infer A, ...infer B] ? A extends string ? SkipStringParams<B> : T : T;
/**
* This relies on a trick that generally our query params and header params are optional therefore
* the body can generally be assumed to be the first payload following the strings which are path
* params.
*
* This will also fail if your body is defined as a string as that will get interpreted as a path param.
* If this happens, you cannot use the helper. Sorry
*/
export type ExtractBody<X extends ((reqCall: any, ...args: any[]) => Promise<any>)> = undefined extends SkipStringParams<ParamsAfterReqCall<X>>[0] ? never : SkipStringParams<ParamsAfterReqCall<X>>[0];
export type ExtractResponse<X extends ((...args: any[]) => Promise<any>)> = Awaited<ReturnType<X>>;
export type ParamsAfterReqCall<T extends (reqCall: any, ...args: any[]) => Promise<any>> = T extends (reqCall: any, ...args: infer Z) => Promise<any> ? Z : never;
export type RestImpl<
	URL_PARAMS extends string,
	REQ_BODY extends DefaultBodyType,
	RESP_BODY extends DefaultBodyType
> = (info: Parameters<HttpResponseResolver<Record<URL_PARAMS, string>, REQ_BODY, RESP_BODY | BaseAPIError>>[0]) => RESP_BODY | Promise<RESP_BODY>;
export type OpenApiCallFactory<
	URL_PARAMS extends string,
	REQ_BODY extends DefaultBodyType,
	RESP_BODY extends DefaultBodyType
> = (baseUrl: string, restImpl: RestImpl<URL_PARAMS, REQ_BODY, RESP_BODY>, options?: RequestHandlerOptions) => HttpHandler;
export type CallFactory<
	URL_PARAMS extends string,
	X extends ((...args: any[]) => Promise<any>)
> = (baseUrl: string, restImpl: RestImpl<URL_PARAMS, ExtractBody<X>, ExtractResponse<X>>, options?: RequestHandlerOptions) => HttpHandler;
export declare function handleOpenApiCall<
	const N extends ExtractStringParams<ParamsAfterReqCall<X>>,
	const X extends ((...args: any[]) => Promise<any>)
>(openApiCall: X, names: N): CallFactory<N[number], X>;
export {};
