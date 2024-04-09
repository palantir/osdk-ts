import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
import { $osdkMetadata } from '../../OntologyMetadata.js';

import type { Employee } from './Employee.js';

export interface Venture extends ObjectTypeDefinition<'Venture', Venture>, VersionBound<'0.15.0'> {
  osdkMetadata: typeof $osdkMetadata;
  description: 'A venture';
  links: {
    employees: ObjectTypeLinkDefinition<Employee, true>;
  };
  primaryKeyApiName: 'ventureId';
  primaryKeyType: 'string';
  properties: {
    ventureId: PropertyDef<'string', 'non-nullable', 'single'>;
    ventureName: PropertyDef<'string', 'nullable', 'single'>;
    ventureStart: PropertyDef<'datetime', 'nullable', 'single'>;
  };
}

export const Venture: Venture = {
  osdkMetadata: $osdkMetadata,
  apiName: 'Venture',
  description: 'A venture',
  links: {
    employees: {
      multiplicity: true,
      targetType: 'Employee',
    },
  },
  primaryKeyApiName: 'ventureId',
  primaryKeyType: 'string',
  properties: {
    ventureId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    ventureName: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    ventureStart: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
