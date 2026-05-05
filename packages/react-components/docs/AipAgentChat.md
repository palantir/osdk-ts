# AipAgentChat

A React component for rendering an AI chat surface backed by Foundry's
LMS via `useChat` from `@osdk/react/experimental/aip`. Importing the
component is sufficient — consumers do not need to import `useChat` or
`foundryModel` themselves.

## Import

```tsx
import {
  AipAgentChat,
  BaseAipAgentChat,
} from "@osdk/react-components/experimental/aip-agent-chat";
```

- **`AipAgentChat`** — Primary component for OSDK usage. Accepts a
  Foundry `PlatformClient` and an LMS model API name; constructs the
  language-model handle, drives `useChat`, and renders the chat UI.
- **`BaseAipAgentChat`** — Lower-level OSDK-agnostic component that
  accepts `messages`, `status`, and `onSendMessage` directly. Use this
  when you already manage chat state yourself (a custom hook, a
  non-OSDK backend, etc.).

## Usage

### Minimal

```tsx
import { AipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import { platformClient } from "./foundryClient.js";

// `model` and `defaultModel` are both optional — falls back to "gpt-4o".
<AipAgentChat client={platformClient} />;
```

### Pinned model

```tsx
<AipAgentChat
  client={platformClient}
  model="gpt-4o"
  system="You are a concise assistant. Keep answers short."
/>;
```

### With model picker (controlled)

```tsx
function MyChat() {
  const [model, setModel] = useState("gpt-4o");
  return (
    <AipAgentChat
      client={platformClient}
      model={model}
      availableModels={["gpt-4o", "AnthropicClaude_4_6_Sonnet"]}
      onModelChange={setModel}
    />
  );
}
```

### With model picker (uncontrolled)

```tsx
<AipAgentChat
  client={platformClient}
  defaultModel="gpt-4o"
  availableModels={["gpt-4o", "AnthropicClaude_4_6_Sonnet"]}
  onModelChange={(modelName) => analytics.track({ modelName })}
/>;
```

The component manages model state internally; `onModelChange` is a
non-controlling listener (analytics, persistence, etc.).

### Custom render

```tsx
import {
  AipAgentChat,
  getUIMessageText,
  type UIMessage,
} from "@osdk/react-components/experimental/aip-agent-chat";

<AipAgentChat
  client={platformClient}
  model="gpt-4o"
  renderMessage={(message: UIMessage) => (
    <div>
      <strong>{message.role}:</strong> {getUIMessageText(message)}
    </div>
  )}
  renderEmptyState={() => <p>Ready when you are.</p>}
/>;
```

### Drop down to BaseAipAgentChat

`BaseAipAgentChat` is OSDK-agnostic — it manages conversation state
internally and only needs an `onSendMessage` callback that produces
the assistant's reply. Use it for non-OSDK backends, custom transports,
or unit tests.

```tsx
import {
  BaseAipAgentChat,
  type BaseAipAgentChatSendContext,
  type UIMessage,
} from "@osdk/react-components/experimental/aip-agent-chat";

function MyChat() {
  return (
    <BaseAipAgentChat
      onSendMessage={async (text, ctx: BaseAipAgentChatSendContext) => {
        // ctx.history is the conversation before `text` was added.
        // ctx.signal aborts when the user presses Stop.
        // ctx.setStreamingText(partial) updates the in-flight bubble.
        const reply = await callMyBackend(text, {
          history: ctx.history,
          signal: ctx.signal,
          onToken: ctx.setStreamingText,
        });
        return {
          id: crypto.randomUUID(),
          role: "assistant",
          parts: [{ type: "text", text: reply }],
        } satisfies UIMessage;
      }}
    />
  );
}
```

The previous (controlled) form of `BaseAipAgentChat` — which accepted
`messages`, `status`, `error`, etc. — has been replaced by this
self-managed contract.

### Drop further: useChat directly

For full control over the chat hook (regenerate, multi-step agent
loops, custom transports), call `useChat` from `@osdk/react/experimental/aip`
yourself and feed the result into your own UI.

```tsx
import { foundryModel } from "@osdk/aip-core";
import { useChat } from "@osdk/react/experimental/aip";

function MyChat() {
  const lmsModel = useMemo(
    () => foundryModel({ client: platformClient, model: "gpt-4o" }),
    [],
  );
  const { messages, status, error, sendMessage, stop, clearError } = useChat({
    model: lmsModel,
  });

  return (
    <YourCustomChatLayout
      messages={messages}
      status={status}
      error={error}
      onSend={(text) => void sendMessage({ text })}
      onStop={stop}
      onClearError={clearError}
    />
  );
}
```

## Props

See [`AipAgentChatApi.ts`](../src/aip-agent-chat/AipAgentChatApi.ts) for
the full prop list with JSDoc. `client` is the only required prop.
`model` (controlled) and `defaultModel` (uncontrolled) are both
optional; if neither is supplied the chat falls back to the first
entry of `availableModels` (when provided), or to `"gpt-4o"`. Notable
optional props:

- `availableModels` + `onModelChange` — render a model picker in the
  composer footer.
- `system` — system prompt prepended to every request.
- `initialMessages` — seed conversation snapshot.
- `enableAutoScroll` (default `true`) — auto-pin to the bottom of the
  message list as new tokens arrive.
- `renderEmptyState` / `renderMessage` — render overrides.
- `onError`, `onFinish` — listeners forwarded to `useChat`.

## Theming

CSS variables are documented in
[`docs/CSSVariables.md`](./CSSVariables.md). The `--osdk-aip-agent-chat-*`
namespace covers spacing, bubble colors, composer styling, and the
3-dot loader.
