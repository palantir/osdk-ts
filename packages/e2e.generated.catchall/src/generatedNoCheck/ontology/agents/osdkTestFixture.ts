import type { VersionBound as $VersionBound } from '@osdk/client';
import type {
  AgentDefinition as $AgentDefinition,
  AgentParam as $AgentParam,
  AgentSession as $AgentSession,
  AgentSendEventOptions as $AgentSendEventOptions,
} from '@osdk/client/experimental';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

/** @beta */
export namespace osdkTestFixture {
  export interface Signatures {
    experimental_createSession(args: osdkTestFixture.CreateSessionArguments): Promise<osdkTestFixture.Session>;
    experimental_getSession(sessionId: string): Promise<osdkTestFixture.Session>;
  }

  export interface Session extends $AgentSession {
    experimental_sendEvent(event: SendEventArguments, $options?: $AgentSendEventOptions): Promise<void>;
  }

  export type SendEventArguments =
    | {
        readonly '@platform/send-user-message': Events['@platform/send-user-message'];
        readonly LookupWeather?: never;
        readonly SetDefaultCity?: never;
      }
    | {
        readonly '@platform/send-user-message'?: never;
        readonly LookupWeather: Events['LookupWeather'];
        readonly SetDefaultCity?: never;
      }
    | {
        readonly '@platform/send-user-message'?: never;
        readonly LookupWeather?: never;
        readonly SetDefaultCity: Events['SetDefaultCity'];
      };

  export interface Events {
    readonly '@platform/send-user-message': {
      readonly parts: ReadonlyArray<{ readonly type: 'text'; readonly text: string }>;
    };
    readonly LookupWeather: { readonly city: string | null };
    readonly SetDefaultCity: { readonly city: string };
  }

  export interface CreateSessionArguments {
    readonly defaultCity: string;
  }
}

/** @beta */
export interface osdkTestFixture
  extends $AgentDefinition<osdkTestFixture.Signatures>,
    $VersionBound<$ExpectedClientVersion> {
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
