import * as gateway from '@osdk/foundry.ontologies';

interface MinimalFs {
    mkdir: (path: string, options?: {
        recursive: boolean;
    }) => Promise<void>;
    writeFile: WriteFileFn;
    readdir: ReaddirFn;
}
type WriteFileFn = (path: string, contents: string) => Promise<void>;
type ReaddirFn = (path: string) => Promise<string[]>;

interface WireOntologyDefinition extends gateway.OntologyFullMetadata {
}

declare function generateClientSdkPackage(packageName: string, packageVersion: string, sdkVersion: "1.1" | "2.0", baseOutDir: string, ontology: WireOntologyDefinition, minimalFs: MinimalFs, dependencyVersions: DependencyVersions, cliVersion: string, externalObjects?: Map<string, string>, externalInterfaces?: Map<string, string>): Promise<void>;
interface DependencyVersions {
    typescriptVersion: string;
    tslibVersion: string;
    areTheTypesWrongVersion: string;
    osdkApiVersion: string;
    osdkClientVersion: string;
}
declare function getExpectedDependencies({ osdkApiVersion, osdkClientVersion, }: DependencyVersions): {
    devDependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
};

declare function generateClientSdkVersionTwoPointZero(ontology: WireOntologyDefinition, userAgent: string, fs: MinimalFs, outDir: string, packageType?: "module" | "commonjs", externalObjects?: Map<string, string>, externalInterfaces?: Map<string, string>, externalSpts?: Map<string, string>, forInternalUse?: boolean): Promise<void>;

export { type MinimalFs, type WireOntologyDefinition, generateClientSdkPackage as __UNSTABLE_generateClientSdkPackage, generateClientSdkVersionTwoPointZero, getExpectedDependencies };
