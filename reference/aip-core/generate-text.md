# generateText

Source: https://palantir.github.io/osdk-ts/reference/aip-core/generate-text

> Generate a complete text response from a Foundry language model in one request.

```ts
import { generateText } from "@osdk/aip-core";

function generateText<TOOLS extends ToolSet = ToolSet>(
  options: GenerateTextOptions<TOOLS>,
): Promise<GenerateTextResult<TOOLS>>;
```

Sends one request to the Foundry Language Model Service and resolves when the model finishes. The call is single-step: when the model requests a tool, the result lists the call in `toolCalls`, and your code runs the tool and sends a follow-up request.

## Options

### GenerateTextOptions

Options for generateText.

| Prop                | Type                                                                                                                               | Description                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `model`             | `LanguageModel`                                                                                                                    | The language model to use. Build one via `foundryModel(...)`. |
| `prompt?`           | `string \| ModelMessage[]`                                                                                                         | Plain text prompt. Mutually exclusive with `messages`.        |
| `messages?`         | `ModelMessage[]`                                                                                                                   | Conversation history. Mutually exclusive with `prompt`.       |
| `system?`           | `string \| SystemModelMessage[] \| SystemModelMessage`                                                                             | System instructions, prepended to the conversation.           |
| `tools?`            | `TOOLS`                                                                                                                            |                                                               |
| `toolChoice?`       | `ToolChoice<TOOLS>`                                                                                                                |                                                               |
| `maxOutputTokens?`  | `number`                                                                                                                           |                                                               |
| `temperature?`      | `number`                                                                                                                           |                                                               |
| `topP?`             | `number`                                                                                                                           |                                                               |
| `presencePenalty?`  | `number`                                                                                                                           |                                                               |
| `frequencyPenalty?` | `number`                                                                                                                           |                                                               |
| `stopSequences?`    | `string[]`                                                                                                                         |                                                               |
| `seed?`             | `number`                                                                                                                           |                                                               |
| `abortSignal?`      | `AbortSignal`                                                                                                                      |                                                               |
| `headers?`          | `Record<string, string \| undefined>`                                                                                              |                                                               |
| `onStepFinish?`     | `((step: StepResult<TOOLS>) => void \| Promise<void>)`                                                                             |                                                               |
| `onFinish?`         | `((event: StepResult<TOOLS> & { steps: Array<StepResult<TOOLS>>; totalUsage: LanguageModelUsage; }) => void \| PromiseLike<void>)` |                                                               |

Pass either `prompt` or `messages`, not both; passing both throws. The call also throws when `system`, `prompt`, and `messages` are all empty. Tool `inputSchema` must be a plain JSON Schema object; any other value is sent as empty parameters and reported in `warnings`.

## Returns

### GenerateTextResult

Result of generateText.

| Prop               | Type                                                   | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| `content`          | `ContentPart<TOOLS>[]`                                 |             |
| `text`             | `string`                                               |             |
| `reasoning`        | `ReasoningOutput[]`                                    |             |
| `reasoningText`    | `string \| undefined`                                  |             |
| `toolCalls`        | `ToolCall<keyof TOOLS & string, unknown>[]`            |             |
| `toolResults`      | `ToolResult<keyof TOOLS & string, unknown, unknown>[]` |             |
| `finishReason`     | `FinishReason`                                         |             |
| `rawFinishReason`  | `string \| undefined`                                  |             |
| `usage`            | `LanguageModelUsage`                                   |             |
| `warnings`         | `Warning[] \| undefined`                               |             |
| `request?`         | `RequestMetadata`                                      |             |
| `response?`        | `ResponseMetadata`                                     |             |
| `providerMetadata` | `ProviderMetadata \| undefined`                        |             |
| `totalUsage`       | `LanguageModelUsage`                                   |             |
| `steps`            | `StepResult<TOOLS>[]`                                  |             |

`steps` always holds one step, and `totalUsage` equals `usage`.

## Example

```ts title="src/summarize.ts"
import { foundryModel, generateText } from "@osdk/aip-core";
import type { PlatformClient } from "@osdk/client";

export async function summarize(client: PlatformClient, notes: string) {
  const { text, usage } = await generateText({
    model: foundryModel({ client, model: "gpt-4o" }),
    system: "Summarize in two sentences.",
    prompt: notes,
    maxOutputTokens: 200,
  });
  console.log(usage);
  return text;
}
```

## See also

- [Chat and text generation](https://palantir.github.io/osdk-ts/ai/chat.md)
- [streamText](https://palantir.github.io/osdk-ts/reference/aip-core/stream-text.md)