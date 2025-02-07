import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/api';
export declare namespace equipment {
    type PropertyKeys = 'equipmentId' | 'type';
    type Links = {};
    interface Props {
        readonly equipmentId: $PropType['string'];
        readonly type: $PropType['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends $ObjectSet<equipment, equipment.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = $Osdk.Instance<equipment, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof equipment.Props = keyof equipment.Props> = OsdkInstance<OPTIONS, K>;
}
export interface equipment extends $ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'equipment';
    __DefinitionMetadata?: {
        objectSet: equipment.ObjectSet;
        props: equipment.Props;
        linksType: equipment.Links;
        strictProps: equipment.StrictProps;
        apiName: 'equipment';
        displayName: 'Equipment';
        icon: {
            type: 'blueprint';
            color: 'blue';
            name: 'gear';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Equipment';
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
        rid: 'ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45';
        status: 'ACTIVE';
        titleProperty: 'type';
        type: 'object';
    };
}
export declare const equipment: equipment;
