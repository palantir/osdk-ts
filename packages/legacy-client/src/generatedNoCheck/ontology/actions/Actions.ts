import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Attachment,
  Edits,
  ObjectSet,
  Result,
} from '@osdk/legacy-client';
import type { Employee } from '../objects/Employee';
import type { Office } from '../objects/Office';
export interface Actions {
  /**
   * Update an employee's title and compensation
   * @param {number} params.employeeId
   * @param {string} params.newTitle
   * @param {number} params.newCompensation
   */
  promoteEmployee<O extends ActionExecutionOptions>(
    params: {
      employeeId: number;
      newTitle: string;
      newCompensation: number;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, Employee>>, ActionError>>;

  /**
   * Update an employee's title and compensation
   * @param {Employee | Employee["__primaryKey"]} params.employee
   * @param {string} params.newTitle
   * @param {number} params.newCompensation
   */
  promoteEmployeeObject<O extends ActionExecutionOptions>(
    params: {
      employee: Employee | Employee['__primaryKey'];
      newTitle: string;
      newCompensation: number;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, Employee>>, ActionError>>;

  /**
   * Create an office's
   * @param {string} params.officeId
   * @param {string} params.address
   * @param {number} params.capacity
   * @param {Array<string>} params.officeNames
   */
  createOffice<O extends ActionExecutionOptions>(
    params: {
      officeId: string;
      address?: string;
      capacity?: number;
      officeNames?: Array<string>;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Office, void>>, ActionError>>;

  /**
   * Create an office and employee
   * @param {string} params.officeId
   * @param {string} params.address
   * @param {number} params.capacity
   * @param {Array<string>} params.officeNames
   * @param {number} params.employeeId
   */
  createOfficeAndEmployee<O extends ActionExecutionOptions>(
    params: {
      officeId: string;
      address?: string;
      capacity?: number;
      officeNames?: Array<string>;
      employeeId: number;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<Office | Employee, void>>, ActionError>>;

  /**
   * Update an office's physical location
   * @param {string} params.officeId
   * @param {string} params.newAddress
   * @param {number} params.newCapacity
   * @param {Array<number>} params.officeNames
   */
  moveOffice<O extends ActionExecutionOptions>(
    params: {
      officeId: string;
      newAddress?: string;
      newCapacity?: number;
      officeNames?: Array<number>;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, Office>>, ActionError>>;

  /**
   * An action which takes an Object Set
   * @param {ObjectSet<Employee>} params.employees
   */
  actionTakesObjectSet<O extends ActionExecutionOptions>(
    params: {
      employees: ObjectSet<Employee>;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, void>>, ActionError>>;

  /**
   * An action which takes an attachmen t
   * @param {Attachment} params.attachment
   */
  actionTakesAttachment<O extends ActionExecutionOptions>(
    params: {
      attachment: Attachment;
    },
    options?: O,
  ): Promise<Result<ActionResponseFromOptions<O, Edits<void, void>>, ActionError>>;
}
