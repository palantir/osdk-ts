import type { ViteDevServer } from "vite";
export interface InjectedScripts {
	scriptSources: string[];
	inlineScripts: string[];
}
/**
* Extracts inline scripts usually injected by Vite plugins during HTML transformation.
*
* Vite plugins can inject scripts into the HTML entrypoint. This function captures
* those injections, specifically inline scripts, which are needed for our server-side
* rendered pages. It calls the `transformIndexHtml` hook on each plugin, collects
* the script descriptors, and returns the concatenated inline script contents.
*
* See documentation: https://vite.dev/guide/api-plugin#transformindexhtml
*/
export declare function extractInjectedScripts(server: Pick<ViteDevServer, "transformIndexHtml">): Promise<InjectedScripts>;
