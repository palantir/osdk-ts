import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createConsola, consola as consola$1 } from 'consola';
import { colorize } from 'consola/utils';
import fs2 from 'node:fs';
import path2 from 'node:path';
import { findUpSync } from 'find-up';
import Handlebars from 'handlebars';
import { fileURLToPath } from 'node:url';

// src/cli.ts
var cancelSymbol = Symbol.for("cancel");
var consola = createConsola({
  async prompt(message, opts) {
    const response = await consola$1.prompt(message, {
      ...opts,
      cancel: opts?.cancel ?? "symbol"
    });
    if (response === cancelSymbol) {
      consola$1.fail("Operation cancelled");
      process.exit(0);
    }
    return response;
  }
});
function green(text) {
  return colorize("green", text);
}
function italic(text) {
  return colorize("italic", text);
}

// src/prompts/promptApplicationRid.ts
async function promptApplicationRid({
  application
}) {
  while (application == null || !/^ri\.third-party-applications\.[^.]+\.application\.[^.]+$/.test(application)) {
    if (application != null) {
      consola.fail("Please enter a valid application resource identifier (rid)");
    }
    application = await consola.prompt(`Enter the application resource identifier (rid) for your application from Developer Console:
${italic("(Example: ri.third-party-applications.main.application.1c66b352-4e00-40d2-995d-061c9d533ace)")}`, {
      type: "text"
    });
  }
  return application;
}

// src/prompts/promptApplicationUrl.ts
async function promptApplicationUrl({
  skipApplicationUrl,
  applicationUrl
}) {
  if (skipApplicationUrl) {
    return undefined;
  }
  if (applicationUrl == null) {
    const skip = await consola.prompt(`Do you know the URL your production application will be hosted on? This is required to create a production build of your application with the correct OAuth redirect URL.`, {
      type: "select",
      options: [{
        label: "Yes, let me fill it here",
        value: "yes"
      }, {
        label: "No, I will fill it in later following the instructions in the generated README",
        value: "no"
      }]
    });
    if (skip === "no") {
      return undefined;
    }
  }
  while (applicationUrl == null || !/^https?:\/\//.test(applicationUrl)) {
    if (applicationUrl != null) {
      consola.fail("Please enter a valid application URL");
    }
    applicationUrl = await consola.prompt(`Enter the URL your production application will be hosted on:
${italic("(Example: https://myapp.example.palantirfoundry.com)")}`, {
      type: "text"
    });
  }
  return applicationUrl.replace(/\/$/, "");
}

// src/prompts/promptClientId.ts
async function promptClientId({
  clientId
}) {
  while (clientId == null || !/^[0-9a-f]+$/.test(clientId)) {
    if (clientId != null) {
      consola.fail("Please enter a valid OAuth client ID");
    }
    clientId = await consola.prompt(`Enter the OAuth client ID for your application from Developer Console:
${italic("(Example: 2650385ab6c5e0df3b44aff776b00a42)")}`, {
      type: "text"
    });
  }
  return clientId;
}

// src/prompts/promptCorsProxy.ts
async function promptCorsProxy({
  corsProxy
}) {
  if (corsProxy != null) {
    return corsProxy;
  }
  return consola.prompt(`Include a CORS proxy for Foundry API requests during local development?
${italic("This is required if your enrollment has not allowed localhost for CORS.")}`, {
    type: "confirm",
    initial: false
  });
}

// src/prompts/promptFoundryUrl.ts
async function promptFoundryUrl({
  foundryUrl
}) {
  while (foundryUrl == null || !foundryUrl.startsWith("https://")) {
    if (foundryUrl != null) {
      consola.fail("Please enter a valid Foundry URL");
    }
    foundryUrl = await consola.prompt(`Enter the URL for your Foundry stack:
${italic("(Example: https://example.palantirfoundry.com)")}`, {
      type: "text"
    });
  }
  return foundryUrl.replace(/\/$/, "");
}

// src/prompts/promptOsdkPackage.ts
async function promptOsdkPackage({
  osdkPackage
}) {
  while (osdkPackage == null || !/^@[a-z0-9-]+\/sdk$/.test(osdkPackage)) {
    if (osdkPackage != null) {
      consola.fail("Please enter a valid OSDK package name");
    }
    osdkPackage = await consola.prompt(`Enter the OSDK package name for your application from Developer Console:
${italic("(Example: @my-app/sdk)")}`, {
      type: "text"
    });
  }
  return osdkPackage;
}

// src/prompts/promptOsdkRegistryUrl.ts
async function promptOsdkRegistryUrl({
  osdkRegistryUrl
}) {
  while (osdkRegistryUrl == null || !/^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.artifacts\.[^/]+\/contents\/release\/npm\/?$/.test(osdkRegistryUrl)) {
    if (osdkRegistryUrl != null) {
      consola.fail("Please enter a valid NPM registry URL to install your OSDK package");
    }
    osdkRegistryUrl = await consola.prompt(`Enter the NPM registry URL to install your OSDK package from Developer Console:
${italic("(Example: https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.a4a7fe1c-486f-4226-b706-7b90005f527d/contents/release/npm)")}`, {
      type: "text"
    });
  }
  return osdkRegistryUrl.replace(/\/$/, "");
}
async function promptOverwrite({
  project,
  overwrite
}) {
  if (overwrite != null) {
    return overwrite;
  }
  if (!fs2.existsSync(path2.join(process.cwd(), project))) {
    return true;
  }
  const result = await consola.prompt(`The directory ${green(project)} already exists do you want to overwrite or ignore it?`, {
    type: "select",
    options: [{
      label: "Remove existing files and continue",
      value: "overwrite"
    }, {
      label: "Ignore files and continue",
      value: "ignore"
    }, {
      label: "Cancel",
      value: "cancel"
    }]
  });
  switch (result) {
    case "overwrite":
      return true;
    case "ignore":
      return false;
    case "cancel":
      consola.fail("Operation cancelled");
      process.exit(0);
  }
}

// src/prompts/promptProject.ts
async function promptProject({
  project
}) {
  while (project == null || !/^[a-zA-Z0-9-_]+$/.test(project)) {
    if (project != null) {
      consola.fail("Project name can only contain alphanumeric characters, hyphens and underscores");
    }
    project = await consola.prompt("Project name:", {
      type: "text",
      placeholder: "my-osdk-app",
      default: "my-osdk-app"
    });
  }
  return project;
}

// src/prompts/promptScopes.ts
var scopeNameRegex = /^[a-zA-Z-_:]+$/;
async function promptScopes({
  scopes
}) {
  while (true) {
    if (scopes != null) {
      const invalidScopes = scopes.filter((scope) => !scopeNameRegex.test(scope));
      const allValidScopes = invalidScopes.length === 0;
      if (allValidScopes) {
        break;
      }
      const joinedInvalidScopes = invalidScopes.join(", ");
      consola.fail(`Scopes [ ${joinedInvalidScopes} ] are invalid. Scope names can only contain letters, hyphens, underscores, and colons`);
    }
    const stringScopes = await consola.prompt("Enter the scopes to request during OAuth:", {
      type: "text",
      placeholder: "api:read-data api:write-data",
      default: "api:read-data api:write-data"
    });
    scopes = stringScopes.split(" ");
  }
  return deduplicateScopes(scopes);
}
function deduplicateScopes(scopes) {
  const dedupedScopes = [];
  const seen = /* @__PURE__ */ new Set();
  for (const scope of scopes) {
    if (seen.has(scope)) {
      continue;
    }
    dedupedScopes.push(scope);
    seen.add(scope);
  }
  return dedupedScopes;
}

// src/prompts/promptSdkVersion.ts
async function promptSdkVersion({
  sdkVersion,
  template
}) {
  if (sdkVersion == null) {
    return Object.keys(template.files)[0];
  }
  if (template.files[sdkVersion] == null) {
    consola.fail(`The ${template.label} template does not support a "${sdkVersion}" SDK version.`);
    sdkVersion = await consola.prompt(`Please choose which version of the OSDK you'd like to use for the ${template.label} template:`, {
      type: "select",
      options: Object.keys(template.files).reverse().map((sdkVersion2) => ({
        label: sdkVersion2,
        value: sdkVersion2
      }))
    });
  }
  return sdkVersion;
}

// src/getPackageFiles.ts
var getPackageFiles = (importPromise) => async () => (await importPromise).files;

// src/generatedNoCheck/templates.ts
var TEMPLATES = [
  // React
  {
    id: "template-react",
    label: "React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: false,
    files: {
      "1.x": getPackageFiles(import('./esm-IRYTK2SN.js')),
      "2.x": getPackageFiles(import('./esm-TYOQYEDZ.js'))
    }
  },
  // Expo
  {
    id: "template-expo",
    label: "Expo",
    envPrefix: "EXPO_PUBLIC_",
    buildDirectory: "./dist",
    hidden: false,
    files: {
      "2.x": getPackageFiles(import('./esm-QGTNZWRA.js'))
    }
  },
  // Vue
  {
    id: "template-vue",
    label: "Vue",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: false,
    files: {
      "1.x": getPackageFiles(import('./esm-EWF64ZOH.js')),
      "2.x": getPackageFiles(import('./esm-SHZQJOYD.js'))
    }
  },
  // Tutorial: To do App
  {
    id: "template-tutorial-todo-app",
    label: "Tutorial: To do App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
    files: {
      "1.x": getPackageFiles(import('./esm-HPYM2Y43.js')),
      "2.x": getPackageFiles(import('./esm-VZPD4V7P.js'))
    }
  },
  // Tutorial: To do AIP App
  {
    id: "template-tutorial-todo-aip-app",
    label: "Tutorial: To do AIP App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
    files: {
      "1.x": getPackageFiles(import('./esm-RVZ3BRIG.js')),
      "2.x": getPackageFiles(import('./esm-D3MFKIK5.js'))
    }
  }
];

// src/prompts/promptTemplate.ts
async function promptTemplate(parsed) {
  const useBeta = parsed.beta ?? false;
  let template = TEMPLATES.find((t) => t.id === parsed.template || t.id === `template-${parsed.template}`);
  if (template == null) {
    const availableTemplates = getAvailableTemplatesOrThrow(useBeta);
    const templateId = await consola.prompt(parsed.template != null ? `The provided template ${green(parsed.template)} is invalid please select a framework:` : "Select a framework:", {
      type: "select",
      options: availableTemplates.map((template2) => ({
        value: template2.id,
        label: template2.label
      }))
    });
    template = TEMPLATES.find((t) => t.id === templateId);
    if (template == null) {
      throw new Error(`Template ${templateId} should be found`);
    }
  }
  return template;
}
function getAvailableTemplatesOrThrow(useBeta) {
  const availableTemplates = TEMPLATES.filter((template) => !template.hidden && (useBeta ? template.isBeta === true : !template.isBeta));
  if (availableTemplates.length === 0) {
    throw new Error("No available templates found for the selected options.");
  }
  return availableTemplates;
}

// ../generator-utils/build/esm/changeVersionPrefix.js
function changeVersionPrefix(version, prefix) {
  const isWorkspaceProtocol = version.startsWith("workspace:");
  if (isWorkspaceProtocol) {
    version = version.slice("workspace:".length);
  }
  if (version[0] === "^" || version[0] === "~" || version[0] === "*") {
    version = version.slice(1);
  }
  return `${isWorkspaceProtocol ? "workspace:" : ""}${prefix}${version}`;
}

// ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
process.env.NODE_ENV === "production";

// src/generate/generateEnv.ts
function generateEnvDevelopment({
  envPrefix,
  foundryUrl,
  clientId,
  corsProxy
}) {
  const foundryApiUrl = corsProxy ? "http://localhost:8080" : foundryUrl;
  const applicationUrl = "http://localhost:8080";
  return `# This env file is intended for developing on your local computer.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# To deploy your application to production, see .env.production.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If your application in development is not hosted on port 8080, you will need
# to change this URL here and in Developer Console.

${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrl}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${foundryApiUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${clientId}
`;
}
function generateEnvProduction({
  envPrefix,
  foundryUrl,
  applicationUrl,
  clientId
}) {
  const applicationUrlOrDefault = applicationUrl ?? "<Fill in the domain at which you deploy your application>";
  return `# This env file is intended for deploying your application to production.
# To set up development on your local computer, see .env.development.
# To set up development in Foundry's Code Workspaces, see .env.code-workspaces.
# Note that .env.code-workspaces is only present for projects that were set up
# using the "Bootstrap in Foundry" option in Developer Console.


# This URL is the URL your users will be redirected back to after signing in.
# This URL must exactly match one of the URLs listed in the "OAuth & scopes"
# page of Developer Console.
#
# If you change where your application is hosted, you will need to change this
# URL here and in Developer Console.

${applicationUrl == null ? "# " : ""}${envPrefix}FOUNDRY_REDIRECT_URL=${applicationUrlOrDefault}/auth/callback


# This URL is the Foundry host that your OSDK will use. It typically does not
# need to be changed.

${envPrefix}FOUNDRY_API_URL=${foundryUrl}


# This client ID must match the client ID given on the "OAuth & scopes" page of
# Developer Console. It typically does not need to be changed.

${envPrefix}FOUNDRY_CLIENT_ID=${clientId}
`;
}

// src/generate/generateFoundryConfigJson.ts
function generateFoundryConfigJson({
  foundryUrl,
  application,
  directory
}) {
  return JSON.stringify({
    foundryUrl,
    site: {
      application,
      directory,
      autoVersion: {
        type: "git-describe",
        tagPrefix: ""
      }
    }
  }, null, 2) + "\n";
}

// src/generate/generateNpmRc.ts
function generateNpmRc({
  osdkPackage,
  osdkRegistryUrl
}) {
  const withTrailingSlash = osdkRegistryUrl.endsWith("/") ? osdkRegistryUrl : osdkRegistryUrl + "/";
  const withoutProtocol = withTrailingSlash.replace(/^https:\/\//, "");
  const packageScope = osdkPackage.split("/")[0];
  return `//${withoutProtocol}:_authToken=\${FOUNDRY_TOKEN}
${packageScope}:registry=${withTrailingSlash}
`;
}

// src/run.ts
async function run({
  project,
  overwrite,
  template,
  sdkVersion,
  foundryUrl,
  applicationUrl,
  application,
  clientId,
  osdkPackage,
  osdkRegistryUrl,
  corsProxy,
  scopes
}) {
  consola.log("");
  consola.start(`Creating project ${green(project)} using template ${green(template.id)}`);
  const cwd = process.cwd();
  const root = path2.join(cwd, project);
  if (fs2.existsSync(root)) {
    if (overwrite) {
      consola.info(`Overwriting existing project directory`);
      fs2.rmSync(root, {
        recursive: true,
        force: true
      });
      fs2.mkdirSync(root, {
        recursive: true
      });
    } else {
      consola.info(`Reusing existing project directory`);
    }
  } else {
    consola.info(`Creating project directory`);
    fs2.mkdirSync(root, {
      recursive: true
    });
  }
  consola.info(`Copying files into project directory`);
  if (template.files[sdkVersion] == null) {
    throw new Error(`The ${template.label} template does not support a "${sdkVersion}" SDK version.`);
  }
  const files = await template.files[sdkVersion]();
  for (const [filePath, contents] of files) {
    const finalPath = path2.join(root, filePath);
    const dirPath = path2.dirname(finalPath);
    await fs2.promises.mkdir(dirPath, {
      recursive: true
    });
    await fs2.promises.writeFile(finalPath, Buffer.from(contents.body, contents.type === "raw" ? "utf-8" : "base64"));
  }
  const ourPackageJsonPath = findUpSync("package.json", {
    cwd: fileURLToPath(import.meta.url)
  });
  ourPackageJsonPath ? JSON.parse(fs2.readFileSync(ourPackageJsonPath, "utf-8")).version : undefined;
  const clientVersion = "2.2.0-beta.9";
  const templateContext = {
    project,
    foundryUrl,
    osdkPackage,
    corsProxy,
    clientVersion: changeVersionPrefix(clientVersion, "^"),
    scopes
  };
  const processFiles = function(dir) {
    fs2.readdirSync(dir).forEach(function(file) {
      file = dir + "/" + file;
      const stat = fs2.statSync(file);
      if (stat.isDirectory()) {
        processFiles(file);
        return;
      }
      if (file.endsWith("/_gitignore")) {
        fs2.renameSync(file, file.replace(/\/_gitignore$/, "/.gitignore"));
        return;
      }
      if (!file.endsWith(".hbs")) {
        return;
      }
      const templated = Handlebars.compile(fs2.readFileSync(file, "utf-8"))(templateContext);
      fs2.writeFileSync(file.replace(/.hbs$/, ""), templated);
      fs2.rmSync(file);
    });
  };
  processFiles(root);
  const npmRc = generateNpmRc({
    osdkPackage,
    osdkRegistryUrl
  });
  fs2.writeFileSync(path2.join(root, ".npmrc"), npmRc);
  const envDevelopment = generateEnvDevelopment({
    envPrefix: template.envPrefix,
    foundryUrl,
    clientId,
    corsProxy
  });
  fs2.writeFileSync(path2.join(root, ".env.development"), envDevelopment);
  const envProduction = generateEnvProduction({
    envPrefix: template.envPrefix,
    foundryUrl,
    applicationUrl,
    clientId
  });
  fs2.writeFileSync(path2.join(root, ".env.production"), envProduction);
  const foundryConfigJson = generateFoundryConfigJson({
    foundryUrl,
    application,
    directory: template.buildDirectory
  });
  fs2.writeFileSync(path2.join(root, "foundry.config.json"), foundryConfigJson);
  consola.success("Success");
  const cdRelative = path2.relative(cwd, root);
  consola.box({
    message: `Done! Run the following commands to get started:

  \`cd ${cdRelative}\`
  \`export FOUNDRY_TOKEN=<token>\`
  \`npm install\`
  \`npm run dev\``,
    style: {
      padding: 2,
      borderColor: "green",
      borderStyle: "rounded"
    }
  });
}

// src/cli.ts
async function cli(args = process.argv) {
  const base = yargs(hideBin(args)).version("2.2.0-beta.9").wrap(Math.min(150, yargs().terminalWidth())).strict().help().command("$0 [project] [--<option>]", "Create a new OSDK application based on framework templates. Information may be provided through options to skip interactive prompts.", (yargs2) => yargs2.positional("project", {
    type: "string",
    describe: "Project name to create"
  }).option("overwrite", {
    type: "boolean",
    describe: "Overwrite project directory if already exists"
  }).option("beta", {
    type: "boolean",
    describe: "Use templates compatible with the Beta version of the SDK"
  }).option("template", {
    type: "string",
    describe: "Template name to use"
  }).option("sdkVersion", {
    type: "string",
    describe: "The OSDK version to use"
  }).option("foundryUrl", {
    type: "string",
    describe: "URL for the Foundry stack"
  }).option("applicationUrl", {
    type: "string",
    describe: "URL the production application will be hosted on",
    conflicts: "skipApplicationUrl"
  }).option("skipApplicationUrl", {
    type: "boolean",
    describe: "Skip filling in URL the production application will be hosted on"
  }).option("application", {
    type: "string",
    describe: "Application resource identifier (rid)"
  }).option("clientId", {
    type: "string",
    describe: "OAuth client ID for application"
  }).option("osdkPackage", {
    type: "string",
    describe: "OSDK package name for application"
  }).option("osdkRegistryUrl", {
    type: "string",
    describe: "URL for NPM registry to install OSDK package"
  }).option("corsProxy", {
    type: "boolean",
    describe: "Include a CORS proxy for Foundry API requests during local development"
  }).option("scopes", {
    type: "string",
    array: true,
    describe: "List of client-side scopes to be used when creating a client"
  }));
  const parsed = base.parseSync();
  const project = await promptProject(parsed);
  const overwrite = await promptOverwrite({
    ...parsed,
    project
  });
  const template = await promptTemplate(parsed);
  const sdkVersion = await promptSdkVersion({
    ...parsed,
    template
  });
  const foundryUrl = await promptFoundryUrl(parsed);
  const applicationUrl = await promptApplicationUrl(parsed);
  const application = await promptApplicationRid(parsed);
  const clientId = await promptClientId(parsed);
  const osdkPackage = await promptOsdkPackage(parsed);
  const osdkRegistryUrl = await promptOsdkRegistryUrl(parsed);
  const corsProxy = await promptCorsProxy(parsed);
  const scopes = await promptScopes(parsed);
  await run({
    project,
    overwrite,
    template,
    sdkVersion,
    foundryUrl,
    applicationUrl,
    application,
    clientId,
    osdkPackage,
    osdkRegistryUrl,
    corsProxy,
    scopes
  });
}

export { TEMPLATES, cli, run };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map