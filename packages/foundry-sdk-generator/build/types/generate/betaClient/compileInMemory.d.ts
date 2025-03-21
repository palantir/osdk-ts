import type { Diagnostic } from "typescript";
export interface CompilerOutput {
	files: {
		[filename: string]: string
	};
	diagnostics: Diagnostic[];
}
export declare function compileInMemory(files: {
	[fileName: string]: string
}, type: "cjs" | "esm"): {
	files: {
		[fileName: string]: string
	}
	diagnostics: readonly Diagnostic[]
};
