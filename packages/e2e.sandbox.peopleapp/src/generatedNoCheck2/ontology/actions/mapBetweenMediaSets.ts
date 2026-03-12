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

export namespace mapBetweenMediaSets {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    employee_documents: {
      description: undefined;
      multiplicity: false;
      nullable: true;
      type: 'mediaReference';
    };
    employee_media: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'mediaReference';
    };
  };

  export interface Params {
    readonly Employee: ActionParam.ObjectType<Employee>;

    readonly employee_documents?: ActionParam.PrimitiveType<'mediaReference'> | null;

    readonly employee_media: ActionParam.PrimitiveType<'mediaReference'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: mapBetweenMediaSets.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<mapBetweenMediaSets.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} Employee
 * @param {ActionParam.PrimitiveType<"mediaReference">} [employee_documents]
 * @param {ActionParam.PrimitiveType<"mediaReference">} employee_media
 */
export interface mapBetweenMediaSets extends ActionDefinition<mapBetweenMediaSets.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'mapBetweenMediaSets';
    displayName: 'MapBetweenMediaSets';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: mapBetweenMediaSets.ParamsDefinition;
    rid: 'ri.actions.main.action-type.d023c57d-fd92-440b-8906-721f660630ee';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: mapBetweenMediaSets.Signatures;
  };
  apiName: 'mapBetweenMediaSets';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const mapBetweenMediaSets: mapBetweenMediaSets = {
  apiName: 'mapBetweenMediaSets',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
