import type { Arguments, Argv, CommandModule } from "yargs";
export interface generatePackageCommandArgs {
	authToken: string;
	foundryHostname: string;
	ontology: string;
	objectTypes?: string[];
	actionTypes?: string[];
	queryTypes?: string[];
	linkTypes?: string[];
	interfaceTypes?: string[];
	experimentalFeatures?: string[];
	packageName: string;
	packageVersion: string;
	outputDir: string;
	beta?: boolean;
	sdkPackages?: Map<string, string>;
}
export declare class GeneratePackageCommand implements CommandModule<{}, generatePackageCommandArgs> {
	command: string;
	describe: string;
	constructor();
	builder(args: Argv): Argv<generatePackageCommandArgs>;
	handler: (args: Arguments<generatePackageCommandArgs>) => Promise<void>;
}
