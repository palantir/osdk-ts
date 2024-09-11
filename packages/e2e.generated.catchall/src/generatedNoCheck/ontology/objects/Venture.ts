import type {
  ObjectTypeDefinition as $ObjectTypeDefinition,
  ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
  PropertyDef as $PropertyDef,
} from '@osdk/api';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client.api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from './Employee.js';

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

  export interface ObjectSet extends $ObjectSet<Venture.Definition, Venture.ObjectSet> {}

  export interface Definition extends $ObjectTypeDefinition<'Venture', Venture.Definition> {
    osdkMetadata: typeof $osdkMetadata;
    objectSet: Venture.ObjectSet;
    props: Venture.Props;
    linksType: Venture.Links;
    strictProps: Venture.StrictProps;
    description: 'A venture';
    links: {
      employees: $ObjectTypeLinkDefinition<Employee, true>;
    };
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
  }

  export type OsdkObject<
    OPTIONS extends never | '$notStrict' | '$rid' = never,
    K extends keyof Venture.Props = keyof Venture.Props,
  > = $Osdk<Venture.Definition, K | OPTIONS>;
}

export type Venture = Venture.Definition;

export const Venture: Venture = {
  osdkMetadata: $osdkMetadata,
  objectSet: undefined as any,
  props: undefined as any,
  linksType: undefined as any,
  strictProps: undefined as any,
  apiName: 'Venture',
  description: 'A venture',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  properties: {
    ventureId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    ventureName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    ventureStart: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
