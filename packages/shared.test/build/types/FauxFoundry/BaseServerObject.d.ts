import type * as OntologiesV2 from "@osdk/foundry.ontologies";
export interface BaseServerObject extends OntologiesV2.OntologyObjectV2 {
	__rid?: string;
	__primaryKey: string | number | boolean;
	__apiName: OntologiesV2.ObjectTypeApiName;
	__title?: string;
}
