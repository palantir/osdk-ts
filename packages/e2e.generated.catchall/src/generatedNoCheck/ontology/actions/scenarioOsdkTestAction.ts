import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace scenarioOsdkTestAction {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    scenario: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'scenarioReference';
    };
  };

  export interface Params {
    readonly scenario: ActionParam.PrimitiveType<'scenarioReference'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: scenarioOsdkTestAction.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<scenarioOsdkTestAction.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"scenarioReference">} scenario
 */
export interface scenarioOsdkTestAction extends ActionDefinition<scenarioOsdkTestAction.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'scenarioOsdkTestAction';
    displayName: 'Scenario Osdk Test Action';
    modifiedEntities: {};
    parameters: scenarioOsdkTestAction.ParamsDefinition;
    rid: 'ri.actions.main.action-type.ed0f3aba-1eed-4d3c-b60f-417971f2b7dc';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'scenario-osdk-test-action';

    signatures: scenarioOsdkTestAction.Signatures;
  };
  apiName: 'scenarioOsdkTestAction';
  type: 'action';
  unsanitizedApiName: 'scenario-osdk-test-action';
  osdkMetadata: typeof $osdkMetadata;
}

export const scenarioOsdkTestAction: scenarioOsdkTestAction = {
  apiName: 'scenarioOsdkTestAction',
  type: 'action',
  unsanitizedApiName: 'scenario-osdk-test-action',
  osdkMetadata: $osdkMetadata,
};
