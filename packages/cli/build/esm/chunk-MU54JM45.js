import { findUp } from './chunk-KJFA7LBI.js';
import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { exec } from 'node:child_process';
import { promises } from 'node:fs';
import { promisify } from 'node:util';
import { valid } from 'semver';
import { extname } from 'node:path';

// ../foundry-config-json/build/esm/autoVersion.js
init_esm_shims();
var AutoVersionError = class extends Error {
  constructor(msg, tip) {
    super(msg);
    this.msg = msg;
    this.tip = tip;
  }
};
async function autoVersion(config) {
  switch (config.type) {
    case "git-describe":
      return gitDescribeAutoVersion(config.tagPrefix);
    case "package-json":
      return packageJsonAutoVersion();
    default:
      throw new Error(`Unexpected auto version config: (${JSON.stringify(config)})`);
  }
}
async function gitDescribeAutoVersion(tagPrefix = "") {
  const [matchPrefix, prefixRegex] = tagPrefix !== "" ? [tagPrefix, new RegExp(`^${tagPrefix}`)] : [undefined, new RegExp(`^v?`)];
  const gitVersion = await gitDescribe(matchPrefix);
  const version = gitVersion.trim().replace(prefixRegex, "");
  validateVersion(version);
  return version;
}
async function packageJsonAutoVersion() {
  const packageJsonPath = await findUp("package.json");
  if (!packageJsonPath) {
    throw new AutoVersionError(`Couldn't find package.json file in the current working directory or its parents: ${process.cwd()}`);
  }
  let packageJson;
  try {
    const fileContent = await promises.readFile(packageJsonPath, "utf-8");
    packageJson = JSON.parse(fileContent);
  } catch (error) {
    throw new AutoVersionError(`Couldn't read or parse package.json file ${packageJsonPath}. Error: ${error}`);
  }
  const version = packageJson.version;
  validateVersion(version);
  return version;
}
async function gitDescribe(matchPrefix) {
  let gitVersion;
  try {
    const execAsync = promisify(exec);
    const {
      stdout
    } = await execAsync(`git describe --tags --first-parent --dirty${matchPrefix != null ? ` --match="${matchPrefix}*"` : ""}`, {
      encoding: "utf8"
    });
    gitVersion = stdout;
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();
      if (errorMessage.includes("not recognized") || errorMessage.includes("command not found") || errorMessage.includes("no such file or directory")) {
        throw new AutoVersionError("Unable to determine auto version using git-describe as git is not installed or found in the PATH.", `You can set up git and try again or supply a --version option to set the version manually`);
      }
      if (errorMessage.includes("fatal: not a git repository")) {
        throw new AutoVersionError(`Unable to determine auto version using git-describe as the current directory is not a git repository.`, `You can run the command in a git repository and try again or supply a --version option to set the version manually`);
      }
      if (errorMessage.includes("fatal: no names found, cannot describe anything.")) {
        throw new AutoVersionError(`Unable to determine auto version using git-describe as no matching tags were found.`, `You can create a tag matching the configured tag prefix and try again or supply a --version option to set the version manually`);
      }
    }
    throw new AutoVersionError(`Unable to determine auto version using git-describe: ${error}.`, `You can supply a --version option to set the version manually`);
  }
  return gitVersion;
}
function validateVersion(version) {
  if (valid(version) == null) {
    throw new AutoVersionError(`The version string ${version} is not SemVer compliant.`);
  }
}

// ../foundry-config-json/build/esm/index.js
init_esm_shims();

// ../foundry-config-json/build/esm/config.js
init_esm_shims();
var CONFIG_FILE_NAMES = ["foundry.config.json"];
var FOUNDRY_SITE_CONFIG_SCHEMA = {
  type: "object",
  properties: {
    foundryUrl: {
      type: "string"
    },
    site: {
      type: "object",
      properties: {
        application: {
          type: "string"
        },
        directory: {
          type: "string"
        },
        autoVersion: {
          type: "object",
          nullable: true,
          oneOf: [{
            properties: {
              type: {
                const: "git-describe",
                type: "string"
              },
              tagPrefix: {
                type: "string",
                nullable: true
              }
            }
          }, {
            properties: {
              type: {
                const: "package-json",
                type: "string"
              }
            }
          }],
          required: ["type"]
        },
        uploadOnly: {
          type: "boolean",
          nullable: true
        }
      },
      required: ["application", "directory"]
    }
  },
  required: ["foundryUrl", "site"],
  additionalProperties: false
};
var FOUNDRY_WIDGET_SET_CONFIG_SCHEMA = {
  type: "object",
  properties: {
    foundryUrl: {
      type: "string"
    },
    widgetSet: {
      type: "object",
      properties: {
        rid: {
          type: "string"
        },
        directory: {
          type: "string"
        },
        repository: {
          type: "string",
          nullable: true
        },
        autoVersion: FOUNDRY_SITE_CONFIG_SCHEMA.properties.site.properties.autoVersion,
        uploadOnly: {
          type: "boolean",
          nullable: true
        }
      },
      required: ["rid", "directory"]
    }
  },
  required: ["foundryUrl", "widgetSet"],
  additionalProperties: false
};
var FOUNDRY_CONFIG_SCHEMA = {
  site: FOUNDRY_SITE_CONFIG_SCHEMA,
  widgetSet: FOUNDRY_WIDGET_SET_CONFIG_SCHEMA
};
async function loadFoundryConfig(type) {
  const ajvModule = await import('ajv');
  const Ajv = ajvModule.default.default;
  const ajv = new Ajv({
    allErrors: true
  });
  const validate = ajv.compile(FOUNDRY_CONFIG_SCHEMA[type]);
  const {
    findUp: findUp2
  } = await import('./find-up-EKHQCTZM.js');
  const configFilePath = await findUp2(CONFIG_FILE_NAMES);
  if (configFilePath) {
    let foundryConfig;
    try {
      const fileContent = await promises.readFile(configFilePath, "utf-8");
      foundryConfig = parseConfigFile(fileContent, configFilePath);
    } catch (error) {
      throw new Error(`Couldn't read or parse config file ${configFilePath}. Error: ${error}`);
    }
    if (!validate(foundryConfig)) {
      throw new Error(`The configuration file ${configFilePath} does not match the expected schema: ${ajv.errorsText(validate.errors)}`);
    }
    return {
      foundryConfig,
      configFilePath
    };
  }
  return undefined;
}
function parseConfigFile(fileContent, configFilePath) {
  const extension = extname(configFilePath);
  switch (extension) {
    case ".json":
      return JSON.parse(fileContent);
    default:
      throw new Error(`Unsupported file extension: ${extension} for config file.`);
  }
}

export { AutoVersionError, autoVersion, loadFoundryConfig };
//# sourceMappingURL=chunk-MU54JM45.js.map
//# sourceMappingURL=chunk-MU54JM45.js.map