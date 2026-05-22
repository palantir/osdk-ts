import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ScenarioTestOsdk } from '../objects/ScenarioTestOsdk.js';

export namespace deleteScenarioTestOsdk {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    ScenarioTestOsdk: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<ScenarioTestOsdk>;
    };
  };

  export interface Params {
    readonly ScenarioTestOsdk: ActionParam.ObjectType<ScenarioTestOsdk>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: deleteScenarioTestOsdk.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<deleteScenarioTestOsdk.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<ScenarioTestOsdk>} ScenarioTestOsdk
 */
export interface deleteScenarioTestOsdk extends ActionDefinition<deleteScenarioTestOsdk.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteScenarioTestOsdk';
    displayName: 'Delete Scenario Test Osdk';
    modifiedEntities: {};
    parameters: deleteScenarioTestOsdk.ParamsDefinition;
    rid: 'ri.actions.main.action-type.1ba8424e-7997-436d-a53d-471ea776d589';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'delete-scenario-test-osdk';

    signatures: deleteScenarioTestOsdk.Signatures;
  };
  apiName: 'deleteScenarioTestOsdk';
  type: 'action';
  unsanitizedApiName: 'delete-scenario-test-osdk';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteScenarioTestOsdk: deleteScenarioTestOsdk = {
  apiName: 'deleteScenarioTestOsdk',
  type: 'action',
  unsanitizedApiName: 'delete-scenario-test-osdk',
  osdkMetadata: $osdkMetadata,
};
