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

export namespace StructPersonOpisTeam {
  export type PropertyKeys = 'id' | 'age' | 'address';

  export type Links = {};

  export interface Props {
    readonly address:
      | {
          city: $PropType['string'] | undefined;
          state: $PropType['string'] | undefined;
          zipcode: $PropType['integer'] | undefined;
        }
      | undefined;
    readonly age: $PropType['integer'] | undefined;
    readonly id: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<StructPersonOpisTeam, StructPersonOpisTeam.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props,
  > = $Osdk.Instance<StructPersonOpisTeam, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof StructPersonOpisTeam.Props = keyof StructPersonOpisTeam.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface StructPersonOpisTeam extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'StructPersonOpisTeam';
  __DefinitionMetadata?: {
    objectSet: StructPersonOpisTeam.ObjectSet;
    props: StructPersonOpisTeam.Props;
    linksType: StructPersonOpisTeam.Links;
    strictProps: StructPersonOpisTeam.StrictProps;
    apiName: 'StructPersonOpisTeam';
    description: 'StructPersonOpisTeam';
    displayName: 'StructPersonOpisTeam';
    icon: {
      type: 'blueprint';
      name: 'traffic';
      color: 'color';
    };
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'StructPeople';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      address: $PropertyDef<{ city: 'string'; state: 'string'; zipcode: 'integer' }, 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      age: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'name';
    type: 'object';
  };
}

export const StructPersonOpisTeam: StructPersonOpisTeam = {
  type: 'object',
  apiName: 'StructPersonOpisTeam',
  osdkMetadata: $osdkMetadata,
};
