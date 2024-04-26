import { OntologyMetadata as OM } from '@osdk/api';

export type $ExpectedClientVersion = '0.16.0';
export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/dev osdk-cli/dev' };

export interface OntologyMetadata extends OM<$ExpectedClientVersion> {}

export const OntologyMetadata: OntologyMetadata = {
  expectsClientVersion: '0.16.0',
  ontologyRid: 'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
  ontologyApiName: 'ontology-d097f725-ab77-46cf-83c0-e3cb9186bff1',
  userAgent: 'typescript-sdk/dev osdk-cli/dev',
};
