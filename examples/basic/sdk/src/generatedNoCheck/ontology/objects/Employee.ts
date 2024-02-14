import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee> {
  description: 'An employee';
  primaryKeyType: 'string';
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
  };
  properties: {
    adUsername: PropertyDef<'string', 'non-nullable', 'single'>;
    locationName: PropertyDef<'string', 'nullable', 'single'>;
    locationCity: PropertyDef<'string', 'nullable', 'single'>;
    firstFullTimeStartDate: PropertyDef<'datetime', 'nullable', 'single'>;
    businessTitle: PropertyDef<'string', 'nullable', 'single'>;
    employeeNumber: PropertyDef<'double', 'nullable', 'single'>;
    jobProfile: PropertyDef<'string', 'nullable', 'single'>;
    locationType: PropertyDef<'string', 'nullable', 'single'>;
    favPlace: PropertyDef<'geopoint', 'nullable', 'single'>;
  };
}

export const Employee: Employee = {
  type: 'object',
  apiName: 'Employee',
  description: 'An employee',
  primaryKeyType: 'string',
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
  properties: {
    adUsername: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    locationName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationCity: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    firstFullTimeStartDate: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    businessTitle: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    employeeNumber: {
      multiplicity: false,
      type: 'double',
      nullable: true,
    },
    jobProfile: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    locationType: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    favPlace: {
      multiplicity: false,
      type: 'geopoint',
      nullable: true,
    },
  },
};
