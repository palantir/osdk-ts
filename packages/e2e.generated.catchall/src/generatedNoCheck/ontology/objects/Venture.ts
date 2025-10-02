import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';
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

export namespace Venture {
  export type PropertyKeys = 'ventureId' | 'ventureName' | 'ventureStart';

  export interface Links {
    readonly employees: Employee.ObjectSet;
  }

  export interface Props {
    /**
     * (no ontology metadata)
     */
    readonly ventureId: $PropType['string'];
    /**
     * (no ontology metadata)
     */
    readonly ventureName: $PropType['string'] | undefined;
    /**
     * (no ontology metadata)
     */
    readonly ventureStart: $PropType['datetime'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Venture, Venture.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Venture.Props = keyof Venture.Props,
  > = $Osdk.Instance<Venture, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Venture.Props = keyof Venture.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Venture extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Venture';
  experimentalDoNotUseMetadata?: {
    rid: 'rid.a.b.c.d';
  };
  __DefinitionMetadata?: {
    objectSet: Venture.ObjectSet;
    props: Venture.Props;
    linksType: Venture.Links;
    strictProps: Venture.StrictProps;
    apiName: 'Venture';
    description: 'A venture';
    displayName: 'Venture';
    icon: {
      type: 'blueprint';
      name: 'ventureIcon';
      color: 'color';
    };
    implements: undefined;
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      employees: $ObjectMetadata.Link<Employee, true>;
    };
    pluralDisplayName: 'Ventures';
    primaryKeyApiName: 'ventureId';
    primaryKeyType: 'string';
    properties: {
      /**
       * (no ontology metadata)
       */
      ventureId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * (no ontology metadata)
       */
      ventureStart: $PropertyDef<'datetime', 'nullable', 'single'>;
    };
    rid: 'rid.a.b.c.d';
    status: 'ACTIVE';
    titleProperty: 'ventureName';
    type: 'object';
    visibility: undefined;
  };
}

export const Venture: Venture = {
  type: 'object',
  apiName: 'Venture',
  osdkMetadata: $osdkMetadata,
  experimentalDoNotUseMetadata: {
    rid: 'rid.a.b.c.d',
  },
};
