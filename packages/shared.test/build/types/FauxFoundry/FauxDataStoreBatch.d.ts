import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxDataStore } from "./FauxDataStore.js";
/**
* This is separate from the FauxDataStore so that we can in the future support
* this not-committing on errors. That functionality just does not exist at the moment
*/
export declare class FauxDataStoreBatch {
	#private;
	objectEdits: OntologiesV2.ObjectEdits;
	constructor(fauxDataStore: FauxDataStore);
	getObject: (objectType: string, primaryKey: string | number | boolean) => BaseServerObject;
	addObject: (objectType: string, primaryKey: string | number | boolean, object: BaseServerObject) => void;
	modifyObject: (objectType: string, primaryKey: string | number | boolean, update: Partial<BaseServerObject>) => void;
	deleteObject: (objectType: string, primaryKey: string | number | boolean) => void;
	addLink: (leftObjectType: string, leftPrimaryKey: string | number | boolean, leftLinkName: string, rightObjectType: string, rightPrimaryKey: string | number | boolean) => void;
	removeLink: (leftObjectType: string, leftPrimaryKey: string | number | boolean, leftLinkName: string, rightObjectType: string, rightPrimaryKey: string | number | boolean) => void;
}
