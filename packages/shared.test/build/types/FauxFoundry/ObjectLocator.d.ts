import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { BaseServerObject } from "./BaseServerObject.js";
export type ObjectLocator<
	T extends OntologiesV2.ObjectTypeApiName = OntologiesV2.ObjectTypeApiName,
	PK extends string = string
> = `${T}:${PK}`;
export declare function objectLocator(obj: BaseServerObject): ObjectLocator;
export declare function parseLocator(locator: ObjectLocator): {
	objectType: string
	primaryKey: string
};
