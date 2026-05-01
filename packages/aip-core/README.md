# @osdk/aip-core

Core building blocks for AIP applications backed by the Foundry Language Model Service (LMS). Provides streaming chat completions, tool calling, and an AI SDK adapter.

## Installation

```sh
pnpm add @osdk/aip-core
```

Peer dependencies:

```sh
pnpm add @osdk/client @osdk/language-models
```

## Native API

### `foundryModel`

Creates a language model handle for Foundry LMS.

```ts
import { foundryModel } from "@osdk/aip-core";

const model = foundryModel({
  client, // PlatformClient from @osdk/client
  model: "gpt-4o", // LMS model API name or a ModelIdentifier
});
```

The `model` parameter accepts either a string (LMS API name like `"gpt-4o"`) or a structured identifier:

```ts
// Built-in LMS model
{ type: "lmsModel", apiName: "gpt-4o" }

// Customer-registered model
{ type: "registeredModel", registeredModelRid: "ri.language-model-service..." }
```

### `generateText`

Performs a single chat completion and returns the full result.

```ts
import { foundryModel, generateText } from "@osdk/aip-core";

const model = foundryModel({ client, model: "gpt-4o" });

const result = await generateText({
  model,
  prompt: "Summarize the key points of this document.",
});

console.log(result.text);
console.log(result.usage); // { inputTokens, outputTokens, totalTokens, ... }
```

#### With system instructions

```ts
const result = await generateText({
  model,
  system: "You are a helpful assistant that responds concisely.",
  messages: [
    { role: "user", content: "What is TypeScript?" },
  ],
});
```

#### With tool calling

```ts
const result = await generateText({
  model,
  prompt: "What's the weather in London?",
  tools: {
    getWeather: {
      description: "Get the current weather for a location",
      inputSchema: {
        type: "object",
        properties: {
          location: { type: "string" },
        },
        required: ["location"],
      },
    },
  },
  toolChoice: "auto",
});

for (const call of result.toolCalls) {
  console.log(call.toolName, call.input);
}
```

#### Callbacks

```ts
const result = await generateText({
  model,
  prompt: "Hello",
  onStepFinish: (step) => {
    console.log("Step finished:", step.finishReason);
  },
  onFinish: (event) => {
    console.log("Total usage:", event.totalUsage);
  },
});
```

#### Sampling parameters

| Parameter          | Description                      |
| ------------------ | -------------------------------- |
| `maxOutputTokens`  | Maximum tokens to generate       |
| `temperature`      | Randomness (0 = deterministic)   |
| `topP`             | Nucleus sampling threshold       |
| `presencePenalty`  | Penalize repeated topics         |
| `frequencyPenalty` | Penalize repeated tokens         |
| `stopSequences`    | Stop generation at these strings |
| `seed`             | Deterministic sampling seed      |

## AI SDK Provider

`@osdk/aip-core` ships a custom provider for the [AI SDK](https://ai-sdk.dev), allowing you to use Foundry LMS models with `generateText`, `streamText`, and other AI SDK functions.

### Additional dependencies

```sh
pnpm add ai @ai-sdk/provider
```

### Usage

```ts
import { createFoundryAI } from "@osdk/aip-core/ai-sdk";
import { generateText } from "ai";

const foundryAI = createFoundryAI({ client });

const { text } = await generateText({
  model: foundryAI("gpt-4o"),
  prompt: "Hello, world",
});
```

### Streaming

```ts
import { createFoundryAI } from "@osdk/aip-core/ai-sdk";
import { streamText } from "ai";

const foundryAI = createFoundryAI({ client });

const result = streamText({
  model: foundryAI("gpt-4o"),
  prompt: "Write a poem about TypeScript.",
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}
```

### Registered models

```ts
const model = foundryAI({
  type: "registeredModel",
  registeredModelRid: "ri.language-model-service...",
});
```

### Tool calling with AI SDK

```ts
import { createFoundryAI } from "@osdk/aip-core/ai-sdk";
import { generateText, tool } from "ai";
import { z } from "zod";

const foundryAI = createFoundryAI({ client });

const result = await generateText({
  model: foundryAI("gpt-4o"),
  prompt: "What's the weather in London?",
  tools: {
    getWeather: tool({
      description: "Get the current weather for a location",
      parameters: z.object({ location: z.string() }),
      execute: async ({ location }) => {
        return { temperature: 18, condition: "cloudy" };
      },
    }),
  },
});
```

## v0 Limitations

The current release (v0) has the following limitations. Unsupported options surface as warnings in the result rather than throwing errors.

- **Single-step only** — multi-step tool loops (`stopWhen`, `prepareStep`) are not yet supported
- **Text content only** — image and file parts in messages are ignored with a warning
- **No structured output** — JSON response format is not yet wired
- **No `topK`** — the Foundry LMS OpenAI proxy does not accept this parameter

## License

Apache-2.0
