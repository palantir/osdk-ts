import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { CollateralConcernCandidate } from './CollateralConcernCandidate.js';
import type {
  InterfaceDefinition as $InterfaceDefinition,
  InterfaceMetadata as $InterfaceMetadata,
  ObjectSet as $ObjectSet,
  Osdk as $Osdk,
  PropertyValueWireToClient as $PropType,
} from '@osdk/client';

export interface OsdkObjectLinks$CollateralConcernList {
  'com.palantir.pcl.civpro.collateral-concern-core.collateralConcernListToEntity': CollateralConcernCandidate.ObjectSet;
}

export namespace CollateralConcernList {
  export type PropertyKeys = 'collateralConcernListDescription' | 'collateralConcernListName';

  export interface Props {
    /**
     *   display name: 'Description',
     *
     *   description: The description of a collateral concern list.
     */
    readonly collateralConcernListDescription: $PropType['string'] | undefined;
    /**
     *   display name: 'Name',
     *
     *   description: The name of a collateral concern list.
     */
    readonly collateralConcernListName: $PropType['string'] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<CollateralConcernList, CollateralConcernList.ObjectSet> {}

  export type OsdkInstance<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CollateralConcernList.Props = keyof CollateralConcernList.Props,
  > = $Osdk.Instance<CollateralConcernList, OPTIONS, K>;

  /** @deprecated use OsdkInstance */
  export type OsdkObject<
    OPTIONS extends never | '$rid' = never,
    K extends keyof CollateralConcernList.Props = keyof CollateralConcernList.Props,
  > = OsdkInstance<OPTIONS, K>;
}

export interface CollateralConcernList extends $InterfaceDefinition {
  osdkMetadata: typeof $osdkMetadata;
  type: 'interface';
  apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernList';
  __DefinitionMetadata?: {
    objectSet: CollateralConcernList.ObjectSet;
    props: CollateralConcernList.Props;
    linksType: OsdkObjectLinks$CollateralConcernList;
    strictProps: CollateralConcernList.StrictProps;
    apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernList';
    description: 'A list of entities that can be considered as collateral concerns.';
    displayName: 'Collateral Concern List';
    implementedBy: ['GenericCollateralConcernList'];
    implements: [];
    links: {
      'com.palantir.pcl.civpro.collateral-concern-core.collateralConcernListToEntity': $InterfaceMetadata.Link<
        CollateralConcernCandidate,
        true
      >;
    };
    properties: {
      /**
       *   display name: 'Description',
       *
       *   description: The description of a collateral concern list.
       */
      collateralConcernListDescription: $PropertyDef<'string', 'nullable', 'single'>;
      /**
       *   display name: 'Name',
       *
       *   description: The name of a collateral concern list.
       */
      collateralConcernListName: $PropertyDef<'string', 'nullable', 'single'>;
    };
    rid: 'ri.ontology.main.interface.7d459ce8-bb84-4ea5-9039-71560d82b53f';
    type: 'interface';
  };
}

export const CollateralConcernList = {
  type: 'interface',
  apiName: 'com.palantir.pcl.civpro.collateral-concern-core.CollateralConcernList',
  osdkMetadata: $osdkMetadata,
  internalDoNotUseMetadata: {
    rid: 'ri.ontology.main.interface.7d459ce8-bb84-4ea5-9039-71560d82b53f',
  },
} satisfies CollateralConcernList & { internalDoNotUseMetadata: { rid: string } } as CollateralConcernList;
