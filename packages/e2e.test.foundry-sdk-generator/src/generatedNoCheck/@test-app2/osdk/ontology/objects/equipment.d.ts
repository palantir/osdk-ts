import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace equipment {
    type PropertyKeys = 'equipmentId' | 'type';
    type Links = {};
    interface Props {
        readonly equipmentId: $PropType['string'] | undefined;
        readonly type: $PropType['string'] | undefined;
    }
    interface StrictProps {
        readonly equipmentId: $PropType['string'];
        readonly type: $PropType['string'] | undefined;
    }
    interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
    }
    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = $Osdk<equipment, K | OPTIONS>;
}
export interface equipment extends $ObjectTypeDefinition<'equipment', equipment> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: equipment.ObjectSet;
    props: equipment.Props;
    linksType: equipment.Links;
    strictProps: equipment.StrictProps;
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'equipmentId';
    primaryKeyType: 'string';
    properties: {
        /**
         *   description: The id of an equipment
         */
        equipmentId: $PropertyDef<'string', 'non-nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        type: $PropertyDef<'string', 'nullable', 'single'>;
    };
    spts: {};
}
export declare const equipment: equipment;
