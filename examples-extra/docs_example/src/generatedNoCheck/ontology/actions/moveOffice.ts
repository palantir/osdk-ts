import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace moveOffice {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
    newAddress: {
      description: "The office's new physical address (not necessarily shipping address)";
      multiplicity: false;
      nullable: true;
      type: 'string';
    };
    newCapacity: {
      description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)';
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
      type: 'integer';
    };
  };

  /**
   * Update an office's physical location
   */
  export interface Params {
    /**
     * The office's new physical address (not necessarily shipping address)
     */
    readonly newAddress?: ActionParam.PrimitiveType<'string'>;
    /**
     * The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)
     */
    readonly newCapacity?: ActionParam.PrimitiveType<'integer'>;

    readonly officeId: ActionParam.PrimitiveType<'string'>;
    /**
     * A list of all office names
     */
    readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'integer'>>;
  }
  /** @deprecated **/
  export type Parameters = Params;

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'moveOffice', 'Office', moveOffice.Signatures>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'moveOffice';
    description: "Update an office's physical location";
    modifiedEntities: { Office: { created: false; modified: true } };
    type: 'action';
    parameters: moveOffice.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signatures {
    /**
     * Update an office's physical location
     */
    applyAction<P extends moveOffice.Params, OP extends ApplyActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;

    batchApplyAction<P extends ReadonlyArray<moveOffice.Params>, OP extends ApplyBatchActionOptions>(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `moveOffice.Params`
 */
export type moveOffice$Params = moveOffice.Params | ReadonlyArray<moveOffice.Params>;

/** @deprecated Use `moveOffice.Definition` **/
export type moveOffice = moveOffice.Signatures;

export const moveOffice: moveOffice.Definition = {
  apiName: 'moveOffice',
  description: "Update an office's physical location",
  modifiedEntities: {
    Office: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    officeId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    newAddress: {
      multiplicity: false,
      type: 'string',
      nullable: true,
      description: "The office's new physical address (not necessarily shipping address)",
    },
    newCapacity: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
      description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)',
    },
    officeNames: {
      multiplicity: true,
      type: 'integer',
      nullable: true,
      description: 'A list of all office names',
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
