import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace createTestGeoAction {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    geohashProp: {
      multiplicity: false;
      nullable: false;
      type: 'geohash';
    };
    geoPk: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    geoshapeProp: {
      multiplicity: false;
      nullable: false;
      type: 'geoshape';
    };
    geoTitle: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
  };

  export interface Params {
    readonly geohashProp: ActionParam.PrimitiveType<'geohash'>;

    readonly geoPk: ActionParam.PrimitiveType<'string'>;

    readonly geoshapeProp: ActionParam.PrimitiveType<'geoshape'>;

    readonly geoTitle: ActionParam.PrimitiveType<'string'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<P extends createTestGeoAction.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createTestGeoAction.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"geohash">} geohashProp
 * @param {ActionParam.PrimitiveType<"string">} geoPk
 * @param {ActionParam.PrimitiveType<"geoshape">} geoshapeProp
 * @param {ActionParam.PrimitiveType<"string">} geoTitle
 */
export interface createTestGeoAction extends ActionDefinition<createTestGeoAction.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'createTestGeoAction';
    displayName: 'Create Test Geo object';
    modifiedEntities: {
      TestGeoAction: {
        created: true;
        modified: false;
      };
    };
    parameters: createTestGeoAction.ParamsDefinition;
    rid: 'ri.actions.main.action-type.7558117e-5dd4-461c-9c81-760deb512d32';
    status: 'EXPERIMENTAL';
    type: 'action';

    signatures: createTestGeoAction.Signatures;
  };
  apiName: 'createTestGeoAction';
  type: 'action';
  osdkMetadata: typeof $osdkMetadata;
}

export const createTestGeoAction: createTestGeoAction = {
  apiName: 'createTestGeoAction',
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
