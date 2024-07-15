import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata';
import { $osdkMetadata } from '../../OntologyMetadata';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'A full-time or part-time employee of our firm';
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
  };
  primaryKeyApiName: 'employeeId';
  primaryKeyType: 'integer';
  properties: {
    /**
     * (no ontology metadata)
     */
    class: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    employeeId: PropertyDef<'integer', 'non-nullable', 'single'>;
    /**
     *   description: TimeSeries of the status of the employee
     */
    employeeStatus: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    fullName: PropertyDef<'string', 'nullable', 'single'>;
    /**
     *   description: The unique of the employee's assigned office. This is some more text.
     */
    office: PropertyDef<'integer', 'nullable', 'single'>;
    /**
     *   description: The date the employee was hired (most recently, if they were re-hired)
     */
    startDate: PropertyDef<'datetime', 'nullable', 'single'>;
  };
}

export const Employee: Employee = {
  osdkMetadata: $osdkMetadata,
  apiName: 'Employee',
  description: 'A full-time or part-time employee of our firm',
  links: {
    lead: {
      multiplicity: false,
      targetType: 'Employee',
    },
    peeps: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'employeeId',
  primaryKeyType: 'integer',
  properties: {
    employeeId: {
      multiplicity: false,
      type: 'integer',
      nullable: false,
    },
    class: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    fullName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    office: {
      multiplicity: false,
      description: "The unique of the employee's assigned office. This is some more text.",
      type: 'integer',
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
      type: 'numericTimeseries',
      nullable: true,
    },
  },
  type: 'object',
};
