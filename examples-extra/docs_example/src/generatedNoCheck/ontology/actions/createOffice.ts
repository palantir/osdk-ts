import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

// Represents the definition of the parameters for the action
export type ActionDef$createOffice$Params = {
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

// Represents the runtime arguments for the action
export type createOffice$Params =
  | NOOP<OsdkActionParameters<ActionDef$createOffice$Params>>
  | NOOP<OsdkActionParameters<ActionDef$createOffice$Params>>[];

// Represents a fqn of the action
export interface createOffice {
  /**
   * Create an office's
   */
  <
    P extends createOffice$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$createOffice$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createOffice
  extends ActionDefinition<'createOffice', 'Office', createOffice>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'createOffice';
  description: "Create an office's";
  modifiedEntities: { Office: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createOffice$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const createOffice: ActionDef$createOffice = {
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
