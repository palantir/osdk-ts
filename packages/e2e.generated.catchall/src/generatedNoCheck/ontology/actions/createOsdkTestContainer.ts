import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createOsdkTestContainer {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    name: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    time: {
      multiplicity: false;
      nullable: false;
      type: 'timestamp';
    };
  };

  export interface Params {
    readonly name: ActionParam.PrimitiveType<'string'>;

    readonly time: ActionParam.PrimitiveType<'timestamp'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends createOsdkTestContainer.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createOsdkTestContainer.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} name
 * @param {ActionParam.PrimitiveType<"timestamp">} time
 */
export interface createOsdkTestContainer extends ActionDefinition<createOsdkTestContainer.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createOsdkTestContainer';
    displayName: 'Create Osdk Test Container';
    modifiedEntities: {
      OsdkTestContainer: {
        created: true;
        modified: false;
      };
    };
    parameters: createOsdkTestContainer.ParamsDefinition;
    rid: 'ri.actions.main.action-type.6d75b952-dd78-4560-b97f-8e344b9b04a7';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createOsdkTestContainer.Signatures;
  };
  apiName: 'createOsdkTestContainer';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createOsdkTestContainer: createOsdkTestContainer = {
  apiName: 'createOsdkTestContainer',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
