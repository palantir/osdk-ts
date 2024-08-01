import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';
import type { Employee } from '../objects/Employee';

// Represents the definition of the parameters for the action
export type ActionDef$promoteEmployeeObject$Params = {
  employee: {
    multiplicity: false;
    nullable: false;
    type: ObjectActionDataType<'Employee', Employee>;
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
export type promoteEmployeeObject$Params =
  | NOOP<OsdkActionParameters<ActionDef$promoteEmployeeObject$Params>>
  | NOOP<OsdkActionParameters<ActionDef$promoteEmployeeObject$Params>>[];

// Represents a fqn of the action
export interface promoteEmployeeObject {
  /**
   * Update an employee's title and compensation
   */
  <
    P extends promoteEmployeeObject$Params,
    OP extends P extends NOOP<OsdkActionParameters<ActionDef$promoteEmployeeObject$Params>>[]
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$promoteEmployeeObject
  extends ActionDefinition<'promoteEmployeeObject', 'Employee', promoteEmployeeObject>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'promoteEmployeeObject';
  description: "Update an employee's title and compensation";
  modifiedEntities: { Employee: { created: false; modified: true } };
  type: 'action';
  parameters: ActionDef$promoteEmployeeObject$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const promoteEmployeeObject: ActionDef$promoteEmployeeObject = {
  apiName: 'promoteEmployeeObject',
  description: "Update an employee's title and compensation",
  modifiedEntities: {
    Employee: {
      created: false,
      modified: true,
    },
  },
  parameters: {
    employee: {
      multiplicity: false,
      type: {
        type: 'object',
        object: 'Employee',
      },
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
