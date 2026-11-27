# foundryModel

Source: https://palantir.github.io/osdk-ts/reference/aip-core/foundry-model

> Create a language model handle backed by the Foundry Language Model Service for generateText, streamText, and LmsChatTransport.

```ts
import { foundryModel } from "@osdk/aip-core";

function foundryModel(options: FoundryModelOptions): LanguageModel;
```

Returns an opaque `LanguageModel` that the other `@osdk/aip-core` functions accept. It holds the client and model identifier; it does not send a request.

## Options

### FoundryModelOptions

| Prop     | Type                        | Description                                                 |
| -------- | --------------------------- | ----------------------------------------------------------- |
| `client` | `PlatformClient`            | Foundry PlatformClient providing the auth token + base URL. |
| `model`  | `string \| ModelIdentifier` | LMS model API name or registered model RID.                 |

`client` must be a `PlatformClient` from `createPlatformClient`. A string `model` is an LMS model API name, such as `"gpt-4o"`. To use a registered model, pass `{ type: "registeredModel", registeredModelRid }`.

## Returns

`LanguageModel`:

| Field | Type | Description |
| --- | --- | --- |
| `modelId` | `string` | `"foundry/"` followed by the API name or RID, for logging. |
| `provider` | `string` | Always `"foundry-lms"`. |

## Example

```ts title="src/model.ts"
import { foundryModel } from "@osdk/aip-core";
import { createPlatformClient } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const foundryUrl = "https://example.palantirfoundry.com";
const auth = createPublicOauthClient(
  "<your-client-id>",
  foundryUrl,
  "http://localhost:8080/auth/callback",
);

export const model = foundryModel({
  client: createPlatformClient(foundryUrl, auth),
  model: "gpt-4o",
});
```

## See also

- [Chat and text generation](https://palantir.github.io/osdk-ts/ai/chat.md)