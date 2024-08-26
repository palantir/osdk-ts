import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

export interface Task extends ObjectTypeDefinition<'com.example.dep.Task', Task>, VersionBound<$ExpectedClientVersion> {
  osdkMetadata: typeof $osdkMetadata;
  implements: [];
  interfaceMap: {};
  inverseInterfaceMap: {};
  inverseSpts: {};
  links: {};
  primaryKeyApiName: 'taskId';
  primaryKeyType: 'string';
  properties: {
    /**
     * (no ontology metadata)
     */
    body: PropertyDef<'string', 'nullable', 'single'>;
    /**
     * (no ontology metadata)
     */
    taskId: PropertyDef<'string', 'non-nullable', 'single'>;
  };
  spts: {};
}

export const Task: Task = {
  osdkMetadata: $osdkMetadata,
  apiName: 'com.example.dep.Task',
  implements: [],
  interfaceMap: {},
  inverseInterfaceMap: {},
  inverseSpts: {},
  links: {},
  primaryKeyApiName: 'taskId',
  primaryKeyType: 'string',
  properties: {
    taskId: {
      multiplicity: false,
      type: 'string',
      nullable: false,
    },
    body: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
  },
  spts: {},
  type: 'object',
};
