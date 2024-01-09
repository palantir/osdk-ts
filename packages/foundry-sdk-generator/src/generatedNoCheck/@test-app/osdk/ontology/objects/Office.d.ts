import type { GeoPoint, GeoShape, OntologyObject } from '@osdk/legacy-client';
/**
 * A office in our Company
 */
export interface Office extends OntologyObject {
    readonly __apiName: 'Office';
    readonly __primaryKey: string;
    readonly officeId: string | undefined;
    readonly entrance: GeoPoint | undefined;
    /**
     * The occupied area of the Office
     */
    readonly occupiedArea: GeoShape | undefined;
    /**
     * The Name of the Office
     */
    readonly name: string | undefined;
}
export declare const Office: {
    apiName: "Office";
    description: string;
    primaryKeyType: "string";
    links: {};
    properties: {
        officeId: {
            multiplicity: false;
            type: "string";
            nullable: true;
        };
        entrance: {
            multiplicity: false;
            type: "geopoint";
            nullable: true;
        };
        occupiedArea: {
            multiplicity: false;
            description: string;
            type: "geoshape";
            nullable: true;
        };
        name: {
            multiplicity: false;
            description: string;
            type: "string";
            nullable: true;
        };
    };
};
