import type { OntologyDefinition } from '@osdk/api';
import { OntologyMetadata } from './OntologyMetadata.js';
import * as Actions from './ontology/actions/index.js';
import * as Objects from './ontology/objects.js';

const _Ontology = {
  metadata: OntologyMetadata,
  objects: {
    Employee: Objects.Employee,
    Office: Objects.Office,
    objectTypeWithAllPropertyTypes: Objects.objectTypeWithAllPropertyTypes,
    ObjectWithTimestampPrimaryKey: Objects.ObjectWithTimestampPrimaryKey,
    equipment: Objects.equipment,
  },
  actions: {
    promoteEmployee: Actions.promoteEmployee,
    promoteEmployeeObject: Actions.promoteEmployeeObject,
    createOffice: Actions.createOffice,
    createOfficeAndEmployee: Actions.createOfficeAndEmployee,
    moveOffice: Actions.moveOffice,
    actionTakesObjectSet: Actions.actionTakesObjectSet,
  },
  queries: {
    // TODO
  },
  interfaces: {},
} satisfies OntologyDefinition<
  'Employee' | 'Office' | 'objectTypeWithAllPropertyTypes' | 'ObjectWithTimestampPrimaryKey' | 'equipment'
>;

type _Ontology = typeof _Ontology;
export interface Ontology extends _Ontology {}
export const Ontology = _Ontology as Ontology;
