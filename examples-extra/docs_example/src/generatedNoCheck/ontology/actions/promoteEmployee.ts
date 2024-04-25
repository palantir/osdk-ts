import type { ActionDefinition } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata';

// Represents the definition of the parameters for the action
export type ActionDef$promoteEmployee$Params = {
  employeeId: {
    multiplicity: false;
    nullable: false;
    type: 'integer';
  };
  newCompensation: {
    multiplicity: false;
    nullable: false;
    type: 'double';
  };
  newTitle: {
    multiplicity: false;
    nullable: false;
    type: 'string';
  };
};

// Represents the runtime arguments for the action
export type promoteEmployee$Params =
  | NOOP<OsdkActionParameters<ActionDef$promoteEmployee$Params>>
  | NOOP<OsdkActionParameters<ActionDef$promoteEmployee$Params>>[];

// Represents a fqn of the action
export interface promoteEmployee {
  /**
   * Update an employee's title and compensation
   */
  <
    P extends promoteEmployee$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$promoteEmployee$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$promoteEmployee extends ActionDefinition<'promoteEmployee', 'Employee', promoteEmployee> {
  apiName: 'promoteEmployee';
  description: "Update an employee's title and compensation";
  modifiedEntities: { Employee: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$promoteEmployee$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const promoteEmployee: ActionDef$promoteEmployee = {
  apiName: 'promoteEmployee',
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    newTitle: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    newCompensation: {
      multiplicity: false,
      type: 'double',
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
