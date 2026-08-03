import type { AliasesFile } from '@osdk/aliases';

// An explicit annotation rather than `satisfies`: consumers build with
// --isolatedDeclarations, under which `satisfies` is not an explicit type
// and emits TS9010.
export const $packagedAliases: AliasesFile = {
  defaults: {
    actions: {
      'add-employee-attachment': {
        apiName: 'add-employee-attachment',
        id: {
          rid: 'ri.actions.main.action-type.f0db7733-e549-4ce5-8ff5-d2a6d0e4ba17',
        },
      },
      'add-media': {
        apiName: 'add-media',
        id: {
          rid: 'ri.actions.main.action-type.43aadae8-9dc7-4085-8cb9-de6634d31e1f',
        },
      },
      'add-struct-to-employee': {
        apiName: 'add-struct-to-employee',
        id: {
          rid: 'ri.actions.main.action-type.9441fc5f-6bf1-41d0-9934-0296d841f509',
        },
      },
      'assign-lead': {
        apiName: 'assign-lead',
        id: {
          rid: 'ri.actions.main.action-type.6fdfed9f-335c-4ec4-9144-1a769f96c389',
        },
      },
      'change-favorite-place': {
        apiName: 'change-favorite-place',
        id: {
          rid: 'ri.actions.main.action-type.a35f9aa1-a7a1-44bd-99bf-b988bb5bf750',
        },
      },
      'change-salary': {
        apiName: 'change-salary',
        id: {
          rid: 'ri.actions.main.action-type.006c30f9-c4f3-477e-bd4b-10dd16e2d7dd',
        },
      },
      'complete-todo': {
        apiName: 'complete-todo',
        id: {
          rid: 'ri.actions.main.action-type.b8ed5dbd-6d22-4b6d-8ab4-3b63c6007df9',
        },
      },
      'create-employee': {
        apiName: 'create-employee',
        id: {
          rid: 'ri.actions.main.action-type.685e6665-54a3-47c9-968e-544fa5e1107d',
        },
      },
      'create-employee-test': {
        apiName: 'create-employee-test',
        id: {
          rid: 'ri.actions.main.action-type.bf65fdab-3a54-4935-af97-448f101b1d27',
        },
      },
      'create-example-interface': {
        apiName: 'create-example-interface',
        id: {
          rid: 'ri.actions.main.action-type.7f51d3e6-f6c9-4f6b-ae24-5e9513961411',
        },
      },
      'create-example-objects': {
        apiName: 'create-example-objects',
        id: {
          rid: 'ri.actions.main.action-type.597dbf43-b002-4cfd-ba1f-277b6b6a833b',
        },
      },
      'create-lower-case': {
        apiName: 'create-lower-case',
        id: {
          rid: 'ri.actions.main.action-type.0ede6e39-734c-4c2e-910f-1cb6037d6785',
        },
      },
      'create-office': {
        apiName: 'create-office',
        id: {
          rid: 'ri.actions.main.action-type.1149ae48-9a4a-45f1-92ba-90e046f7b3c7',
        },
      },
      'create-person-interface': {
        apiName: 'create-person-interface',
        id: {
          rid: 'ri.actions.main.action-type.9e084d64-0bd4-498d-9041-5299db87e441',
        },
      },
      'create-todo': {
        apiName: 'create-todo',
        id: {
          rid: 'ri.actions.main.action-type.1913052f-0395-4643-9d37-62fc7f74289d',
        },
      },
      'create-todo3': {
        apiName: 'create-todo3',
        id: {
          rid: 'ri.actions.main.action-type.503d6ed5-c30a-41e5-a82f-b3a455d5f6e8',
        },
      },
      'create-worker': {
        apiName: 'create-worker',
        id: {
          rid: 'ri.actions.main.action-type.e4c1ab71-a36a-44b4-9334-392604a81438',
        },
      },
      'delete-example-objects': {
        apiName: 'delete-example-objects',
        id: {
          rid: 'ri.actions.main.action-type.e1698e4f-b789-478a-97bb-8da0865a2513',
        },
      },
      'delete-office': {
        apiName: 'delete-office',
        id: {
          rid: 'ri.actions.main.action-type.72b40fca-42b6-4e09-99d1-a3d701808ce7',
        },
      },
      'delete-todo': {
        apiName: 'delete-todo',
        id: {
          rid: 'ri.actions.main.action-type.83a9d1a9-4132-4837-ae84-c9973a3a2e1e',
        },
      },
      'delete-worker': {
        apiName: 'delete-worker',
        id: {
          rid: 'ri.actions.main.action-type.556053de-16d1-41bd-8dde-908899ad0af9',
        },
      },
      'edit-office': {
        apiName: 'edit-office',
        id: {
          rid: 'ri.actions.main.action-type.ae41d87b-933d-4983-ad91-fce7f4ff9f59',
        },
      },
      'example-ew03-create-osdk-todo-project': {
        apiName: 'example-ew03-create-osdk-todo-project',
        id: {
          rid: 'ri.actions.main.action-type.5750778f-3abd-4076-8ece-0b80c096f499',
        },
      },
      'example-ew03-create-osdk-todo-task': {
        apiName: 'example-ew03-create-osdk-todo-task',
        id: {
          rid: 'ri.actions.main.action-type.9bcd1484-de72-4c5d-8432-e2b876eacaf1',
        },
      },
      'example-ew03-delete-osdk-todo-project': {
        apiName: 'example-ew03-delete-osdk-todo-project',
        id: {
          rid: 'ri.actions.main.action-type.a66504e0-8b1a-4ba7-a7ad-bbe64d3f3662',
        },
      },
      'example-ew03-delete-osdk-todo-task': {
        apiName: 'example-ew03-delete-osdk-todo-task',
        id: {
          rid: 'ri.actions.main.action-type.84cd3ff8-870b-4c74-886b-e2fabdc5bcec',
        },
      },
      'map-between-media-sets': {
        apiName: 'map-between-media-sets',
        id: {
          rid: 'ri.actions.main.action-type.d023c57d-fd92-440b-8906-721f660630ee',
        },
      },
      'modify-employee': {
        apiName: 'modify-employee',
        id: {
          rid: 'ri.actions.main.action-type.1e59bc2b-4f3a-47d1-82d2-7d0516c7c4ee',
        },
      },
      'modify-example-interface': {
        apiName: 'modify-example-interface',
        id: {
          rid: 'ri.actions.main.action-type.265950e6-0651-41d8-95e9-040c7d30130b',
        },
      },
      'modify-person': {
        apiName: 'modify-person',
        id: {
          rid: 'ri.actions.main.action-type.76528413-40a3-4718-98d4-aba385a815a2',
        },
      },
      'modify-person-fafe32': {
        apiName: 'modify-person-fafe32',
        id: {
          rid: 'ri.actions.main.action-type.ef6ee138-e07d-4721-8a22-b8cd2e507997',
        },
      },
      'modify-team': {
        apiName: 'modify-team',
        id: {
          rid: 'ri.actions.main.action-type.3558f5f6-74d4-4d9d-8925-c002b13258f2',
        },
      },
      'modify-todo-like': {
        apiName: 'modify-todo-like',
        id: {
          rid: 'ri.actions.main.action-type.353f4e63-0d68-4d9c-9afd-66150ec24e04',
        },
      },
      'modify-worker': {
        apiName: 'modify-worker',
        id: {
          rid: 'ri.actions.main.action-type.0b1e5427-b2c5-46f6-8d1f-980a69ca6dae',
        },
      },
    },
    custom: {},
    datasets: {},
    egressConnections: {},
    interfaces: {
      ExampleInterface: {
        apiName: 'ExampleInterface',
        id: {
          rid: 'ri.ontology.main.interface.05598367-c4f3-455b-b050-12f6c90041db',
        },
        links: {},
        properties: {
          id: {
            apiName: 'id',
            id: {
              rid: 'ri.ontology.main.interface-property.bce1dd5c-edae-4f7e-90f7-51077f886c4d',
            },
          },
          type: {
            apiName: 'type',
            id: {
              rid: 'ri.ontology.main.interface-property.971ef747-7c06-4750-91d8-10e59eb4b360',
            },
          },
        },
      },
      Person: {
        apiName: 'Person',
        id: {
          rid: 'ri.ontology.main.interface.353734ce-ae2d-4e49-8070-163b2126af5a',
        },
        links: {
          lead: {
            apiName: 'lead',
          },
          office: {
            apiName: 'office',
          },
          peeps: {
            apiName: 'peeps',
          },
        },
        properties: {
          email: {
            apiName: 'email',
            id: {
              rid: 'ri.ontology.main.interface-property.2645943a-6870-4fe3-ac30-a27ff1c77b69',
            },
          },
          employeeNumber: {
            apiName: 'employeeNumber',
            id: {
              rid: 'ri.ontology.main.interface-property.631f0dd2-4e78-4c2a-8487-c767a448d227',
            },
          },
        },
      },
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
              rid: 'ri.ontology.main.interface-property.99e85c50-c360-473e-951b-2bb919418aaf',
            },
          },
          name: {
            apiName: 'name',
            id: {
              rid: 'ri.ontology.main.interface-property.f709f271-4788-4120-a8fb-b9e4166967c5',
            },
          },
        },
      },
      Worker: {
        apiName: 'Worker',
        id: {
          rid: 'ri.ontology.main.interface.777ffb22-9b3c-4fb6-908f-56d23c3a5198',
        },
        links: {},
        properties: {
          email: {
            apiName: 'email',
            id: {
              rid: 'ri.ontology.main.interface-property.2645943a-6870-4fe3-ac30-a27ff1c77b69',
            },
          },
          employeeNumber: {
            apiName: 'employeeNumber',
            id: {
              rid: 'ri.ontology.main.interface-property.631f0dd2-4e78-4c2a-8487-c767a448d227',
            },
          },
          name: {
            apiName: 'name',
            id: {
              rid: 'ri.ontology.main.interface-property.f709f271-4788-4120-a8fb-b9e4166967c5',
            },
          },
        },
      },
    },
    mediasets: {},
    models: {},
    objects: {
      Employee: {
        apiName: 'Employee',
        id: {
          rid: 'ri.ontology.main.object-type.ade16a88-ecc4-4f96-9751-ca1799247d64',
        },
        links: {
          lead: {
            apiName: 'lead',
          },
          peeps: {
            apiName: 'peeps',
          },
          primaryOffice: {
            apiName: 'primaryOffice',
          },
        },
        primaryKeyApiName: 'employeeNumber',
        properties: {
          adUsername: {
            apiName: 'adUsername',
          },
          businessArea: {
            apiName: 'businessArea',
          },
          businessTitle: {
            apiName: 'businessTitle',
          },
          department: {
            apiName: 'department',
          },
          emailPrimaryWork: {
            apiName: 'emailPrimaryWork',
          },
          employeeDocuments: {
            apiName: 'employeeDocuments',
          },
          employeeFile: {
            apiName: 'employeeFile',
          },
          employeeMedia: {
            apiName: 'employeeMedia',
          },
          employeeNumber: {
            apiName: 'employeeNumber',
          },
          favPlace: {
            apiName: 'favPlace',
          },
          favoritePlaceArea: {
            apiName: 'favoritePlaceArea',
          },
          firstFullTimeStartDate: {
            apiName: 'firstFullTimeStartDate',
          },
          firstInternStartDate: {
            apiName: 'firstInternStartDate',
          },
          fullName: {
            apiName: 'fullName',
          },
          jobProfile: {
            apiName: 'jobProfile',
          },
          jobTitle: {
            apiName: 'jobTitle',
          },
          latestVenture: {
            apiName: 'latestVenture',
          },
          leadEmployeeNumber: {
            apiName: 'leadEmployeeNumber',
          },
          locationCity: {
            apiName: 'locationCity',
          },
          locationCountry: {
            apiName: 'locationCountry',
          },
          locationName: {
            apiName: 'locationName',
          },
          locationRegion: {
            apiName: 'locationRegion',
          },
          locationType: {
            apiName: 'locationType',
          },
          mentorEmployeeNumber: {
            apiName: 'mentorEmployeeNumber',
          },
          newProperty1: {
            apiName: 'newProperty1',
          },
          preferredNameFirst: {
            apiName: 'preferredNameFirst',
          },
          preferredNameLast: {
            apiName: 'preferredNameLast',
          },
          primaryOfficeId: {
            apiName: 'primaryOfficeId',
          },
          salary: {
            apiName: 'salary',
          },
          stockOptions: {
            apiName: 'stockOptions',
          },
          team: {
            apiName: 'team',
          },
          workerType: {
            apiName: 'workerType',
          },
        },
      },
      ExampleEw03osdkTodoProject: {
        apiName: 'ExampleEw03osdkTodoProject',
        id: {
          rid: 'ri.ontology.main.object-type.fd5bdc1a-eef1-47ab-8b14-c8155d2890a8',
        },
        links: {
          exampleEw03OsdkTodoTasks: {
            apiName: 'exampleEw03OsdkTodoTasks',
          },
        },
        primaryKeyApiName: 'pk',
        properties: {
          budget: {
            apiName: 'budget',
          },
          description: {
            apiName: 'description',
          },
          name: {
            apiName: 'name',
          },
          pk: {
            apiName: 'pk',
          },
        },
      },
      ExampleEw03osdkTodoTask: {
        apiName: 'ExampleEw03osdkTodoTask',
        id: {
          rid: 'ri.ontology.main.object-type.b1e19a30-7f1b-43d9-889c-496d281f5510',
        },
        links: {
          exampleEw03OsdkTodoProject: {
            apiName: 'exampleEw03OsdkTodoProject',
          },
        },
        primaryKeyApiName: 'pk',
        properties: {
          assignedTo: {
            apiName: 'assignedTo',
          },
          createdAt: {
            apiName: 'createdAt',
          },
          createdBy: {
            apiName: 'createdBy',
          },
          description: {
            apiName: 'description',
          },
          dueDate: {
            apiName: 'dueDate',
          },
          pk: {
            apiName: 'pk',
          },
          projectId: {
            apiName: 'projectId',
          },
          startDate: {
            apiName: 'startDate',
          },
          status: {
            apiName: 'status',
          },
          title: {
            apiName: 'title',
          },
        },
      },
      ExampleObjects: {
        apiName: 'ExampleObjects',
        id: {
          rid: 'ri.ontology.main.object-type.9bd216ec-22a2-48dc-8c61-63db7c4e1fc8',
        },
        links: {},
        primaryKeyApiName: 'primaryKey_',
        properties: {
          primaryKey_: {
            apiName: 'primaryKey_',
          },
          type: {
            apiName: 'type',
          },
        },
      },
      NihalbAggTest: {
        apiName: 'NihalbAggTest',
        id: {
          rid: 'ri.ontology.main.object-type.90e16605-0483-4694-ae58-968abd46bd8d',
        },
        links: {
          nihalbAggTestsDirectionA: {
            apiName: 'nihalbAggTestsDirectionA',
          },
          nihalbAggTestsDirectionB: {
            apiName: 'nihalbAggTestsDirectionB',
          },
        },
        primaryKeyApiName: 'primaryKey_',
        properties: {
          boolean: {
            apiName: 'boolean',
          },
          date: {
            apiName: 'date',
          },
          primaryKey_: {
            apiName: 'primaryKey_',
          },
        },
      },
      Office: {
        apiName: 'Office',
        id: {
          rid: 'ri.ontology.main.object-type.bbca9c02-5c6a-4d3a-8bf1-e4db0177ab5f',
        },
        links: {
          occupants: {
            apiName: 'occupants',
          },
        },
        primaryKeyApiName: 'primaryKey_',
        properties: {
          location: {
            apiName: 'location',
          },
          name: {
            apiName: 'name',
          },
          primaryKey_: {
            apiName: 'primaryKey_',
          },
        },
      },
      ThreadsEmbeddedPdfChunk: {
        apiName: 'ThreadsEmbeddedPdfChunk',
        id: {
          rid: 'ri.ontology.main.object-type.17be51b8-9929-43a9-83c7-f105c44eb168',
        },
        links: {},
        primaryKeyApiName: 'chunkId',
        properties: {
          chunk: {
            apiName: 'chunk',
          },
          chunkId: {
            apiName: 'chunkId',
          },
          chunkPosition: {
            apiName: 'chunkPosition',
          },
          embedding: {
            apiName: 'embedding',
          },
          mediaItemRid: {
            apiName: 'mediaItemRid',
          },
          mediaReference: {
            apiName: 'mediaReference',
          },
          page: {
            apiName: 'page',
          },
          path: {
            apiName: 'path',
          },
          searchQuery: {
            apiName: 'searchQuery',
          },
          timestamp: {
            apiName: 'timestamp',
          },
        },
      },
      ThreadsEmbeddedPdfChunk_1: {
        apiName: 'ThreadsEmbeddedPdfChunk_1',
        id: {
          rid: 'ri.ontology.main.object-type.5dc7b30d-c39e-4d99-9814-8d7539c51a74',
        },
        links: {},
        primaryKeyApiName: 'chunkId',
        properties: {
          chunk: {
            apiName: 'chunk',
          },
          chunkId: {
            apiName: 'chunkId',
          },
          chunkPosition: {
            apiName: 'chunkPosition',
          },
          embedding: {
            apiName: 'embedding',
          },
          mediaItemRid: {
            apiName: 'mediaItemRid',
          },
          mediaReference: {
            apiName: 'mediaReference',
          },
          page: {
            apiName: 'page',
          },
          path: {
            apiName: 'path',
          },
          searchQuery: {
            apiName: 'searchQuery',
          },
          timestamp: {
            apiName: 'timestamp',
          },
        },
      },
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
      WontDo: {
        apiName: 'WontDo',
        id: {
          rid: 'ri.ontology.main.object-type.0f6f78a8-c31c-43d3-8de9-b7df7a98d232',
        },
        links: {},
        primaryKeyApiName: 'wontDoName',
        properties: {
          isComplete: {
            apiName: 'isComplete',
          },
          wontDoName: {
            apiName: 'wontDoName',
          },
        },
      },
      lowerCaseApiDataset: {
        apiName: 'lowerCaseApiDataset',
        id: {
          rid: 'ri.ontology.main.object-type.11923958-97ff-42a5-80e7-16f34e620d1c',
        },
        links: {},
        primaryKeyApiName: 'primaryKey_',
        properties: {
          primaryKey_: {
            apiName: 'primaryKey_',
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
    queries: {
      fooEa: {
        apiName: 'fooEa',
        id: {
          rid: 'ri.function-registry.main.function.04836386-b392-4b70-a302-38415dbf9f60',
          version: '0.0.3',
        },
        version: '0.0.3',
      },
      functionCallsLoadObjectSetWithSelect: {
        apiName: 'functionCallsLoadObjectSetWithSelect',
        id: {
          rid: 'ri.function-registry.main.function.47a14477-a4da-45b0-a0f2-b02e6c28f6ed',
          version: '0.2.0',
        },
        version: '0.2.0',
      },
      getEmployeeDaysSinceStart: {
        apiName: 'getEmployeeDaysSinceStart',
        id: {
          rid: 'ri.function-registry.main.function.5d6a29bd-20ea-46ad-9e8a-e6e7f28b7c02',
          version: '0.1.0',
        },
        version: '0.1.0',
      },
    },
    streams: {},
  },
  version: 1,
};
