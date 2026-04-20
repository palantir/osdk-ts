import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    location: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geohash';
    };
    name: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly location: ActionParam.PrimitiveType<'geohash'>;

    readonly name: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createOffice.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createOffice.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"geohash">} location
 * @param {ActionParam.PrimitiveType<"string">} name
 */
export interface createOffice extends ActionDefinition<createOffice.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOffice';
    displayName: 'Create Office';
    modifiedEntities: {
      Office: {
        created: true;
        modified: false;
      };
    };
    parameters: createOffice.ParamsDefinition;
    rid: 'ri.actions.main.action-type.1149ae48-9a4a-45f1-92ba-90e046f7b3c7';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createOffice.Signatures;
  };
  apiName: 'createOffice';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOffice: createOffice = {
  apiName: 'createOffice',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
