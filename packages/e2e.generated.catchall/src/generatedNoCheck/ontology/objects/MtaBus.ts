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

export namespace MtaBus {
  export type PropertyKeys = 'vehicleId' | 'nextStopId' | 'routeId' | 'positionId';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly nextStopId: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly positionId: $PropType['geotimeSeriesReference'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly routeId: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly vehicleId: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<MtaBus, MtaBus.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MtaBus.Props = keyof MtaBus.Props,
  > = $Osdk.Instance<MtaBus, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof MtaBus.Props = keyof MtaBus.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface MtaBus extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'MtaBus';
  __DefinitionMetadata?: {
    objectSet: MtaBus.ObjectSet;
    props: MtaBus.Props;
    linksType: MtaBus.Links;
    strictProps: MtaBus.StrictProps;
    apiName: 'MtaBus';
    description: 'MtaBus';
    displayName: 'MtaBus';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Fintraffic AIS';
    primaryKeyApiName: 'vehicleId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      nextStopId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      positionId: $PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      routeId: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      vehicleId: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
    visibility: undefined;
  };
}

export const MtaBus = {
  type: 'object',
  apiName: 'MtaBus',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.a.b.c.d',
  },
} satisfies MtaBus & { internalDoNotUseMetadata: { rid: string } } as MtaBus;
