import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createScenarioTestOsdk {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    scenarioRidCreatedOn: {
      description: undefined;
      displayName: 'ScenarioRidCreatedOn';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    string: {
      description: undefined;
      displayName: 'String';
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly scenarioRidCreatedOn: ActionParam.PrimitiveType<'string'>;

    readonly string: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createScenarioTestOsdk.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createScenarioTestOsdk.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} scenarioRidCreatedOn
 * @param {ActionParam.PrimitiveType<"string">} string
 */
export interface createScenarioTestOsdk extends ActionDefinition<createScenarioTestOsdk.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createScenarioTestOsdk';
    displayName: 'Create Scenario Test Osdk';
    modifiedEntities: {
      ScenarioTestOsdk: {
        created: true;
        modified: false;
      };
    };
    parameters: createScenarioTestOsdk.ParamsDefinition;
    rid: 'ri.actions.main.action-type.fddb9db7-30bb-43c0-9026-72794537ca98';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'create-scenario-test-osdk';

    signatures: createScenarioTestOsdk.Signatures;
  };
  apiName: 'createScenarioTestOsdk';
  type: 'action';
  unsanitizedApiName: 'create-scenario-test-osdk';
  osdkMetadata: typeof $osdkMetadata;
}

export const createScenarioTestOsdk: createScenarioTestOsdk = {
  apiName: 'createScenarioTestOsdk',
  type: 'action',
  unsanitizedApiName: 'create-scenario-test-osdk',
  osdkMetadata: $osdkMetadata,
};
