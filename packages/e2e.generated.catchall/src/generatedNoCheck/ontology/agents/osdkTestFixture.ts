import type { VersionBound } from '@osdk/client';
import type { AgentDefinition } from '@osdk/client/experimental';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

/** @beta */
export interface osdkTestFixture extends AgentDefinition, VersionBound<$ExpectedClientVersion> {
  type: 'agent';
  apiName: 'osdkTestFixture';
  version: '0.5.0';
  osdkMetadata: typeof $osdkMetadata;
}

/** @beta */
export const osdkTestFixture: osdkTestFixture = {
  type: 'agent',
  apiName: 'osdkTestFixture',
  version: '0.5.0',
  osdkMetadata: $osdkMetadata,
};
