import type { AliasesFile } from '@osdk/aliases';

// An explicit annotation rather than `satisfies`: consumers build with
// --isolatedDeclarations, under which `satisfies` is not an explicit type
// and emits TS9010.
export const $packagedAliases: AliasesFile = {
  defaults: {
    actions: {
      completeTodo: {
        apiName: 'completeTodo',
        id: {
          rid: '',
        },
      },
      'create-office': {
        apiName: 'create-office',
        id: {
          rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f1',
        },
      },
      'create-office-and-employee': {
        apiName: 'create-office-and-employee',
        id: {
          rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2',
        },
      },
      createTodo: {
        apiName: 'createTodo',
        id: {
          rid: 'notNeeded?',
        },
      },
      'move-office': {
        apiName: 'move-office',
        id: {
          rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2',
        },
      },
      'promote-employee': {
        apiName: 'promote-employee',
        id: {
          rid: 'ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2167',
        },
      },
      'promote-employee-object': {
        apiName: 'promote-employee-object',
        id: {
          rid: 'ri.ontology.main.action-type.7ed72754-7491-428a-bb18-4d7296eb2168',
        },
      },
    },
    custom: {},
    datasets: {},
    egressConnections: {},
    interfaces: {},
    mediasets: {},
    models: {},
    objects: {
      Employee: {
        apiName: 'Employee',
        id: {
          rid: 'ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0aa912b9efb44',
        },
        links: {
          lead: {
            apiName: 'lead',
          },
          peeps: {
            apiName: 'peeps',
          },
        },
        primaryKeyApiName: 'employeeId',
        properties: {
          class: {
            apiName: 'class',
          },
          employeeId: {
            apiName: 'employeeId',
          },
          employeeStatus: {
            apiName: 'employeeStatus',
          },
          fullName: {
            apiName: 'fullName',
          },
          office: {
            apiName: 'office',
          },
          startDate: {
            apiName: 'startDate',
          },
        },
      },
      Office: {
        apiName: 'Office',
        id: {
          rid: 'ri.ontology.main.object-type.404ac022-89eb-4591-8b7e-1a912b9efb45',
        },
        links: {},
        primaryKeyApiName: 'officeId',
        properties: {
          entrance: {
            apiName: 'entrance',
          },
          meetingRoomCapacities: {
            apiName: 'meetingRoomCapacities',
          },
          meetingRooms: {
            apiName: 'meetingRooms',
          },
          name: {
            apiName: 'name',
          },
          occupiedArea: {
            apiName: 'occupiedArea',
          },
          officeId: {
            apiName: 'officeId',
          },
        },
      },
      Todo: {
        apiName: 'Todo',
        id: {
          rid: 'ridForTodo',
        },
        links: {},
        primaryKeyApiName: 'id',
        properties: {
          id: {
            apiName: 'id',
          },
          isComplete: {
            apiName: 'isComplete',
          },
          title: {
            apiName: 'title',
          },
        },
      },
      equipment: {
        apiName: 'equipment',
        id: {
          rid: 'ri.ontology.main.object-type.808ac022-89eb-4591-8b7e-1a912b9efb45',
        },
        links: {},
        primaryKeyApiName: 'equipmentId',
        properties: {
          equipmentId: {
            apiName: 'equipmentId',
          },
          type: {
            apiName: 'type',
          },
        },
      },
    },
    ontologies: {
      'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e': {
        branch: null,
        id: {
          rid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
        },
      },
    },
    queries: {},
    streams: {},
  },
  version: 1,
};
