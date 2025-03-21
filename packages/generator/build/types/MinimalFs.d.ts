export interface MinimalFs {
	mkdir: (path: string, options?: {
		recursive: boolean
	}) => Promise<void>;
	writeFile: WriteFileFn;
	readdir: ReaddirFn;
}
export type WriteFileFn = (path: string, contents: string) => Promise<void>;
export type ReaddirFn = (path: string) => Promise<string[]>;
