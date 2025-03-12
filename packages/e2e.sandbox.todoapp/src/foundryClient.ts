import type { Logger } from "@osdk/client";
import { createClient } from "@osdk/client";
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

 
declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

function createStyle({ color }: { color: string }) {
  return `color: ${color}; border: 1px solid ${color}; padding: 2px; border-radius: 3px;`;
}

const levelStyles = {
  debug: createStyle({
    color: "LightBlue",
  }),
  error: createStyle({
    color: "red",
  }),
  fatal: createStyle({
    color: "red",
  }),
  info: createStyle({
    color: "green",
  }),
  trace: createStyle({
    color: "gray",
  }),
  warn: createStyle({
    color: "orange",
  }),
};

export function createLogger(
  bindings: Record<string, any>,
  options?: { level?: string; msgPrefix?: string },
): Logger {
  function createLogMethod(
    name: "debug" | "error" | "info" | "warn" | "fatal" | "trace",
  ): LogFn {
    const msgs: string[] = [`%c${name}%c`];
    const styles: string[] = [levelStyles[name], ""];

    // const params = ["%c%s", levelStyles[name], name];
    if (options?.msgPrefix) {
      msgs.push(`%c${options.msgPrefix}%c`);
      styles.push(
        "font-style: italic; color: gray",
        // "border: 1px solid green; ",
        "",
      );
    }

    if (typeof bindings === "object" && "methodName" in bindings) {
      msgs.push(`%c.${bindings.methodName}()%c`);
      styles.push(
        "font-style: italic;color: orchid",
        "",
      );
    }

    return console[name === "fatal" ? "error" : name].bind(
      console,
      msgs.join(" "),
      ...styles,
      // ...args,
    );
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
        msgPrefix: [options?.msgPrefix, theseOptions?.msgPrefix].filter(x => x)
          .join(""),
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
