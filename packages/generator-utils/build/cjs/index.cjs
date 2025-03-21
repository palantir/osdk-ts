'use strict';

var promises = require('fs/promises');
var invariant = require('tiny-invariant');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/changeVersionPrefix.ts
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
async function getDependencyVersionFromFindUpPackageJson(name, opts) {
  const {
    findUp
  } = await import('find-up');
  const packageJsonPath = await findUp("package.json", opts);
  !(packageJsonPath !== undefined) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "Could not find package.json") : invariant__default.default(false) : undefined;
  const packageJson = await promises.readFile(packageJsonPath, {
    encoding: "utf-8"
  });
  if (!packageJson) {
    throw new Error(`Could not find package.json in current working directory: ${process.cwd()}`);
  }
  const parsedPackageJson = JSON.parse(packageJson);
  const version = parsedPackageJson.dependencies?.[name] ?? parsedPackageJson.devDependencies?.[name] ?? parsedPackageJson.peerDependencies?.[name];
  !(version !== undefined) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Could not find a dependency for ${name} in ${packageJsonPath}`) : invariant__default.default(false) : undefined;
  return version;
}

// src/resolveDependenciesFromFindUp.ts
async function resolveDependenciesFromFindUp(deps, cwd) {
  return await Promise.all(Object.entries(deps).map(async ([dependencyName, dependencyVersion]) => {
    return {
      dependencyName,
      dependencyVersion: changeVersionPrefix(dependencyVersion ?? await getDependencyVersionFromFindUpPackageJson(dependencyName, {
        cwd
      }), "^")
    };
  }));
}

exports.changeVersionPrefix = changeVersionPrefix;
exports.getDependencyVersionFromFindUpPackageJson = getDependencyVersionFromFindUpPackageJson;
exports.resolveDependenciesFromFindUp = resolveDependenciesFromFindUp;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map