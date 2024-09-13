import type { QueryDefinition, VersionBound } from '@osdk/api';
import type { QueryResult } from '@osdk/client.api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import type { Employee } from '../objects/Employee.js';
export declare namespace returnsObject {
    interface Signature {
        (): Promise<QueryResult.ObjectType<Employee>>;
    }
    interface Definition extends QueryDefinition<'returnsObject', 'Employee', returnsObject.Signature>, VersionBound<$ExpectedClientVersion> {
        apiName: 'returnsObject';
        displayName: 'returnsObject';
        type: 'query';
        version: '0.0.9';
        parameters: {};
        output: {
            nullable: false;
            object: 'Employee';
            type: 'object';
            __OsdkTargetType?: Employee;
        };
    }
}
/** @deprecated use `returnsObject.Signature' instead */
export type returnsObject = returnsObject.Signature;
export declare const returnsObject: returnsObject.Definition;
