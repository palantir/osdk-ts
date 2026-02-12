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

export namespace lowerCaseApiDataset {
  export type PropertyKeys = 'primaryKey_';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Primary Key'
     */
    readonly primaryKey_: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<lowerCaseApiDataset, lowerCaseApiDataset.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof lowerCaseApiDataset.Props = keyof lowerCaseApiDataset.Props,
  > = $Osdk.Instance<lowerCaseApiDataset, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof lowerCaseApiDataset.Props = keyof lowerCaseApiDataset.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface lowerCaseApiDataset extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'lowerCaseApiDataset';
  __DefinitionMetadata?: {
    objectSet: lowerCaseApiDataset.ObjectSet;
    props: lowerCaseApiDataset.Props;
    linksType: lowerCaseApiDataset.Links;
    strictProps: lowerCaseApiDataset.StrictProps;
    apiName: 'lowerCaseApiDataset';
    description: 'lowerCase testing';
    displayName: 'lower Case Api Dataset';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'lower Case Api Datasets';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.11923958-97ff-42a5-80e7-16f34e620d1c';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const lowerCaseApiDataset = {
  type: 'object',
  apiName: 'lowerCaseApiDataset',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.11923958-97ff-42a5-80e7-16f34e620d1c',
  },
} satisfies lowerCaseApiDataset & { internalDoNotUseMetadata: { rid: string } } as lowerCaseApiDataset;
