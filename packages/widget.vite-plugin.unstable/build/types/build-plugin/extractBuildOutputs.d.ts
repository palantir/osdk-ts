export interface BuildOutputs {
	scripts: Array<ScriptBuildOutput>;
	stylesheets: string[];
}
type ScriptType = "text/javascript" | "module";
type ScriptBuildOutput = {
	type: "script"
	scriptType: ScriptType
	src: string
};
export declare function extractBuildOutputs(htmlFilePath: string): BuildOutputs;
export {};
