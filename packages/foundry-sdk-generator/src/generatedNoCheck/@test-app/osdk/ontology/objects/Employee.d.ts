import type { LocalDate, MultiLink, OntologyObject, SingleLink, TimeSeries } from '@osdk/legacy-client';
import type { Office } from './Office';
/**
 * A full-time or part-time

 employee of our firm
 */
export interface Employee extends OntologyObject {
    readonly __apiName: 'Employee';
    readonly __primaryKey: number;
    readonly employeeId: number | undefined;
    readonly fullName: string | undefined;
    /**
   * The unique "ID" of the employee's \"primary\" assigned office.
   This is some more text.
   */
    readonly office: string | undefined;
    /**
     * The date the employee was hired (most recently, if they were re-hired)
     */
    readonly startDate: LocalDate | undefined;
    /**
     * TimeSeries of the status of the employee
     */
    readonly employeeStatus: TimeSeries<string> | undefined;
    readonly peeps: MultiLink<Employee>;
    readonly lead: SingleLink<Employee>;
    readonly officeLink: SingleLink<Office>;
}
export declare const Employee: {
    apiName: "Employee";
    description: string;
    primaryKeyType: "integer";
    links: {
        peeps: {
            multiplicity: true;
            targetType: "Employee";
        };
        lead: {
            multiplicity: false;
            targetType: "Employee";
        };
        officeLink: {
            multiplicity: false;
            targetType: "Office";
        };
    };
    properties: {
        employeeId: {
            multiplicity: false;
            type: "integer";
            nullable: true;
        };
        fullName: {
            multiplicity: false;
            type: "string";
            nullable: true;
        };
        office: {
            multiplicity: false;
            description: string;
            type: "string";
            nullable: true;
        };
        startDate: {
            multiplicity: false;
            description: string;
            type: "datetime";
            nullable: true;
        };
        employeeStatus: {
            multiplicity: false;
            description: string;
            type: "stringTimeseries";
            nullable: true;
        };
    };
};
