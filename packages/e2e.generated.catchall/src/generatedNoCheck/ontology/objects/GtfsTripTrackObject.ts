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

export namespace GtfsTripTrackObject {
  export type PropertyKeys = 'entityId' | 'geotimeSeriesReferences' | 'timestamp';

  export type Links = {};

  export interface Props {
    readonly entityId: $PropType['string'];
    readonly geotimeSeriesReferences: $PropType['geotimeSeriesReference'] | undefined;
    readonly timestamp: $PropType['timestamp'] | undefined;
  }
  export interface StrictProps {
    readonly entityId: $PropType['string'];
    readonly geotimeSeriesReferences: $PropType['geotimeSeriesReference'] | undefined;
    readonly timestamp: $PropType['timestamp'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<GtfsTripTrackObject, GtfsTripTrackObject.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof GtfsTripTrackObject.Props = keyof GtfsTripTrackObject.Props,
  > = $Osdk.Instance<GtfsTripTrackObject, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof GtfsTripTrackObject.Props = keyof GtfsTripTrackObject.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface GtfsTripTrackObject extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'GtfsTripTrackObject';
  __DefinitionMetadata?: {
    objectSet: GtfsTripTrackObject.ObjectSet;
    props: GtfsTripTrackObject.Props;
    linksType: GtfsTripTrackObject.Links;
    strictProps: GtfsTripTrackObject.StrictProps;
    apiName: 'GtfsTripTrackObject';
    description: 'GtfsTripTrackObject';
    displayName: 'GtfsTripTrackObject';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'GtfsTripTrackObject';
    primaryKeyApiName: 'entityId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      entityId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      geotimeSeriesReferences: $PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      timestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'entityId';
    type: 'object';
  };
}

export const GtfsTripTrackObject: GtfsTripTrackObject = {
  type: 'object',
  apiName: 'GtfsTripTrackObject',
  osdkMetadata: $osdkMetadata,
};
