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

export namespace TestGeoAction {
  export type PropertyKeys = 'geoPk' | 'geoshapeProp' | 'geoTitle';

  export type Links = {};

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly geoPk: $PropType['string'];
    /**
     *   display name: 'Geoshape',
     *
     *   description: geoshape
     */
    readonly geoshapeProp: $PropType['geoshape'] | undefined;
    /**
     *   display name: 'Geotitle',
     *
     *   description: geoTitle
     */
    readonly geoTitle: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<TestGeoAction, TestGeoAction.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TestGeoAction.Props = keyof TestGeoAction.Props,
  > = $Osdk.Instance<TestGeoAction, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TestGeoAction.Props = keyof TestGeoAction.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface TestGeoAction extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'TestGeoAction';
  experimentalDoNotUseMetadata?: {
    rid: 'ri.a.b.c.d';
  };
  __DefinitionMetadata?: {
    objectSet: TestGeoAction.ObjectSet;
    props: TestGeoAction.Props;
    linksType: TestGeoAction.Links;
    strictProps: TestGeoAction.StrictProps;
    apiName: 'TestGeoAction';
    description: 'Test Geo Object';
    displayName: 'Test Geo Object';
    icon: {
      type: 'blueprint';
      name: 'weather';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Weather Stations';
    primaryKeyApiName: 'geoPk';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      geoPk: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   display name: 'Geoshape',
       *
       *   description: geoshape
       */
      geoshapeProp: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       *   display name: 'Geotitle',
       *
       *   description: geoTitle
       */
      geoTitle: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'stationId';
    type: 'object';
    visibility: undefined;
  };
}

export const TestGeoAction: TestGeoAction = {
  type: 'object',
  apiName: 'TestGeoAction',
  osdkMetadata: $osdkMetadata,
  experimentalDoNotUseMetadata: {
    rid: 'ri.a.b.c.d',
  },
};
