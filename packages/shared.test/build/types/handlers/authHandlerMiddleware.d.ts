import { type DefaultBodyType, type HttpResponseResolver, type PathParams } from "msw";
export declare function authHandlerMiddleware<
	TReqBody extends DefaultBodyType = DefaultBodyType,
	TPathParams extends PathParams<string> = PathParams<string>
>(handler: HttpResponseResolver<TPathParams, TReqBody>): HttpResponseResolver<TPathParams, TReqBody>;
