import type { OntologyObject } from '@osdk/legacy-client';
export interface equipment extends OntologyObject {
    readonly __apiName: 'equipment';
    readonly __primaryKey: string;
    /**
     * The id of an equipment
     */
    readonly equipmentId: string | undefined;
    readonly type: string | undefined;
}
export declare const equipment: {
    apiName: "equipment";
    primaryKeyType: "string";
    links: {};
    properties: {
        equipmentId: {
            multiplicity: false;
            description: string;
            type: "string";
            nullable: true;
        };
        type: {
            multiplicity: false;
            type: "string";
            nullable: true;
        };
    };
};
