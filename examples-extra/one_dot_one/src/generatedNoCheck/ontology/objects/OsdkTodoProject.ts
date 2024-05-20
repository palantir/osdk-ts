import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';
import type { Attachment, MultiLink, OntologyObject } from '@osdk/legacy-client';
import type { OsdkTodoTask } from './OsdkTodoTask.js';

/**
 * Its a todo project.
 */
export interface OsdkTodoProject extends OntologyObject {
  /** @deprecated please migrate to $apiName instead */
  readonly __apiName: 'OsdkTodoProject' & {
    /** @deprecated please migrate to pivotTo(osdkTodoTasks) instead */ searchAroundOsdkTodoTasks?: never;
  };
  /** @deprecated please migrate to $primaryKey instead */
  readonly __primaryKey: string;
  readonly $apiName: 'OsdkTodoProject';
  readonly $primaryKey: string;
  readonly budget: number | undefined;
  readonly description: string | undefined;
  readonly document: Attachment | undefined;
  readonly id: string | undefined;
  /**
   * The name of the project
   */
  readonly name: string | undefined;
  readonly osdkTodoTasks: MultiLink<OsdkTodoTask>;
}

import type { OsdkTodoTaskDef } from './OsdkTodoTask.js';

export interface OsdkTodoProjectDef extends ObjectTypeDefinition<'OsdkTodoProject', OsdkTodoProject> {
  apiName: 'OsdkTodoProject';
  description: 'Its a todo project.';
  links: {
    osdkTodoTasks: ObjectTypeLinkDefinition<OsdkTodoTaskDef, true>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    id: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    name: {
      multiplicity: false;
      description: 'The name of the project';
      type: 'string';
      nullable: true;
    };
    budget: {
      multiplicity: false;
      type: 'integer';
      nullable: true;
    };
    description: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    document: {
      multiplicity: false;
      type: 'attachment';
      nullable: true;
    };
  };
  type: 'object';
}

export const OsdkTodoProject: OsdkTodoProjectDef = {
  apiName: 'OsdkTodoProject',
  description: 'Its a todo project.',
  links: {
    osdkTodoTasks: {
      multiplicity: true,
      targetType: 'OsdkTodoTask',
    },
  },
  primaryKeyApiName: 'id',
  primaryKeyType: 'string',
  properties: {
    id: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    name: {
      multiplicity: false,
      description: 'The name of the project',
      type: 'string',
      nullable: true,
    },
    budget: {
      multiplicity: false,
      type: 'integer',
      nullable: true,
    },
    description: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    document: {
      multiplicity: false,
      type: 'attachment',
      nullable: true,
    },
  },
  type: 'object',
};
