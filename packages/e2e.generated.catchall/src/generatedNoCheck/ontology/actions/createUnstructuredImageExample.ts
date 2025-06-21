import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createUnstructuredImageExample {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    media_reference: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'mediaReference';
    };
    path: {
      description: undefined;
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
      args: createUnstructuredImageExample.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createUnstructuredImageExample.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
 * @param {ActionParam.PrimitiveType<"string">} path
 */
export interface createUnstructuredImageExample extends ActionDefinition<createUnstructuredImageExample.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createUnstructuredImageExample';
    displayName: 'Creates an Unstructured Image Example Object';
    modifiedEntities: {
      UnstructuredImageExample: {
        created: true;
        modified: false;
      };
    };
    parameters: createUnstructuredImageExample.ParamsDefinition;
    rid: 'ri.actions.main.action-type.9d28a423-b11e-485f-8a4c-f8b4131c0b85';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createUnstructuredImageExample.Signatures;
  };
  apiName: 'createUnstructuredImageExample';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createUnstructuredImageExample: createUnstructuredImageExample = {
  apiName: 'createUnstructuredImageExample',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
