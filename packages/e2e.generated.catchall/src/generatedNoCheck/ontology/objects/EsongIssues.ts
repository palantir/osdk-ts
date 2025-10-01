import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { EsongPds } from './EsongPds.js';
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

export namespace EsongIssues {
  export type PropertyKeys =
    | 'id'
    | 'numComments'
    | 'pdsTicket'
    | 'status'
    | 'pdsTicketId'
    | 'title'
    | 'label'
    | 'createdAt';

  export interface Links {
    readonly esongPds: $SingleLinkAccessor<EsongPds>;
    readonly esongPdsM2m: EsongPds.ObjectSet;
  }

  export interface Props {
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
     *   display name: 'Label'
     */
    readonly label: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Num Comments'
     */
    readonly numComments: $PropType['integer'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Pds Ticket'
     */
    readonly pdsTicket: $PropType['string'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Pds Ticket Id'
     */
    readonly pdsTicketId: $PropType['integer'] | undefined;
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

  export interface ObjectSet extends $ObjectSet<EsongIssues, EsongIssues.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongIssues.Props = keyof EsongIssues.Props,
  > = $Osdk.Instance<EsongIssues, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof EsongIssues.Props = keyof EsongIssues.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface EsongIssues extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'EsongIssues';
  __DefinitionMetadata?: {
    objectSet: EsongIssues.ObjectSet;
    props: EsongIssues.Props;
    linksType: EsongIssues.Links;
    strictProps: EsongIssues.StrictProps;
    apiName: 'EsongIssues';
    description: '';
    displayName: '[esong] Issues';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['EsongInterfaceA', 'EsongInterfaceC', 'EsongInterfaceWithIlts'];
    interfaceMap: {
      EsongInterfaceC: {
        esongId: 'label';
      };
      EsongInterfaceWithIlts: {
        esongId: 'title';
      };
      EsongInterfaceA: {
        esongSptA: 'label';
      };
    };
    inverseInterfaceMap: {
      EsongInterfaceC: {
        label: 'esongId';
      };
      EsongInterfaceWithIlts: {
        title: 'esongId';
      };
      EsongInterfaceA: {
        label: 'esongSptA';
      };
    };
    links: {
      esongPds: $ObjectMetadata.Link<EsongPds, false>;
      esongPdsM2m: $ObjectMetadata.Link<EsongPds, true>;
    };
    pluralDisplayName: '[esong] Issues';
    primaryKeyApiName: 'id';
    primaryKeyType: 'integer';
    properties: {
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
       *   display name: 'Label'
       */
      label: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Num Comments'
       */
      numComments: $PropertyDef<'integer', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Pds Ticket'
       */
      pdsTicket: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Pds Ticket Id'
       */
      pdsTicketId: $PropertyDef<'integer', 'nullable', 'single'>;
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
    rid: 'ri.ontology.main.object-type.9e50a0d3-5b89-41f5-a894-b0e9bb388950';
    status: 'EXPERIMENTAL';
    titleProperty: 'title';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const EsongIssues: EsongIssues = {
  type: 'object',
  apiName: 'EsongIssues',
  osdkMetadata: $osdkMetadata,
};

(EsongIssues as any).__experimental_do_not_use__rid =
  'ri.ontology.main.object-type.9e50a0d3-5b89-41f5-a894-b0e9bb388950';
