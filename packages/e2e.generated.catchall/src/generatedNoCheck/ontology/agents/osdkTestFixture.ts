import type {
  AgentDefinition,
  AgentSession,
  AgentSessionState,
  QueryParam,
  QueryResult,
  UnknownContextItem,
  VersionBound,
} from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';

/** @experimental */
export namespace osdkTestFixture {
  export type CreateSessionArgs = { readonly defaultCity: string };
  export type SessionArguments = { readonly defaultCity: string };
  export type Events = {
    readonly '@platform/send-user-message': {
      readonly parts: ReadonlyArray<{ readonly type: 'text' } & { readonly text: string }>;
    };
    readonly LookupWeather: { readonly city: string | null };
    readonly SetDefaultCity: { readonly city: string };
  };
  export type AgentState = { readonly defaultCity: string };
  export type ContextItem =
    | {
        type: '@platform/assistant-message';
        data: {
          readonly parts: Array<
            | ({ readonly type: 'text' } & { readonly text: string })
            | ({ readonly type: 'thinking' } & {
                readonly thinking:
                  | ({ readonly type: 'anthropic' } & { readonly signature: string; readonly thinking: string })
                  | ({ readonly type: 'anthropicRedacted' } & { readonly data: string })
                  | ({ readonly type: 'openAi' } & {
                      readonly id: string;
                      readonly summary: Array<string>;
                      readonly encryptedContent: string;
                      readonly content: Array<string> | null;
                    })
                  | ({ readonly type: 'spaceXAi' } & {
                      readonly id: string;
                      readonly summary: Array<string>;
                      readonly encryptedContent: string;
                      readonly content: Array<string> | null;
                    })
                  | ({ readonly type: 'google' } & { readonly content: string })
                  | ({ readonly type: 'googleSignature' } & { readonly signature: string });
              })
            | ({ readonly type: 'toolRequest' } & {
                readonly id: string;
                readonly name: string;
                readonly arguments: string;
              })
          >;
          readonly toolResults: Record<
            string,
            | { readonly type: 'notStarted' }
            | { readonly type: 'executing' }
            | ({ readonly type: 'complete' } & { readonly contextItemIds: Array<string> })
          >;
          readonly status:
            | { readonly type: 'generating' }
            | { readonly type: 'completed' }
            | ({ readonly type: 'terminated' } & {
                readonly reason: { readonly type: 'genericError' } & { readonly message: string };
              });
        };
      }
    | { type: '@platform/tool-execution-error'; data: { readonly message: string } }
    | {
        type: '@platform/user-message';
        data: { readonly parts: Array<{ readonly type: 'text' } & { readonly text: string }> };
      }
    | { type: 'weather-result'; data: { readonly text: string } }
    | UnknownContextItem;
  export interface Types {
    arguments: CreateSessionArgs;
    argumentValues: SessionArguments;
    events: Events;
    state: AgentState;
    contextItem: ContextItem;
  }
  export type Session = AgentSession<Types>;
  export type SessionState = AgentSessionState<Types>;
}

/** @experimental */
export interface osdkTestFixture extends AgentDefinition, VersionBound<$ExpectedClientVersion> {
  type: 'agent';
  apiName: 'osdkTestFixture';
  version: '0.5.0';
  __DefinitionMetadata?: osdkTestFixture.Types;
}

/** @experimental */
export const osdkTestFixture: osdkTestFixture = {
  type: 'agent',
  apiName: 'osdkTestFixture',
  version: '0.5.0',
  contextItemTypes: [
    '@platform/assistant-message',
    '@platform/tool-execution-error',
    '@platform/user-message',
    'weather-result',
  ],
  osdkMetadata: $osdkMetadata,
};
