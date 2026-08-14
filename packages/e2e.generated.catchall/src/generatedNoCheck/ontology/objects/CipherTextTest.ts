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

export namespace CipherTextTest {
  export type PropertyKeys = 'encrypted' | 'hashed' | 'pk' | 'plaintext';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly encrypted: $PropType['cipherText'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly hashed: $PropType['cipherText'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly pk: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly plaintext: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<CipherTextTest, CipherTextTest.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CipherTextTest.Props = keyof CipherTextTest.Props,
  > = $Osdk.Instance<CipherTextTest, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CipherTextTest.Props = keyof CipherTextTest.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface CipherTextTest extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'CipherTextTest';
  primaryKeyApiName: 'pk';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: CipherTextTest.ObjectSet;
    props: CipherTextTest.Props;
    linksType: CipherTextTest.Links;
    strictProps: CipherTextTest.StrictProps;
    apiName: 'CipherTextTest';
    description: '';
    displayName: 'CipherTextTest';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'CipherTextTests';
    primaryKeyApiName: 'pk';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       */
      encrypted: $PropertyDef<'cipherText', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      hashed: $PropertyDef<'cipherText', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      pk: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      plaintext: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.583bebf4-2a64-4af4-8c86-8068ef5a5371';
    status: 'EXPERIMENTAL';
    titleProperty: 'pk';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const CipherTextTest = {
  type: 'object',
  apiName: 'CipherTextTest',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'pk',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.583bebf4-2a64-4af4-8c86-8068ef5a5371',
  },
} satisfies CipherTextTest & { internalDoNotUseMetadata: { rid: string } } as CipherTextTest;
