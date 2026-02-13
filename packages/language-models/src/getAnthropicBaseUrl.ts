/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { assertPreview } from "./assertPreview.js";
import { getApiGatewayBaseUrl } from "./getApiGatewayBaseUrl.js";
import type { PreviewOptions } from "./PreviewOptions.js";

/**
 * Constructs the Anthropic proxy base URL for the Foundry API Gateway.
 *
 * @param options - Must include `{ preview: true }` to acknowledge use of a beta API.
 * @returns The Anthropic proxy base URL (e.g., "https://example.palantirfoundry.com/api/v1/models/anthropic")
 * @throws Error if the API Gateway base URL cannot be determined.
 *
 * @example
 * ```typescript
 * const baseUrl = getAnthropicBaseUrl({ preview: true });
 * // Returns: "https://example.palantirfoundry.com/api/v1/models/anthropic"
 * ```
 */
export function getAnthropicBaseUrl(options: PreviewOptions): string {
  assertPreview(options);

  const gatewayUrl = getApiGatewayBaseUrl({ preview: true });
  return `${gatewayUrl}/api/v1/models/anthropic`;
}
