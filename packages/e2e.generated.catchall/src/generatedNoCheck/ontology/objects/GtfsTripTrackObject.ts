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

export namespace GtfsTripTrackObject {
  export type PropertyKeys = 'entityId' | 'geotimeSeriesReferences' | 'timestamp';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly entityId: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly geotimeSeriesReferences: $PropType['geotimeSeriesReference'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly timestamp: $PropType['timestamp'] | undefined;
  }
  export type StrictProps = Props;

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
    manyToManyLinks: never;
    apiName: 'GtfsTripTrackObject';
    description: 'GtfsTripTrackObject';
    displayName: 'GtfsTripTrackObject';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    implements: undefined;
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
    visibility: undefined;
  };
}

export const GtfsTripTrackObject: GtfsTripTrackObject = {
  type: 'object',
  apiName: 'GtfsTripTrackObject',
  osdkMetadata: $osdkMetadata,
};
