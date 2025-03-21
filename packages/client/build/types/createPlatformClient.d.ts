import type { SharedClientContext } from "@osdk/shared.client2";
export interface PlatformClient extends SharedClientContext {}
/**
* Creates a client that can only be used with Platform APIs.
*
* If you already have an OSDK Client (from `createClient`), you do not need to
* create one of these - those clients can be used with Platform APIs as well.
*
* @param baseUrl
* @param tokenProvider
* @param options Currently unused, reserved for future use.
* @param fetchFn
* @returns
*/
export declare function createPlatformClient(baseUrl: string, tokenProvider: () => Promise<string>, options?: undefined, fetchFn?: typeof globalThis.fetch): PlatformClient;
