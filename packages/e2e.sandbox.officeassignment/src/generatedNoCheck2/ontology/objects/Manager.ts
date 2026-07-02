import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Assignment } from './Assignment.js';
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

export namespace Manager {
  export type PropertyKeys = 'email' | 'fullName' | 'managerId' | 'title';

  export interface Links {
    readonly assignments: Assignment.ObjectSet;
  }

  export interface Props {
    /**
     *   property status: active
     *
     *   display name: 'Email',
     *
     *   description: Work email address.
     */
    readonly email: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Full Name',
     *
     *   description: The manager's full display name.
     */
    readonly fullName: $PropType['string'] | undefined;
    /**
     *   property status: active
     *
     *   display name: 'Manager ID',
     *
     *   description: Unique identifier for the manager.
     */
    readonly managerId: $PropType['string'];
    /**
     *   property status: active
     *
     *   display name: 'Title',
     *
     *   description: The manager's job title.
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Manager, Manager.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Manager.Props = keyof Manager.Props,
  > = $Osdk.Instance<Manager, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof Manager.Props = keyof Manager.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface Manager extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'Manager';
  primaryKeyApiName: 'managerId';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: Manager.ObjectSet;
    props: Manager.Props;
    linksType: Manager.Links;
    strictProps: Manager.StrictProps;
    apiName: 'Manager';
    description: 'A manager / team lead responsible for one or more Assignments.';
    displayName: 'Manager';
    icon: {
      type: 'blueprint';
      color: '#2D72D2';
      name: 'hat';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      assignments: $ObjectMetadata.Link<Assignment, true>;
    };
    pluralDisplayName: 'Managers';
    primaryKeyApiName: 'managerId';
    primaryKeyType: 'string';
    properties: {
      /**
       *   property status: active
       *
       *   display name: 'Email',
       *
       *   description: Work email address.
       */
      email: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Full Name',
       *
       *   description: The manager's full display name.
       */
      fullName: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Manager ID',
       *
       *   description: Unique identifier for the manager.
       */
      managerId: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       *   property status: active
       *
       *   display name: 'Title',
       *
       *   description: The manager's job title.
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.a63ba05c-d155-4a05-9e06-aed231a64571';
    status: 'ACTIVE';
    titleProperty: 'fullName';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const Manager = {
  type: 'object',
  apiName: 'Manager',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'managerId',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.a63ba05c-d155-4a05-9e06-aed231a64571',
  },
} satisfies Manager & { internalDoNotUseMetadata: { rid: string } } as Manager;
