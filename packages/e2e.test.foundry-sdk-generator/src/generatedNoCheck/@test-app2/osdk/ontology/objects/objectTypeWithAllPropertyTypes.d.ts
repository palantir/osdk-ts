import type { ObjectTypeDefinition as $ObjectTypeDefinition, PropertyDef as $PropertyDef } from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace objectTypeWithAllPropertyTypes {
    type PropertyKeys = 'id' | 'string' | 'boolean' | 'date' | 'dateTime' | 'decimal' | 'integer' | 'long' | 'short' | 'float' | 'double' | 'byte' | 'attachment' | 'attachment2' | 'geoPoint' | 'geoShape' | 'stringArray' | 'booleanArray' | 'dateArray' | 'dateTimeArray' | 'decimalArray' | 'integerArray' | 'longArray' | 'shortArray' | 'floatArray' | 'doubleArray' | 'byteArray' | 'attachmentArray' | 'geoPointArray' | 'geoShapeArray';
    type Links = {};
    interface Props {
        readonly attachment: $PropType['attachment'] | undefined;
        readonly attachment2: $PropType['attachment'] | undefined;
        readonly attachmentArray: $PropType['attachment'][] | undefined;
        readonly boolean: $PropType['boolean'] | undefined;
        readonly booleanArray: $PropType['boolean'][] | undefined;
        readonly byte: $PropType['byte'] | undefined;
        readonly byteArray: $PropType['byte'][] | undefined;
        readonly date: $PropType['datetime'] | undefined;
        readonly dateArray: $PropType['datetime'][] | undefined;
        readonly dateTime: $PropType['timestamp'] | undefined;
        readonly dateTimeArray: $PropType['timestamp'][] | undefined;
        readonly decimal: $PropType['decimal'] | undefined;
        readonly decimalArray: $PropType['decimal'][] | undefined;
        readonly double: $PropType['double'] | undefined;
        readonly doubleArray: $PropType['double'][] | undefined;
        readonly float: $PropType['float'] | undefined;
        readonly floatArray: $PropType['float'][] | undefined;
        readonly geoPoint: $PropType['geopoint'] | undefined;
        readonly geoPointArray: $PropType['geopoint'][] | undefined;
        readonly geoShape: $PropType['geoshape'] | undefined;
        readonly geoShapeArray: $PropType['geoshape'][] | undefined;
        readonly id: $PropType['integer'] | undefined;
        readonly integer: $PropType['integer'] | undefined;
        readonly integerArray: $PropType['integer'][] | undefined;
        readonly long: $PropType['long'] | undefined;
        readonly longArray: $PropType['long'][] | undefined;
        readonly short: $PropType['short'] | undefined;
        readonly shortArray: $PropType['short'][] | undefined;
        readonly string: $PropType['string'] | undefined;
        readonly stringArray: $PropType['string'][] | undefined;
    }
    interface StrictProps {
        readonly attachment: $PropType['attachment'] | undefined;
        readonly attachment2: $PropType['attachment'] | undefined;
        readonly attachmentArray: $PropType['attachment'][] | undefined;
        readonly boolean: $PropType['boolean'] | undefined;
        readonly booleanArray: $PropType['boolean'][] | undefined;
        readonly byte: $PropType['byte'] | undefined;
        readonly byteArray: $PropType['byte'][] | undefined;
        readonly date: $PropType['datetime'] | undefined;
        readonly dateArray: $PropType['datetime'][] | undefined;
        readonly dateTime: $PropType['timestamp'] | undefined;
        readonly dateTimeArray: $PropType['timestamp'][] | undefined;
        readonly decimal: $PropType['decimal'] | undefined;
        readonly decimalArray: $PropType['decimal'][] | undefined;
        readonly double: $PropType['double'] | undefined;
        readonly doubleArray: $PropType['double'][] | undefined;
        readonly float: $PropType['float'] | undefined;
        readonly floatArray: $PropType['float'][] | undefined;
        readonly geoPoint: $PropType['geopoint'] | undefined;
        readonly geoPointArray: $PropType['geopoint'][] | undefined;
        readonly geoShape: $PropType['geoshape'] | undefined;
        readonly geoShapeArray: $PropType['geoshape'][] | undefined;
        readonly id: $PropType['integer'];
        readonly integer: $PropType['integer'] | undefined;
        readonly integerArray: $PropType['integer'][] | undefined;
        readonly long: $PropType['long'] | undefined;
        readonly longArray: $PropType['long'][] | undefined;
        readonly short: $PropType['short'] | undefined;
        readonly shortArray: $PropType['short'][] | undefined;
        readonly string: $PropType['string'] | undefined;
        readonly stringArray: $PropType['string'][] | undefined;
    }
    interface ObjectSet extends $ObjectSet<objectTypeWithAllPropertyTypes, objectTypeWithAllPropertyTypes.ObjectSet> {
    }
    type OsdkObject<OPTIONS extends never | '$notStrict' | '$rid' = never, K extends keyof objectTypeWithAllPropertyTypes.Props = keyof objectTypeWithAllPropertyTypes.Props> = $Osdk<objectTypeWithAllPropertyTypes, K | OPTIONS>;
}
export interface objectTypeWithAllPropertyTypes extends $ObjectTypeDefinition<'objectTypeWithAllPropertyTypes', objectTypeWithAllPropertyTypes> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: objectTypeWithAllPropertyTypes.ObjectSet;
    props: objectTypeWithAllPropertyTypes.Props;
    linksType: objectTypeWithAllPropertyTypes.Links;
    strictProps: objectTypeWithAllPropertyTypes.StrictProps;
    description: 'An object type with all property types';
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    inverseSpts: {};
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
        /**
         * (no ontology metadata)
         */
        attachment: $PropertyDef<'attachment', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        attachment2: $PropertyDef<'attachment', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        attachmentArray: $PropertyDef<'attachment', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        boolean: $PropertyDef<'boolean', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        booleanArray: $PropertyDef<'boolean', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        byte: $PropertyDef<'byte', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        byteArray: $PropertyDef<'byte', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        date: $PropertyDef<'datetime', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        dateArray: $PropertyDef<'datetime', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        dateTime: $PropertyDef<'timestamp', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        dateTimeArray: $PropertyDef<'timestamp', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        decimal: $PropertyDef<'decimal', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        decimalArray: $PropertyDef<'decimal', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        double: $PropertyDef<'double', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        doubleArray: $PropertyDef<'double', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        float: $PropertyDef<'float', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        floatArray: $PropertyDef<'float', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        geoPoint: $PropertyDef<'geopoint', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        geoPointArray: $PropertyDef<'geopoint', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        geoShape: $PropertyDef<'geoshape', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        geoShapeArray: $PropertyDef<'geoshape', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        id: $PropertyDef<'integer', 'non-nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        integer: $PropertyDef<'integer', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        integerArray: $PropertyDef<'integer', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        long: $PropertyDef<'long', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        longArray: $PropertyDef<'long', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        short: $PropertyDef<'short', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        shortArray: $PropertyDef<'short', 'nullable', 'array'>;
        /**
         * (no ontology metadata)
         */
        string: $PropertyDef<'string', 'nullable', 'single'>;
        /**
         * (no ontology metadata)
         */
        stringArray: $PropertyDef<'string', 'nullable', 'array'>;
    };
    spts: {};
}
export declare const objectTypeWithAllPropertyTypes: objectTypeWithAllPropertyTypes;
