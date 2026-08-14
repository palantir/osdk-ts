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

export namespace NihalbAggTest {
  export type PropertyKeys = 'boolean' | 'date' | 'primaryKey_';

  export interface Links {
    readonly nihalbAggTestsDirectionA: NihalbAggTest.ObjectSet;
    readonly nihalbAggTestsDirectionB: NihalbAggTest.ObjectSet;
  }

  export interface Props {
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Boolean'
     */
    readonly boolean: $PropType['boolean'] | undefined;
    /**
     * @experimental
     *
     *   property status: experimental
     *
     *   display name: 'Date'
     */
    readonly date: $PropType['datetime'] | undefined;
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

  export interface ObjectSet extends $ObjectSet<NihalbAggTest, NihalbAggTest.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbAggTest.Props = keyof NihalbAggTest.Props,
  > = $Osdk.Instance<NihalbAggTest, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof NihalbAggTest.Props = keyof NihalbAggTest.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface NihalbAggTest extends $ObjectTypeDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'object';
  apiName: 'NihalbAggTest';
  primaryKeyApiName: 'primaryKey_';
  primaryKeyType: 'string';
  __DefinitionMetadata?: {
    objectSet: NihalbAggTest.ObjectSet;
    props: NihalbAggTest.Props;
    linksType: NihalbAggTest.Links;
    strictProps: NihalbAggTest.StrictProps;
    apiName: 'NihalbAggTest';
    description: '';
    displayName: '(nihalb)AggTest';
    icon: {
      type: 'blueprint';
      color: '#4C90F0';
      name: 'cube';
    };
    implements: [];
    interfaceMap: {};
    inverseInterfaceMap: {};
    links: {
      nihalbAggTestsDirectionA: $ObjectMetadata.Link<NihalbAggTest, true>;
      nihalbAggTestsDirectionB: $ObjectMetadata.Link<NihalbAggTest, true>;
    };
    pluralDisplayName: '(nihalb)AggTests';
    primaryKeyApiName: 'primaryKey_';
    primaryKeyType: 'string';
    properties: {
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Boolean'
       */
      boolean: $PropertyDef<'boolean', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Date'
       */
      date: $PropertyDef<'datetime', 'nullable', 'single'>;
      /**
       * @experimental
       *
       *   property status: experimental
       *
       *   display name: 'Primary Key'
       */
      primaryKey_: $PropertyDef<'string', 'non-nullable', 'single'>;
    };
    rid: 'ri.ontology.main.object-type.90e16605-0483-4694-ae58-968abd46bd8d';
    status: 'EXPERIMENTAL';
    titleProperty: 'primaryKey_';
    type: 'object';
    visibility: 'NORMAL';
  };
}

export const NihalbAggTest = {
  type: 'object',
  apiName: 'NihalbAggTest',
  osdkMetadata: $osdkMetadata,
  primaryKeyApiName: 'primaryKey_',
  primaryKeyType: 'string',
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.object-type.90e16605-0483-4694-ae58-968abd46bd8d',
  },
} satisfies NihalbAggTest & { internalDoNotUseMetadata: { rid: string } } as NihalbAggTest;
