import type { SetupServerApi } from "msw/node";
import type { FauxFoundry } from "./FauxFoundry/FauxFoundry.js";
interface ClientFactory<
	C,
	A extends any[]
> {
	(baseUrl: string, ontologyRid: string, authToken: () => Promise<string>, ...args: A): C;
}
export interface TestSetup<C> {
	apiServer: SetupServerApi;
	fauxFoundry: FauxFoundry;
	client: C;
	auth: () => Promise<string>;
}
/** Helper method to start an api server with a FauxFoundry
* @param fauxFoundry
* @returns
*/
export declare function startNodeApiServer<CF extends ClientFactory<any, any[]> | undefined>(fauxFoundry: FauxFoundry, clientFactory?: CF, ...clientArgs: CF extends ClientFactory<any, infer A> ? A : never[]): TestSetup<CF extends ClientFactory<infer C, any> ? C : never>;
export {};
