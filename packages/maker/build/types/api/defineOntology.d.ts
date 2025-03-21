import type { OntologyIr, OntologyIrValueTypeBlockData } from "@osdk/client.unstable";
type OntologyAndValueTypeIrs = {
	ontology: OntologyIr
	valueType: OntologyIrValueTypeBlockData
};
export declare function defineOntology(ns: string, body: () => void | Promise<void>): Promise<OntologyAndValueTypeIrs>;
export declare function dumpOntologyFullMetadata(): OntologyIr;
export declare function dumpValueTypeWireType(): OntologyIrValueTypeBlockData;
export {};
