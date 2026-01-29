import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export type OsdkObjectLinks$TestAsTypeIltInterface = {};

export namespace TestAsTypeIltInterface {
  export type PropertyKeys = 'com.palantir.defense.ontology.collateralConcernName';

  export interface Props {
    /**
     *   display name: 'Name',
     *
     *   description: [Palantir Defense Ontology] Human-readabe display name of a collateral concern entity. If present, this value will be used to identify the entity in relevant UI components. If not present, the entity title property will be used instead.
     */
    readonly 'com.palantir.defense.ontology.collateralConcernName': $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<TestAsTypeIltInterface, TestAsTypeIltInterface.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TestAsTypeIltInterface.Props = keyof TestAsTypeIltInterface.Props,
  > = $Osdk.Instance<TestAsTypeIltInterface, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof TestAsTypeIltInterface.Props = keyof TestAsTypeIltInterface.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface TestAsTypeIltInterface extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'TestAsTypeIltInterface';
  __DefinitionMetadata?: {
    objectSet: TestAsTypeIltInterface.ObjectSet;
    props: TestAsTypeIltInterface.Props;
    linksType: OsdkObjectLinks$TestAsTypeIltInterface;
    strictProps: TestAsTypeIltInterface.StrictProps;
    apiName: 'TestAsTypeIltInterface';
    description: '';
    displayName: 'TestAsTypeIltInterface';
    implementedBy: ['testIlt2'];
    implements: [];
    links: {};
    properties: {
      /**
       *   display name: 'Name',
       *
       *   description: [Palantir Defense Ontology] Human-readabe display name of a collateral concern entity. If present, this value will be used to identify the entity in relevant UI components. If not present, the entity title property will be used instead.
       */
      'com.palantir.defense.ontology.collateralConcernName': $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.93463b40-940d-430d-9283-9eca82fa9aa4';
    type: 'interface';
  };
}

export const TestAsTypeIltInterface = {
  type: 'interface',
  apiName: 'TestAsTypeIltInterface',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.93463b40-940d-430d-9283-9eca82fa9aa4',
  },
} satisfies TestAsTypeIltInterface & { internalDoNotUseMetadata: { rid: string } } as TestAsTypeIltInterface;
