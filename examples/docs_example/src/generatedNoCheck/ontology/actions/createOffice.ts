import type { ActionDefinition } from '@osdk/api';
import type { ActionReturnTypeForOptions, ApplyActionOptions, NOOP, OsdkActionParameters } from '@osdk/client';

// Represents the definition of the parameters for the action
export type ActionDef$createOffice$Params = {
  officeId: {
    multiplicity: false;
    type: 'string';
    nullable: false;
  };
  address: {
    multiplicity: false;
    type: 'string';
    nullable: true;
    description: "The office's physical address (not necessarily shipping address)";
  };
  capacity: {
    multiplicity: false;
    type: 'integer';
    nullable: true;
    description: 'The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)';
  };
  officeNames: {
    multiplicity: true;
    type: 'string';
    nullable: true;
    description: 'A list of all office names';
  };
};

// Represents the runtime arguments for the action
export type createOffice$Params = NOOP<OsdkActionParameters<ActionDef$createOffice$Params>>;

// Represents a fqn of the action
export interface createOffice {
  /**
   * Create an office's
   */
  <OP extends ApplyActionOptions>(args: createOffice$Params, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createOffice extends ActionDefinition<'createOffice', 'Office', createOffice> {
  type: 'action';
  apiName: 'createOffice';
  description: "Create an office's";
  modifiedEntities: { Office: { created: true; modified: false } };
  parameters: ActionDef$createOffice$Params;
}

export const createOffice: ActionDef$createOffice = {
  type: 'action',
  apiName: 'createOffice',
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
  description: "Create an office's",
  modifiedEntities: {
    Office: {
      created: true,
      modified: false,
    },
  },
};
