import { OntologyMetadata as OM } from '@osdk/api';

export type $ExpectedClientVersion = '0.21.0';
export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/dev osdk-cli/dev' };

export interface OntologyMetadata extends OM<$ExpectedClientVersion> {}

export const OntologyMetadata: OntologyMetadata = {
  expectsClientVersion: '0.21.0',
  ontologyRid: 'ri.ontology.main.ontology.dep',
  ontologyApiName: 'dep',
  userAgent: 'typescript-sdk/dev osdk-cli/dev',
};
