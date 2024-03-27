import { OntologyMetadata as OM } from '@osdk/api';

export interface OntologyMetadata extends OM<'0.14.0'> {
  expectsClientVersion: '0.14.0';
}

export const OntologyMetadata: OntologyMetadata = {
  expectsClientVersion: '0.14.0',
  ontologyRid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
  ontologyApiName: 'default',
  userAgent: 'typescript-sdk/dev osdk-cli/dev',
};
