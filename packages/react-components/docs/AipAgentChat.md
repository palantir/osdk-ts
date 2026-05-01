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
      availableModels={["gpt-4o", "gpt-4o-mini"]}
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
  availableModels={["gpt-4o", "gpt-4o-mini"]}
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

```tsx
import { useChat } from "@osdk/react/experimental/aip";
import { foundryModel } from "@osdk/aip-core";
import { BaseAipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";

function MyChat() {
  const lmsModel = useMemo(
    () => foundryModel({ client: platformClient, model: "gpt-4o" }),
    [],
  );
  const { messages, status, error, sendMessage, stop, clearError } = useChat({
    model: lmsModel,
  });

  return (
    <BaseAipAgentChat
      messages={messages}
      status={status}
      error={error}
      onSendMessage={(text) => void sendMessage({ text })}
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
