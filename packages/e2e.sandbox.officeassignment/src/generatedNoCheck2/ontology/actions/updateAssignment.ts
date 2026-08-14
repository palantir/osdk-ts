import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Assignment } from '../objects/Assignment.js';

export namespace updateAssignment {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    assignment: {
      description: 'The assignment to update.';
      displayName: 'Assignment';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Assignment>;
    };
    floorId: {
      description: 'Foreign key to the Floor.';
      displayName: 'Floor ID';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    function: {
      description: 'Team / function.';
      displayName: 'Function';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    managerId: {
      description: 'Foreign key to the Manager.';
      displayName: 'Manager ID';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    officeId: {
      description: 'Foreign key to the Office.';
      displayName: 'Office ID';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    title: {
      description: 'Role title.';
      displayName: 'Title';
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
  };

  /**
   * Edit an assignment's role details (title, function) and location/ownership (officeId, floorId, managerId).
   */
  export interface Params {
    /**
     * The assignment to update.
     */
    readonly assignment: ActionParam.ObjectType<Assignment>;
    /**
     * Foreign key to the Floor.
     */
    readonly floorId?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Team / function.
     */
    readonly function?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Foreign key to the Manager.
     */
    readonly managerId?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Foreign key to the Office.
     */
    readonly officeId?: ActionParam.PrimitiveType<'string'> | null;
    /**
     * Role title.
     */
    readonly title?: ActionParam.PrimitiveType<'string'> | null;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Edit an assignment's role details (title, function) and location/ownership (officeId, floorId, managerId).
     */
    applyAction<OP extends ApplyActionOptions>(
      args: updateAssignment.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<updateAssignment.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * Edit an assignment's role details (title, function) and location/ownership (officeId, floorId, managerId).
 *
 * **Note on null values:** _For optional parameters, explicitly providing a null value instead of undefined
 * can change the behavior of the applied action. If prefills are configured, null prevents them
 * from being applied. If a parameter modifies an object's property, null will clear the data from
 * the object, whereas undefined would not modify that property._
 * @param {ActionParam.ObjectType<Assignment>} assignment The assignment to update.
 * @param {ActionParam.PrimitiveType<"string">} [floorId] Foreign key to the Floor.
 * @param {ActionParam.PrimitiveType<"string">} [function] Team / function.
 * @param {ActionParam.PrimitiveType<"string">} [managerId] Foreign key to the Manager.
 * @param {ActionParam.PrimitiveType<"string">} [officeId] Foreign key to the Office.
 * @param {ActionParam.PrimitiveType<"string">} [title] Role title.
 */
export interface updateAssignment extends ActionDefinition<updateAssignment.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'updateAssignment';
    description: "Edit an assignment's role details (title, function) and location/ownership (officeId, floorId, managerId).";
    displayName: 'Update Assignment';
    modifiedEntities: {
      Assignment: {
        created: false;
        modified: true;
      };
    };
    parameters: updateAssignment.ParamsDefinition;
    rid: 'ri.actions.main.action-type.2a3aeb47-9da0-4b3b-a2fc-506144d36ab6';
    status: 'ACTIVE';
    type: 'action';
    unsanitizedApiName: 'update-assignment';

    signatures: updateAssignment.Signatures;
  };
  apiName: 'updateAssignment';
  type: 'action';
  unsanitizedApiName: 'update-assignment';
  osdkMetadata: typeof $osdkMetadata;
}

export const updateAssignment: updateAssignment = {
  apiName: 'updateAssignment',
  type: 'action',
  unsanitizedApiName: 'update-assignment',
  osdkMetadata: $osdkMetadata,
};
