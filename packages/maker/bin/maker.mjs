#!/usr/bin/env node
// @ts-check

import { consola } from "consola";

import cli from "../build/esm/index.js";

cli().catch((e) => {
  // A validation failure's message is the report the author is meant to read, so print it alone —
  // consola renders the stack if handed the Error itself, which buries it. Anything else is a bug
  // in maker and keeps its stack.
  //
  // Discriminating on `name` rather than `instanceof MakerValidationError` keeps that class off
  // the package's public API; see src/MakerValidationError.ts.
  if (e instanceof Error && e.name === "MakerValidationError") {
    consola.error(e.message);
  } else {
    consola.error(e);
  }
  // Not `process.exit`: when stderr is a pipe rather than a terminal — CI capturing the build log,
  // most notably — writes to it are asynchronous, and exiting outright can drop the report we just
  // queued. Setting the code lets the process end once the write drains.
  process.exitCode = 1;
});
