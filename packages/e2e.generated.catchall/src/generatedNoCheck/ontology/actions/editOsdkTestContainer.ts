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

export namespace editOsdkTestContainer {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    name: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    OsdkTestContainer: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestContainer>;
    };
    time: {
      multiplicity: false;
      nullable: false;
      type: 'timestamp';
    };
  };

  export interface Params {
    readonly name: ActionParam.PrimitiveType<'string'>;

    readonly OsdkTestContainer: ActionParam.ObjectType<OsdkTestContainer>;

    readonly time: ActionParam.PrimitiveType<'timestamp'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends editOsdkTestContainer.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<editOsdkTestContainer.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} name
 * @param {ActionParam.ObjectType<OsdkTestContainer>} OsdkTestContainer
 * @param {ActionParam.PrimitiveType<"timestamp">} time
 */
export interface editOsdkTestContainer extends ActionDefinition<editOsdkTestContainer.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'editOsdkTestContainer';
    displayName: 'Edit Osdk Test Container';
    modifiedEntities: {
      OsdkTestContainer: {
        created: false;
        modified: true;
      };
    };
    parameters: editOsdkTestContainer.ParamsDefinition;
    rid: 'ri.actions.main.action-type.0e75ace8-fd61-4c64-b903-18ee19a878ed';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: editOsdkTestContainer.Signatures;
  };
  apiName: 'editOsdkTestContainer';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const editOsdkTestContainer: editOsdkTestContainer = {
  apiName: 'editOsdkTestContainer',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
