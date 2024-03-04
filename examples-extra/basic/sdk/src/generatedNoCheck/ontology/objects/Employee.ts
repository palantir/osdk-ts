import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef } from '@osdk/api';

import type { Venture } from './Venture.js';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee> {
  description: 'An employee';
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
    ventures: ObjectTypeLinkDefinition<Venture, true>;
  };
  properties: {
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    firstName: PropertyDef<'string', 'nullable', 'single'>;
    email: PropertyDef<'string', 'nullable', 'single'>;
    adUsername: PropertyDef<'string', 'nullable', 'single'>;
    locationName: PropertyDef<'string', 'nullable', 'single'>;
    locationCity: PropertyDef<'string', 'nullable', 'single'>;
    firstFullTimeStartDate: PropertyDef<'datetime', 'nullable', 'single'>;
    businessTitle: PropertyDef<'string', 'nullable', 'single'>;
    employeeNumber: PropertyDef<'double', 'nullable', 'single'>;
    jobProfile: PropertyDef<'string', 'nullable', 'single'>;
    locationType: PropertyDef<'string', 'nullable', 'single'>;
    favPlace: PropertyDef<'geopoint', 'nullable', 'single'>;
  };
  spts: {
    firstName: 'name';
    email: 'description';
  };
  inverseSpts: {
    name: 'firstName';
    description: 'email';
  };
  implements: ['FooInterface'];
}

export const Employee: Employee = {
  type: 'object',
  apiName: 'Employee',
  description: 'An employee',
  primaryKeyApiName: 'id',
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
    ventures: {
      multiplicity: true,
      targetType: 'Venture',
    },
  },
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    firstName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    email: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    adUsername: {
      multiplicity: false,
      type: 'string',
      nullable: true,
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
  spts: {
    firstName: 'name',
    email: 'description',
  },
  inverseSpts: {
    name: 'firstName',
    description: 'email',
  },
  implements: ['FooInterface'],
};
