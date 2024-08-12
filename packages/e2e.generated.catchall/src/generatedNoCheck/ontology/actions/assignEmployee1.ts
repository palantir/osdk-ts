import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
import type { Venture } from '../objects/Venture.js';

// Represents the definition of the parameters for the action
export type ActionDef$assignEmployee1$Params = {
  'employee-1': {
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'Employee', Employee>;
  };
  'venture-1': {
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'Venture', Venture>;
  };
};

// Represents the runtime arguments for the action
export type assignEmployee1$Params =
  | NOOP<OsdkActionParameters<ActionDef$assignEmployee1$Params>>
  | NOOP<OsdkActionParameters<ActionDef$assignEmployee1$Params>>[];

// Represents a fqn of the action
export interface assignEmployee1 {
  /**
   * Assigns an employee to a venture
   */
  <
    P extends assignEmployee1$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$assignEmployee1$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$assignEmployee1
  extends ActionDefinition<'assignEmployee1', 'Employee' | 'Venture', assignEmployee1>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'assignEmployee1';
  description: 'Assigns an employee to a venture';
  modifiedEntities: { Employee: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$assignEmployee1$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const assignEmployee1: ActionDef$assignEmployee1 = {
  apiName: 'assignEmployee1',
  description: 'Assigns an employee to a venture',
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    'employee-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
      nullable: false,
    },
    'venture-1': {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Venture',
      },
      nullable: false,
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
