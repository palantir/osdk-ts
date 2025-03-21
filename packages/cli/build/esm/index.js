import { loadFoundryConfig } from './chunk-MU54JM45.js';
import { MANIFEST_FILE_LOCATION } from './chunk-ML7ZMS6G.js';
import { getYargsBase, ExitProcessError, YargsCheckError, isValidSemver } from './chunk-2U36M44D.js';
import './chunk-KJFA7LBI.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/index.ts
init_esm_shims();

// src/cli.ts
init_esm_shims();

// ../cli.cmd.typescript/build/esm/index.js
init_esm_shims();

// ../cli.cmd.typescript/build/esm/cli.js
init_esm_shims();

// ../cli.cmd.typescript/build/esm/generate/generate.js
init_esm_shims();
var generateCommand = {
  command: "generate",
  describe: "Generate TypeScript SDK from ontology",
  builder: (argv) => {
    return argv.options({
      outDir: {
        type: "string",
        description: "Where to place the generated files",
        demandOption: true
      },
      ontologyPath: {
        description: "Path to the ontology wire json",
        type: "string",
        demandOption: false,
        conflicts: ["foundryUrl", "clientId"]
      },
      foundryUrl: {
        description: "URL for the foundry stack that contains the ontology",
        type: "string",
        demandOption: false,
        conflicts: "ontologyPath",
        implies: "clientId",
        alias: "stack"
        // for backwards compatibility
      },
      clientId: {
        description: "OAuth client ID for application",
        type: "string",
        demandOption: false,
        conflicts: "ontologyPath",
        implies: "foundryUrl"
      },
      ontologyRid: {
        description: "Limit requests to this ontology rid only",
        type: "string",
        demandOption: false
      },
      ontologyWritePath: {
        description: "Path to write the ontology wire json",
        type: "string",
        demandOption: false,
        conflicts: ["ontologyPath"]
      },
      beta: {
        type: "boolean",
        description: "Should generate beta sdk",
        demandOption: false
      },
      packageType: {
        default: "commonjs",
        choices: ["commonjs", "module"]
      },
      version: {
        type: "string",
        description: "Version of the generated code, or 'dev'",
        demandOption: true
      },
      packageName: {
        type: "string",
        description: "Name of the package to generate"
      },
      asPackage: {
        type: "boolean",
        description: "Generate as a package (makes a package.json and co)"
      },
      clean: {
        type: "boolean",
        description: "Clean the output directory before generating"
      },
      internal: {
        type: "boolean",
        default: false
      },
      externalObjects: {
        type: "string",
        coerce: (value) => {
          const map = /* @__PURE__ */ new Map();
          if (value) {
            for (const entry of value.split(",")) {
              const [api, ns] = entry.split(":");
              map.set(api, ns);
            }
          }
          return map;
        },
        default: ""
      },
      externalInterfaces: {
        type: "string",
        coerce: (value) => {
          const map = /* @__PURE__ */ new Map();
          if (value) {
            for (const entry of value.split(",")) {
              const [api, ns] = entry.split(":");
              map.set(api, ns);
            }
          }
          return map;
        },
        default: ""
      }
    }).group(["ontologyPath", "outDir", "version"], "Generate from a local file").group(["foundryUrl", "clientId", "outDir", "ontologyWritePath", "version"], "OR Generate from Foundry").group(["packageName", "as"], "Package generation options").check((args) => {
      if (!args.ontologyPath && !args.foundryUrl) {
        throw new YargsCheckError("Must specify either ontologyPath or foundryUrl and clientId");
      }
      if (args.version !== "dev" && !isValidSemver(args.version)) {
        throw new YargsCheckError("Version must be 'dev' or a valid semver version");
      }
      if (args.asPackage && !args.packageName) {
        throw new YargsCheckError("Must specify packageName when generating as a package");
      }
      if (args.asPackage && !args.version) {
        throw new YargsCheckError("Must specify version when generating as a package");
      }
      return true;
    });
  },
  handler: async (args) => {
    const command16 = await import('./handleGenerate-R3MLMAEG.js');
    await command16.handleGenerate(args);
  }
};

// ../cli.cmd.typescript/build/esm/typescriptCommand.js
init_esm_shims();
var typescriptCommand = {
  command: "typescript",
  describe: "Manage code",
  builder: (argv) => {
    return argv.command(generateCommand).demandCommand();
  },
  handler: async () => {
  }
};

// src/commands/auth/index.ts
init_esm_shims();

// src/commands/auth/login/index.ts
init_esm_shims();
var command = {
  command: "login",
  describe: "Authenticate with an application ID",
  builder: (argv) => {
    return argv.option("clientId", {
      alias: "applicationId",
      // for backwards compatibility
      type: "string",
      demandOption: true,
      describe: "OAuth client ID for application"
    });
  },
  handler: async (args) => {
    const command16 = await import('./loginFlow-ETZCNKG3.js');
    await command16.default(args);
  }
};
var login_default = command;

// src/commands/auth/index.ts
var auth = {
  command: "auth",
  describe: "Manage your session",
  builder: (argv) => {
    return argv.options({
      foundryUrl: {
        type: "string",
        demandOption: true,
        alias: "baseUrl",
        // for backwards compatibility
        describe: "URL for the Foundry stack"
      }
    }).command(login_default).demandCommand();
  },
  handler: async (args) => {
  }
};
var auth_default = auth;

// src/commands/site/index.ts
init_esm_shims();

// src/util/configLoader.ts
init_esm_shims();
var siteConfigPromise = undefined;
var widgetSetConfigPromise = undefined;
function getConfig(type) {
  if (type === "site") {
    return getSiteConfig();
  } else {
    return getWidgetSetConfig();
  }
}
function getSiteConfig() {
  if (siteConfigPromise == null) {
    siteConfigPromise = loadFoundryConfig("site").catch((e) => {
      throw new ExitProcessError(2, e instanceof Error ? e.message : undefined);
    });
  }
  return siteConfigPromise;
}
function getWidgetSetConfig() {
  if (widgetSetConfigPromise == null) {
    widgetSetConfigPromise = loadFoundryConfig("widgetSet").catch((e) => {
      throw new ExitProcessError(2, e instanceof Error ? e.message : undefined);
    });
  }
  return widgetSetConfigPromise;
}
var configLoader_default = getConfig;

// src/yargs/logConfigFileMiddleware.ts
init_esm_shims();
var firstTime = true;
async function logConfigFileMiddleware(type) {
  if (firstTime) {
    firstTime = false;
    const config = configLoader_default(type);
    const configFilePath = (await config)?.configFilePath;
    if (configFilePath) {
      consola.debug(`Using configuration from file: "${configFilePath}"`);
    }
  }
}

// src/commands/site/deploy/index.ts
init_esm_shims();

// src/commands/site/deploy/logSiteDeployCommandConfigFileOverride.ts
init_esm_shims();
async function logSiteDeployCommandConfigFileOverride(args, config) {
  if (config?.autoVersion != null && args.autoVersion !== config.autoVersion.type) {
    consola.debug(`Overriding "autoVersion" from config file with ${args.autoVersion}`);
  }
  if (config?.directory != null && args.directory !== config.directory) {
    consola.debug(`Overriding "directory" from config file with ${args.directory}`);
  }
  if (config?.autoVersion?.type === "git-describe" && config.autoVersion.tagPrefix != null && args.gitTagPrefix != null && args.gitTagPrefix !== config.autoVersion.tagPrefix) {
    consola.debug(`Overriding "gitTagPrefix" from config file with ${args.gitTagPrefix}`);
  }
  if (config?.uploadOnly != null && args.uploadOnly !== config.uploadOnly) {
    consola.debug(`Overriding "uploadOnly" from config file with ${args.uploadOnly}`);
  }
}

// src/commands/site/deploy/index.ts
var command2 = {
  command: "deploy",
  describe: "Deploy a new site version",
  builder: async (argv) => {
    const config = await configLoader_default("site");
    const siteConfig = config?.foundryConfig.site;
    const directory = siteConfig?.directory;
    const autoVersion = siteConfig?.autoVersion;
    const gitTagPrefix = autoVersion?.type === "git-describe" ? autoVersion.tagPrefix : undefined;
    const uploadOnly = siteConfig?.uploadOnly;
    return argv.options({
      directory: {
        type: "string",
        description: "Directory containing site files",
        ...directory ? {
          default: directory
        } : {
          demandOption: true
        }
      },
      uploadOnly: {
        type: "boolean",
        description: "Upload new site version only without setting as live",
        default: uploadOnly ?? false
      },
      version: {
        type: "string",
        description: "New version of site to deploy",
        ...autoVersion == null ? {
          conflicts: "autoVersion"
        } : {}
      },
      autoVersion: {
        coerce: (autoVersion2) => autoVersion2,
        type: "string",
        choices: ["git-describe", "package-json"],
        description: "Enable auto versioning",
        ...autoVersion != null ? {
          default: autoVersion.type
        } : {
          conflicts: "version"
        }
      },
      gitTagPrefix: {
        type: "string",
        description: "Prefix to match git tags on when 'git-describe' auto versioning is used. If not provided, all tags are matched and the prefix 'v' is stripped if present.",
        ...gitTagPrefix ? {
          default: gitTagPrefix
        } : {}
      },
      snapshot: {
        type: "boolean",
        description: "Upload a snapshot version only with automatic retention",
        default: false
      },
      snapshotId: {
        type: "string",
        description: "Optional id to associate with snapshot version as an alias"
      }
    }).group(["directory", "version", "uploadOnly"], "Deploy Options").group(["autoVersion", "gitTagPrefix"], "Auto Version Options").group(["snapshot", "snapshotId"], "Snapshot Options").check((args) => {
      if (autoVersion == null && args.autoVersion == null && args.version == null) {
        throw new YargsCheckError("One of --version or --autoVersion must be specified");
      }
      if (args.version != null && !isValidSemver(args.version)) {
        throw new YargsCheckError(`--version "${args.version}" must be a valid SemVer string`);
      }
      const autoVersionType = args.autoVersion ?? autoVersion;
      if (autoVersionType !== "git-describe" && autoVersionType !== "package-json") {
        throw new YargsCheckError(`Only 'git-describe' and 'package-json' are supported for autoVersion`);
      }
      const gitTagPrefixValue = args.gitTagPrefix ?? gitTagPrefix;
      if (gitTagPrefixValue != null && autoVersionType !== "git-describe") {
        throw new YargsCheckError(`--gitTagPrefix is only supported when --autoVersion=git-describe`);
      }
      if (args.uploadOnly && args.snapshot) {
        throw new YargsCheckError(`--uploadOnly and --snapshot cannot be enabled together`);
      }
      if (args.snapshotId != null && !args.snapshot) {
        throw new YargsCheckError("--snapshotId is only supported when --snapshot is enabled");
      }
      return true;
    }).middleware((args) => logSiteDeployCommandConfigFileOverride(args, siteConfig));
  },
  handler: async (args) => {
    const command16 = await import('./siteDeployCommand-MQM2IA4G.js');
    const {
      version,
      autoVersion,
      gitTagPrefix,
      ...restArgs
    } = args;
    const selectedVersion = args.version != null ? args.version : {
      type: args.autoVersion,
      tagPrefix: args.gitTagPrefix
    };
    await command16.default({
      ...restArgs,
      selectedVersion
    });
  }
};
var deploy_default = command2;

// src/commands/site/logSiteCommandConfigFileOverride.ts
init_esm_shims();
async function logSiteCommandConfigFileOverride(args, config) {
  if (config?.site.application != null && args.application !== config.site.application) {
    consola.debug(`Overriding "application" from config file with ${args.application}`);
  }
  if (config?.foundryUrl != null && args.foundryUrl !== config.foundryUrl) {
    consola.debug(`Overriding "foundryUrl" from config file with ${args.foundryUrl}`);
  }
}

// src/commands/site/version/index.ts
init_esm_shims();

// src/commands/site/version/delete/index.ts
init_esm_shims();
var command3 = {
  command: "delete <version>",
  describe: "Delete site version",
  builder: (argv) => {
    return argv.positional("version", {
      type: "string",
      demandOption: true,
      description: "Version to delete"
    }).option("yes", {
      alias: "y",
      type: "boolean",
      description: "Automatically confirm destructive changes"
    }).group(["yes"], "Delete Options");
  },
  handler: async (args) => {
    const command16 = await import('./versionDeleteCommand-JDE6I3BF.js');
    await command16.default(args);
  }
};
var delete_default = command3;

// src/commands/site/version/get/index.ts
init_esm_shims();
var command4 = {
  command: "get",
  describe: "Get live site version",
  builder: (argv) => {
    return argv;
  },
  handler: async (args) => {
    const command16 = await import('./versionGetCommand-PITWHVJK.js');
    await command16.default(args);
  }
};
var get_default = command4;

// src/commands/site/version/list/index.ts
init_esm_shims();
var command5 = {
  command: "list",
  describe: "List site versions",
  builder: (argv) => {
    return argv;
  },
  handler: async (args) => {
    const command16 = await import('./versionListCommand-2KDPD4TP.js');
    await command16.default(args);
  }
};
var list_default = command5;

// src/commands/site/version/set/index.ts
init_esm_shims();
var command6 = {
  command: "set <version>",
  describe: "Set live site version",
  builder: (argv) => {
    return argv.positional("version", {
      type: "string",
      demandOption: true,
      description: "Version to set as live"
    });
  },
  handler: async (args) => {
    const command16 = await import('./versionSetCommand-DQGQDUGI.js');
    await command16.default(args);
  }
};
var set_default = command6;

// src/commands/site/version/unset/index.ts
init_esm_shims();
var command7 = {
  command: "unset",
  describe: "Clear live site version",
  builder: (argv) => {
    return argv.option("yes", {
      alias: "y",
      type: "boolean",
      description: "Automatically confirm destructive changes"
    }).group(["yes"], "Unset Options");
  },
  handler: async (args) => {
    const command16 = await import('./versionUnsetCommand-7RARRL4E.js');
    await command16.default(args);
  }
};
var unset_default = command7;

// src/commands/site/version/index.ts
var command8 = {
  command: "version",
  describe: "Manage site versions",
  builder: (argv) => {
    return argv.command(list_default).command(get_default).command(set_default).command(unset_default).command(delete_default).demandCommand();
  },
  handler: async (args) => {
  }
};
var version_default = command8;

// src/commands/site/index.ts
var command9 = {
  command: "site",
  describe: "Manage your site",
  builder: async (argv) => {
    const config = await configLoader_default("site");
    const application = config?.foundryConfig.site.application;
    const foundryUrl = config?.foundryConfig.foundryUrl;
    return argv.options({
      application: {
        type: "string",
        coerce: (application2) => application2,
        ...application ? {
          default: application
        } : {
          demandOption: true
        },
        description: "Application resource identifier (rid)"
      },
      foundryUrl: {
        coerce: (foundryUrl2) => foundryUrl2.replace(/\/$/, ""),
        type: "string",
        ...foundryUrl ? {
          default: foundryUrl
        } : {
          demandOption: true
        },
        description: "URL for the Foundry stack"
      },
      token: {
        type: "string",
        conflicts: "tokenFile",
        description: "Foundry API token"
      },
      tokenFile: {
        type: "string",
        conflicts: "token",
        description: "Path to file containing Foundry API token"
      }
    }).group(["application", "foundryUrl", "token", "tokenFile"], "Common Options").command(version_default).command(deploy_default).check((args) => {
      if (!args.foundryUrl.startsWith("https://")) {
        throw new YargsCheckError("foundryUrl must start with https://");
      }
      return true;
    }).middleware((args) => {
      void logConfigFileMiddleware("site");
      void logSiteCommandConfigFileOverride(args, config?.foundryConfig);
    }).demandCommand();
  },
  handler: async (args) => {
  }
};
var site_default = command9;

// src/commands/widgetset/index.ts
init_esm_shims();

// src/commands/widgetset/deploy/index.ts
init_esm_shims();

// src/commands/widgetset/deploy/logWidgetSetDeployCommandConfigFileOverride.ts
init_esm_shims();
function logWidgetSetDeployCommandConfigFileOverride(args, config) {
  if (config?.directory != null && args.directory !== config.directory) {
    consola.debug(`Overriding "directory" from config file with ${args.directory}`);
  }
  if (config?.repository != null && args.repository !== config.repository) {
    consola.debug(`Overriding "repository" from config file with ${args.repository}`);
  }
}

// src/commands/widgetset/deploy/index.ts
var command10 = {
  command: "deploy",
  describe: `Deploy a new widget set version

The widget set files must contain a valid manifest at ${MANIFEST_FILE_LOCATION} which determines the version to publish. The widget set files may be uploaded to the widget set itself, or to a separate code repository if it has been authorized to publish the widget set.`,
  builder: async (argv) => {
    const config = await configLoader_default("widgetSet");
    const widgetSetConfig = config?.foundryConfig.widgetSet;
    const directory = widgetSetConfig?.directory;
    const repository = widgetSetConfig?.repository;
    return argv.options({
      directory: {
        type: "string",
        description: "Directory containing widget set files",
        ...directory ? {
          default: directory
        } : {
          demandOption: true
        }
      },
      repository: {
        type: "string",
        coerce: (application) => application,
        ...repository ? {
          default: repository
        } : {},
        description: "Code repository resource identifier (rid) publishing the widget set"
      }
    }).group(["directory", "repository"], "Deploy Options").middleware((args) => logWidgetSetDeployCommandConfigFileOverride(args, widgetSetConfig));
  },
  handler: async (args) => {
    const command16 = await import('./widgetSetDeployCommand-ATVIMBFT.js');
    await command16.default(args);
  }
};
var deploy_default2 = command10;

// src/commands/widgetset/logWidgetSetCommandConfigFileOverride.ts
init_esm_shims();
function logWidgetSetCommandConfigFileOverride(args, config) {
  if (config?.widgetSet.rid != null && args.widgetSet !== config.widgetSet.rid) {
    consola.debug(`Overriding "rid" from config file with ${args.widgetSet}`);
  }
  if (config?.foundryUrl != null && args.foundryUrl !== config.foundryUrl) {
    consola.debug(`Overriding "foundryUrl" from config file with ${args.foundryUrl}`);
  }
}

// src/commands/widgetset/version/index.ts
init_esm_shims();

// src/commands/widgetset/version/delete/index.ts
init_esm_shims();
var command11 = {
  command: "delete <version>",
  describe: "Delete widget set version",
  builder: (argv) => {
    return argv.positional("version", {
      type: "string",
      demandOption: true,
      description: "Version to delete"
    }).option("yes", {
      alias: "y",
      type: "boolean",
      description: "Automatically confirm destructive changes"
    }).group(["yes"], "Delete Options");
  },
  handler: async (args) => {
    const command16 = await import('./versionDeleteCommand-MADNXF4Z.js');
    await command16.default(args);
  }
};
var delete_default2 = command11;

// src/commands/widgetset/version/info/index.ts
init_esm_shims();
var command12 = {
  command: "info <version>",
  describe: "Load info about widget set version",
  builder: (argv) => {
    return argv.positional("version", {
      type: "string",
      demandOption: true,
      description: "Version to load"
    });
  },
  handler: async (args) => {
    const command16 = await import('./versionInfoCommand-XQDM27QS.js');
    await command16.default(args);
  }
};
var info_default = command12;

// src/commands/widgetset/version/list/index.ts
init_esm_shims();
var command13 = {
  command: "list",
  describe: "List widget set versions",
  builder: (argv) => {
    return argv;
  },
  handler: async (args) => {
    const command16 = await import('./versionListCommand-SWHK5FFD.js');
    await command16.default(args);
  }
};
var list_default2 = command13;

// src/commands/widgetset/version/index.ts
var command14 = {
  command: "version",
  describe: "Manage widget set versions",
  builder: (argv) => {
    return argv.command(list_default2).command(info_default).command(delete_default2).demandCommand();
  },
  handler: async (args) => {
  }
};
var version_default2 = command14;

// src/commands/widgetset/index.ts
var command15 = {
  command: "widgetset",
  describe: "Manage your widget set",
  builder: async (argv) => {
    const config = await configLoader_default("widgetSet");
    const widgetSet = config?.foundryConfig.widgetSet.rid;
    const foundryUrl = config?.foundryConfig.foundryUrl;
    return argv.options({
      widgetSet: {
        type: "string",
        coerce: (widgetSet2) => widgetSet2,
        ...widgetSet ? {
          default: widgetSet
        } : {
          demandOption: true
        },
        description: "Widget set resource identifier (rid)"
      },
      foundryUrl: {
        coerce: (foundryUrl2) => foundryUrl2.replace(/\/$/, ""),
        type: "string",
        ...foundryUrl ? {
          default: foundryUrl
        } : {
          demandOption: true
        },
        description: "URL for the Foundry stack"
      },
      token: {
        type: "string",
        conflicts: "tokenFile",
        description: "Foundry API token"
      },
      tokenFile: {
        type: "string",
        conflicts: "token",
        description: "Path to file containing Foundry API token"
      }
    }).group(["widgetSet", "foundryUrl", "token", "tokenFile"], "Common Options").command(version_default2).command(deploy_default2).check((args) => {
      if (!args.foundryUrl.startsWith("https://")) {
        throw new YargsCheckError("foundryUrl must start with https://");
      }
      return true;
    }).middleware((args) => {
      void logConfigFileMiddleware("widgetSet");
      logWidgetSetCommandConfigFileOverride(args, config?.foundryConfig);
    }).demandCommand();
  },
  handler: async (args) => {
  }
};
var widgetset_default = command15;

// src/cli.ts
async function cli2(args = process.argv) {
  consola.info(`Palantir OSDK CLI ${"0.26.0-beta.9"}
`);
  const base = getYargsBase(args);
  try {
    return await base.command(site_default).command({
      command: "unstable",
      aliases: ["experimental"],
      describe: "Unstable commands",
      builder: (argv) => {
        return argv.command(typescriptCommand).command(auth_default).command(widgetset_default).demandCommand();
      },
      handler: (_args) => {
      }
    }).parseAsync();
  } catch (err) {
    if (err instanceof ExitProcessError) {
      consola.error(err);
    }
  }
}

export { cli2 as cli };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map