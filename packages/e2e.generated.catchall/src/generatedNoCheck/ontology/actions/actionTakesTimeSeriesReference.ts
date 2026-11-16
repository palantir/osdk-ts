import type {
  ActionDefinition,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export namespace actionTakesTimeSeriesReference {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    timeSeriesReference: {
      description: undefined;
      displayName: 'Time Series Reference';
      multiplicity: false;
      nullable: false;
      type: 'timeSeriesReference';
    };
  };

  export interface Params {
    readonly timeSeriesReference: ActionParam.PrimitiveType<'timeSeriesReference'>;
  }

  // Represents a fqn of the action
  export interface Signatures {
    applyAction<OP extends ApplyActionOptions>(
      args: actionTakesTimeSeriesReference.Params,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<OP extends ApplyBatchActionOptions>(
      args: ReadonlyArray<actionTakesTimeSeriesReference.Params>,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @param {ActionParam.PrimitiveType<"timeSeriesReference">} timeSeriesReference
 */
export interface actionTakesTimeSeriesReference extends ActionDefinition<actionTakesTimeSeriesReference.Signatures> {
  __DefinitionMetadata?: {
    apiName: 'actionTakesTimeSeriesReference';
    displayName: 'Action Takes Time Series Reference';
    modifiedEntities: {
      OsdkTestObject: {
        created: false;
        modified: true;
      };
    };
    parameters: actionTakesTimeSeriesReference.ParamsDefinition;
    rid: 'ri.actions.main.action-type.a1b2c3d4-0000-4000-8000-000000000001';
    status: 'EXPERIMENTAL';
    type: 'action';
    unsanitizedApiName: 'action-takes-time-series-reference';

    signatures: actionTakesTimeSeriesReference.Signatures;
  };
  apiName: 'actionTakesTimeSeriesReference';
  type: 'action';
  unsanitizedApiName: 'action-takes-time-series-reference';
  osdkMetadata: typeof $osdkMetadata;
}

export const actionTakesTimeSeriesReference: actionTakesTimeSeriesReference = {
  apiName: 'actionTakesTimeSeriesReference',
  type: 'action',
  unsanitizedApiName: 'action-takes-time-series-reference',
  osdkMetadata: $osdkMetadata,
};
