import type { LoginArgs } from "./LoginArgs.js";
import type { TokenSuccessResponse } from "./token.js";
export declare function invokeLoginFlow(args: LoginArgs): Promise<TokenSuccessResponse>;
