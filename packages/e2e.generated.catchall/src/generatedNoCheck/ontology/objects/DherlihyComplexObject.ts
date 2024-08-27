import type { ObjectOrInterfacePropertyKeysFrom2, ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  AggregationsResults,
  Augments,
  ConvertProps,
  FetchPageArgs,
  LinkedType,
  LinkNames,
  NullabilityAdherence,
  NullabilityAdherenceDefault,
  Osdk,
  OsdkObjectPropertyType,
  PageResult,
  PropertyValueClientToWire,
  Result,
  SelectArg,
  ValidToFrom,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace DherlihyComplexObject {
  export type PropertyKeys = ObjectOrInterfacePropertyKeysFrom2<DherlihyComplexObject>;

  export type Links = never;

  export interface Props {
    /*readonly*/ id: $PropType['string'] | undefined;
    /*readonly*/ secret: $PropType['string'] | undefined;
    /*readonly*/ seriesId: $PropType['numericTimeseries'] | undefined;
  }
  export interface StrictProps {
    /*readonly*/ id: $PropType['string'];
    /*readonly*/ secret: $PropType['string'] | undefined;
    /*readonly*/ seriesId: $PropType['numericTimeseries'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<DherlihyComplexObject, DherlihyComplexObject.ObjectSet> {
    aggregate: <AO extends AggregateOpts<DherlihyComplexObject>>(
      req: AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<DherlihyComplexObject, AO>,
    ) => Promise<AggregationsResults<DherlihyComplexObject, AO>>;

    pivotTo: <L extends LinkNames<DherlihyComplexObject>>(type: L) => LinkedType<DherlihyComplexObject, L>['objectSet']; // ObjectSet<LinkedType<DherlihyComplexObject, L>>;

    fetchOne: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[DherlihyComplexObject['primaryKeyType']],
      options?: SelectArg<DherlihyComplexObject, L, R, S>,
    ) => Promise<
      DherlihyComplexObject.OsdkObject<L, S extends false ? false : true>
      //  SingleOsdkResult<DherlihyComplexObject, L, R, S>
    >;

    fetchOneWithErrors: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      S extends false | 'throw' = NullabilityAdherenceDefault,
    >(
      primaryKey: PropertyValueClientToWire[DherlihyComplexObject['primaryKeyType']],
      options?: SelectArg<DherlihyComplexObject, L, R, S>,
    ) => Promise<
      Result<
        DherlihyComplexObject.OsdkObject<L, S extends false ? false : true>
        //  SingleOsdkResult<DherlihyComplexObject, L, R, S>
      >
    >;

    fetchPage: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<DherlihyComplexObject, L, R, A, S>,
    ) => Promise<
      PageResult<DherlihyComplexObject.OsdkObject<L, S extends false ? false : true>>
      // FetchPageResult<DherlihyComplexObject, L, R, S>
    >;

    fetchPageWithErrors: <
      L extends DherlihyComplexObject.PropertyKeys,
      R extends boolean,
      const A extends Augments,
      S extends NullabilityAdherence = NullabilityAdherenceDefault,
    >(
      args?: FetchPageArgs<DherlihyComplexObject, L, R, A, S>,
    ) => Promise<
      Result<
        PageResult<DherlihyComplexObject.OsdkObject<L, S extends false ? false : true>>
        //  FetchPageResult<DherlihyComplexObject, L, R, S>
      >
    >;

    asyncIter: () => AsyncIterableIterator<DherlihyComplexObject.OsdkObject>;
  }

  export interface Definition
    extends ObjectTypeDefinition<'DherlihyComplexObject', DherlihyComplexObject>,
      VersionBound<$ExpectedClientVersion> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: DherlihyComplexObject.ObjectSet;
    props: DherlihyComplexObject.Props;
    strictProps: DherlihyComplexObject.StrictProps;
    description: 'Dherlihy Complex Object';
    links: {};
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      id: PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      secret: PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      seriesId: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    };
  }

  export type OsdkObject<
    K extends keyof DherlihyComplexObject.Props = keyof DherlihyComplexObject.Props,
    S extends boolean = true,
  > = Osdk<DherlihyComplexObject, K | (S extends false ? '$notStrict' : '$strict')> &
    Pick<
      // DherlihyComplexObject.Props
      S extends false ? DherlihyComplexObject.Props : DherlihyComplexObject.StrictProps,
      K
    > & {
      $link: DherlihyComplexObject.Links;
      $title: string | undefined; // FIXME
      $primaryKey: OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

      $as: <NEW_Q extends ValidToFrom<DherlihyComplexObject>>(
        type: NEW_Q | string,
      ) => Osdk<NEW_Q, ConvertProps<DherlihyComplexObject, NEW_Q, K>>;
    } & $OsdkObject<'DherlihyComplexObject'>;
}

/** @deprecated use DherlihyComplexObject.Definition **/
export type DherlihyComplexObject = DherlihyComplexObject.Definition;

export const DherlihyComplexObject: DherlihyComplexObject & VersionBound<$ExpectedClientVersion> = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  strictProps: undefined as any,
  apiName: 'DherlihyComplexObject',
  description: 'Dherlihy Complex Object',
  links: {},
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    secret: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    seriesId: {
      multiplicity: false,
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
