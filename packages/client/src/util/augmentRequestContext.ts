/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { MinimalClient, RequestContext } from "../MinimalClientContext.js";

/**
Returns a client with its `requestContext` merged with the result of applying
`augment` to its `requestContext`.

The second argument is an `Partial<RequestContext>`-returning `augment` function
instead of a `RequestContext` object to make referencing the current request
context easier. For example, modifying the `fetchPage` function to add its name
to the object set's called method chain could look like:
```
augmentRequestContext(
  clientContext,
  ctx => ({ methodChain: [...ctx.methodChain, "fetchPage"] })
)
```
or
```
augmentRequestContext(
  clientContext,
  ({ methodChain }) => ({ methodChain: [...methodChain, "fetchPage"] })
)
```
instead of
```
augmentRequestContext(
  clientContext,
  { methodChain: [...clientContext.requestContext.methodChain, "fetchPage"] }
)
```
*/
export const augmentRequestContext = (
  client: MinimalClient,
  augment: (ctx: RequestContext) => Partial<RequestContext>,
): MinimalClient => ({
  ...client,
  requestContext: {
    ...client.requestContext,
    ...augment(client.requestContext),
  },
});
