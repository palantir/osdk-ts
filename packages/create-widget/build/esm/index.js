import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createConsola, consola as consola$1 } from 'consola';
import { colorize } from 'consola/utils';
import fs2 from 'node:fs';
import path2 from 'node:path';
import Handlebars from 'handlebars';

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
    osdkPackage = await consola.prompt(`Enter the OSDK package name for your widget set:
${italic("(Example: @my-widget/sdk)")}`, {
      type: "text"
    });
  }
  return osdkPackage;
}

// src/prompts/promptOsdkRegistryUrl.ts
async function promptOsdkRegistryUrl({
  osdkRegistryUrl
}) {
  while (osdkRegistryUrl == null || !/^https:\/\/[^/]+\/artifacts\/api\/repositories\/ri\.[^/]+\/contents\/release\/npm\/?$/.test(osdkRegistryUrl)) {
    if (osdkRegistryUrl != null) {
      consola.fail("Please enter a valid NPM registry URL to install your OSDK package");
    }
    osdkRegistryUrl = await consola.prompt(`Enter the NPM registry URL to install your OSDK package:
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
      placeholder: "my-osdk-widget",
      default: "my-osdk-widget"
    });
  }
  return project;
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
  // OSDK React
  {
    id: "template-widget-react",
    label: "OSDK React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    requiresOsdk: true,
    files: {
      "2.x": getPackageFiles(import('./esm-C6MU7DAZ.js'))
    }
  },
  // Minimal React
  {
    id: "template-widget-minimal-react",
    label: "Minimal React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    requiresOsdk: false,
    files: {
      "2.x": getPackageFiles(import('./esm-ENH745KN.js'))
    }
  }
];

// src/prompts/promptTemplate.ts
async function promptTemplate(parsed) {
  const useBeta = parsed.beta ?? false;
  let template = TEMPLATES.find((t) => t.id === parsed.template || t.id === `template-${parsed.template}`);
  if (template == null) {
    const availableTemplates = TEMPLATES.filter((template2) => !template2.hidden && (useBeta ? template2.isBeta === true : !template2.isBeta));
    if (availableTemplates.length === 0) {
      throw new Error("No available templates found for the selected options.");
    }
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

// src/prompts/promptWidgetSetRid.ts
async function promptWidgetSetRid({
  widgetSet
}) {
  while (widgetSet == null || !/^ri\.widgetregistry\.\.widget-set\.[^.]+$/.test(widgetSet)) {
    if (widgetSet != null) {
      consola.fail("Please enter a valid widget resource identifier (rid)");
    }
    widgetSet = await consola.prompt(`Enter the resource identifier (rid) for your widget set:
${italic("(Example: ri.widgetregistry..widget-set.1c66b352-4e00-40d2-995d-061c9d533ace)")}`, {
      type: "text"
    });
  }
  return widgetSet;
}

// src/generate/generateFoundryConfigJson.ts
function generateFoundryConfigJson({
  foundryUrl,
  widgetSet,
  directory
}) {
  return JSON.stringify({
    foundryUrl,
    widgetSet: {
      rid: widgetSet,
      directory,
      autoVersion: {
        type: "package-json"
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
  widgetSet,
  osdkPackage,
  osdkRegistryUrl
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
  const templateContext = {
    project,
    osdkPackage
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
  if (template.requiresOsdk) {
    if (osdkPackage == null || osdkRegistryUrl == null) {
      throw new Error(`Template ${template.id} requires OSDK package and registry URL`);
    }
    const npmRc = generateNpmRc({
      osdkPackage,
      osdkRegistryUrl
    });
    fs2.writeFileSync(path2.join(root, ".npmrc"), npmRc);
  }
  const foundryConfigJson = generateFoundryConfigJson({
    foundryUrl,
    widgetSet,
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
  const base = yargs(hideBin(args)).version("2.1.0-beta.3").wrap(Math.min(150, yargs().terminalWidth())).strict().help().command("$0 [project] [--<option>]", "Create a new OSDK widget set based on framework templates. Information may be provided through options to skip interactive prompts.", (yargs2) => yargs2.positional("project", {
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
  }).option("widgetSet", {
    type: "string",
    describe: "Widget set resource identifier (rid)"
  }).option("osdkPackage", {
    type: "string",
    describe: "OSDK package name for application"
  }).option("osdkRegistryUrl", {
    type: "string",
    describe: "URL for NPM registry to install OSDK package"
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
  const osdkPackage = template.requiresOsdk ? await promptOsdkPackage(parsed) : undefined;
  const osdkRegistryUrl = template.requiresOsdk ? await promptOsdkRegistryUrl(parsed) : undefined;
  const widgetSet = await promptWidgetSetRid(parsed);
  await run({
    project,
    overwrite,
    template,
    sdkVersion,
    foundryUrl,
    widgetSet,
    osdkPackage,
    osdkRegistryUrl
  });
}

export { TEMPLATES, cli, run };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map