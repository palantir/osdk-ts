import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from '@osdk/client';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client';
export declare namespace Office {
    type PropertyKeys = 'officeId' | 'entrance' | 'occupiedArea' | 'name' | 'capacity';
    type Links = {};
    interface Props {
        readonly capacity: $PropType['integer'] | undefined;
        readonly entrance: $PropType['geopoint'] | undefined;
        readonly name: $PropType['string'] | undefined;
        readonly occupiedArea: $PropType['geoshape'] | undefined;
        readonly officeId: $PropType['string'];
    }
    type StrictProps = Props;
    interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = $Osdk.Instance<Office, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = OsdkInstance<OPTIONS, K>;
}
export interface Office extends $ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Office';
    __DefinitionMetadata?: {
        objectSet: Office.ObjectSet;
        props: Office.Props;
        linksType: Office.Links;
        strictProps: Office.StrictProps;
        apiName: 'Office';
        description: 'A office in our Company';
        displayName: 'Office';
        icon: {
            type: 'blueprint';
            color: 'blue';
            name: 'office';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Office';
        primaryKeyApiName: 'officeId';
        primaryKeyType: 'string';
        properties: {
            /**
             *   description: The capacity of the Office
             */
            capacity: $PropertyDef<'integer', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            entrance: $PropertyDef<'geopoint', 'nullable', 'single'>;
            /**
             *   description: The Name of the Office
             */
            name: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   description: The occupied area of the Office
             */
            occupiedArea: $PropertyDef<'geoshape', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            officeId: $PropertyDef<'string', 'non-nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45';
        status: 'ACTIVE';
        titleProperty: 'officeId';
        type: 'object';
    };
}
export declare const Office: Office;
