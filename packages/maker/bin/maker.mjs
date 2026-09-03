#!/usr/bin/env node
// @ts-check

import { consola, LogLevels } from "consola";

import cli from "../build/esm/index.js";

cli().catch((e) => {
  // Errors that maker throws get buried by node's unhandled-rejection stack trace if we don't
  // explicitly handle it.
  if (consola.level >= LogLevels.debug) {
    consola.error(e);
  } else {
    consola.error(e instanceof Error ? e.message : e);
    consola.log("💡 Tip: re-run with -v to see the full stack trace");
  }
  process.exitCode = 1;
});
