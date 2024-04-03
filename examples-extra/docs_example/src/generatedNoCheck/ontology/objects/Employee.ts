import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee> {
  description: 'A full-time or part-time employee of our firm';
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
  };
  primaryKeyApiName: 'employeeId';
  primaryKeyType: 'integer';
  properties: {
    class: PropertyDef<'string', 'nullable', 'single'>;
    employeeId: PropertyDef<'integer', 'non-nullable', 'single'>;
    employeeStatus: PropertyDef<'numericTimeseries', 'nullable', 'single'>;
    fullName: PropertyDef<'string', 'nullable', 'single'>;
    office: PropertyDef<'integer', 'nullable', 'single'>;
    startDate: PropertyDef<'datetime', 'nullable', 'single'>;
  };
}

export const Employee: Employee = {
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
