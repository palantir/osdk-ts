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
export type ActionDef$createOfficeAndEmployee$Params = {
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
  employeeId: {
    description: 'New employee Id';
    multiplicity: false;
    nullable: false;
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

/**
 * Create an office and employee
 */
export interface ActionParams$createOfficeAndEmployee {
  /**
   * The office's physical address (not necessarily shipping address)
   */
  readonly address?: ActionParam.PrimitiveType<'string'>;
  /**
   * The maximum seated-at-desk capacity of the office (maximum fire-safe capacity may be higher)
   */
  readonly capacity?: ActionParam.PrimitiveType<'integer'>;
  /**
   * New employee Id
   */
  readonly employeeId: ActionParam.PrimitiveType<'integer'>;

  readonly officeId: ActionParam.PrimitiveType<'string'>;
  /**
   * A list of all office names
   */
  readonly officeNames?: ReadonlyArray<ActionParam.PrimitiveType<'string'>>;
}

/**
 * @deprecated Use `ActionParams$createOfficeAndEmployee`
 */
export type createOfficeAndEmployee$Params =
  | ActionParams$createOfficeAndEmployee
  | ReadonlyArray<ActionParams$createOfficeAndEmployee>;

// Represents a fqn of the action
export interface createOfficeAndEmployee {
  /**
   * Create an office and employee
   */
  <
    P extends ActionParams$createOfficeAndEmployee | ReadonlyArray<ActionParams$createOfficeAndEmployee>,
    OP extends P extends ReadonlyArray<ActionParams$createOfficeAndEmployee>
      ? ApplyBatchActionOptions
      : ApplyActionOptions,
  >(
    args: P,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

// Represents the definition of the action
export interface ActionDef$createOfficeAndEmployee
  extends ActionDefinition<'createOfficeAndEmployee', 'Office' | 'Employee', createOfficeAndEmployee>,
    VersionBound<$ExpectedClientVersion> {
  apiName: 'createOfficeAndEmployee';
  description: 'Create an office and employee';
  modifiedEntities: { Office: { created: true; modified: false }; Employee: { created: true; modified: false } };
  type: 'action';
  parameters: ActionDef$createOfficeAndEmployee$Params;
  osdkMetadata: typeof $osdkMetadata;
}

export const createOfficeAndEmployee: ActionDef$createOfficeAndEmployee = {
  apiName: 'createOfficeAndEmployee',
  description: 'Create an office and employee',
  modifiedEntities: {
    Office: {
      created: true,
      modified: false,
    },
    Employee: {
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
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
      description: 'New employee Id',
    },
  },
  type: 'action',
  osdkMetadata: $osdkMetadata,
};
