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

export namespace BoundariesUsState {
  export type PropertyKeys = 'usState' | 'latitude' | 'longitude' | 'geometry10M';

  export type Links = {};

  export interface Props {
    readonly geometry10M: $PropType['geoshape'] | undefined;
    readonly latitude: $PropType['double'] | undefined;
    readonly longitude: $PropType['double'] | undefined;
    readonly usState: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<BoundariesUsState, BoundariesUsState.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
  > = $Osdk.Instance<BoundariesUsState, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof BoundariesUsState.Props = keyof BoundariesUsState.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface BoundariesUsState extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'BoundariesUsState';
  __DefinitionMetadata?: {
    objectSet: BoundariesUsState.ObjectSet;
    props: BoundariesUsState.Props;
    linksType: BoundariesUsState.Links;
    strictProps: BoundariesUsState.StrictProps;
    apiName: 'BoundariesUsState';
    description: 'Boundaries US State';
    displayName: 'Boundaries US State';
    icon: {
      type: 'blueprint';
      name: 'usState';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Boundaries US States';
    primaryKeyApiName: 'usState';
    primaryKeyType: 'string';
    properties: {
      /**
       *   display name: 'Geometry10M',
       *   description: geoshape
       */
      geometry10M: $PropertyDef<'geoshape', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      latitude: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      longitude: $PropertyDef<'double', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      usState: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'usState';
    type: 'object';
  };
}

export const BoundariesUsState: BoundariesUsState = {
  type: 'object',
  apiName: 'BoundariesUsState',
  osdkMetadata: $osdkMetadata,
};
