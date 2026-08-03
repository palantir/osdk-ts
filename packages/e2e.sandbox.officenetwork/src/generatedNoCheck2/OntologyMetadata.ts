import { registerPackagedAliases, $resolveOntologyBranch, $resolveOntologyRid } from '@osdk/aliases';
import { $packagedAliases } from './aliases.js';

registerPackagedAliases('@osdk/e2e.sandbox.officenetwork', $packagedAliases);

export type $ExpectedClientVersion = '2.52.0';
export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/dev osdk-cli/dev' };

export const $ontologyRid: string = $resolveOntologyRid(
  'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
);
/**
 * The RID of the Foundry branch this SDK was generated against, or
 * `undefined` if it was generated against the main branch.
 */
export const $branch: string | undefined = $resolveOntologyBranch(
  'ri.ontology.main.ontology.a35bb7f9-2c57-4199-a1cd-af461d88bd6e',
);
