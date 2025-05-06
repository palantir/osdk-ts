import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createMediaObject {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    media_reference: {
      multiplicity: false;
      nullable: false;
      type: 'mediaReference';
    };
    path: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly media_reference: ActionParam.PrimitiveType<'mediaReference'>;

    readonly path: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createMediaObject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createMediaObject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
 * @param {ActionParam.PrimitiveType<"string">} path
 */
export interface createMediaObject extends ActionDefinition<createMediaObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createMediaObject';
    displayName: 'Create media object';
    modifiedEntities: {
      MnayanOsdkMediaObject: {
        created: true;
        modified: false;
      };
    };
    parameters: createMediaObject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.55c19ac6-47a4-46f6-9bab-b97f9016ff92';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createMediaObject.Signatures;
  };
  apiName: 'createMediaObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createMediaObject: createMediaObject = {
  apiName: 'createMediaObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
