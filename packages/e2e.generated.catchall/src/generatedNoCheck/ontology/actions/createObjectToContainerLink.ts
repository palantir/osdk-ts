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
import type { OsdkTestObject } from '../objects/OsdkTestObject.js';

export namespace createObjectToContainerLink {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    osdkTestContainerLink: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestContainer>;
    };
    osdkTestObjectLink: {
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<OsdkTestObject>;
    };
  };

  export interface Params {
    readonly osdkTestContainerLink: ActionParam.ObjectType<OsdkTestContainer>;

    readonly osdkTestObjectLink: ActionParam.ObjectType<OsdkTestObject>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends createObjectToContainerLink.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createObjectToContainerLink.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<OsdkTestContainer>} osdkTestContainerLink
 * @param {ActionParam.ObjectType<OsdkTestObject>} osdkTestObjectLink
 */
export interface createObjectToContainerLink extends ActionDefinition<createObjectToContainerLink.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createObjectToContainerLink';
    displayName: 'createObjectToContainerLink';
    modifiedEntities: {};
    parameters: createObjectToContainerLink.ParamsDefinition;
    rid: 'ri.actions.main.action-type.aa92fca8-4ab5-4153-8e75-f4ec8fd9b733';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createObjectToContainerLink.Signatures;
  };
  apiName: 'createObjectToContainerLink';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createObjectToContainerLink: createObjectToContainerLink = {
  apiName: 'createObjectToContainerLink',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
