import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $resolveAction } from '@osdk/aliases';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';

export namespace mapBetweenMediaSets {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Employee: {
      description: undefined;
      displayName: 'Employee';
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    employee_documents: {
      description: undefined;
      displayName: 'employeeDocuments';
      multiplicity: false;
      nullable: true;
      type: 'mediaReference';
    };
    employee_media: {
      description: undefined;
      displayName: 'Employee Media';
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
    unsanitizedApiName: 'map-between-media-sets';

    signatures: mapBetweenMediaSets.Signatures;
  };
  apiName: 'mapBetweenMediaSets';
  type: 'action';
  unsanitizedApiName: 'map-between-media-sets';
  osdkMetadata: typeof $osdkMetadata;
}

export const mapBetweenMediaSets: mapBetweenMediaSets = {
  apiName: 'mapBetweenMediaSets',
  type: 'action',
  get unsanitizedApiName() {
    return $resolveAction('map-between-media-sets') as 'map-between-media-sets';
  },
  osdkMetadata: $osdkMetadata,
};
