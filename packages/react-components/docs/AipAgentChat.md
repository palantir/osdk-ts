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

### With object-type context

Let users ground the conversation in their data. Pass `objectTypes`
(the same OSDK object definitions `ObjectTable` accepts) and a
multi-select picker appears in the composer footer. When the user
selects a type, its objects are fetched via `useOsdkObjects` and a
serialized snapshot is appended to the system prompt, so the model can
answer questions about that data.

```tsx
import { Employee, Office } from "./generatedNoCheck2/index.js";

<AipAgentChat
  client={platformClient}
  objectTypes={[Employee, Office]}
  contextPageSize={25} // max objects loaded per selected type (default 25)
  defaultSelectedObjectTypes={["Employee"]} // optional initial selection
  onSelectedObjectTypesChanged={(apiNames) => analytics.track({ apiNames })}
/>;
```

Requirements and behavior:

- The app must be wrapped in `OsdkProvider` (same as `ObjectTable`),
  since `useOsdkObjects` reads the OSDK client from React context. The
  `client` prop is only the `PlatformClient` used for the LMS.
- Fetching is lazy — nothing loads until a type is selected, and
  deselecting a type drops it from the prompt.
- Selection is uncontrolled: seed it with `defaultSelectedObjectTypes`
  and observe changes via `onSelectedObjectTypesChanged`.
- Object snapshots are capped at `contextPageSize` per type to keep
  requests within the model's context window.

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

`BaseAipAgentChat` is OSDK-agnostic — the consumer drives the chat by
passing the current `messages`, `status`, `error`, and an `onSendMessage`
callback that resolves once the user's message has been forwarded.
Use it for non-OSDK backends, custom transports, or unit tests.

```tsx
import {
  BaseAipAgentChat,
  type ChatStatus,
  type UIMessage,
} from "@osdk/react-components/experimental/aip-agent-chat";

function MyChat() {
  const [messages, setMessages] = useState<ReadonlyArray<UIMessage>>([]);
  const [status, setStatus] = useState<ChatStatus>("ready");
  const [error, setError] = useState<Error | undefined>();

  return (
    <BaseAipAgentChat
      messages={messages}
      status={status}
      error={error}
      onSendMessage={async (text) => {
        setStatus("submitted");
        try {
          const reply = await callMyBackend(text, { history: messages });
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: "user",
              parts: [{ type: "text", text }],
            },
            {
              id: crypto.randomUUID(),
              role: "assistant",
              parts: [{ type: "text", text: reply }],
            },
          ]);
          setStatus("ready");
        } catch (err) {
          setError(err as Error);
          setStatus("error");
        }
      }}
      onStop={() => setStatus("ready")}
      onClearError={() => setError(undefined)}
    />
  );
}
```

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
- `objectTypes` + `contextPageSize` + `defaultSelectedObjectTypes` +
  `onSelectedObjectTypesChanged` — render an object-type context picker
  in the composer footer; selected types are fetched via
  `useOsdkObjects` and folded into the system prompt. Requires
  `OsdkProvider`.
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
