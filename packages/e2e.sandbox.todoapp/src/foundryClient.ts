import type { Logger } from "@osdk/client";
import { createClient } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { createObservableClient } from "@osdk/client/unstable-do-not-use";
import { createPublicOauthClient } from "@osdk/oauth";
import invariant from "tiny-invariant";
import { $ontologyRid } from "./generatedNoCheck2/index.js";

invariant(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  "VITE_FOUNDRY_CLIENT_ID is required",
);
invariant(import.meta.env.VITE_FOUNDRY_URL, "VITE_FOUNDRY_URL is required");

const auth = createPublicOauthClient(
  import.meta.env.VITE_FOUNDRY_CLIENT_ID,
  // import.meta.env.VITE_FOUNDRY_URL,
  "http://localhost:8080",
  "http://localhost:8080/auth/callback",
  { useHistory: true },
);

export interface LogFn {
  (obj: unknown, msg?: string, ...args: any[]): void;
  (msg: string, ...args: any[]): void;
}

export function createLogger(
  bindings: Record<string, any>,
  options?: { level?: string; msgPrefix?: string },
): Logger {
  function createLogMethod(
    name: "debug" | "error" | "info" | "warn" | "fatal" | "trace",
  ): LogFn {
    return ((
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

      console[name === "fatal" ? "error" : name === "trace" ? "debug" : name](
        `${name}${options?.msgPrefix ? " " + options.msgPrefix : ""}${
          obj.methodName ? ` .${(obj.methodName as string)}()` : ""
        }`,
        ...more,
      );

      if (bindings && Object.keys(bindings).length > 0) {
        console.log(bindings);
      }
    });
  }
  return {
    debug: createLogMethod("debug"),
    error: createLogMethod("error"),
    info: createLogMethod("info"),
    warn: createLogMethod("warn"),
    fatal: createLogMethod("fatal"),
    child: (theseBindings, theseOptions) =>
      createLogger({
        ...bindings,
        ...theseBindings,
      }, {
        level: (theseOptions ?? options)?.level,
        msgPrefix: options?.msgPrefix || theseOptions?.msgPrefix
          ? `${options?.msgPrefix ? `${options.msgPrefix} ` : ""}${
            theseOptions?.msgPrefix || ""
          }`
          : undefined,
      }),
    trace: createLogMethod("trace"),
    isLevelEnabled: ((level) => !!level), // always true, no error from tsc
  };
}

export const $ = createClient(
  "http://localhost:8080",
  $ontologyRid,
  auth,
  { logger: createLogger({}) },
);

export const store: ObservableClient = createObservableClient($);
