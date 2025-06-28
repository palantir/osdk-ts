import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$InterfaceForTest = {};

export namespace InterfaceForTest {
  export type PropertyKeys = 'primaryKey_';

  export interface Props {
    /**
     *   display name: 'PrimaryKey'
     */
    readonly primaryKey_: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<InterfaceForTest, InterfaceForTest.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof InterfaceForTest.Props = keyof InterfaceForTest.Props,
  > = $Osdk.Instance<InterfaceForTest, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof InterfaceForTest.Props = keyof InterfaceForTest.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface InterfaceForTest extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'InterfaceForTest';
  __DefinitionMetadata?: {
    objectSet: InterfaceForTest.ObjectSet;
    props: InterfaceForTest.Props;
    linksType: OsdkObjectLinks$InterfaceForTest;
    strictProps: InterfaceForTest.StrictProps;
    apiName: 'InterfaceForTest';
    description: '';
    displayName: 'InterfaceForTest';
    implementedBy: ['InterfaceCreationTest', 'OsdkTestObject'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'PrimaryKey'
       */
      primaryKey_: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.5421299d-e8aa-458e-b640-e59a8d42a043';
    type: 'interface';
  };
}

export const InterfaceForTest: InterfaceForTest = {
  type: 'interface',
  apiName: 'InterfaceForTest',
  osdkMetadata: $osdkMetadata,
};
