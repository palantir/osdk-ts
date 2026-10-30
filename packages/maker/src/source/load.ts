/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Node 24+ implementation of source-aware ESM authoring. The public loadOntologySource
 * wrapper selects this implementation before evaluation; ordinary imports need no hooks.
 *
 * Each evaluation tags its file URLs, routes Maker imports to host exports,
 * and records emitted-to-authored source maps. Executing definition calls performs
 * registration; SourceSession enriches escaping validation errors.
 */

import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { registerHooks, SourceMap, type SourceMapPayload } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import ts from "typescript";

import * as maker from "../index.js";
import { observeDefinitionFailures } from "../validation.js";
import { SourceSession } from "./runtime.js";

interface Evaluation {
  readonly entry: string;
  readonly options: ts.CompilerOptions;
  /** Exact package specifiers mapped to ESM facades over the host namespaces. */
  readonly modules: ReadonlyMap<string, string>;
  readonly session: SourceSession;
}

// Hooks are process-wide. A private parameter lets separate loader copies (such as
// ESM and bundled CommonJS Maker hosts) recognize only their own evaluations.
const parameter = `maker-source-${randomUUID()}`;
const evaluations = new Map<string, Evaluation>();
let installed = false;

// A data-URL module gives import() a native ESM context, even when this file runs
// under a VM module runner. Importing authoring through that function exercises
// Node's hooks instead of the runner's TypeScript transform or module cache.
// The bridge is shared across evaluations and contains no evaluation-specific state.
const importBridge = "data:text/javascript,export default (url) => import(url)";

function syntaxError(diagnostics: readonly ts.Diagnostic[]): SyntaxError {
  return new SyntaxError(
    ts.formatDiagnostics(diagnostics, {
      getCanonicalFileName: (file) => file,
      getCurrentDirectory: () => process.cwd(),
      getNewLine: () => "\n",
    }),
  );
}

/**
 * Reads the entry's nearest tsconfig, including inherited paths and baseUrl. One
 * configuration governs the evaluation; no TypeScript program or input-file scan
 * is needed. Resolution and selected JSX/decorator options are consumed below,
 * while the loader fixes the emitted module format and target for Node.
 */
function compilerOptions(entry: string): ts.CompilerOptions {
  const config = ts.findConfigFile(dirname(entry), ts.sys.fileExists);
  if (config === undefined)
    return {
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      module: ts.ModuleKind.ESNext,
      allowJs: true,
    };
  const parsed = ts.getParsedCommandLineOfConfigFile(
    config,
    {},
    {
      ...ts.sys,
      // Only compiler options are needed, not discovery of the project's inputs.
      readDirectory: () => [],
      onUnRecoverableConfigFileDiagnostic: (diagnostic) => {
        throw syntaxError([diagnostic]);
      },
    },
  )!;
  // Empty-input diagnostics concern file discovery, not the compiler options used here.
  const errors = parsed.errors.filter(
    ({ code }) => code !== 18002 && code !== 18003,
  );
  if (errors.length > 0) throw syntaxError(errors);
  return parsed.options;
}

/** Installs one delegating hook pair; only URLs tagged by this loader opt in. */
function installHooks(): void {
  if (installed) return;
  registerHooks({
    resolve(specifier, context, nextResolve) {
      const parent =
        context.parentURL === undefined
          ? undefined
          : new URL(context.parentURL);

      const requested = specifier.startsWith("file:")
        ? new URL(specifier)
        : undefined;

      // The first import carries its ID on the requested URL. Later static and
      // awaited dynamic imports inherit it from their importing module's URL.
      const id =
        parent?.searchParams.get(parameter) ??
        requested?.searchParams.get(parameter);

      if (id == null) {
        return nextResolve(specifier, context);
      }

      const evaluation = evaluations.get(id);
      if (evaluation === undefined) {
        throw new Error(
          "Source evaluation has completed, deferred module loading is not supported.",
        );
      }

      // Exact root imports share the host's registries, validation constructors,
      // even when made by an installed authoring dependency.
      const facade = evaluation.modules.get(specifier);
      if (facade !== undefined) {
        return { url: facade, format: "module", shortCircuit: true };
      }

      const from =
        parent?.protocol === "file:" ? fileURLToPath(parent) : evaluation.entry;
      const resolved = ts.resolveModuleName(
        requested === undefined ? specifier : fileURLToPath(requested),
        from,
        evaluation.options,
        ts.sys,
      ).resolvedModule;

      // For example, ontology.ts's import "./uploads.js" can execute uploads.ts,
      // and "@definitions/uploads" can use tsconfig paths. A package's .d.ts result
      // is never executable: Node selects its runtime entry and export conditions.
      const local =
        resolved !== undefined &&
        !resolved.isExternalLibraryImport &&
        !/\.d\.[cm]?ts$/u.test(resolved.resolvedFileName);

      const result = nextResolve(
        local ? pathToFileURL(resolved.resolvedFileName).href : specifier,
        context,
      );

      if (!result.url.startsWith("file:")) {
        return result;
      }

      // Node caches ESM by URL. Propagating the same ID shares diamond dependencies
      // within this evaluation; a new ID executes a fresh file graph on the next run.
      // Non-file modules, such as builtins, retain their native identities.
      const url = new URL(result.url);
      url.searchParams.set(parameter, id);

      return { ...result, url: url.href };
    },
    load(url, context, nextLoad) {
      const id = new URL(url).searchParams.get(parameter);
      if (id == null) return nextLoad(url, context);
      const evaluation = evaluations.get(id);
      if (evaluation === undefined)
        throw new Error(
          "Source evaluation has completed; deferred module loading is not supported.",
        );
      const fileName = fileURLToPath(url);
      if (!/\.(?:ts|mts|tsx)$/u.test(fileName)) {
        evaluation.session.registerScript(url);
        return nextLoad(url, context);
      }
      // Emit ordinary ESM without rewriting calls. Syntax errors stop evaluation;
      // semantic TypeScript checking remains a separate build/typecheck concern.
      const result = ts.transpileModule(readFileSync(fileName, "utf8"), {
        fileName,
        reportDiagnostics: true,
        compilerOptions: {
          target: ts.ScriptTarget.ES2022,
          module: ts.ModuleKind.ESNext,
          sourceMap: true,
          jsx: evaluation.options.jsx ?? ts.JsxEmit.ReactJSX,
          jsxFactory: evaluation.options.jsxFactory,
          jsxFragmentFactory: evaluation.options.jsxFragmentFactory,
          jsxImportSource: evaluation.options.jsxImportSource,
          experimentalDecorators: evaluation.options.experimentalDecorators,
          emitDecoratorMetadata: evaluation.options.emitDecoratorMetadata,
          useDefineForClassFields: evaluation.options.useDefineForClassFields,
        },
      });
      if (result.diagnostics !== undefined && result.diagnostics.length > 0)
        throw syntaxError(result.diagnostics);
      // Runtime call sites point into emitted JavaScript. Keep its source map in
      // this session rather than changing process-wide stack/source-map behavior.
      evaluation.session.registerScript(
        url,
        new SourceMap(JSON.parse(result.sourceMapText!) as SourceMapPayload),
      );
      return {
        format: "module",
        source: result.outputText,
        shortCircuit: true,
      };
    },
  });
  // The hook outlives evaluations so a deferred import cannot silently start using
  // a different registry after cleanup. Completed evaluation records are removed;
  // unrelated imports delegate. This does not evict Node's native module cache.
  installed = true;
}

/**
 * Executes trusted ESM authoring on Node 24+ against the initialized host registry.
 *
 * For example, the host initializes ontology state and loads `.ontology/ontology.ts`:
 * ```ts
 * import { initializeOntologyState, loadOntologySource } from "@osdk/maker";
 * initializeOntologyState("com.acme.");
 * await loadOntologySource(".ontology/ontology.ts");
 * ```
 * Imports of local `.js` paths can execute their `.ts` sources. Calls to
 * `defineObject` register definitions with the initialized host ontology state.
 * No exported definition is required or discovered: module execution performs the
 * registration. The return value is the entry's normal module namespace.
 *
 * Authoring files must remain unchanged through evaluation and reporting. Awaited
 * imports belong to the evaluation; deferred loading after it completes is unsupported.
 * This is not a sandbox, registry transaction, or native module-cache eviction API.
 */
export async function loadOntologySource(
  entryPoint: string,
): Promise<Readonly<Record<string, unknown>>> {
  const entry = resolve(entryPoint);
  const options = compilerOptions(entry);
  installHooks();
  const id = randomUUID();
  const bridge = `__makerSource_${id}`;

  // Native import() may select ESM while the host runs bundled CommonJS. Facades
  // share the host registry and MakerValidationError constructor across distributions.
  const namespaces = { "@osdk/maker": maker };
  const modules = new Map<string, string>();

  // A generated facade reads each value once from this temporary global bridge:
  //   const value0 = globalThis[bridge]["@osdk/maker"]["defineObject"];
  //   export { value0 as "defineObject" };
  // Local identifiers plus quoted export names also handle default exports.
  for (const [specifier, namespace] of Object.entries(namespaces)) {
    const source = Object.keys(namespace)
      .map(
        (name, index) =>
          `const value${index} = globalThis[${JSON.stringify(bridge)}][${JSON.stringify(specifier)}][${JSON.stringify(name)}]; export { value${index} as ${JSON.stringify(name)} };`,
      )
      .join("\n");
    modules.set(
      specifier,
      `data:text/javascript,${encodeURIComponent(source)}`,
    );
  }
  const session = new SourceSession();
  evaluations.set(id, { entry, options, modules, session });
  Object.defineProperty(globalThis, bridge, {
    value: namespaces,
    configurable: true,
  });
  const stop = observeDefinitionFailures(session.observe);
  try {
    const url = pathToFileURL(entry);
    url.searchParams.set(parameter, id);
    const { default: importModule } = (await import(importBridge)) as {
      readonly default: (
        url: string,
      ) => Promise<Readonly<Record<string, unknown>>>;
    };
    return await importModule(url.href);
  } catch (error) {
    return await session.rethrow(error);
  } finally {
    // Drop observation, source maps, and the temporary namespace bridge on either
    // outcome. Already evaluated ESM modules retain their normal cached exports.
    stop();
    evaluations.delete(id);
    Reflect.deleteProperty(globalThis, bridge);
  }
}
