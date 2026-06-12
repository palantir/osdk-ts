/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type {
  API,
  ASTPath,
  ExportSpecifier,
  FileInfo,
  ImportSpecifier,
  Options,
} from "jscodeshift";

// Names promoted from @osdk/client/unstable-do-not-use → @osdk/client/observable.
// Derived from packages/client/src/public/observable.ts export surface.
const OBSERVABLE_NAMES = new Set([
  "ActionSignatureFromDef",
  "CacheEntry",
  "CacheSnapshot",
  "CanonicalizedOptions",
  "CanonicalizeOptionsInput",
  "ObservableClient",
  "ObserveAggregationArgs",
  "ObserveFunctionCallbackArgs",
  "ObserveFunctionOptions",
  "ObserveObjectCallbackArgs",
  "ObserveObjectsCallbackArgs",
  "ObserveObjectSetArgs",
  "ObserveLinks",
  "Observer",
  "QueryParameterType",
  "QueryReturnType",
  "Unsubscribable",
  "createObservableClient",
]);

// @osdk/react subpath rewrites
const REACT_MODULE_MAP: Record<string, string> = {
  "@osdk/react/experimental": "@osdk/react",
  "@osdk/react/experimental/admin": "@osdk/react/platform-apis",
};

// Specifier renames within @osdk/react/experimental
const IMPORT_RENAMES: Record<string, string> = {
  OsdkProvider2: "OsdkProvider",
  useOsdkClient2: "useOsdkClient",
};

export const parser = "tsx";

export default function transformer(
  file: FileInfo,
  api: API,
  _options: Options = {},
): string {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirty = false;

  // localName → newName for unaliased renames that need body-level fix-up
  const bodyRenames = new Map<string, string>();

  // ── 1. Import declarations ────────────────────────────────────────────────

  root.find(j.ImportDeclaration).forEach((path) => {
    const src = path.node.source.value as string;

    // @osdk/react/experimental[/admin] → @osdk/react[/platform-apis]
    if (REACT_MODULE_MAP[src]) {
      path.node.source.value = REACT_MODULE_MAP[src];
      dirty = true;

      if (src === "@osdk/react/experimental") {
        (path.node.specifiers ?? []).forEach((spec) => {
          if (spec.type !== "ImportSpecifier") return;
          const importedName = getImportedName(spec);
          const localName = spec.local?.name ?? importedName;
          const newName = IMPORT_RENAMES[importedName];
          if (!newName) return;

          spec.imported = j.identifier(newName);

          if (localName === importedName) {
            // Unaliased import: update local binding and schedule body rename
            spec.local = j.identifier(newName);
            bodyRenames.set(importedName, newName);
          }
          // Aliased (import { OsdkProvider2 as P }): only the imported name
          // changes; the local alias P stays, so no body rename needed.
        });
      }
      return;
    }

    // @osdk/client/unstable-do-not-use → split between old path and /observable
    if (src === "@osdk/client/unstable-do-not-use") {
      const allSpecs = (path.node.specifiers ?? []).filter(
        (s): s is ImportSpecifier => s.type === "ImportSpecifier",
      );

      const promoted = allSpecs.filter((s) =>
        OBSERVABLE_NAMES.has(getImportedName(s))
      );
      const kept = allSpecs.filter(
        (s) => !OBSERVABLE_NAMES.has(getImportedName(s)),
      );

      if (promoted.length === 0) return;
      dirty = true;

      if (kept.length === 0) {
        path.node.source.value = "@osdk/client/observable";
      } else {
        path.node.specifiers = kept;
        const newDecl = j.importDeclaration(
          promoted,
          j.stringLiteral("@osdk/client/observable"),
        );
        // Preserve import kind (e.g. `import type { ... }`)
        (newDecl as any).importKind = (path.node as any).importKind ?? "value";
        path.insertAfter(newDecl);
      }
    }
  });

  // ── 2. Named re-exports ───────────────────────────────────────────────────

  root.find(j.ExportNamedDeclaration).forEach((path) => {
    if (!path.node.source) return;
    const src = path.node.source.value as string;

    if (REACT_MODULE_MAP[src]) {
      path.node.source.value = REACT_MODULE_MAP[src];
      dirty = true;

      if (src === "@osdk/react/experimental") {
        const specifiers = path.node.specifiers ?? [];
        for (let i = 0; i < specifiers.length; i++) {
          const spec = specifiers[i];
          if (spec.type !== "ExportSpecifier") continue;
          const localName = getExportLocalName(spec);
          const newLocalName = IMPORT_RENAMES[localName];
          if (!newLocalName) continue;

          // Preserve the exported (downstream) name.
          // export { OsdkProvider2 }        → export { OsdkProvider as OsdkProvider2 }
          // export { OsdkProvider2 as Foo } → export { OsdkProvider as Foo }
          //
          // Replace the whole ExportSpecifier with a fresh plain object so
          // recast uses the generic printer (not the source-patcher), which
          // correctly emits the "local as exported" form.
          const exportedName = getExportedName(spec);
          specifiers[i] = {
            type: "ExportSpecifier",
            local: j.identifier(newLocalName),
            exported: j.identifier(exportedName),
            exportKind: (spec as any).exportKind ?? "value",
          } as unknown as ExportSpecifier;
        }
      }
      return;
    }

    if (src === "@osdk/client/unstable-do-not-use") {
      const allSpecs = (path.node.specifiers ?? []).filter(
        (s): s is ExportSpecifier => s.type === "ExportSpecifier",
      );

      const promoted = allSpecs.filter((s) =>
        OBSERVABLE_NAMES.has(getExportLocalName(s))
      );
      const kept = allSpecs.filter(
        (s) => !OBSERVABLE_NAMES.has(getExportLocalName(s)),
      );

      if (promoted.length === 0) return;
      dirty = true;

      if (kept.length === 0) {
        path.node.source.value = "@osdk/client/observable";
      } else {
        path.node.specifiers = kept;
        const newExport = j.exportNamedDeclaration(
          null,
          promoted,
          j.stringLiteral("@osdk/client/observable"),
        );
        path.insertAfter(newExport);
      }
    }
  });

  // ── 3. jest.mock / vi.mock string-literal path rewrites ───────────────────

  root.find(j.CallExpression).forEach((path) => {
    const callee = path.node.callee;
    if (callee.type !== "MemberExpression") return;
    if (callee.object.type !== "Identifier") return;
    if (callee.property.type !== "Identifier") return;

    const obj = callee.object.name;
    const method = callee.property.name;
    if ((obj !== "jest" && obj !== "vi") || method !== "mock") return;

    const firstArg = path.node.arguments[0];
    if (!firstArg) return;

    const strVal = getStringLiteralValue(firstArg);
    if (strVal == null) return;

    if (REACT_MODULE_MAP[strVal]) {
      setStringLiteralValue(firstArg, REACT_MODULE_MAP[strVal]);
      dirty = true;
    }

    if (strVal === "@osdk/client/unstable-do-not-use") {
      api.report(
        `${file.path}: ${obj}.mock('@osdk/client/unstable-do-not-use') — verify split to @osdk/client/observable manually`,
      );
    }
  });

  // ── 4. Body renames for unaliased imports ─────────────────────────────────

  if (bodyRenames.size > 0) {
    bodyRenames.forEach((newName, oldName) => {
      // Collision: newName is already declared locally (not from our import)
      let collisionFound = false;
      root.find(j.Identifier, { name: newName }).forEach((idPath) => {
        if (isLocalDeclaration(idPath, newName)) collisionFound = true;
      });

      if (collisionFound) {
        api.report(
          `${file.path}: name collision — '${newName}' already defined; skipping rename of '${oldName}'`,
        );
        return;
      }

      root.find(j.Identifier, { name: oldName }).forEach((idPath) => {
        // Skip the import specifier itself (already updated above)
        const parentType = idPath.parent.node.type;
        if (
          parentType === "ImportSpecifier"
          || parentType === "ImportDefaultSpecifier"
        ) return;
        // Skip re-export local names (already updated above)
        if (
          parentType === "ExportSpecifier"
          && idPath.parent.node.local === idPath.node
        ) return;

        idPath.node.name = newName;
      });
    });
    dirty = true;
  }

  // ── 5. Skip-and-report: <OsdkProvider observableClient={...}> ────────────

  root
    .find(j.JSXAttribute, { name: { name: "observableClient" } })
    .forEach((path) => {
      const parentEl = path.parent?.node;
      const elName = parentEl?.name?.name ?? parentEl?.name?.object?.name;
      if (typeof elName === "string" && elName.includes("OsdkProvider")) {
        api.report(
          `${file.path}: <${elName} observableClient={...}> — use TestOsdkProvider from @osdk/react/testing instead`,
        );
      }
    });

  // ── 6. Skip-and-report: dynamic import() with non-literal specifier ───────

  root.find(j.CallExpression, { callee: { type: "Import" } }).forEach(
    (path) => {
      const arg = path.node.arguments[0];
      if (arg && arg.type !== "StringLiteral" && arg.type !== "Literal") {
        api.report(
          `${file.path}: dynamic import() with non-literal specifier — inspect manually`,
        );
      }
    },
  );

  return dirty ? root.toSource({ quote: "double" }) : file.source;
}

// ── helpers ──────────────────────────────────────────────────────────────────

function getImportedName(spec: ImportSpecifier): string {
  const imp = spec.imported;
  if (imp.type === "Identifier") return imp.name;
  return (imp as any).value as string;
}

function getExportedName(spec: ExportSpecifier): string {
  const exp = spec.exported;
  if (exp.type === "Identifier") return exp.name;
  return (exp as any).name as string;
}

function getExportLocalName(spec: ExportSpecifier): string {
  const local = spec.local;
  if (!local) return "";
  const n = local.name;
  // TSTypeParameter.name can be IdentifierKind; in practice export specifiers
  // always have plain string names, so cast via type guard.
  if (typeof n === "string") return n;
  return (n as { name: string }).name;
}

function getStringLiteralValue(node: any): string | null {
  if (node.type === "StringLiteral") return node.value as string;
  if (node.type === "Literal" && typeof node.value === "string") {
    return node.value as string;
  }
  return null;
}

function setStringLiteralValue(node: any, value: string): void {
  node.value = value;
  if (node.extra) node.extra.rawValue = value;
  if (node.extra) node.extra.raw = JSON.stringify(value);
}

function isLocalDeclaration(path: ASTPath<any>, name: string): boolean {
  const parent = path.parent?.node;
  if (!parent) return false;
  const t = parent.type;
  return (
    (t === "VariableDeclarator" && parent.id === path.node)
    || t === "FunctionDeclaration"
    || t === "ClassDeclaration"
    || (t === "ImportSpecifier"
      && parent.local === path.node
      && (parent.imported?.name ?? parent.imported?.value) !== name)
  );
}
