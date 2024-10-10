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

export namespace FintrafficAis {
  export type PropertyKeys = 'mmsi' | 'name' | 'centroid' | 'geometry' | 'seriesId' | 'shipType' | 'timestamp';

  export type Links = {};

  export interface Props {
    readonly centroid: $PropType['geopoint'] | undefined;
    readonly geometry: $PropType['geoshape'] | undefined;
    readonly mmsi: $PropType['string'] | undefined;
    readonly name: $PropType['string'] | undefined;
    readonly seriesId: $PropType['geotimeSeriesReference'] | undefined;
    readonly shipType: $PropType['string'] | undefined;
    readonly timestamp: $PropType['timestamp'] | undefined;
  }
  export interface StrictProps {
    readonly centroid: $PropType['geopoint'] | undefined;
    readonly geometry: $PropType['geoshape'] | undefined;
    readonly mmsi: $PropType['string'];
    readonly name: $PropType['string'] | undefined;
    readonly seriesId: $PropType['geotimeSeriesReference'] | undefined;
    readonly shipType: $PropType['string'] | undefined;
    readonly timestamp: $PropType['timestamp'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<FintrafficAis, FintrafficAis.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props,
  > = $Osdk.Instance<FintrafficAis, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof FintrafficAis.Props = keyof FintrafficAis.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface FintrafficAis extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'FintrafficAis';
  __DefinitionMetadata?: {
    objectSet: FintrafficAis.ObjectSet;
    props: FintrafficAis.Props;
    linksType: FintrafficAis.Links;
    strictProps: FintrafficAis.StrictProps;
    apiName: 'FintrafficAis';
    description: 'Fintraffic AIS';
    displayName: 'Fintraffic AIS';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Fintraffic AIS';
    primaryKeyApiName: 'mmsi';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      centroid: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      geometry: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      mmsi: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      name: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      seriesId: $PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      shipType: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      timestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
  };
}

export const FintrafficAis: FintrafficAis = {
  type: 'object',
  apiName: 'FintrafficAis',
  osdkMetadata: $osdkMetadata,
};
