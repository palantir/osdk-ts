import type {
  ObjectOrInterfacePropertyKeysFrom2 as $ObjectOrInterfacePropertyKeysFrom2,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  PropertyDef as $PropertyDef,
  VersionBound as $VersionBound,
} from '@osdk/api';
import type {
  AggregateOpts as $AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults as $AggregationsResults,
  Augments as $Augments,
  ConvertProps as $ConvertProps,
  DefaultToFalse as $DefaultToFalse,
  FetchPageArgs as $FetchPageArgs,
  LinkedType as $LinkedType,
  LinkNames as $LinkNames,
  NullabilityAdherence as $NullabilityAdherence,
  NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  OsdkObjectPropertyType as $OsdkObjectPropertyType,
  PageResult as $PageResult,
  PropertyValueClientToWire as $PropertyValueClientToWire,
  PropertyValueWireToClient as $PropType,
  Result as $Result,
  SelectArg as $SelectArg,
  ValidToFrom as $ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace ObjectTypeWithAllPropertyTypes {
  export type PropertyKeys = $ObjectOrInterfacePropertyKeysFrom2<ObjectTypeWithAllPropertyTypes>;

  export type Links = never;

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
    extends $ObjectSet<ObjectTypeWithAllPropertyTypes, ObjectTypeWithAllPropertyTypes.ObjectSet> {
    readonly aggregate: <AO extends $AggregateOpts<ObjectTypeWithAllPropertyTypes>>(
      req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<ObjectTypeWithAllPropertyTypes, AO>,
    ) => Promise<$AggregationsResults<ObjectTypeWithAllPropertyTypes, AO>>;

    readonly pivotTo: <L extends $LinkNames<ObjectTypeWithAllPropertyTypes>>(
      type: L,
    ) => $LinkedType<ObjectTypeWithAllPropertyTypes, L>['objectSet']; // ObjectSet<LinkedType<ObjectTypeWithAllPropertyTypes, L>>;

    readonly fetchOne: <
      L extends ObjectTypeWithAllPropertyTypes.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[ObjectTypeWithAllPropertyTypes['primaryKeyType']],
      options?: $SelectArg<ObjectTypeWithAllPropertyTypes, L, R, S>,
    ) => Promise<
      ObjectTypeWithAllPropertyTypes.OsdkObject<
        (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
        L
      >
    >;

    readonly fetchOneWithErrors: <
      L extends ObjectTypeWithAllPropertyTypes.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = $NullabilityAdherenceDefault,
    >(
      primaryKey: $PropertyValueClientToWire[ObjectTypeWithAllPropertyTypes['primaryKeyType']],
      options?: $SelectArg<ObjectTypeWithAllPropertyTypes, L, R, S>,
    ) => Promise<
      $Result<
        ObjectTypeWithAllPropertyTypes.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPage: <
      L extends ObjectTypeWithAllPropertyTypes.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<ObjectTypeWithAllPropertyTypes, L, R, A, S>,
    ) => Promise<
      $PageResult<
        ObjectTypeWithAllPropertyTypes.OsdkObject<
          (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
          L
        >
      >
    >;

    readonly fetchPageWithErrors: <
      L extends ObjectTypeWithAllPropertyTypes.PropertyKeys,
      R extends boolean,
      const A extends $Augments,
      S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
    >(
      args?: $FetchPageArgs<ObjectTypeWithAllPropertyTypes, L, R, A, S>,
    ) => Promise<
      $Result<
        $PageResult<
          ObjectTypeWithAllPropertyTypes.OsdkObject<
            (S extends false ? '$notStrict' : '$strict') | ($DefaultToFalse<R> extends false ? never : '$rid'),
            L
          >
        >
      >
    >;

    readonly asyncIter: () => AsyncIterableIterator<ObjectTypeWithAllPropertyTypes.OsdkObject>;
  }

  export interface Definition
    extends $ObjectTypeDefinition<'ObjectTypeWithAllPropertyTypes', ObjectTypeWithAllPropertyTypes>,
      $VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: ObjectTypeWithAllPropertyTypes.ObjectSet;
    props: ObjectTypeWithAllPropertyTypes.Props;
    strictProps: ObjectTypeWithAllPropertyTypes.StrictProps;
    description: 'A type with all property types';
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
  }

  export type OsdkObject<
    OPTIONS extends '$strict' | '$notStrict' | '$rid' = '$strict',
    K extends keyof ObjectTypeWithAllPropertyTypes.Props = keyof ObjectTypeWithAllPropertyTypes.Props,
  > = $Osdk<ObjectTypeWithAllPropertyTypes, K | OPTIONS> &
    Pick<
      // ObjectTypeWithAllPropertyTypes.Props
      OPTIONS extends '$notStrict' ? ObjectTypeWithAllPropertyTypes.Props : ObjectTypeWithAllPropertyTypes.StrictProps,
      K
    > & {
      $link: ObjectTypeWithAllPropertyTypes.Links;
      $title: string | undefined; // FIXME
      $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

      $as: <NEW_Q extends $ValidToFrom<ObjectTypeWithAllPropertyTypes>>(
        type: NEW_Q | string,
      ) => $Osdk<NEW_Q, $ConvertProps<ObjectTypeWithAllPropertyTypes, NEW_Q, K>>;
    } & $OsdkObject<'ObjectTypeWithAllPropertyTypes'>;
}

/** @deprecated use ObjectTypeWithAllPropertyTypes.Definition **/
export type ObjectTypeWithAllPropertyTypes = ObjectTypeWithAllPropertyTypes.Definition;

export const ObjectTypeWithAllPropertyTypes: ObjectTypeWithAllPropertyTypes & $VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'ObjectTypeWithAllPropertyTypes',
  description: 'A type with all property types',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'integer',
  properties: {
    id: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    string: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    boolean: {
      multiplicity: false,
      type: 'boolean',
      nullable: true,
    },
    date: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    dateTime: {
      multiplicity: false,
      type: 'timestamp',
      nullable: true,
    },
    decimal: {
      multiplicity: false,
      type: 'decimal',
      nullable: true,
    },
    integer: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    long: {
      multiplicity: false,
      type: 'long',
      nullable: true,
    },
    short: {
      multiplicity: false,
      type: 'short',
      nullable: true,
    },
    float: {
      multiplicity: false,
      type: 'float',
      nullable: true,
    },
    double: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    byte: {
      multiplicity: false,
      type: 'byte',
      nullable: true,
    },
    attachment: {
      multiplicity: false,
      type: 'attachment',
      nullable: true,
    },
    geoPoint: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
    geoShape: {
      multiplicity: false,
      type: 'geoshape',
      nullable: true,
    },
    stringArray: {
      multiplicity: true,
      type: 'string',
      nullable: true,
    },
    booleanArray: {
      multiplicity: true,
      type: 'boolean',
      nullable: true,
    },
    dateArray: {
      multiplicity: true,
      type: 'datetime',
      nullable: true,
    },
    dateTimeArray: {
      multiplicity: true,
      type: 'timestamp',
      nullable: true,
    },
    decimalArray: {
      multiplicity: true,
      type: 'decimal',
      nullable: true,
    },
    integerArray: {
      multiplicity: true,
      type: 'integer',
      nullable: true,
    },
    longArray: {
      multiplicity: true,
      type: 'long',
      nullable: true,
    },
    shortArray: {
      multiplicity: true,
      type: 'short',
      nullable: true,
    },
    floatArray: {
      multiplicity: true,
      type: 'float',
      nullable: true,
    },
    doubleArray: {
      multiplicity: true,
      type: 'double',
      nullable: true,
    },
    byteArray: {
      multiplicity: true,
      type: 'byte',
      nullable: true,
    },
    attachmentArray: {
      multiplicity: true,
      type: 'attachment',
      nullable: true,
    },
    geoPointArray: {
      multiplicity: true,
      type: 'geopoint',
      nullable: true,
    },
    geoShapeArray: {
      multiplicity: true,
      type: 'geoshape',
      nullable: true,
    },
    numericTimeseries: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
    stringTimeseries: {
      multiplicity: false,
      type: 'stringTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
