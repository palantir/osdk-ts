import type { AliasesFile } from '@osdk/aliases';

// An explicit annotation rather than `satisfies`: consumers build with
// --isolatedDeclarations, under which `satisfies` is not an explicit type
// and emits TS9010.
export const $packagedAliases: AliasesFile = {
  defaults: {
    actions: {},
    custom: {},
    datasets: {},
    egressConnections: {},
    interfaces: {
      'com.example.dep.SomeInterface': {
        apiName: 'com.example.dep.SomeInterface',
        id: {
          rid: 'idk2',
        },
        links: {},
        properties: {
          'com.example.dep.spt': {
            apiName: 'com.example.dep.spt',
            id: {
              rid: 'idk',
            },
          },
        },
      },
    },
    mediasets: {},
    models: {},
    objects: {
      'com.example.dep.Task': {
        apiName: 'com.example.dep.Task',
        id: {
          rid: 'ridForTask',
        },
        links: {},
        primaryKeyApiName: 'taskId',
        properties: {
          body: {
            apiName: 'body',
          },
          taskId: {
            apiName: 'taskId',
          },
        },
      },
    },
    ontologies: {
      'ri.ontology.main.ontology.dep': {
        branch: null,
        id: {
          rid: 'ri.ontology.main.ontology.dep',
        },
      },
    },
    queries: {},
    streams: {},
  },
  version: 1,
};
