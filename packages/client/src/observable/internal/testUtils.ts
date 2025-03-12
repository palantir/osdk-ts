/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ActionDefinition,
  ActionEditResponse,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
  PageResult,
  WhereClause,
} from "@osdk/api";
import { Chalk } from "chalk";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import invariant from "tiny-invariant";
import type { Mock } from "vitest";
import { afterEach, beforeEach, expect, vi, vitest } from "vitest";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import type { Client } from "../../Client.js";
import { additionalContext } from "../../Client.js";
import type { LogFn, Logger } from "../../Logger.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { Status, Unsubscribable } from "../ObservableClient.js";
import type { Entry } from "./Layer.js";

const chalk = new Chalk(); // new Chalk({ level: 3 });

export interface MockClientHelper {
  client: Mock<Client> & Client;

  mockApplyActionOnce: () => DeferredPromise<Partial<ActionEditResponse>>;

  mockFetchOneOnce: <Q extends ObjectTypeDefinition>(
    expectedId?: string | number | boolean,
  ) => DeferredPromise<
    Partial<
      Osdk.Instance<Q>
    >
  >;

  mockObjectFactory2Once: () => DeferredPromise<
    Osdk.Instance<ObjectOrInterfaceDefinition, never, any, {}>[]
  >;

  mockFetchPageOnce: <
    Q extends ObjectTypeDefinition,
  >(
    expected?: {
      where: WhereClause<any>;
      orderBy: Record<string, "asc" | "desc" | undefined>;
    },
  ) => DeferredPromise<
    PageResult<Partial<Osdk.Instance<Q>>>
  >;
}

function mockLog(...args: any[]) {
  // eslint-disable-next-line no-console
  console.log(
    chalk.yellow("mockClient"),
    ...args,
  );
}
// interface LogFn {
//   (obj: unknown, msg?: string, ...args: any[]): void;
//   (msg: string, ...args: any[]): void;
// }

export function createTestLogger(
  bindings: Record<string, any>,
  options?: { level?: string; msgPrefix?: string },
): Logger {
  const colors = {
    debug: [chalk.cyan, chalk.bgCyan],
    info: [chalk.green, chalk.bgGreen],
    trace: [chalk.gray, chalk.bgGray],
    error: [chalk.red, chalk.bgRed],
    warn: [chalk.yellow, chalk.bgYellow],
    fatal: [chalk.redBright, chalk.bgRedBright],
  } as const;
  function createLogMethod(
    name: "debug" | "error" | "info" | "warn" | "fatal" | "trace",
  ) {
    return vi.fn<LogFn>(
      (
        ...args: [
          obj: unknown,
          ...args1: any[],
        ] | [
          ...args2: any[],
        ]
      ) => {
        const hasData = typeof args[0] !== "string";
        const obj: Record<string, unknown> = hasData ? args[0] as any : {};
        const more: any[] = hasData ? args.slice(1) : args.slice(0);

        // eslint-disable-next-line no-console
        console.log(
          `${colors[name][1](name)}${
            options?.msgPrefix ? " " + colors[name][0](options.msgPrefix) : ""
          }${obj.methodName ? ` .${chalk.magenta(obj.methodName)}()` : ""}`,
          ...more,
        );
        if (bindings && Object.keys(bindings).length > 0) {
          // eslint-disable-next-line no-console
          console.log(bindings);
        }
      },
    ) as LogFn;
  }
  return {
    debug: createLogMethod("debug"),
    error: createLogMethod("error"),
    info: createLogMethod("info"),
    warn: createLogMethod("warn"),
    fatal: createLogMethod("fatal"),
    child: vi.fn<Logger["child"]>((theseBindings, theseOptions) =>
      createTestLogger({
        ...bindings,
        ...theseBindings,
      }, {
        level: (theseOptions ?? options)?.level,
        msgPrefix: options?.msgPrefix || theseOptions?.msgPrefix
          ? `${options?.msgPrefix ? `${options.msgPrefix} ` : ""}${
            theseOptions?.msgPrefix || ""
          }`
          : undefined,
      })
    ),
    trace: createLogMethod("trace"),
    isLevelEnabled: vi.fn((args) => true),
  };
}

export function createClientMockHelper(): MockClientHelper {
  const client = vitest.fn<typeof client>() as unknown as Mock<Client> & Client;

  const logger = createTestLogger({});

  // this is just a fallback for when there is nothing set so we can track whats up
  client.mockImplementation((...args: any[]) => {
    const localLogger = logger.child({}, { msgPrefix: "fallback mock client" });
    try {
      throw new Error("IN THE FALLBACK MOCK CLIENT IMPLEMENTATION");
    } catch (e) {
      localLogger.error("Just for the stack trace", e);
    }

    let where;
    const deadObjectSet = {
      where: (...whereArgs: any[]) => {
        localLogger.trace("where", whereArgs);
        where = whereArgs;
        return deadObjectSet;
      },
      fetchPage: (...fetchArgs: any[]) => {
        localLogger.trace("etchPage", where!, fetchArgs);
        throw new Error("NO");
      },
      fetchOne: (...fetchArgs: any[]) => {
        localLogger.trace("fetchOne", fetchArgs);

        throw new Error("NO");
      },
    };
    return deadObjectSet;
  });

  client[additionalContext] = {
    baseUrl: "http://localhost:8080",
    ontologyRid: "ri.something",
    objectFactory: vitest.fn(),
    objectFactory2: vitest.fn(),
    ontologyProvider: {
      getActionDefinition: vitest.fn(),
      getInterfaceDefinition: vitest.fn(),
      getObjectDefinition: vitest.fn(),
      getQueryDefinition: vitest.fn(),
    },
    tokenProvider: vitest.fn(),
    objectSetFactory: vitest.fn(),
    fetch: vitest.fn(),
    clientCacheKey: {} as any,
    requestContext: {},
    logger,
  };

  function mockObjectFactory2Once() {
    const d = pDefer<
      Osdk.Instance<ObjectOrInterfaceDefinition, never, any, {}>[]
    >();
    vi.mocked(client[additionalContext].objectFactory2).mockReturnValueOnce(
      d.promise,
    );
    return d;
  }

  function mockFetchPageOnce<
    X extends PageResult<
      Osdk.Instance<ObjectTypeDefinition>
    >,
  >(): DeferredPromise<X> {
    const d = pDefer<X>();

    const objectSet: ObjectSet<ObjectTypeDefinition> = {
      fetchPage: async (fetchPageArgs) => {
        mockLog("fetchPage", fetchPageArgs);
        const r = await d.promise;
        return { ...r, $primaryKey: fetchPageArgs };
      },
      where: (clause) => {
        mockLog("where", clause);
        return objectSet;
      },
    } as Pick<
      ObjectSet<ObjectTypeDefinition>,
      "fetchPage" | "where"
    > as ObjectSet<ObjectTypeDefinition>;

    client.mockReturnValueOnce(objectSet);
    return d;
  }

  function mockFetchOneOnce<
    X extends Partial<OsdkBase<any>>,
  >(expectedId?: string | number | boolean): DeferredPromise<X> {
    const d = pDefer<X>();

    client.mockReturnValueOnce(
      {
        fetchOne: async (a) => {
          mockLog("fetchOne", a);
          invariant(
            expectedId === undefined || a === expectedId,
            "expected id to match",
          );
          const r = await d.promise;
          return { ...r, $primaryKey: a };
        },
      } as Pick<ObjectSet<ObjectTypeDefinition>, "fetchOne">,
    );
    return d;
  }

  function mockApplyActionOnce(): DeferredPromise<
    Partial<ActionEditResponse>
  > {
    const d = pDefer<Partial<ActionEditResponse>>();

    client.mockReturnValueOnce(
      {
        applyAction: async (_args): Promise<ActionEditResponse> => {
          const x = await d.promise;
          return {
            type: "edits",
            addedLinks: x.addedLinks ?? [],
            addedObjects: x.addedObjects ?? [],
            deletedObjects: x.deletedObjects ?? [],
            deletedLinks: x.deletedLinks ?? [],
            deletedLinksCount: x.deletedLinksCount ?? 0,
            deletedObjectsCount: x.deletedObjectsCount ?? 0,
            editedObjectTypes: x.editedObjectTypes ?? [],
            modifiedObjects: x.modifiedObjects ?? [],
          };
        },
      } as Pick<
        ActionSignatureFromDef<ActionDefinition>,
        "applyAction"
      >,
    );
    return d;
  }

  return {
    client,
    mockApplyActionOnce,
    mockFetchOneOnce,
    mockObjectFactory2Once,
    mockFetchPageOnce,
  };
}

export function createDefer() {
  let subscriptions: Unsubscribable[];

  beforeEach(() => {
    subscriptions = [];
  });

  afterEach(() => {
    for (const s of subscriptions) {
      s.unsubscribe();
    }
    subscriptions = [];
  });

  return function defer(x: Unsubscribable): Unsubscribable {
    subscriptions.push(x);
    return x;
  };
}

export function expectSingleListCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ListPayload | undefined) => void>,
  resolvedList: Osdk.Instance<T>[],
  payloadOptions: Omit<Partial<ListPayload>, "resolvedList"> = {},
): void {
  if (vitest.isFakeTimers()) {
    vitest.runOnlyPendingTimers();
  }
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    listPayloadContaining({
      ...payloadOptions,
      resolvedList,
    }),
  );
  subFn.mockClear();
}

export function expectSingleObjectCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ObjectPayload | undefined) => void>,
  object: Osdk.Instance<T>,
  status?: Status,
): void {
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      object,
      status: status ?? expect.any(String),
    }),
  );
  subFn.mockClear();
}

export async function waitForCall(
  subFn: Mock<(e: any) => void>,
  times: number = 1,
): Promise<void> {
  try {
    await vi.waitFor(() => {
      expect(subFn).toHaveBeenCalledTimes(times);
    });
  } catch (e) {
    // we don't need the error, it will retrigger on the next line
    // and that provides better behavior in the vitest vscode
    // plugin. This places the error in the test itself instead of
    // only in this file
  }
  expect(subFn).toHaveBeenCalledTimes(times);
}

function createSubscriptionHelper() {
}

export function mockSingleSubCallback():
  & Mock<
    (e: ObjectPayload | undefined) => void
  >
  & {
    // expectLoaded: (value: unknown) => Promise<void>;
    // expectLoading: (value: unknown) => Promise<void>;
    expectLoadingAndLoaded: (q: {
      loading?: unknown;
      loaded: unknown;
    }) => Promise<void>;
  }
{
  const ret = vitest.fn((e: ObjectPayload | undefined) => {});

  //   async function expectLoaded(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenLastCalledWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loaded",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  //   async function expectLoading(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenCalledExactlyOnceWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loading",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  return Object.assign(ret, {
    // expectLoaded,
    // expectLoading,
    expectLoadingAndLoaded: async (
      q: { loading?: unknown; loaded: unknown },
    ) => {
      await waitForCall(ret, 2);

      // as long as we get the loaded call we are happy
      expect(ret).toHaveBeenNthCalledWith(
        1,
        q.loading,
      );
      expect(ret).toHaveBeenNthCalledWith(
        2,
        q.loaded,
      );
      expect(ret).toHaveBeenCalledTimes(2);
      ret.mockClear();
    },
  });
}

export function mockListSubCallback(): Mock<
  (x: ListPayload | undefined) => void
> {
  return vitest.fn(
    (x: ListPayload | undefined) => {},
  );
}

export function cacheEntryContaining(x: Partial<Entry<any>>): Entry<any> {
  return {
    cacheKey: x.cacheKey ?? expect.any(Object),
    value: "value" in x
      ? x.value
      : expect.toBeOneOf([expect.anything(), undefined]),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
  };
}

function nonOptionalValue<T extends object, K extends keyof T>(
  src: T,
  key: K,
): NonNullable<T[K]> {
  return key in src
    ? src[key]
    : expect.toBeOneOf([expect.anything(), undefined]);
}

export function objectPayloadContaining(
  x: Partial<ObjectPayload>,
): ObjectPayload {
  return {
    object: nonOptionalValue(x, "object"),
    isOptimistic: expect.any(Boolean),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
  };
}

export function listPayloadContaining(
  x: Partial<ListPayload>,
): ListPayload {
  return {
    fetchMore: x.fetchMore ?? expect.any(Function),
    hasMore: x.hasMore ?? expect.any(Boolean),
    resolvedList: x.resolvedList ?? expect.anything(),
    isOptimistic: expect.any(Boolean),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
  };
}

export function applyCustomMatchers(): void {
  expect.extend({
    toBeGreaterThan: (r: number, e: number) => {
      return {
        pass: r > e,
        message: () => `expected ${r} to be greater than ${e} (lastUpdated)`,
      };
    },
  });
}

interface CustomMatchers<R = any> {
  toBeGreaterThan: (n: number) => R;
}

interface CustomAsymmetricMatchers<R = any> {
  toBeGreaterThan: (n: number) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomAsymmetricMatchers {}
}
