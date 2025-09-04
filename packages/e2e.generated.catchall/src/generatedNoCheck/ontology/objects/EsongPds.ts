import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { EsongIssues } from './EsongIssues.js';
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

export namespace EsongPds {
  export type PropertyKeys = 'assignee' | 'id' | 'priority' | 'status' | 'title' | 'createdAt';

  export interface Links {
    readonly esongIssues: $SingleLinkAccessor<EsongIssues>;
    readonly esongIssuesM2m: EsongIssues.ObjectSet;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Assignee'
     */
    readonly assignee: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Created At'
     */
    readonly createdAt: $PropType['datetime'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Id'
     */
    readonly id: $PropType['integer'];
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Priority'
     */
    readonly priority: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Status'
     */
    readonly status: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Title'
     */
    readonly title: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<EsongPds, EsongPds.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongPds.Props = keyof EsongPds.Props,
  > = $Osdk.Instance<EsongPds, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongPds.Props = keyof EsongPds.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface EsongPds extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'EsongPds';
  __DefinitionMetadata?: {
    objectSet: EsongPds.ObjectSet;
    props: EsongPds.Props;
    linksType: EsongPds.Links;
    strictProps: EsongPds.StrictProps;
    apiName: 'EsongPds';
    description: 'asdaaaaa';
    displayName: '[esong] Pds';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceLinkMap: {};
    interfaceMap: {};
    inverseInterfaceLinkMap: {};
    inverseInterfaceMap: {};
    links: {
      esongIssues: $ObjectMetadata.Link<EsongIssues, false>;
      esongIssuesM2m: $ObjectMetadata.Link<EsongIssues, true>;
    };
    pluralDisplayName: '[esong] Pds';
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Assignee'
       */
      assignee: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Created At'
       */
      createdAt: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Id'
       */
      id: $PropertyDef<'integer', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Priority'
       */
      priority: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Status'
       */
      status: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Title'
       */
      title: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.afa55844-81e8-4a1f-9b8e-bf51a9938a4d';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const EsongPds: EsongPds = {
  type: 'object',
  apiName: 'EsongPds',
  osdkMetadata: $osdkMetadata,
};
