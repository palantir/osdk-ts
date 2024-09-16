import type { ActionDefinition, ObjectActionDataType, ObjectSetActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace createOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    address: {
      description: "The office's physical address (not necessarily shipping address)";
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    capacity: {
      description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
      multiplicity: false;
      nullable: true;
      type: 'integer';
    };
    officeId: {
      multiplicity: false;
      nullable: false;
      type: 'string';
    };
    officeNames: {
      description: 'A list of all office names';
      multiplicity: true;
      nullable: true;
      type: 'string';
    };
  };

  /**
   * Create an office's
   */
  export interface Params {
    /**
     * The office's physical address (not necessarily shipping address)
     */
    readonly address?: ActionParam.PrimitiveType<'string'>;
    /**
     * The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
     */
    readonly capacity?: ActionParam.PrimitiveType<'integer'>;

    readonly officeId: ActionParam.PrimitiveType<'string'>;
    /**
     * A list of all office names
     */
    readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createOffice', 'Office', createOffice.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createOffice';
    description: "Create an office's";
    modifiedEntities: { Office: { created: true; modified: false } };
    type: 'action';
    parameters: createOffice.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Create an office's
     */
    applyAction<P extends createOffice.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<createOffice.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `createOffice.Params`
 */
export type createOffice$Params = createOffice.Params | ReadonlyArray<createOffice.Params>;

/** @deprecated Use `createOffice.Definition` **/
export type createOffice = createOffice.Signatures;

export const createOffice: createOffice.Definition = {
  apiName: 'createOffice',
  description: "Create an office's",
  modifiedEntities: {
    Office: {
      created: true,
      modified: false,
    },
  },
  parameters: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    address: {
      multiplicity: false,
      type: 'string',
      nullable: true,
      description: "The office's physical address (not necessarily shipping address)",
    },
    capacity: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
      description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)',
    },
    officeNames: {
      multiplicity: true,
      type: 'string',
      nullable: true,
      description: 'A list of all office names',
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
