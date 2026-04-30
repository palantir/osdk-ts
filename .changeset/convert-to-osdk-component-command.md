---
"@osdk/react-components": minor
---

port the chat-essential components from the agent-engine demo into `@osdk/react-components/experimental`:

- `TypingIndicator`: animated three-dot typing indicator with `role="status"`, themeable purely via `--osdk-typing-indicator-*` CSS variables.
- `ContextItemPill`: clickable pill that opens an inspector dialog with a default JSON view (or a custom `dialogContent` slot). Exports a `JsonValue` type for type-safe data props. Themeable via `--osdk-context-item-pill-*` CSS variables.
- `MessageList`: the chat message list. Renders user / agent / tool-call messages, supports streaming, in-progress (optimistic) messages, and error states. Auto-scroll via imperative `scrollToBottom()` on a `forwardRef` plus an opt-in `autoScrollOnAppend` prop (no `useEffect`). Custom rendering of context items via a `renderContextItem` slot prop with a JSON-view fallback. Exports `Message`, `UserMessage`, `AgentMessage`, `ToolCall`, `ToolCallResult`, `RenderedContextItem`, `InProgressMessage`, `MessageListRef` types.
- `MessageInput`: the chat composer. Multi-line `textarea` (Enter submits, Shift+Enter inserts a newline, IME-safe), auto-growing between `--osdk-message-input-min-height` and `--osdk-message-input-max-height` via `field-sizing: content`. Send button, optional `attachmentTrigger` slot for consumer-supplied attachment pickers, optional `onConfigure` callback, optional auto-scroll toggle (pair with `MessageList autoScrollOnAppend`). Themeable via `--osdk-message-input-*` CSS variables.
