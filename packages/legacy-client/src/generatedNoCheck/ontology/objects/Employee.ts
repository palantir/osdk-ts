import type { ObjectTypeDefinition } from '@osdk/api';
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
  /**
   * TimeSeries of the status of the employee
   */
  readonly employeeStatus: TimeSeries<string> | undefined;
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
  readonly peeps: MultiLink<Employee>;
  readonly lead: SingleLink<Employee>;
  readonly officeLink: SingleLink<Office>;
}

export const Employee = {
  apiName: 'Employee',
  description: 'A full-time or part-time \n\n employee of our firm',
  primaryKeyType: 'integer',
  links: {
    peeps: {
      multiplicity: true,
      targetType: 'Employee',
    },
    lead: {
      multiplicity: false,
      targetType: 'Employee',
    },
    officeLink: {
      multiplicity: false,
      targetType: 'Office',
    },
  },
  properties: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    fullName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    office: {
      multiplicity: false,
      description: 'The unique "ID" of the employee\'s \\"primary\\" assigned office.\n This is some more text.',
      type: 'string',
      nullable: true,
    },
    startDate: {
      multiplicity: false,
      description: 'The date the employee was hired (most recently, if they were re-hired)',
      type: 'datetime',
      nullable: true,
    },
    employeeStatus: {
      multiplicity: false,
      description: 'TimeSeries of the status of the employee',
      type: 'stringTimeseries',
      nullable: true,
    },
  },
} satisfies ObjectTypeDefinition<'Employee', 'Employee' | 'Office'>;
