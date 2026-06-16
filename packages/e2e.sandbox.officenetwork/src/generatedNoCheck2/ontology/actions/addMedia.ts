import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace addMedia {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    employee_media: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'mediaReference';
    };
  };

  /**
   * addMediaToEmployee
   */
  export interface Params {
    readonly Employee: ActionParam.ObjectType<Employee>;

    readonly employee_media: ActionParam.PrimitiveType<'mediaReference'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * addMediaToEmployee
     */
    applyAction<OP extends ApplyActionOptions>(
      args: addMedia.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<addMedia.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * addMediaToEmployee
 * @param {ActionParam.ObjectType<Employee>} Employee
 * @param {ActionParam.PrimitiveType<"mediaReference">} employee_media
 */
export interface addMedia extends ActionDefinition<addMedia.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'addMedia';
    description: 'addMediaToEmployee';
    displayName: 'Add Media';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: addMedia.ParamsDefinition;
    rid: 'ri.actions.main.action-type.43aadae8-9dc7-4085-8cb9-de6634d31e1f';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: addMedia.Signatures;
  };
  apiName: 'addMedia';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const addMedia: addMedia = {
  apiName: 'addMedia',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
