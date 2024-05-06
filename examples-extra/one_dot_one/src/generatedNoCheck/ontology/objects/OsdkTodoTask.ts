import type { ObjectTypeDefinition, ObjectTypeLinkDefinition } from '@osdk/api';
import type { LocalDate, OntologyObject, SingleLink } from '@osdk/legacy-client';
import type { OsdkTodoProject } from './OsdkTodoProject';

/**
 * Its a todo task.
 */
export interface OsdkTodoTask extends OntologyObject {
  /** @deprecated please migrate to $apiName instead */
  readonly __apiName: 'OsdkTodoTask' & {
    /** @deprecated please migrate to pivotTo(osdkTodoProject) instead */ searchAroundOsdkTodoProject?: never;
  };
  /** @deprecated please migrate to $primaryKey instead */
  readonly __primaryKey: string;
  readonly $apiName: 'OsdkTodoTask';
  readonly $primaryKey: string;
  readonly assignedTo: string | undefined;
  readonly createdAt: LocalDate | undefined;
  readonly createdBy: string | undefined;
  readonly description: string | undefined;
  readonly dueDate: LocalDate | undefined;
  readonly id: string | undefined;
  readonly projectId: string | undefined;
  readonly startDate: LocalDate | undefined;
  readonly status: string | undefined;
  /**
   * The title of the todo
   */
  readonly title: string | undefined;
  readonly osdkTodoProject: SingleLink<OsdkTodoProject>;
}

import type { OsdkTodoProjectDef } from './OsdkTodoProject';

export interface OsdkTodoTaskDef extends ObjectTypeDefinition<'OsdkTodoTask', OsdkTodoTask> {
  apiName: 'OsdkTodoTask';
  description: 'Its a todo task.';
  links: {
    osdkTodoProject: ObjectTypeLinkDefinition<OsdkTodoProjectDef, false>;
  };
  primaryKeyApiName: 'id';
  primaryKeyType: 'string';
  properties: {
    id: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    title: {
      multiplicity: false;
      description: 'The title of the todo';
      type: 'string';
      nullable: true;
    };
    status: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    startDate: {
      multiplicity: false;
      type: 'datetime';
      nullable: true;
    };
    dueDate: {
      multiplicity: false;
      type: 'datetime';
      nullable: true;
    };
    projectId: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    description: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    assignedTo: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    createdBy: {
      multiplicity: false;
      type: 'string';
      nullable: true;
    };
    createdAt: {
      multiplicity: false;
      type: 'datetime';
      nullable: true;
    };
  };
  type: 'object';
}

export const OsdkTodoTask: OsdkTodoTaskDef = {
  apiName: 'OsdkTodoTask',
  description: 'Its a todo task.',
  links: {
    osdkTodoProject: {
      multiplicity: false,
      targetType: 'OsdkTodoProject',
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
    title: {
      multiplicity: false,
      description: 'The title of the todo',
      type: 'string',
      nullable: true,
    },
    status: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    startDate: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    dueDate: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
    projectId: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    description: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    assignedTo: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    createdBy: {
      multiplicity: false,
      type: 'string',
      nullable: true,
    },
    createdAt: {
      multiplicity: false,
      type: 'datetime',
      nullable: true,
    },
  },
  type: 'object',
};
