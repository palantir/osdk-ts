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
  export interface Parameters {
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

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'moveOffice', 'Office', moveOffice>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'moveOffice';
    description: "Update an office's physical location";
    modifiedEntities: { Office: { created: false; modified: true } };
    type: 'action';
    parameters: moveOffice.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Update an office's physical location
     */
    <
      P extends moveOffice.Parameters | ReadonlyArray<moveOffice.Parameters>,
      OP extends P extends ReadonlyArray<moveOffice.Parameters> ? ApplyBatchActionOptions : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `moveOffice.Parameters`
 */
export type moveOffice$Params = moveOffice.Parameters | ReadonlyArray<moveOffice.Parameters>;

/** @deprecated Use `moveOffice.Definition` **/
export type moveOffice = moveOffice.Signature;

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
