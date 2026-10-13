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

export namespace OsdkDecimalActionTest {
  export type PropertyKeys = 'amount' | 'amounts' | 'id';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Amount'
     */
    readonly amount: $PropType['decimal'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Amounts'
     */
    readonly amounts: $PropType['decimal'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Id'
     */
    readonly id: $PropType['string'];
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<OsdkDecimalActionTest, OsdkDecimalActionTest.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof OsdkDecimalActionTest.Props = keyof OsdkDecimalActionTest.Props,
  > = $Osdk.Instance<OsdkDecimalActionTest, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof OsdkDecimalActionTest.Props = keyof OsdkDecimalActionTest.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface OsdkDecimalActionTest extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'OsdkDecimalActionTest';
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: OsdkDecimalActionTest.ObjectSet;
    props: OsdkDecimalActionTest.Props;
    linksType: OsdkDecimalActionTest.Links;
    strictProps: OsdkDecimalActionTest.StrictProps;
    apiName: 'OsdkDecimalActionTest';
    description: 'Smoke test fixture for decimal and decimal-list action parameters in the TypeScript OSDK (PR 4083).';
    displayName: 'OSDK Decimal Action Test';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'OSDK Decimal Action Tests';
    primaryKeyApiName: 'id';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Amount'
       */
      amount: $PropertyDef<'decimal', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Amounts'
       */
      amounts: $PropertyDef<'decimal', 'nullable', 'array'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Id'
       */
      id: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.00f2a957-69ce-4e37-8ced-68c7c17f7605';
    status: 'EXPERIMENTAL';
    titleProperty: 'id';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const OsdkDecimalActionTest = {
  type: 'object',
  apiName: 'OsdkDecimalActionTest',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.00f2a957-69ce-4e37-8ced-68c7c17f7605',
  },
} satisfies OsdkDecimalActionTest & { internalDoNotUseMetadata: { rid: string } } as OsdkDecimalActionTest;
