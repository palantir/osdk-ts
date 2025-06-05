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

export namespace RhemmingsObjectWithGtsrProperty2 {
  export type PropertyKeys = 'id' | 'type' | 'location' | 'gtsr' | 'timestamp';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly gtsr: $PropType['geotimeSeriesReference'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly id: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly location: $PropType['geopoint'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly timestamp: $PropType['timestamp'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly type: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet
    extends $ObjectSet<RhemmingsObjectWithGtsrProperty2, RhemmingsObjectWithGtsrProperty2.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props,
  > = $Osdk.Instance<RhemmingsObjectWithGtsrProperty2, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof RhemmingsObjectWithGtsrProperty2.Props = keyof RhemmingsObjectWithGtsrProperty2.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface RhemmingsObjectWithGtsrProperty2 extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'RhemmingsObjectWithGtsrProperty2';
  __DefinitionMetadata?: {
    objectSet: RhemmingsObjectWithGtsrProperty2.ObjectSet;
    props: RhemmingsObjectWithGtsrProperty2.Props;
    linksType: RhemmingsObjectWithGtsrProperty2.Links;
    strictProps: RhemmingsObjectWithGtsrProperty2.StrictProps;
    apiName: 'RhemmingsObjectWithGtsrProperty2';
    description: '(rhemmings) Object with GTSR property 2';
    displayName: '(rhemmings) Object with GTSR property 2';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: '(rhemmings) Object with GTSR property 2';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      gtsr: $PropertyDef<'geotimeSeriesReference', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      location: $PropertyDef<'geopoint', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      timestamp: $PropertyDef<'timestamp', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      type: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'id';
    type: 'object';
    visibility: undefined;
  };
}

export const RhemmingsObjectWithGtsrProperty2: RhemmingsObjectWithGtsrProperty2 = {
  type: 'object',
  apiName: 'RhemmingsObjectWithGtsrProperty2',
  osdkMetadata: $osdkMetadata,
};
