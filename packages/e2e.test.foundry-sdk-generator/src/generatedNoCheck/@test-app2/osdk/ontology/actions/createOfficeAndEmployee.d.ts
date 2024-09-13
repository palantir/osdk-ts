import type { ActionDefinition, VersionBound } from '@osdk/api';
import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace createOfficeAndEmployee {
    type ParamsDefinition = {
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
    interface Params {
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
    interface Definition extends ActionDefinition<'createOfficeAndEmployee', 'Office' | 'Employee', createOfficeAndEmployee.Signatures>, VersionBound<$ExpectedClientVersion> {
        apiName: 'createOfficeAndEmployee';
        description: 'Create an office and employee';
        modifiedEntities: {
            Office: {
                created: true;
                modified: false;
            };
            Employee: {
                created: true;
                modified: false;
            };
        };
        type: 'action';
        parameters: createOfficeAndEmployee.ParamsDefinition;
        osdkMetadata: typeof $osdkMetadata;
    }
    interface Signatures {
        /**
         * Create an office and employee
         */
        applyAction<P extends createOfficeAndEmployee.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<createOfficeAndEmployee.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/** @deprecated Use `createOfficeAndEmployee.Definition` **/
export type createOfficeAndEmployee = createOfficeAndEmployee.Signatures;
export declare const createOfficeAndEmployee: createOfficeAndEmployee.Definition;
