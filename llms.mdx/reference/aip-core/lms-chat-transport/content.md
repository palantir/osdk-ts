# LmsChatTransport

Source: https://palantir.github.io/osdk-ts/reference/aip-core/lms-chat-transport

> A ChatTransport that streams chat replies from the Foundry Language Model Service as UI message chunks.

```ts
import { LmsChatTransport } from "@osdk/aip-core";

class LmsChatTransport implements ChatTransport<UIMessage> {
  constructor(opts: LmsChatTransportOptions);
  sendMessages(args: ChatTransportSendMessagesArgs<UIMessage>): Promise<ReadableStream<UIMessageChunk>>;
  reconnectToStream(args: ChatTransportReconnectArgs): Promise<ReadableStream<UIMessageChunk> | null>;
}
```

Converts a `UIMessage[]` conversation to model messages, calls [`streamText`](https://palantir.github.io/osdk-ts/reference/aip-core/stream-text.md), and returns the reply as a stream of `UIMessageChunk`s in the AI SDK v5 UI format. Pass it to any chat UI that accepts a `ChatTransport`.

## Options

### LmsChatTransportOptions

Options for LmsChatTransport. Configures the streamed chat
completion against the Foundry Language Model Service.

| Prop                | Type                                  | Description                                                       |
| ------------------- | ------------------------------------- | ----------------------------------------------------------------- |
| `model`             | `LanguageModel`                       | Foundry-LMS-backed language model. Build via `foundryModel(...)`. |
| `system?`           | `string`                              | System prompt prepended to every request.                         |
| `temperature?`      | `number`                              | Sampling controls.                                                |
| `maxOutputTokens?`  | `number`                              |                                                                   |
| `topP?`             | `number`                              |                                                                   |
| `presencePenalty?`  | `number`                              |                                                                   |
| `frequencyPenalty?` | `number`                              |                                                                   |
| `stopSequences?`    | `string[]`                            |                                                                   |
| `seed?`             | `number`                              |                                                                   |
| `headers?`          | `Record<string, string \| undefined>` | Extra HTTP headers forwarded to LMS.                              |

`headers` passed to `sendMessages` are merged over the constructor's `headers`.

## Methods

| Method | Returns | Description |
| --- | --- | --- |
| `sendMessages(args)` | `Promise<ReadableStream<UIMessageChunk>>` | Streams the assistant reply to `args.messages`, using `args.messageId` as its ID. Model errors arrive as an `{ type: "error", errorText }` chunk, after which the stream errors. |
| `reconnectToStream(args)` | `Promise<null>` | Always resolves to `null`; the transport cannot resume a stream. |

## Example

```ts title="src/askOnce.ts"
import { foundryModel, generateMessageId, LmsChatTransport } from "@osdk/aip-core";
import type { PlatformClient } from "@osdk/client";

export async function askOnce(client: PlatformClient, question: string) {
  const transport = new LmsChatTransport({
    model: foundryModel({ client, model: "gpt-4o" }),
    system: "Answer briefly.",
  });

  const stream = await transport.sendMessages({
    trigger: "submit-message",
    chatId: "chat-1",
    messageId: generateMessageId(),
    messages: [{ id: generateMessageId(), role: "user", parts: [{ type: "text", text: question }] }],
    abortSignal: undefined,
  });

  let answer = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value.type === "text-delta") answer += value.delta;
  }
  return answer;
}
```

## See also

- [Chat and text generation](https://palantir.github.io/osdk-ts/ai/chat.md)
- [Utilities](https://palantir.github.io/osdk-ts/reference/aip-core/utilities.md)