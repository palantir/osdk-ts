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
    arguments: { defaultCity: string };
    agentState: { data: { defaultCity: string } };
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
        | { type: 'text'; text: string }
        | {
            type: 'thinking';
            thinking:
              | { type: 'anthropic'; signature: string; thinking: string }
              | { type: 'anthropicRedacted'; data: string }
              | { type: 'google'; content: string }
              | { type: 'googleSignature'; signature: string }
              | {
                  type: 'openAi';
                  content: Array<string> | null;
                  encryptedContent: string;
                  id: string;
                  summary: Array<string>;
                }
              | {
                  type: 'spaceXAi';
                  content: Array<string> | null;
                  encryptedContent: string;
                  id: string;
                  summary: Array<string>;
                };
          }
        | { type: 'toolRequest'; arguments: string; id: string; name: string }
      >;
      status:
        | { type: 'completed' }
        | { type: 'generating' }
        | { type: 'terminated'; reason: { type: 'genericError'; message: string } };
      toolResults: Record<
        string,
        { type: 'complete'; contextItemIds: Array<string> } | { type: 'executing' } | { type: 'notStarted' }
      >;
    };
    '@platform/tool-execution-error': { message: string };
    '@platform/user-message': { parts: Array<{ type: 'text'; text: string }> };
    'weather-result': { text: string };
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
  __DefinitionMetadata?: {
    apiName: 'osdkTestFixture';
    type: 'agent';
    version: '0.5.0';
    arguments: { defaultCity: { nullable: false; type: 'string' } };
    events: {
      '@platform/send-user-message': {
        nullable: false;
        struct: {
          parts: {
            array: {
              discriminatorKey: 'type';
              members: { text: { text: { nullable: false; type: 'string' } } };
              nullable: false;
              type: 'discriminatedUnion';
            };
            nullable: false;
            type: 'array';
          };
        };
        type: 'struct';
      };
      LookupWeather: { nullable: false; struct: { city: { nullable: true; type: 'string' } }; type: 'struct' };
      SetDefaultCity: { nullable: false; struct: { city: { nullable: false; type: 'string' } }; type: 'struct' };
    };
    agentState: { nullable: false; struct: { defaultCity: { nullable: false; type: 'string' } }; type: 'struct' };
    contextItems: {
      '@platform/assistant-message': {
        nullable: false;
        struct: {
          parts: {
            array: {
              discriminatorKey: 'type';
              members: {
                text: { text: { nullable: false; type: 'string' } };
                thinking: {
                  thinking: {
                    discriminatorKey: 'type';
                    members: {
                      anthropic: {
                        signature: { nullable: false; type: 'string' };
                        thinking: { nullable: false; type: 'string' };
                      };
                      anthropicRedacted: { data: { nullable: false; type: 'string' } };
                      google: { content: { nullable: false; type: 'string' } };
                      googleSignature: { signature: { nullable: false; type: 'string' } };
                      openAi: {
                        content: { array: { nullable: false; type: 'string' }; nullable: true; type: 'array' };
                        encryptedContent: { nullable: false; type: 'string' };
                        id: { nullable: false; type: 'string' };
                        summary: { array: { nullable: false; type: 'string' }; nullable: false; type: 'array' };
                      };
                      spaceXAi: {
                        content: { array: { nullable: false; type: 'string' }; nullable: true; type: 'array' };
                        encryptedContent: { nullable: false; type: 'string' };
                        id: { nullable: false; type: 'string' };
                        summary: { array: { nullable: false; type: 'string' }; nullable: false; type: 'array' };
                      };
                    };
                    nullable: false;
                    type: 'discriminatedUnion';
                  };
                };
                toolRequest: {
                  arguments: { nullable: false; type: 'string' };
                  id: { nullable: false; type: 'string' };
                  name: { nullable: false; type: 'string' };
                };
              };
              nullable: false;
              type: 'discriminatedUnion';
            };
            nullable: false;
            type: 'array';
          };
          status: {
            discriminatorKey: 'type';
            members: {
              completed: {};
              generating: {};
              terminated: {
                reason: {
                  discriminatorKey: 'type';
                  members: { genericError: { message: { nullable: false; type: 'string' } } };
                  nullable: false;
                  type: 'discriminatedUnion';
                };
              };
            };
            nullable: false;
            type: 'discriminatedUnion';
          };
          toolResults: {
            nullable: false;
            type: 'record';
            valueType: {
              discriminatorKey: 'type';
              members: {
                complete: {
                  contextItemIds: { array: { nullable: false; type: 'string' }; nullable: false; type: 'array' };
                };
                executing: {};
                notStarted: {};
              };
              nullable: false;
              type: 'discriminatedUnion';
            };
          };
        };
        type: 'struct';
      };
      '@platform/tool-execution-error': {
        nullable: false;
        struct: { message: { nullable: false; type: 'string' } };
        type: 'struct';
      };
      '@platform/user-message': {
        nullable: false;
        struct: {
          parts: {
            array: {
              discriminatorKey: 'type';
              members: { text: { text: { nullable: false; type: 'string' } } };
              nullable: false;
              type: 'discriminatedUnion';
            };
            nullable: false;
            type: 'array';
          };
        };
        type: 'struct';
      };
      'weather-result': { nullable: false; struct: { text: { nullable: false; type: 'string' } }; type: 'struct' };
    };
    signatures: osdkTestFixture.Signatures;
  };
  apiName: 'osdkTestFixture';
  type: 'agent';
  version: '0.5.0';
  osdkMetadata: typeof $osdkMetadata;
}

/** @beta */
export const osdkTestFixture: osdkTestFixture = {
  apiName: 'osdkTestFixture',
  type: 'agent',
  version: '0.5.0',
  osdkMetadata: $osdkMetadata,
};
