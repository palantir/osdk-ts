#!/usr/bin/env node

// Internally, there is code that invokes the CLI this way (not via normal npm execution)
// so we have this file to ensure we don't break them.
const cli = require("@osdk/foundry-sdk-generator");
cli.cli();
