import type { ReaddirFn, WriteFileFn } from "../../MinimalFs.js";
export declare function createMockMinimalFiles(): {
	minimalFiles: {
		writeFile: WriteFileFn
		mkdir: () => Promise<void>
		readdir: ReaddirFn
	}
	getFiles: () => {
		[k: string]: string
	}
	dumpFilesToConsole: () => void
};
