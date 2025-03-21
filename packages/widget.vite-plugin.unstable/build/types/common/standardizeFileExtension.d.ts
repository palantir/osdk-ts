/**
* Users may import `.js` files in their code, where the source file is actually a `.ts`, `.tsx`, or
* `.jsx` file on disk. This standardizes these file extension to `.js` so that we can match imports
* to source files.
*/
export declare function standardizeFileExtension(file: string): string;
