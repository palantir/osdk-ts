import type { ActionDefinition, ObjectSetActionDataType, VersionBound } from '@osdk/api';
import type { ActionParam, ActionReturnTypeForOptions, ApplyActionOptions, ApplyBatchActionOptions } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
export declare namespace actionTakesObjectSet {
    type ParamsDefinition = {
        employees: {
            multiplicity: false;
            nullable: false;
            type: ObjectSetActionDataType<'Employee', Employee>;
        };
    };
    /**
     * An action which takes an Object Set
     */
    interface Params {
        readonly employees: ActionParam.ObjectSetType<Employee>;
    }
    interface Definition extends ActionDefinition<'actionTakesObjectSet', 'Employee', actionTakesObjectSet.Signatures>, VersionBound<$ExpectedClientVersion> {
        apiName: 'actionTakesObjectSet';
        description: 'An action which takes an Object Set';
        modifiedEntities: {};
        type: 'action';
        parameters: actionTakesObjectSet.ParamsDefinition;
        osdkMetadata: typeof $osdkMetadata;
    }
    interface Signatures {
        /**
         * An action which takes an Object Set
         */
        applyAction<P extends actionTakesObjectSet.Params, OP extends ApplyActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
        batchApplyAction<P extends ReadonlyArray<actionTakesObjectSet.Params>, OP extends ApplyBatchActionOptions>(args: P, options?: OP): Promise<ActionReturnTypeForOptions<OP>>;
    }
}
/** @deprecated Use `actionTakesObjectSet.Definition` **/
export type actionTakesObjectSet = actionTakesObjectSet.Signatures;
export declare const actionTakesObjectSet: actionTakesObjectSet.Definition;
