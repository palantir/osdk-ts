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
export declare const augmentRequestContext: (client: MinimalClient, augment: (ctx: RequestContext) => Partial<RequestContext>) => MinimalClient;
