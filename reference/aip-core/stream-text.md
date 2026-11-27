# streamText

Source: https://palantir.github.io/osdk-ts/reference/aip-core/stream-text

> Stream a text response from a Foundry language model as it is generated.

```ts
import { streamText } from "@osdk/aip-core";

function streamText<TOOLS extends ToolSet = ToolSet>(
  options: StreamTextOptions<TOOLS>,
): StreamTextResult;
```

Starts the request immediately and returns streams and promises without awaiting. Read `textStream` for text only, or `fullStream` for every chunk, including reasoning, tool calls, and the finish event. Like `generateText`, the call is single-step.

## Options

### StreamTextOptions

Options for streamText.

| Prop                | Type                                                                                                                                                                                                                                                                                                                                    | Description                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `model`             | `LanguageModel`                                                                                                                                                                                                                                                                                                                         | The language model to use. Build one via `foundryModel(...)`.                    |
| `prompt?`           | `string \| ModelMessage[]`                                                                                                                                                                                                                                                                                                              | Plain text prompt. Mutually exclusive with `messages`.                           |
| `messages?`         | `ModelMessage[]`                                                                                                                                                                                                                                                                                                                        | Conversation history. Mutually exclusive with `prompt`.                          |
| `system?`           | `string \| SystemModelMessage[] \| SystemModelMessage`                                                                                                                                                                                                                                                                                  | System instructions, prepended to the conversation.                              |
| `tools?`            | `TOOLS`                                                                                                                                                                                                                                                                                                                                 |                                                                                  |
| `toolChoice?`       | `ToolChoice<TOOLS>`                                                                                                                                                                                                                                                                                                                     |                                                                                  |
| `maxOutputTokens?`  | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `temperature?`      | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `topP?`             | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `presencePenalty?`  | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `frequencyPenalty?` | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `stopSequences?`    | `string[]`                                                                                                                                                                                                                                                                                                                              |                                                                                  |
| `seed?`             | `number`                                                                                                                                                                                                                                                                                                                                |                                                                                  |
| `abortSignal?`      | `AbortSignal`                                                                                                                                                                                                                                                                                                                           |                                                                                  |
| `headers?`          | `Record<string, string \| undefined>`                                                                                                                                                                                                                                                                                                   |                                                                                  |
| `onChunk?`          | `((chunk: TextStreamChunk) => void \| PromiseLike<void>)`                                                                                                                                                                                                                                                                               | Fires for every chunk emitted on `fullStream`.                                   |
| `onError?`          | `((error: Error) => void \| PromiseLike<void>)`                                                                                                                                                                                                                                                                                         | Fires when the stream errors out. The same error is also emitted via the stream. |
| `onFinish?`         | `((event: { finishReason: FinishReason; text: string; reasoningText: string \| undefined; toolCalls: Array<ToolCall>; usage: LanguageModelUsage; totalUsage: LanguageModelUsage; warnings: Array<Warning> \| undefined; response: ResponseMetadata \| undefined; request: RequestMetadata \| undefined; }) => void \| PromiseLike<v...` | Fires once after the stream completes successfully.                              |

Pass either `prompt` or `messages`, not both. `streamText` throws synchronously when both are set, or when `system`, `prompt`, and `messages` are all empty. Aborting `abortSignal` stops the request. Cancelling the streams stops it only when you cancel both `fullStream` and `textStream`.

## Returns

### StreamTextResult

Result of streamText.

`fullStream` is a `ReadableStream` (not an async iterable) so it can be
`pipeThrough`-ed with browser-native transforms.

| Prop            | Type                                     | Description                                               |
| --------------- | ---------------------------------------- | --------------------------------------------------------- |
| `fullStream`    | `ReadableStream<StreamChunkEvent>`       | Stream of all chunk events.                               |
| `textStream`    | `ReadableStream<string>`                 | Stream of just text-delta strings (convenience).          |
| `text`          | `Promise<string>`                        | Resolves to the final accumulated assistant text.         |
| `reasoningText` | `Promise<string \| undefined>`           | Resolves to the final accumulated reasoning text, if any. |
| `usage`         | `Promise<LanguageModelUsage>`            | Resolves to the final usage.                              |
| `totalUsage`    | `Promise<LanguageModelUsage>`            | Resolves to the same usage (single-step v0).              |
| `finishReason`  | `Promise<FinishReason>`                  | Resolves to the finish reason.                            |
| `toolCalls`     | `Promise<ToolCall<string, unknown>[]>`   | Resolves to the accumulated tool calls.                   |
| `warnings`      | `Promise<Warning[] \| undefined>`        | Resolves to v0 warnings, if any.                          |
| `response`      | `Promise<ResponseMetadata \| undefined>` | Resolves to response metadata once the stream finishes.   |
| `request`       | `Promise<RequestMetadata \| undefined>`  | Resolves to the request metadata.                         |

On failure, `fullStream` emits `{ type: "error", error }` and then errors, and the promises reject, except `warnings`, which still resolves.

### `TextStreamChunk`

| `type` | Fields |
| --- | --- |
| `"text-delta"` | `id`, `delta` |
| `"reasoning-delta"` | `id`, `delta` |
| `"tool-call"` | `toolCallId`, `toolName`, `input` |
| `"finish"` | `finishReason`, `rawFinishReason`, `usage` |
| `"error"` | `error` |

## Example

```ts title="src/streamAnswer.ts"
import { foundryModel, streamText } from "@osdk/aip-core";
import type { PlatformClient } from "@osdk/client";

export async function streamAnswer(
  client: PlatformClient,
  question: string,
  onText: (delta: string) => void,
) {
  const result = streamText({
    model: foundryModel({ client, model: "gpt-4o" }),
    prompt: question,
  });

  const reader = result.textStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    onText(value);
  }

  return result.finishReason;
}
```

## See also

- [Chat and text generation](https://palantir.github.io/osdk-ts/ai/chat.md)
- [generateText](https://palantir.github.io/osdk-ts/reference/aip-core/generate-text.md)
- [LmsChatTransport](https://palantir.github.io/osdk-ts/reference/aip-core/lms-chat-transport.md)