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
    geo_title: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    geohash_prop: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geohash';
    };
    geoshape_prop: {
      description: undefined;
      multiplicity: false;
      nullable: false;
      type: 'geoshape';
    };
  };

  export interface Params {
    readonly geo_title: ActionParam.PrimitiveType<'string'>;

    readonly geohash_prop: ActionParam.PrimitiveType<'geohash'>;

    readonly geoshape_prop: ActionParam.PrimitiveType<'geoshape'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: createTestGeoAction.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<createTestGeoAction.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"string">} geo_title
 * @param {ActionParam.PrimitiveType<"geohash">} geohash_prop
 * @param {ActionParam.PrimitiveType<"geoshape">} geoshape_prop
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
