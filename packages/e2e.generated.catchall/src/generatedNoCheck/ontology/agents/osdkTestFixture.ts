import type { VersionBound } from '@osdk/client';
import type { AgentDefinition, AgentParam, AgentSession } from '@osdk/client/experimental';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

/** @beta */
export namespace osdkTestFixture {
  export interface Signatures {
    experimental_createSession(args: osdkTestFixture.CreateSessionArguments): Promise<AgentSession>;
  }

  export interface CreateSessionArguments {
    readonly defaultCity: string;
  }
}

/** @beta */
export interface osdkTestFixture
  extends AgentDefinition<osdkTestFixture.Signatures>,
    VersionBound<$ExpectedClientVersion> {
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
