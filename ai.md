# AI overview

Source: https://palantir.github.io/osdk-ts/ai

> Packages for adding LLM features to OSDK apps with Foundry's Language Model Service, what each one does, and what you need before you start.

Related Palantir Foundry documentation:
- [AIP](https://www.palantir.com/docs/foundry/aip/overview)

{/* cspell:ignore llms */}

Add text generation, tool calling, chat UIs, and agents to an OSDK app using models hosted by Foundry's Language Model Service (LMS). Requests run with the signed-in user's permissions and Foundry's governance and usage tracking, so you never ship a provider API key.

> [!WARNING]
> These packages are pre-release. `@osdk/aip-core`, `@osdk/language-models`, and `@osdk/agents` are at version 0.x, and the React APIs ship from `/experimental` entry points. Expect breaking changes in minor releases.

## Packages

| Package | Import | What it does | Maturity |
| --- | --- | --- | --- |
| `@osdk/aip-core` | `@osdk/aip-core` | `foundryModel`, `generateText`, `streamText`, tool definitions, and the `LmsChatTransport` chat transport. | 0.x |
| `@osdk/aip-core` | `@osdk/aip-core/ai-sdk` | `createFoundryAI`, a Foundry provider for the [AI SDK](https://ai-sdk.dev) version 6. | 0.x |
| `@osdk/language-models` | `@osdk/language-models` | Proxy base URLs and an authenticated `fetch` for the OpenAI, Anthropic, and Google SDKs. `@osdk/aip-core` is built on it. | 0.x |
| `@osdk/react` | `@osdk/react/experimental/aip` | `useChat`, a hook that streams a conversation into React state. | Experimental |
| `@osdk/react-components` | `@osdk/react-components/experimental/aip-agent-chat` | [`AipAgentChat`](https://palantir.github.io/osdk-ts/components/aip-agent-chat.md), a prebuilt chat panel built on `useChat`. | Experimental |
| `@osdk/foundry.aipagents` | `@osdk/foundry.aipagents` | Platform SDK for agents built in AIP Agent Studio: sessions, blocking and streaming replies. | Beta endpoints |
| `@osdk/agents` | `@osdk/agents`, `@osdk/agents/experimental` | `AgentConfig` and the injected `getClient` and `getPlatformClient` for code that runs inside an agent. | 0.x |

## Which to use

| Goal | Start with |
| --- | --- |
| Summarize, classify, or draft text from a script or server | [`generateText`](https://palantir.github.io/osdk-ts/ai/chat.md) in Node.js |
| Show an answer token by token | [`streamText`](https://palantir.github.io/osdk-ts/ai/chat.md#stream-text) |
| Let the model look up Ontology data or propose actions | [Tool calling](https://palantir.github.io/osdk-ts/ai/tools.md) |
| Add a chat panel to a React app with no custom UI | [`AipAgentChat`](https://palantir.github.io/osdk-ts/components/aip-agent-chat.md) |
| Build your own chat UI | [`useChat`](https://palantir.github.io/osdk-ts/ai/react.md) |
| Use the AI SDK's helpers, Zod tools, and multi-step loop | [`@osdk/aip-core/ai-sdk`](https://palantir.github.io/osdk-ts/ai/chat.md#use-the-ai-sdk) |
| Call an OpenAI, Anthropic, or Google SDK feature that `@osdk/aip-core` lacks | [`@osdk/language-models`](https://palantir.github.io/osdk-ts/ai/chat.md#call-a-provider-sdk-directly) |
| Talk to an agent configured in AIP Agent Studio | [Agents](https://palantir.github.io/osdk-ts/ai/agents.md) |

`@osdk/language-models` is not superseded: `@osdk/aip-core` depends on it for the proxy URL. Use `@osdk/aip-core` for a provider-neutral API, and `@osdk/language-models` when you want a provider's own SDK.

## Prerequisites

| Requirement | Details |
| --- | --- |
| AIP on your enrollment | AIP must be enabled, and your users need permission to use AIP builder capabilities. |
| OAuth scope | Third-party applications must request `api:use-language-models-execute`. The default scopes of `createPublicOauthClient` do not include it. Agents need `api:aip-agents-read` and `api:aip-agents-write`, or `api:agents-read` and `api:agents-write` for generated agents. |
| A `PlatformClient` | `foundryModel`, `createFoundryAI`, and `AipAgentChat` take a client from `createPlatformClient`, not the Ontology `Client`. Create it with the same token provider. |
| A model | Use a model API name, such as `"gpt-4o"`, or a registered model RID. Available models vary by enrollment; look them up in Model Catalog. |

```ts title="src/model.ts"
import { foundryModel } from "@osdk/aip-core";
import { createPlatformClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const foundryUrl = "https://example.palantirfoundry.com";

const auth = createPublicOauthClient(
  "<your-client-id>",
  foundryUrl,
  "http://localhost:8080/auth/callback",
  {
    scopes: [
      "api:read-data",
      "api:write-data",
      "api:use-ontologies-read",
      "api:use-ontologies-write",
      "api:use-language-models-execute",
    ],
  },
);

export const platformClient = createPlatformClient(foundryUrl, auth);
export const model = foundryModel({ client: platformClient, model: "gpt-4o" });
```

## Current limits

| Limit | Applies to |
| --- | --- |
| One model call per request; you run the tool loop yourself. | `generateText`, `streamText` |
| Tool `inputSchema` must be JSON Schema; Zod schemas are not converted. | `generateText`, `streamText` |
| Text only: image and file parts are dropped, with a warning in `@osdk/aip-core` and silently in `useChat`. | `@osdk/aip-core`, `useChat` |
| No structured JSON output, no `topK`. | `@osdk/aip-core`, `@osdk/aip-core/ai-sdk` |
| No tools, multi-step loops, or stream resume. | `useChat`, `AipAgentChat` |

The AI SDK provider lifts the first two: the AI SDK runs the loop and converts Zod schemas.

- [Generate and stream text](https://palantir.github.io/osdk-ts/ai/chat.md): `generateText`, `streamText`, models, messages, and usage.
- [Tool calling](https://palantir.github.io/osdk-ts/ai/tools.md): Query the Ontology and propose actions from model tool calls.
- [React chat UIs](https://palantir.github.io/osdk-ts/ai/react.md): `useChat`, custom transports, and streaming rendering.
- [Agents](https://palantir.github.io/osdk-ts/ai/agents.md): AIP Agents, generated agent sessions, and `@osdk/agents`.
- [AipAgentChat](https://palantir.github.io/osdk-ts/components/aip-agent-chat.md): A prebuilt chat panel for React.
- [Use these docs with AI](https://palantir.github.io/osdk-ts/ai/llms.md): `llms.txt`, per-page Markdown, and AGENTS.md for coding assistants.