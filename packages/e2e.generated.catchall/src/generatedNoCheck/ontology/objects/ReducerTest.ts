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

export namespace ReducerTest {
  export type PropertyKeys =
    | 'integerArray'
    | 'primaryKey_'
    | 'stringArray'
    | 'struct'
    | 'structArray'
    | 'structWithMultipleMain';

  export type Links = {};

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly integerArray: $PropType['integer'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'primaryKey'
     */
    readonly primaryKey_: $PropType['string'];
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly stringArray: $PropType['string'][] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly struct:
      | {
          integer: $PropType['integer'] | undefined;
          integer2: $PropType['string'] | undefined;
          string: $PropType['string'] | undefined;
        }
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly structArray:
      | { integer: $PropType['string'] | undefined; string: $PropType['string'] | undefined }[]
      | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     */
    readonly structWithMultipleMain:
      | {
          integer1: $PropType['string'] | undefined;
          integer2: $PropType['integer'] | undefined;
          string1: $PropType['string'] | undefined;
        }
      | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<ReducerTest, ReducerTest.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ReducerTest.Props = keyof ReducerTest.Props,
  > = $Osdk.Instance<ReducerTest, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof ReducerTest.Props = keyof ReducerTest.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface ReducerTest extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'ReducerTest';
  primaryKeyApiName: 'primaryKey_';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: ReducerTest.ObjectSet;
    props: ReducerTest.Props;
    linksType: ReducerTest.Links;
    strictProps: ReducerTest.StrictProps;
    apiName: 'ReducerTest';
    description: '';
    displayName: 'Reducer Test';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: ['ReducerTestInterface'];
    interfaceImplementations: {
      ReducerTestInterface: {
        stringFromNonMainValueOfStruct: {
          type: 'structField';
          propertyApiName: 'struct';
          structFieldApiName: 'string';
        };
        stringFromSingleMainValue: {
          type: 'reduced';
          implementation: {
            type: 'structField';
            propertyApiName: 'structArray';
            structFieldApiName: 'integer';
          };
        };
        stringFromReducer: {
          type: 'reduced';
          implementation: {
            type: 'localProperty';
            propertyApiName: 'stringArray';
          };
        };
        stringFromMainValue: {
          type: 'structField';
          propertyApiName: 'structWithMultipleMain';
          structFieldApiName: 'integer1';
        };
        structFromMultipleMainValue: {
          type: 'struct';
          mapping: {
            integer: {
              type: 'structFieldOfProperty';
              propertyApiName: 'structWithMultipleMain';
              structFieldApiName: 'integer2';
            };
            string: {
              type: 'structFieldOfProperty';
              propertyApiName: 'structWithMultipleMain';
              structFieldApiName: 'string1';
            };
          };
        };
        stringFromReducedMainValueStructArray: {
          type: 'structField';
          propertyApiName: 'struct';
          structFieldApiName: 'integer';
        };
        stringFromArrayFromAlreadyReduced: {
          type: 'localProperty';
          propertyApiName: 'stringArray';
        };
      };
    };
    interfaceMap: {
      ReducerTestInterface: {
        stringFromArrayFromAlreadyReduced: 'stringArray';
      };
    };
    inverseInterfaceMap: {
      ReducerTestInterface: {
        stringArray: 'stringFromArrayFromAlreadyReduced';
      };
    };
    links: {};
    pluralDisplayName: 'Reducer Tests';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       */
      integerArray: $PropertyDef<'integer', 'nullable', 'array', undefined, true>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'primaryKey'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      stringArray: $PropertyDef<'string', 'nullable', 'array', undefined, true>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      struct: $PropertyDef<
        { string: 'string'; integer: 'integer'; integer2: 'string' },
        'nullable',
        'single',
        ['integer'],
        false
      >;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      structArray: $PropertyDef<{ string: 'string'; integer: 'string' }, 'nullable', 'array', undefined, true>;
      /**
       * @experimental
       *
       *   property status: experimental
       */
      structWithMultipleMain: $PropertyDef<
        { integer1: 'string'; string1: 'string'; integer2: 'integer' },
        'nullable',
        'single',
        ['string1', 'integer1'],
        false
      >;
    };
    rid: 'ri.ontology.main.object-type.4069c2c9-9497-45ec-8fa2-02caf0c261e9';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const ReducerTest = {
  type: 'object',
  apiName: 'ReducerTest',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'primaryKey_',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.4069c2c9-9497-45ec-8fa2-02caf0c261e9',
  },
} satisfies ReducerTest & { internalDoNotUseMetadata: { rid: string } } as ReducerTest;
