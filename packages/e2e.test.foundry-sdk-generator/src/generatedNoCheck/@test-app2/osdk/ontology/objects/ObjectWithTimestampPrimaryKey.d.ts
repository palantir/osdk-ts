import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace ObjectWithTimestampPrimaryKey {
    type PropertyKeys = 'timestamp' | 'value';
    type Links = {};
    interface Props {
        readonly timestamp: $PropType['timestamp'] | undefined;
        readonly value: $PropType['string'] | undefined;
    }
    interface StrictProps {
        readonly timestamp: $PropType['timestamp'];
        readonly value: $PropType['string'] | undefined;
    }
    interface ObjectSet extends $ObjectSet<ObjectWithTimestampPrimaryKey, ObjectWithTimestampPrimaryKey.ObjectSet> {
    }
    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof ObjectWithTimestampPrimaryKey.Props = keyof ObjectWithTimestampPrimaryKey.Props> = $Osdk<ObjectWithTimestampPrimaryKey, K | OPTIONS>;
}
export interface ObjectWithTimestampPrimaryKey extends $ObjectTypeDefinition<'ObjectWithTimestampPrimaryKey', ObjectWithTimestampPrimaryKey> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: ObjectWithTimestampPrimaryKey.ObjectSet;
    props: ObjectWithTimestampPrimaryKey.Props;
    linksType: ObjectWithTimestampPrimaryKey.Links;
    strictProps: ObjectWithTimestampPrimaryKey.StrictProps;
    description: 'Object Type With Timestamp Primary Key';
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'timestamp';
    primaryKeyType: 'timestamp';
    properties: {
        /**
         * (no ontology metadata)
         */
        timestamp: $PropertyDef<'timestamp', 'non-nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        value: $PropertyDef<'string', 'nullable', 'single'>;
    };
    spts: {};
}
export declare const ObjectWithTimestampPrimaryKey: ObjectWithTimestampPrimaryKey;
