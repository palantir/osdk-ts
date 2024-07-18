import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Venture } from './Venture.js';

export interface Employee extends ObjectTypeDefinition<'Employee', Employee>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'An employee';
  implements: ['FooInterface'];
  interfaceMap: {
    FooInterface: {
      name: 'firstName';
      description: 'email';
    };
  };
  inverseInterfaceMap: {
    FooInterface: {
      firstName: 'name';
      email: 'description';
    };
  };
  inverseSpts: {
    firstName: 'name';
    email: 'description';
  };
  links: {
    lead: ObjectTypeLinkDefinition<Employee, false>;
    peeps: ObjectTypeLinkDefinition<Employee, true>;
    ventures: ObjectTypeLinkDefinition<Venture, true>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    /**
     * (no ontology metadata)
     */
    adUsername: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    businessTitle: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    email: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    employeeNumber: PropertyDef<'double', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    favPlace: PropertyDef<'geopoint', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    firstFullTimeStartDate: PropertyDef<'datetime', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    firstName: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    id: PropertyDef<'string', 'non-nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    jobProfile: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    locationCity: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    locationName: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    locationType: PropertyDef<'string', 'nullable', 'single'>;
  };
  spts: {
    name: 'firstName';
    description: 'email';
  };
}

export const Employee: Employee = {
  osdkMetadata: $osdkMetadata,
  apiName: 'Employee',
  description: 'An employee',
  implements: ['FooInterface'],
  interfaceMap: {
    FooInterface: {
      name: 'firstName',
      description: 'email',
    },
  },
  inverseInterfaceMap: {
    FooInterface: {
      firstName: 'name',
      email: 'description',
    },
  },
  inverseSpts: {
    firstName: 'name',
    email: 'description',
  },
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
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
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
    name: 'firstName',
    description: 'email',
  },
  type: 'object',
};
