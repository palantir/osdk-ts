import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace ObjectTypeWithAllPropertyTypes {
  export type PropertyKeys =
    | 'id'
    | 'string'
    | 'boolean'
    | 'date'
    | 'dateTime'
    | 'decimal'
    | 'integer'
    | 'long'
    | 'short'
    | 'float'
    | 'double'
    | 'byte'
    | 'attachment'
    | 'geoPoint'
    | 'geoShape'
    | 'stringArray'
    | 'booleanArray'
    | 'dateArray'
    | 'dateTimeArray'
    | 'decimalArray'
    | 'integerArray'
    | 'longArray'
    | 'shortArray'
    | 'floatArray'
    | 'doubleArray'
    | 'byteArray'
    | 'attachmentArray'
    | 'geoPointArray'
    | 'geoShapeArray'
    | 'numericTimeseries'
    | 'stringTimeseries';

  export type Links = {};

  export interface Props {
    readonly attachment: $PropType['attachment'] | undefined;
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
    readonly numericTimeseries: $PropType['numericTimeseries'] | undefined;
    readonly short: $PropType['short'] | undefined;
    readonly shortArray: $PropType['short'][] | undefined;
    readonly string: $PropType['string'] | undefined;
    readonly stringArray: $PropType['string'][] | undefined;
    readonly stringTimeseries: $PropType['stringTimeseries'] | undefined;
  }
  export interface StrictProps {
    readonly attachment: $PropType['attachment'] | undefined;
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
    readonly numericTimeseries: $PropType['numericTimeseries'] | undefined;
    readonly short: $PropType['short'] | undefined;
    readonly shortArray: $PropType['short'][] | undefined;
    readonly string: $PropType['string'] | undefined;
    readonly stringArray: $PropType['string'][] | undefined;
    readonly stringTimeseries: $PropType['stringTimeseries'] | undefined;
  }

  export interface ObjectSet
    extends $ObjectSet<ObjectTypeWithAllPropertyTypes, ObjectTypeWithAllPropertyTypes.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props,
  > = $Osdk.Instance<ObjectTypeWithAllPropertyTypes, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ObjectTypeWithAllPropertyTypes extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ObjectTypeWithAllPropertyTypes';
  __DefinitionMetadata?: {
    objectSet: ObjectTypeWithAllPropertyTypes.ObjectSet;
    props: ObjectTypeWithAllPropertyTypes.Props;
    linksType: ObjectTypeWithAllPropertyTypes.Links;
    strictProps: ObjectTypeWithAllPropertyTypes.StrictProps;
    apiName: 'ObjectTypeWithAllPropertyTypes';
    description: 'A type with all property types';
    displayName: 'ObjectTypeWithAllPropertyTypes';
    icon: {
      type: 'blueprint';
      name: 'objectTypeWithAllPropertyTypes';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'ObjectTypeWithAllPropertyTypes';
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
      numericTimeseries: $PropertyDef<'numericTimeseries', 'nullable', 'single'>;
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
      /**
       * (no ontology metadata)
       */
      stringTimeseries: $PropertyDef<'stringTimeseries', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
  };
}

export const ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes = {
  type: 'object',
  apiName: 'ObjectTypeWithAllPropertyTypes',
  osdkMetadata: $osdkMetadata,
};
