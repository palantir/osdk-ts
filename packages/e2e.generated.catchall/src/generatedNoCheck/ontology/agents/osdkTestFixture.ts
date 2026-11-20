import type { VersionBound as $VersionBound } from '@osdk/client';
import type {
  AgentDefinition as $AgentDefinition,
  AgentParam as $AgentParam,
  AgentResult as $AgentResult,
  AgentSession as $AgentSession,
  AgentSessionState as $AgentSessionState,
  AgentGetStateOptions as $AgentGetStateOptions,
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
    experimental_getState($options?: $AgentGetStateOptions): Promise<SessionState>;
    experimental_sendEvent(event: SendEventArguments, $options?: $AgentSendEventOptions): Promise<void>;
  }

  export interface SessionState extends $AgentSessionState {
    arguments: { defaultCity: $AgentResult.PrimitiveType<'string'> };
    agentState: { data: { defaultCity: $AgentResult.PrimitiveType<'string'> } };
    contextItems: Record<string, ContextItem>;
  }

  export type ContextItem =
    | { type: '@platform/assistant-message'; data: ContextItems['@platform/assistant-message'] }
    | { type: '@platform/tool-execution-error'; data: ContextItems['@platform/tool-execution-error'] }
    | { type: '@platform/user-message'; data: ContextItems['@platform/user-message'] }
    | { type: 'weather-result'; data: ContextItems['weather-result'] };

  export interface ContextItems {
    '@platform/assistant-message': {
      parts: Array<
        | { type: 'text'; text: $AgentResult.PrimitiveType<'string'> }
        | {
            type: 'thinking';
            thinking:
              | {
                  type: 'anthropic';
                  signature: $AgentResult.PrimitiveType<'string'>;
                  thinking: $AgentResult.PrimitiveType<'string'>;
                }
              | { type: 'anthropicRedacted'; data: $AgentResult.PrimitiveType<'string'> }
              | {
                  type: 'openAi';
                  content: Array<$AgentResult.PrimitiveType<'string'>> | null;
                  encryptedContent: $AgentResult.PrimitiveType<'string'>;
                  id: $AgentResult.PrimitiveType<'string'>;
                  summary: Array<$AgentResult.PrimitiveType<'string'>>;
                }
              | {
                  type: 'spaceXAi';
                  content: Array<$AgentResult.PrimitiveType<'string'>> | null;
                  encryptedContent: $AgentResult.PrimitiveType<'string'>;
                  id: $AgentResult.PrimitiveType<'string'>;
                  summary: Array<$AgentResult.PrimitiveType<'string'>>;
                }
              | { type: 'google'; content: $AgentResult.PrimitiveType<'string'> }
              | { type: 'googleSignature'; signature: $AgentResult.PrimitiveType<'string'> };
          }
        | {
            type: 'toolRequest';
            arguments: $AgentResult.PrimitiveType<'string'>;
            id: $AgentResult.PrimitiveType<'string'>;
            name: $AgentResult.PrimitiveType<'string'>;
          }
      >;
      status:
        | { type: 'generating' }
        | { type: 'completed' }
        | { type: 'terminated'; reason: { type: 'genericError'; message: $AgentResult.PrimitiveType<'string'> } };
      toolResults: Record<
        string,
        | { type: 'notStarted' }
        | { type: 'executing' }
        | { type: 'complete'; contextItemIds: Array<$AgentResult.PrimitiveType<'string'>> }
      >;
    };
    '@platform/tool-execution-error': { message: $AgentResult.PrimitiveType<'string'> };
    '@platform/user-message': { parts: Array<{ type: 'text'; text: $AgentResult.PrimitiveType<'string'> }> };
    'weather-result': { text: $AgentResult.PrimitiveType<'string'> };
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
      readonly parts: ReadonlyArray<{ readonly type: 'text'; readonly text: $AgentParam.PrimitiveType<'string'> }>;
    };
    readonly LookupWeather: { readonly city: $AgentParam.PrimitiveType<'string'> | null };
    readonly SetDefaultCity: { readonly city: $AgentParam.PrimitiveType<'string'> };
  }

  export interface CreateSessionArguments {
    readonly defaultCity: $AgentParam.PrimitiveType<'string'>;
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
