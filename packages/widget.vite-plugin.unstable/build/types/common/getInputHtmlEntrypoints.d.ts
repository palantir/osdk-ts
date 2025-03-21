import type { Rollup } from "vite";
/**
* Get a standardize list of entrypoints from the possible Vite config formats.
*/
export declare function getInputHtmlEntrypoints(options: Rollup.NormalizedInputOptions): string[];
