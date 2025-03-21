import type { MinimalFs } from "../MinimalFs.js";
/**
* Verify that the target outDir does not yet exist OR is empty.
*
* Re-generating an ontology on top of itself is not supported and may leave old
* files around or refuse to update files with new contents in some cases.
*/
export declare function verifyOutDir(outDir: string, fs: MinimalFs): Promise<void>;
