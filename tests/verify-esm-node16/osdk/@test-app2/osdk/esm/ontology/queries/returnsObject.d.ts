import type { QueryDefinition, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
export declare namespace returnsObject {
    interface Signature {
        (): Promise<returnsObject.ReturnType>;
    }
    type ReturnType = QueryResult.ObjectType<Employee>;
}
export interface returnsObject extends QueryDefinition<returnsObject.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'returnsObject';
        displayName: 'returnsObject';
        rid: 'ri.function-registry.main.function.b2ae7b3e-2c89-42f5-a762-68957a9c039d';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            object: 'Employee';
            type: 'object';
            __OsdkTargetType?: Employee;
        };
        signature: returnsObject.Signature;
    };
    apiName: 'returnsObject';
    type: 'query';
    version: '0.0.9';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const returnsObject: returnsObject;
