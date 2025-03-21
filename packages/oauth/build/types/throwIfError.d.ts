import type { OAuth2Error } from "oauth4webapi";
import { isOAuth2Error } from "oauth4webapi";
type IsErrorInputs = Parameters<typeof isOAuth2Error>[0];
export declare function throwIfError<T extends IsErrorInputs>(result: T | OAuth2Error): Exclude<T, OAuth2Error>;
export {};
