import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$moveOffice$Params = {
  officeId: {
    multiplicity: false;
    type: 'string';
    nullable: false;
  };
  newAddress: {
    multiplicity: false;
    type: 'string';
    nullable: true;
    description: "The office's new physical address (not necessarily shipping address)";
  };
  newCapacity: {
    multiplicity: false;
    type: 'integer';
    nullable: true;
    description: 'The maximum seated-at-desk capacity of the new office (maximum fire-safe capacity may be higher)';
  };
  officeNames: {
    multiplicity: true;
    type: 'integer';
    nullable: true;
    description: 'A list of all office names';
  };
};

// Represents the runtime arguments for the action
export type moveOffice$Params = NOOP<OsdkActionParameters<ActionDef$moveOffice$Params>>;

// Represents a fqn of the action
export interface moveOffice {
  /**
   * Update an office's physical location
   */
  <OP extends ApplyActionOptions>(args: moveOffice$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$moveOffice extends ActionDefinition<'moveOffice', 'Office', moveOffice> {
  type: 'action';
  apiName: 'moveOffice';
  description: "Update an office's physical location";
  modifiedEntities: { Office: { created: false; modified: true } };
  parameters: ActionDef$moveOffice$Params;
}

export const moveOffice: ActionDef$moveOffice = {
  type: 'action',
  apiName: 'moveOffice',
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
  description: "Update an office's physical location",
  modifiedEntities: {
    Office: {
      created: false,
      modified: true,
    },
  },
};
