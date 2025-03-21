import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';
import { colorize } from 'consola/utils';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { valid } from 'semver';

// ../cli.common/build/esm/ExitProcessError.js
init_esm_shims();
var ExitProcessError = class extends Error {
  constructor(errorCode, msg, tip, originalError) {
    super(msg);
    this.errorCode = errorCode;
    this.msg = msg;
    this.tip = tip;
    this.originalError = originalError;
  }
};

// ../cli.common/build/esm/YargsCheckError.js
init_esm_shims();
var YargsCheckError = class extends Error {
  constructor(msg) {
    super(msg);
  }
};

// ../cli.common/build/esm/index.js
init_esm_shims();

// ../cli.common/build/esm/getYargsBase.js
init_esm_shims();

// ../cli.common/build/esm/yargs/logLevelMiddleware.js
init_esm_shims();
var firstTime = true;
async function logLevelMiddleware(args) {
  if (firstTime) {
    firstTime = false;
    consola.level = 3 + args.verbose;
    if (consola.level > 3) {
      consola.debug(`Verbose logging enabled (${consola.level === 4 ? "debug" : "trace"})
`);
    }
  }
}

// ../cli.common/build/esm/getYargsBase.js
function getYargsBase(args) {
  return yargs(hideBin(args)).wrap(Math.min(150, yargs().terminalWidth())).env("OSDK").version(false).option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Enable verbose logging",
    count: true
  }).demandCommand().middleware(logLevelMiddleware, true).strict().fail(async (msg, err, argv) => {
    if (err instanceof ExitProcessError) {
      consola.error(err.message);
      if (err.tip != null) {
        consola.log(colorize("bold", `\u{1F4A1} Tip: ${err.tip}`));
        consola.log("");
      }
      consola.debug(err.stack);
    } else {
      if (err && err instanceof YargsCheckError === false) {
        throw err;
      } else {
        argv.showHelp();
        consola.log("");
        consola.error(msg);
      }
    }
    process.exit(1);
  });
}

// ../cli.common/build/esm/util/isValidSemver.js
init_esm_shims();
function isValidSemver(semverString) {
  return valid(semverString) != null;
}

export { ExitProcessError, YargsCheckError, getYargsBase, isValidSemver };
//# sourceMappingURL=chunk-2U36M44D.js.map
//# sourceMappingURL=chunk-2U36M44D.js.map