import type { ActionDefinition, VersionBound } from '@osdk/api';
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export namespace createOfficeAndEmployee {
  // Represents the definition of the parameters for the action
  export type ParamsDefinition = {
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
  export interface Parameters {
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

  // Represents the definition of the action
  export interface Definition
    extends ActionDefinition<'createOfficeAndEmployee', 'Office' | 'Employee', createOfficeAndEmployee>,
      VersionBound<$ExpectedClientVersion> {
    apiName: 'createOfficeAndEmployee';
    description: 'Create an office and employee';
    modifiedEntities: { Office: { created: true; modified: false }; Employee: { created: true; modified: false } };
    type: 'action';
    parameters: createOfficeAndEmployee.ParamsDefinition;
    osdkMetadata: typeof $osdkMetadata;
  }

  // Represents a fqn of the action
  export interface Signature {
    /**
     * Create an office and employee
     */
    <
      P extends createOfficeAndEmployee.Parameters | ReadonlyArray<createOfficeAndEmployee.Parameters>,
      OP extends P extends ReadonlyArray<createOfficeAndEmployee.Parameters>
        ? ApplyBatchActionOptions
        : ApplyActionOptions,
    >(
      args: P,
      options?: OP,
    ): Promise<ActionReturnTypeForOptions<OP>>;
  }
}

/**
 * @deprecated Use `createOfficeAndEmployee.Parameters`
 */
export type createOfficeAndEmployee$Params =
  | createOfficeAndEmployee.Parameters
  | ReadonlyArray<createOfficeAndEmployee.Parameters>;

/** @deprecated Use `createOfficeAndEmployee.Definition` **/
export type createOfficeAndEmployee = createOfficeAndEmployee.Signature;

export const createOfficeAndEmployee: createOfficeAndEmployee.Definition = {
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
