import { registerPackagedAliases, $resolveOntologyBranch, $resolveOntologyRid } from '@osdk/aliases';
import { $packagedAliases } from './aliases.js';

registerPackagedAliases('@osdk/e2e.generated.api-namespace.local', $packagedAliases);

export type $ExpectedClientVersion = '2.52.0';
export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/dev osdk-cli/dev' };

export const $ontologyRid: string = $resolveOntologyRid('ri.ontology.main.ontology.dep');
/**
 * The RID of the Foundry branch this SDK was generated against, or
 * `undefined` if it was generated against the main branch.
 */
export const $branch: string | undefined = $resolveOntologyBranch('ri.ontology.main.ontology.dep');
