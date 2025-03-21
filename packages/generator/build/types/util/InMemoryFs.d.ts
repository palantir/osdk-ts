import { type MinimalFs } from "../MinimalFs.js";
export interface InMemoryFs extends MinimalFs {
	getFiles(): Record<string, string>;
	getFile(path: string): string;
}
export declare function createInMemoryFs(): InMemoryFs;
