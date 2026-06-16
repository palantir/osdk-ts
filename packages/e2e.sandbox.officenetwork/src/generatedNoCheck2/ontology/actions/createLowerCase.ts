import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createLowerCase {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    IdParam: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly IdParam: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createLowerCase.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createLowerCase.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} IdParam
 */
export interface createLowerCase extends ActionDefinition<createLowerCase.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createLowerCase';
    displayName: 'createLowerCase';
    modifiedEntities: {
      lowerCaseApiDataset: {
        created: true;
        modified: false;
      };
    };
    parameters: createLowerCase.ParamsDefinition;
    rid: 'ri.actions.main.action-type.0ede6e39-734c-4c2e-910f-1cb6037d6785';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createLowerCase.Signatures;
  };
  apiName: 'createLowerCase';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createLowerCase: createLowerCase = {
  apiName: 'createLowerCase',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
