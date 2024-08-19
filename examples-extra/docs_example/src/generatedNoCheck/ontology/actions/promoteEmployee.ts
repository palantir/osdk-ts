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

/**
 * Update an employee's title and compensation
 */
export interface ActionParams$promoteEmployee {
  readonly employeeId: ActionParam.PrimitiveType<'integer'>;

  readonly newCompensation: ActionParam.PrimitiveType<'double'>;

  readonly newTitle: ActionParam.PrimitiveType<'string'>;
}

/**
 * @deprecated Use `ActionParams$promoteEmployee`
 */
export type promoteEmployee$Params = ActionParams$promoteEmployee | ReadonlyArray<ActionParams$promoteEmployee>;

// Represents a fqn of the action
export interface promoteEmployee {
  /**
   * Update an employee's title and compensation
   */
  <
    P extends ActionParams$promoteEmployee | ReadonlyArray<ActionParams$promoteEmployee>,
    OP extends P extends ReadonlyArray<ActionParams$promoteEmployee> ? ApplyBatchActionOptions : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$promoteEmployee
  extends ActionDefinition<'promoteEmployee', 'Employee', promoteEmployee>,
    VersionBound<$ExpectedClientVersion> {
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
