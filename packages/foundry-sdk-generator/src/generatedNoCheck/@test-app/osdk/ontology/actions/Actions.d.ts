import type { ActionError, ActionExecutionOptions, ActionResponseFromOptions, Edits, ObjectSet, Result } from '@osdk/legacy-client';
import type { Employee } from '../objects/Employee';
import type { Office } from '../objects/Office';
export interface Actions {
    /**
     * Create an office's
     * @param {string} params.officeId
     * @param {string} params.address
     * @param {number} params.capacity
     * @param {Array<string>} params.officeNames
     */
    createOffice<O extends ActionExecutionOptions>(params: {
        officeId: string;
        address?: string;
        capacity?: number;
        officeNames?: Array<string>;
    }, options?: O): Promise<Result<ActionResponseFromOptions<O, Edits<Office, void>>, ActionError>>;
    /**
     * Create an office and employee
     * @param {string} params.officeId
     * @param {string} params.address
     * @param {number} params.capacity
     * @param {Array<string>} params.officeNames
     * @param {number} params.employeeId
     */
    createOfficeAndEmployee<O extends ActionExecutionOptions>(params: {
        officeId: string;
        address?: string;
        capacity?: number;
        officeNames?: Array<string>;
        employeeId: number;
    }, options?: O): Promise<Result<ActionResponseFromOptions<O, Edits<Office | Employee, void>>, ActionError>>;
    /**
     * Update an office's physical location
     * @param {string} params.officeId
     * @param {string} params.newAddress
     * @param {number} params.newCapacity
     * @param {Array<number>} params.officeNames
     */
    moveOffice<O extends ActionExecutionOptions>(params: {
        officeId: string;
        newAddress?: string;
        newCapacity?: number;
        officeNames?: Array<number>;
    }, options?: O): Promise<Result<ActionResponseFromOptions<O, Edits<void, Office>>, ActionError>>;
    /**
     * An action which takes an Object Set
     * @param {ObjectSet<Employee>} params.employees
     */
    actionTakesObjectSet<O extends ActionExecutionOptions>(params: {
        employees: ObjectSet<Employee>;
    }, options?: O): Promise<Result<ActionResponseFromOptions<O, Edits<void, void>>, ActionError>>;
}
