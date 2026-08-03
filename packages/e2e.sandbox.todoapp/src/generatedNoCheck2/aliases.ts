import type { AliasesFile } from '@osdk/aliases';

// An explicit annotation rather than `satisfies`: consumers build with
// --isolatedDeclarations, under which `satisfies` is not an explicit type
// and emits TS9010.
export const $packagedAliases: AliasesFile = {
  defaults: {
    actions: {
      'complete-todo': {
        apiName: 'complete-todo',
        id: {
          rid: 'ri.actions.main.action-type.b8ed5dbd-6d22-4b6d-8ab4-3b63c6007df9',
        },
      },
      'create-todo': {
        apiName: 'create-todo',
        id: {
          rid: 'ri.actions.main.action-type.1913052f-0395-4643-9d37-62fc7f74289d',
        },
      },
    },
    custom: {},
    datasets: {},
    egressConnections: {},
    interfaces: {
      TodoLike: {
        apiName: 'TodoLike',
        id: {
          rid: 'ri.ontology.main.interface.fe6b2917-915d-4952-b89d-1231dad224e0',
        },
        links: {},
        properties: {
          isComplete: {
            apiName: 'isComplete',
            id: {
              rid: 'ri.ontology.main.shared-property.99e85c50-c360-473e-951b-2bb919418aaf',
            },
          },
          name: {
            apiName: 'name',
            id: {
              rid: 'ri.ontology.main.shared-property.f709f271-4788-4120-a8fb-b9e4166967c5',
            },
          },
        },
      },
    },
    mediasets: {},
    models: {},
    objects: {
      Todo: {
        apiName: 'Todo',
        id: {
          rid: 'ri.ontology.main.object-type.a3fcfef9-ec11-4f2d-8a4c-dc010de837bf',
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
          location: {
            apiName: 'location',
          },
          title: {
            apiName: 'title',
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
