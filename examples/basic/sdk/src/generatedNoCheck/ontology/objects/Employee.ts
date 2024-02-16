import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';

export interface EmployeeDef extends ObjectTypeDefinition<'Employee'> {
  type: 'object';
  apiName: 'Employee';
  description: 'An employee';
  primaryKeyApiName: 'adUsername';
  primaryKeyType: 'string';
  links: { lead: ObjectTypeLinkDefinition<EmployeeDef, false>; peeps: ObjectTypeLinkDefinition<EmployeeDef, true> };
  properties: {
    adUsername: {
      multiplicity: false;
      type: 'string';
      nullable: false;
    };
    locationName: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    locationCity: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    firstFullTimeStartDate: {
      multiplicity: false;
      type: 'datetime';
      nullable: true;
    };
    businessTitle: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    employeeNumber: {
      multiplicity: false;
      type: 'double';
      nullable: true;
    };
    jobProfile: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    locationType: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    favPlace: {
      multiplicity: false;
      type: 'geopoint';
      nullable: true;
    };
  };
}

export const Employee: EmployeeDef = {
  type: 'object',
  apiName: 'Employee',
  description: 'An employee',
  primaryKeyApiName: 'adUsername' as const,
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
