import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace Office {
    type PropertyKeys = 'officeId' | 'entrance' | 'occupiedArea' | 'name';
    type Links = {};
    interface Props {
        readonly entrance: $PropType['geopoint'] | undefined;
        readonly name: $PropType['string'] | undefined;
        readonly occupiedArea: $PropType['geoshape'] | undefined;
        readonly officeId: $PropType['string'] | undefined;
    }
    interface StrictProps {
        readonly entrance: $PropType['geopoint'] | undefined;
        readonly name: $PropType['string'] | undefined;
        readonly occupiedArea: $PropType['geoshape'] | undefined;
        readonly officeId: $PropType['string'];
    }
    interface ObjectSet extends $ObjectSet<Office, Office.ObjectSet> {
    }
    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof Office.Props = keyof Office.Props> = $Osdk<Office, K | OPTIONS>;
}
export interface Office extends $ObjectTypeDefinition<'Office', Office> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Office.ObjectSet;
    props: Office.Props;
    linksType: Office.Links;
    strictProps: Office.StrictProps;
    description: 'A office in our Company';
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'officeId';
    primaryKeyType: 'string';
    properties: {
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
    spts: {};
}
export declare const Office: Office;
