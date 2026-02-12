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

export namespace changeFavoritePlace {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    Employee: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: ActionMetadata.DataType.Object<Employee>;
    };
    'favorite-place-area': {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geoshape';
    };
    favplace: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geohash';
    };
  };

  export interface Params {
    readonly Employee: ActionParam.ObjectType<Employee>;

    readonly 'favorite-place-area': ActionParam.PrimitiveType<'geoshape'>;

    readonly favplace: ActionParam.PrimitiveType<'geohash'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: changeFavoritePlace.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<changeFavoritePlace.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.ObjectType<Employee>} Employee
 * @param {ActionParam.PrimitiveType<"geoshape">} favorite-place-area
 * @param {ActionParam.PrimitiveType<"geohash">} favplace
 */
export interface changeFavoritePlace extends ActionDefinition<changeFavoritePlace.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'changeFavoritePlace';
    displayName: 'changeFavoritePlace';
    modifiedEntities: {
      Employee: {
        created: false;
        modified: true;
      };
    };
    parameters: changeFavoritePlace.ParamsDefinition;
    rid: 'ri.actions.main.action-type.a35f9aa1-a7a1-44bd-99bf-b988bb5bf750';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: changeFavoritePlace.Signatures;
  };
  apiName: 'changeFavoritePlace';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const changeFavoritePlace: changeFavoritePlace = {
  apiName: 'changeFavoritePlace',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
