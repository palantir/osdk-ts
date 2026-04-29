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
  export type PropertyKeys = 'cipherText' | 'primaryKey_';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Cipher text'
     */
    readonly cipherText: $PropType['cipherText'] | undefined;
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
  primaryKeyApiName: 'primaryKey_';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: CipherTextTest.ObjectSet;
    props: CipherTextTest.Props;
    linksType: CipherTextTest.Links;
    strictProps: CipherTextTest.StrictProps;
    apiName: 'CipherTextTest';
    description: '';
    displayName: 'Cipher Text Test';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {};
    pluralDisplayName: 'Cipher Text Tests';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Cipher text'
       */
      cipherText: $PropertyDef<'cipherText', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.7782bd8f-954f-43cb-ba1a-b141d1638d6b';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const CipherTextTest = {
  type: 'object',
  apiName: 'CipherTextTest',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'primaryKey_',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.7782bd8f-954f-43cb-ba1a-b141d1638d6b',
  },
} satisfies CipherTextTest & { internalDoNotUseMetadata: { rid: string } } as CipherTextTest;
