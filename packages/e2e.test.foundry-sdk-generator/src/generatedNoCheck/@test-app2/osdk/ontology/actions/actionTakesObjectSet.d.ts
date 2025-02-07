import type { ActionDefinition, ActionMetadata, ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
export declare namespace actionTakesObjectSet {
    type ParamsDefinition = {
        employees: {
            multiplicity: false;
            nullable: false;
            type: ActionMetadata.DataType.ObjectSet<Employee>;
        };
    };
    /**
     * An action which takes an Object Set
     */
    interface Params {
        readonly employees: ActionParam.ObjectSetType<Employee>;
    }
    interface Signatures {
        /**
         * An action which takes an Object Set
         */
        applyAction<P extends actionTakesObjectSet.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<actionTakesObjectSet.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/**
 * An action which takes an Object Set
 * @param {ActionParam.ObjectSetType<Employee>} employees
 */
export interface actionTakesObjectSet extends ActionDefinition<actionTakesObjectSet.Signatures> {
    __DefinitionMetadata?: {
        apiName: 'actionTakesObjectSet';
        description: 'An action which takes an Object Set';
        modifiedEntities: {};
        parameters: actionTakesObjectSet.ParamsDefinition;
        rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
        status: 'ACTIVE';
        type: 'action';
        signatures: actionTakesObjectSet.Signatures;
    };
    apiName: 'actionTakesObjectSet';
    type: 'action';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const actionTakesObjectSet: actionTakesObjectSet;
