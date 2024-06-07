import type { ActionDefinition } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
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

// Represents the runtime arguments for the action
export type moveOffice$Params =
  | NOOP<OsdkActionParameters<ActionDef$moveOffice$Params>>
  | NOOP<OsdkActionParameters<ActionDef$moveOffice$Params>>[];

// Represents a fqn of the action
export interface moveOffice {
  /**
   * Update an office's physical location
   */
  <
    P extends moveOffice$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$moveOffice$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$moveOffice extends ActionDefinition<'moveOffice', 'Office', moveOffice> {
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
