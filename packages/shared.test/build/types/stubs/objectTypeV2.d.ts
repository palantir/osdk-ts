import type { ObjectTypeV2 } from "@osdk/foundry.ontologies";
export declare const employeeObjectType: ObjectTypeV2;
export declare const officeObjectType: {
	readonly apiName: "Office"
	readonly displayName: "Office"
	readonly pluralDisplayName: "Office"
	readonly icon: {
		readonly type: "blueprint"
		readonly color: "blue"
		readonly name: "office"
	}
	readonly description: "A office in our Company"
	readonly primaryKey: "officeId"
	readonly titleProperty: "officeId"
	readonly properties: {
		readonly officeId: {
			readonly dataType: {
				readonly type: "string"
			}
			readonly rid: "rid"
		}
		readonly entrance: {
			readonly dataType: {
				readonly type: "geopoint"
			}
			readonly rid: "rid"
		}
		readonly occupiedArea: {
			readonly description: "The occupied area of the Office"
			readonly dataType: {
				readonly type: "geoshape"
			}
			readonly rid: "rid"
		}
		readonly name: {
			readonly description: "The Name of the Office"
			readonly dataType: {
				readonly type: "string"
			}
			readonly rid: "rid"
		}
		readonly capacity: {
			readonly description: "The capacity of the Office"
			readonly dataType: {
				readonly type: "integer"
			}
			readonly rid: "rid"
		}
	}
	readonly rid: "ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45"
	readonly status: "ACTIVE"
};
export declare const equipmentObjectType: ObjectTypeV2;
export declare const objectTypeWithTimestampPrimaryKey: ObjectTypeV2;
export declare const objectTypeWithAllPropertyTypes: ObjectTypeV2;
export declare const ObjectTypesV2: ObjectTypeV2[];
export declare const taskObjectType: ObjectTypeV2;
export declare const todoObjectType: ObjectTypeV2;
export declare const personObjectType: ObjectTypeV2;
export declare const BGaoNflPlayerObjectType: ObjectTypeV2;
