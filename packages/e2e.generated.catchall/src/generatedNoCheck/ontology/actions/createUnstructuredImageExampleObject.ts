import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createUnstructuredImageExampleObject {
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
      args: createUnstructuredImageExampleObject.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createUnstructuredImageExampleObject.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"mediaReference">} media_reference
 * @param {ActionParam.PrimitiveType<"string">} path
 */
export interface createUnstructuredImageExampleObject
  extends ActionDefinition<createUnstructuredImageExampleObject.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createUnstructuredImageExampleObject';
    displayName: 'Creates an Unstructured Image Example Object';
    modifiedEntities: {
      UnstructuredImageExample: {
        created: true;
        modified: false;
      };
    };
    parameters: createUnstructuredImageExampleObject.ParamsDefinition;
    rid: 'ri.actions.main.action-type.9d28a423-b11e-485f-8a4c-f8b4131c0b85';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createUnstructuredImageExampleObject.Signatures;
  };
  apiName: 'createUnstructuredImageExampleObject';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createUnstructuredImageExampleObject: createUnstructuredImageExampleObject = {
  apiName: 'createUnstructuredImageExampleObject',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
