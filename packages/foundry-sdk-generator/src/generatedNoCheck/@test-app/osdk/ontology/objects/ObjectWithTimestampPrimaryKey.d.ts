import type { OntologyObject, Timestamp } from '@osdk/legacy-client';
/**
 * Object Type With Timestamp Primary Key
 */
export interface ObjectWithTimestampPrimaryKey extends OntologyObject {
    readonly __apiName: 'ObjectWithTimestampPrimaryKey';
    readonly __primaryKey: Timestamp;
    readonly timestamp: Timestamp | undefined;
    readonly value: string | undefined;
}
export declare const ObjectWithTimestampPrimaryKey: {
    apiName: "ObjectWithTimestampPrimaryKey";
    description: string;
    primaryKeyType: "timestamp";
    links: {};
    properties: {
        timestamp: {
            multiplicity: false;
            type: "timestamp";
            nullable: true;
        };
        value: {
            multiplicity: false;
            type: "string";
            nullable: true;
        };
    };
};
