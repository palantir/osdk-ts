import type { Ontology, OntologyV2 } from "@osdk/foundry.ontologies";
import type { RequestHandler } from "msw";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";
export declare class FauxFoundry {
	#private;
	readonly attachments: FauxAttachmentStore;
	readonly baseUrl: string;
	readonly defaultOntologyRid: any;
	constructor(baseUrl: string, defaultOntology?: Ontology);
	get handlers(): RequestHandler[];
	getDefaultOntology(): FauxOntology;
	getDefaultDataStore(): FauxDataStore;
	createOntology(metadata: OntologyV2): FauxOntology;
	registerOntology(ontology: FauxOntology): void;
	getOntology(ontologyApiNameOrRid: string): FauxOntology;
	setDataStore(ontologyApiNameOrRid: string, fauxDataStore: FauxDataStore): void;
	getDataStore(ontologyApiNameOrRid: string): FauxDataStore;
	getEveryOntology(): FauxOntology[];
}
