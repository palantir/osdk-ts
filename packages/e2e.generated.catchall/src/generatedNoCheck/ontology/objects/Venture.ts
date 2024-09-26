import type { PropertyDef as $PropertyDef } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';
import type {
  PropertyKeys as $PropertyKeys,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
} from '@osdk/api';
import type {
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  OsdkObject as $OsdkObject,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from '@osdk/api';

export namespace Venture {
  export type PropertyKeys = 'ventureId' | 'ventureName' | 'ventureStart';

  export interface Links {
    readonly employees: Employee.ObjectSet;
  }

  export interface Props {
    readonly ventureId: $PropType['string'] | undefined;
    readonly ventureName: $PropType['string'] | undefined;
    readonly ventureStart: $PropType['datetime'] | undefined;
  }
  export interface StrictProps {
    readonly ventureId: $PropType['string'];
    readonly ventureName: $PropType['string'] | undefined;
    readonly ventureStart: $PropType['datetime'] | undefined;
  }

  export interface ObjectSet extends $ObjectSet<Venture, Venture.ObjectSet> {}

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Venture.Props = keyof Venture.Props,
  > = $Osdk<Venture, K | OPTIONS>;
}

export interface Venture extends $ObjectTypeDefinition<'Venture', Venture> {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Venture';
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
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      employees: $ObjectTypeLinkDefinition<Employee, true>;
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
  };
}

export const Venture: Venture = {
  type: 'object',
  apiName: 'Venture',
  osdkMetadata: $osdkMetadata,
};
