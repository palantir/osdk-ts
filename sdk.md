# TypeScript SDK overview

Source: https://palantir.github.io/osdk-ts/sdk

> Query objects, apply actions, and run functions from any TypeScript runtime with @osdk/client, in Node.js scripts, servers, Vue, or any framework.

Related Palantir Foundry documentation:
- [TypeScript OSDK](https://www.palantir.com/docs/foundry/ontology-sdk/typescript-osdk)

`@osdk/client` reads and edits your Ontology from any JavaScript runtime with `fetch`: Node.js scripts and servers, serverless functions, and browser apps in any framework. It has no UI dependency. Your generated SDK supplies typed definitions for your object types, interfaces, actions, and functions, and the client runs them.

## Install

Your generated SDK comes from your Foundry npm registry. Set up `.npmrc` as described in [Installation](https://palantir.github.io/osdk-ts/installation.md), then:

```npm
npm install @osdk/client @osdk/api @osdk/oauth @my-app/sdk@latest
```

Create one client for your app with `createClient`, as described in [Create a client](https://palantir.github.io/osdk-ts/client.md). [Authentication](https://palantir.github.io/osdk-ts/authentication.md) covers the token provider. The samples in this section import that client from `./client`.

## Example

```ts title="src/index.ts"
import { Employee, modifyEmployee } from "@my-app/sdk";
import { client } from "./client";

const page = await client(Employee)
  .where({ department: "Engineering", jobTitle: { $isNull: true } })
  .fetchPage({ $select: ["fullName"], $pageSize: 20 });

for (const employee of page.data) {
  await client(modifyEmployee).applyAction({ employee, jobTitle: "Engineer" });
  console.log(`Set title for ${employee.fullName}`);
}
```

The query runs on the server and returns typed objects. Each `applyAction` call validates and applies one edit. In real code, wrap it in `try`/`catch`, as shown in [Actions](https://palantir.github.io/osdk-ts/sdk/actions.md).

## One entry point: `client(definition)`

Call `client` with a definition from your SDK. What it returns depends on the definition:

| You pass | You get | Main methods |
| --- | --- | --- |
| An object type, such as `Employee` | An object set of every object of that type | `fetchOne`, `fetchPage`, `asyncIter`, `where`, `aggregate`, `pivotTo`, `withProperties`, `subscribe` |
| An interface, such as `Worker` | An object set over every type that implements it | The same, except `fetchOne` |
| An action, such as `modifyEmployee` | An action invoker | `applyAction`, `batchApplyAction` |
| A function (query) | A function invoker | `executeFunction` |

Object sets are lazy descriptions. `where`, `pivotTo`, `union`, and `withProperties` return new object sets without sending a request. A request goes out when you call a method that loads data: `fetchOne`, `fetchPage`, `asyncIter`, `aggregate`, or `subscribe`.

`client.fetchMetadata(definition)` loads the definition from Foundry at runtime, such as an object type's `displayName`, `description`, and `icon`, or an interface's `implementedBy`.

## Relation to `@osdk/react`

`@osdk/react` is built on this client. Its hooks accept the same `where` clauses, derived property definitions, and action parameters, and add a shared cache that keeps components current after actions and live updates. In a React app, use the hooks for data you render and call the client directly for one-off work, such as exports. See [Objects in React](https://palantir.github.io/osdk-ts/react/objects.md).

Outside React, framework guides show how to wire the client in [Node.js](https://palantir.github.io/osdk-ts/frameworks/node.md) and [Vue](https://palantir.github.io/osdk-ts/frameworks/vue.md).

## In this section

- [Load objects](https://palantir.github.io/osdk-ts/sdk/objects.md): fetchOne, fetchPage, asyncIter, $select, sorting, and the object shape.
- [Filter objects](https://palantir.github.io/osdk-ts/sdk/filtering.md): Every where operator, with examples.
- [Links and object sets](https://palantir.github.io/osdk-ts/sdk/links.md): Follow links, pivot sets, and combine them.
- [Interfaces](https://palantir.github.io/osdk-ts/sdk/interfaces.md): Query across object types and convert between views.
- [Aggregations](https://palantir.github.io/osdk-ts/sdk/aggregations.md): Counts, metrics, and group-bys on the server.
- [Derived properties](https://palantir.github.io/osdk-ts/sdk/derived-properties.md): Compute properties at query time with withProperties.
- [Actions](https://palantir.github.io/osdk-ts/sdk/actions.md): Apply, validate, and batch edits.
- [Functions](https://palantir.github.io/osdk-ts/sdk/functions.md): Run Foundry functions and read their results.
- [Attachments and media](https://palantir.github.io/osdk-ts/sdk/media.md): Download and upload files.
- [Subscriptions](https://palantir.github.io/osdk-ts/sdk/subscriptions.md): Receive live updates for an object set.
- [Errors](https://palantir.github.io/osdk-ts/sdk/errors.md): Error types, retries, and handling patterns.