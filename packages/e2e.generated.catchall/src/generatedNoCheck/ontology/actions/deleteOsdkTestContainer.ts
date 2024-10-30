import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { OsdkTestContainer } from '../objects/OsdkTestContainer.js';

export namespace deleteOsdkTestContainer {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    OsdkTestContainer: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestContainer>;
    };
  };

  export interface Params {
    readonly OsdkTestContainer: ActionParam.ObjectType<OsdkTestContainer>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends deleteOsdkTestContainer.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<deleteOsdkTestContainer.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<OsdkTestContainer>} OsdkTestContainer
 */
export interface deleteOsdkTestContainer extends ActionDefinition<deleteOsdkTestContainer.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'deleteOsdkTestContainer';
    displayName: 'Delete Osdk Test Container';
    modifiedEntities: {};
    parameters: deleteOsdkTestContainer.ParamsDefinition;
    rid: 'ri.actions.main.action-type.ad5240f6-89d3-45b9-bff6-053c4267d387';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: deleteOsdkTestContainer.Signatures;
  };
  apiName: 'deleteOsdkTestContainer';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const deleteOsdkTestContainer: deleteOsdkTestContainer = {
  apiName: 'deleteOsdkTestContainer',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
