import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { CollateralConcernList } from './CollateralConcernList.js';
import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export interface OsdkObjectLinks$CollateralConcernCandidate {
  'com.palantir.pcl.civpro.collateral-concern-core.collateralConcernEntityToList': CollateralConcernList.ObjectSet;
}

export namespace CollateralConcernCandidate {
  export type PropertyKeys = 'collateralConcernName' | 'collateralConcernDescription';

  export interface Props {
    /**
     *   display name: 'Description',
     *
     *   description: The description of a collateral concern entity.
     */
    readonly collateralConcernDescription: $PropType['string'] | undefined;
    /**
     *   display name: 'Name',
     *
     *   description: The name of a collateral concern entity.
     */
    readonly collateralConcernName: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<CollateralConcernCandidate, CollateralConcernCandidate.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CollateralConcernCandidate.Props = keyof CollateralConcernCandidate.Props,
  > = $Osdk.Instance<CollateralConcernCandidate, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CollateralConcernCandidate.Props = keyof CollateralConcernCandidate.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface CollateralConcernCandidate extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernCandidate';
  __DefinitionMetadata?: {
    objectSet: CollateralConcernCandidate.ObjectSet;
    props: CollateralConcernCandidate.Props;
    linksType: OsdkObjectLinks$CollateralConcernCandidate;
    strictProps: CollateralConcernCandidate.StrictProps;
    apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernCandidate';
    description: 'Represents entities that can be considered as collateral concerns.';
    displayName: 'Collateral Concern Candidate';
    implementedBy: ['GenericCollateralConcernCandidate'];
    implements: [];
    links: {
      'com.palantir.pcl.civpro.collateral-concern-core.collateralConcernEntityToList': $InterfaceMetadata.Link<
        CollateralConcernList,
        true
      >;
    };
    properties: {
      /**
       *   display name: 'Description',
       *
       *   description: The description of a collateral concern entity.
       */
      collateralConcernDescription: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *
       *   description: The name of a collateral concern entity.
       */
      collateralConcernName: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.81202dc9-3dcb-4031-b102-bfdb01a0e17c';
    type: 'interface';
  };
}

export const CollateralConcernCandidate = {
  type: 'interface',
  apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernCandidate',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.81202dc9-3dcb-4031-b102-bfdb01a0e17c',
  },
} satisfies CollateralConcernCandidate & { internalDoNotUseMetadata: { rid: string } } as CollateralConcernCandidate;
