import type { SharedClientContext } from "@osdk/shared.client2";
import type { ConjureContext } from "conjure-lite";
export declare function makeConjureContext({ baseUrl, fetch: fetchFn, tokenProvider }: SharedClientContext, servicePath: string): ConjureContext;
