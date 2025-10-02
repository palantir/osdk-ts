import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectMetadata as $ObjectMetadata,
} from '@osdk/client';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/client';

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
    /**
     * (no ontology metadata)
     */
    readonly attachment: $PropType['attachment'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly attachmentArray: $PropType['attachment'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly boolean: $PropType['boolean'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly booleanArray: $PropType['boolean'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly byte: $PropType['byte'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly byteArray: $PropType['byte'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly date: $PropType['datetime'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly dateArray: $PropType['datetime'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly dateTime: $PropType['timestamp'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly dateTimeArray: $PropType['timestamp'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly decimal: $PropType['decimal'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly decimalArray: $PropType['decimal'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly double: $PropType['double'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly doubleArray: $PropType['double'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly float: $PropType['float'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly floatArray: $PropType['float'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly geoPoint: $PropType['geopoint'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly geoPointArray: $PropType['geopoint'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly geoShape: $PropType['geoshape'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly geoShapeArray: $PropType['geoshape'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['integer'];
    /**
     * (no ontology metadata)
     */
    readonly integer: $PropType['integer'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly integerArray: $PropType['integer'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly long: $PropType['long'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly longArray: $PropType['long'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly numericTimeseries: $PropType['numericTimeseries'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly short: $PropType['short'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly shortArray: $PropType['short'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly string: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly stringArray: $PropType['string'][] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly stringTimeseries: $PropType['stringTimeseries'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet
    extends $ObjectSet<ObjectTypeWithAllPropertyTypes, ObjectTypeWithAllPropertyTypes.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props,
  > = $Osdk.Instance<ObjectTypeWithAllPropertyTypes, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
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
    implements: undefined;
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
    visibility: undefined;
  };
}

export const ObjectTypeWithAllPropertyTypes = {
  type: 'object',
  apiName: 'ObjectTypeWithAllPropertyTypes',
  osdkMetadata: $osdkMetadata,
  experimentalDoNotUseMetadata: {
    rid: 'rid.a.b.c.d',
  },
} as ObjectTypeWithAllPropertyTypes;
