import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
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

/**
 * Update an employee's title and compensation
 */
export interface ActionParams$promoteEmployeeObject {
  readonly employee: ActionParam.ObjectType<Employee>;

  readonly newCompensation: ActionParam.PrimitiveType<'double'>;

  readonly newTitle: ActionParam.PrimitiveType<'string'>;
}

/**
 * @deprecated Use `ActionParams$promoteEmployeeObject`
 */
export type promoteEmployeeObject$Params =
  | ActionParams$promoteEmployeeObject
  | ReadonlyArray<ActionParams$promoteEmployeeObject>;

// Represents a fqn of the action
export interface promoteEmployeeObject {
  /**
   * Update an employee's title and compensation
   */
  <
    P extends ActionParams$promoteEmployeeObject | ReadonlyArray<ActionParams$promoteEmployeeObject>,
    OP extends P extends ReadonlyArray<ActionParams$promoteEmployeeObject>
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
