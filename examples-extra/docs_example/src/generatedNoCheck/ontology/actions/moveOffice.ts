import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

// Represents the definition of the parameters for the action
export type ActionDef$moveOffice$Params = {
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
export interface ActionParams$moveOffice {
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

/**
 * @deprecated Use `ActionParams$moveOffice`
 */
export type moveOffice$Params = ActionParams$moveOffice | ReadonlyArray<ActionParams$moveOffice>;

// Represents a fqn of the action
export interface moveOffice {
  /**
   * Update an office's physical location
   */
  <
    P extends ActionParams$moveOffice | ReadonlyArray<ActionParams$moveOffice>,
    OP extends P extends ReadonlyArray<ActionParams$moveOffice> ? ApplyBatchActionOptions : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$moveOffice
  extends ActionDefinition<'moveOffice', 'Office', moveOffice>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'moveOffice';
  description: "Update an office's physical location";
  modifiedEntities: { Office: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$moveOffice$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const moveOffice: ActionDef$moveOffice = {
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
