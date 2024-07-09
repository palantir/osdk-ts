import { OntologyMetadata as OM } from '@osdk/api';

export type $ExpectedClientVersion = '0.16.1';
export const $osdkMetadata = { extraUserAgent: 'typescript-osdk/dev osdk-cli/dev' };

export interface OntologyMetadata extends OM<$ExpectedClientVersion> {}

export const OntologyMetadata: OntologyMetadata = {
  expectsClientVersion: '0.16.1',
  ontologyRid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
  ontologyApiName: 'default',
  userAgent: 'typescript-osdk/dev osdk-cli/dev',
};
