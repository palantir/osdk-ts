/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

// eslint-disable-next-line import/no-extraneous-dependencies
import type {
  ExportedDeclarations,
  ExportSpecifier,
  ImportDeclaration,
  ImportSpecifier,
  Project,
  SourceFile,
  Symbol as TsSymbol,
} from "ts-morph";
import { Node, SyntaxKind } from "ts-morph";
import { getModuleSourceFile } from "./getModuleSourceFile";

type TraversalStep = { sourceFile: SourceFile; imports: Set<string> };
export class ProjectMinifier {
  private nodesToKeep: { [moduleName: string]: Set<Node> } = {};
  private visitedImports: { [filePath: string]: Set<string> } = {};
  private dependentExport: { [moduleName: string]: Set<Node> } = {};
  private stack: TraversalStep[] = [];

  constructor(
    private project: Project,
    private startingImportSet: Set<string>,
    private startingFilePath: string,
  ) {
    this.stack.push({
      sourceFile: this.project.getSourceFile(this.startingFilePath)!,
      imports: this.startingImportSet,
    });
  }

  private shouldContinueVisiting() {
    return this.stack.length > 0;
  }

  private getNextVisit() {
    if (this.stack.length === 0) {
      throw new Error("Done processing");
    }

    return this.stack.pop()!;
  }

  private pushNextVisit(sourceFile: SourceFile, imports: Set<string>) {
    this.stack.push({ sourceFile, imports });
  }

  private shouldSkipTraversal(traversalStep: TraversalStep) {
    const filePath = traversalStep.sourceFile.getFilePath();

    if (!this.visitedImports[filePath]) {
      this.visitedImports[filePath] = new Set();
    }

    let shouldSkipCheck = true;
    for (const importToCheck of traversalStep.imports) {
      if (!this.visitedImports[filePath].has(importToCheck)) {
        shouldSkipCheck = false;
        this.visitedImports[filePath].add(importToCheck);
      }
    }

    return shouldSkipCheck;
  }

  private getNodesToKeepForModule(moduleName: string) {
    if (!this.nodesToKeep[moduleName]) {
      this.nodesToKeep[moduleName] = new Set();
    }

    return this.nodesToKeep[moduleName];
  }

  public minifyProject() {
    while (this.shouldContinueVisiting()) {
      const visitImports = this.getNextVisit();

      if (this.shouldSkipTraversal(visitImports)) {
        continue;
      }

      // Keep track of identifiers for this file which we will need to resolve
      // eslint-disable-next-line @typescript-eslint/ban-types
      const identifiersToResolve = new Set<TsSymbol>();

      const sourceFile = visitImports.sourceFile;
      const moduleName = getModuleFromFileName(sourceFile);
      const nodeSet: Set<Node> = this.getNodesToKeepForModule(moduleName);

      // For all the exported declarations that we need to keep from this file
      // we have to determine what we need to keep so that they still compile correctly
      for (const [key, declarations] of sourceFile.getExportedDeclarations()) {
        if (!visitImports.imports.has(key)) {
          continue;
        }

        // If we are exporting something from here, every module which does
        // export * from "thisModule" should be updated to be kept
        this.visitDependentExports(moduleName);

        // Visit the declaration of this key
        this.visitDeclaration(declarations, nodeSet, identifiersToResolve);
      }

      // Visit all export declarations
      // export * from "...",
      // export { A } from "..."
      // export * as ns from "..."
      for (const declaration of sourceFile.getExportDeclarations()) {
        const moduleSpecifier = declaration.getModuleSpecifier();
        if (!moduleSpecifier) {
          continue;
        }

        const literalText = moduleSpecifier.getLiteralText();

        const exportSourceFile = getModuleSourceFile(
          this.project,
          moduleSpecifier,
        );
        if (!exportSourceFile) {
          continue;
        }

        // export * as ns from "..."
        // if ns is required, we should keep all of ns
        if (declaration.isNamespaceExport()) {
          const namespaceExport = declaration.getNamespaceExport();
          if (namespaceExport) {
            if (visitImports.imports.has(namespaceExport.getName())) {
              this.getNodesToKeepForModule(moduleName).add(namespaceExport);
              const nodesToKeepForModule = this.getNodesToKeepForModule(
                getModuleFromFileName(exportSourceFile),
              );
              nodesToKeepForModule.add(exportSourceFile);
              const importsFromNamespace = new Set(
                exportSourceFile.getExportedDeclarations().keys(),
              );
              this.pushNextVisit(exportSourceFile, importsFromNamespace);
            }
          }
        }

        const namedExports = declaration.getNamedExports();

        // export * from "..."
        if (namedExports.length === 0) {
          this.pushNextVisit(exportSourceFile, visitImports.imports);

          // Keep track of things that depend on this module
          if (!this.dependentExport[literalText]) {
            this.dependentExport[literalText] = new Set();
          }
          this.dependentExport[literalText].add(declaration);
          continue;
        }

        // For each named export, if it is something we need to keep, we should visit it
        // export { x } from "..."
        this.visitNamedExports(
          namedExports,
          visitImports,
          nodeSet,
          exportSourceFile,
        );
      }

      // Visit all import declarations
      for (const declaration of sourceFile.getImportDeclarations()) {
        const namedImports = declaration.getNamedImports();
        const moduleSpecifier = declaration.getModuleSpecifier();
        if (!moduleSpecifier) {
          continue;
        }

        const importSourceFile = getModuleSourceFile(
          this.project,
          moduleSpecifier,
        );

        if (!importSourceFile) {
          continue;
        }

        // If we import * as x, and we use x
        // import type * as x from "..."
        if (namedImports.length === 0) {
          const aliasedSymbol = declaration.getImportClause()
            ?.getNamespaceImport()?.getSymbol();
          if (aliasedSymbol && identifiersToResolve.has(aliasedSymbol)) {
            this.getNodesToKeepForModule(moduleName).add(declaration);
            const importsFromNamespace = new Set(
              importSourceFile.getExportedDeclarations().keys(),
            );

            importSourceFile.getExportDeclarations().forEach(decl => {
              this.getNodesToKeepForModule(moduleSpecifier.getLiteralText())
                .add(decl);
            });

            this.getNodesToKeepForModule(moduleSpecifier.getLiteralText()).add(
              sourceFile,
            );

            this.pushNextVisit(importSourceFile, importsFromNamespace);
          }
          continue;
        }

        // For all named imports, we check if we need this as part of something we export,
        // If we need it, we visit where it was imported from
        this.visitNamedImports(
          namedImports,
          identifiersToResolve,
          moduleName,
          declaration,
          importSourceFile,
        );
      }
    }

    this.deleteUnused();
  }

  private visitNamedImports(
    namedImports: ImportSpecifier[],
    identifiersToResolve: Set<TsSymbol>,
    moduleName: string,
    declaration: ImportDeclaration,
    importSourceFile: SourceFile,
  ) {
    const importsToVisit = new Set<string>();
    for (const namedImport of namedImports) {
      const symbol = namedImport.getSymbol();

      if (!symbol) {
        continue;
      }

      if (identifiersToResolve.has(symbol)) {
        // import { x } from "..."
        importsToVisit.add(symbol.getName());
        // import { x as y } from "..."
        importsToVisit.add(namedImport.getName());
        this.getNodesToKeepForModule(moduleName).add(namedImport);
        this.getNodesToKeepForModule(moduleName).add(declaration);
      }
    }
    this.pushNextVisit(importSourceFile, importsToVisit);
  }

  // For each named export if it is something that we need, we keep the export
  // And visit the module it is exported from
  // export { A } from ".."
  private visitNamedExports(
    namedExports: ExportSpecifier[],
    visitImports: TraversalStep,
    nodeSet: Set<Node>,
    exportSourceFile: SourceFile,
  ): void {
    const exportsToVisit = new Set<string>();
    for (const namedExport of namedExports) {
      const symbol = namedExport.getSymbol();
      if (!symbol) {
        continue;
      }

      if (!visitImports.imports.has(symbol.getName())) {
        continue;
      }

      exportsToVisit.add(symbol.getName());
      nodeSet.add(namedExport);
      for (const ancestor of namedExport.getAncestors()) {
        nodeSet.add(ancestor);
      }
    }
    this.pushNextVisit(exportSourceFile, exportsToVisit);
  }

  // Traverse the declaration and it's dependent symbols
  private visitDeclaration(
    declarations: ExportedDeclarations[],
    nodeSet: Set<Node>,
    identifiers: Set<TsSymbol>,
  ) {
    const declarationStack: Node[] = declarations;

    while (declarationStack.length > 0) {
      const currentDeclaration = declarationStack.pop()!;

      // If we've already visited this declaration
      if (nodeSet.has(currentDeclaration)) {
        continue;
      }

      nodeSet.add(currentDeclaration);
      for (const ancestor of currentDeclaration.getAncestors()) {
        nodeSet.add(ancestor);
      }

      for (
        const child of currentDeclaration.getDescendantsOfKind(
          SyntaxKind.Identifier,
        )
      ) {
        const symbol = child.getSymbol();
        // If we've seen this symbol we've already traversed it
        if (!symbol || identifiers.has(symbol)) {
          continue;
        }

        identifiers.add(symbol);

        // Find the TsSymbol's declarations
        for (const symbolDeclaration of symbol.getDeclarations()) {
          // If it's an import declaration we want to traverse that file
          if (Node.isImportDeclaration(symbolDeclaration)) {
            const importSourceFile = getModuleSourceFile(
              this.project,
              symbolDeclaration.getModuleSpecifier(),
            );
            if (!importSourceFile) {
              continue;
            }
            this.pushNextVisit(importSourceFile, new Set(symbol.getName()));
          } else {
            // If it's not an import, it's locally defined, so we may want to traverse it locally
            declarationStack.push(symbolDeclaration);
          }
        }
      }
    }
  }

  private deleteUnused() {
    const deletedModules = new Set<string>();

    this.project.getSourceFiles().forEach(sourceFile => {
      if (sourceFile.getFilePath().startsWith("/internal")) {
        const moduleName = getModuleFromFileName(sourceFile);
        const nodesToKeepForModule = this.nodesToKeep[moduleName];

        if (!nodesToKeepForModule || nodesToKeepForModule.size === 0) {
          deletedModules.add(moduleName);
          sourceFile.deleteImmediatelySync();
          return;
        }

        // Delete unused imports
        sourceFile.getImportDeclarations().forEach(importDeclaration => {
          importDeclaration.getNamedImports().forEach(namedImport => {
            if (
              nodesToKeepForModule && !nodesToKeepForModule.has(namedImport)
            ) {
              namedImport.remove();
            }
          });
        });

        // Delete exports we don't need anymore
        for (const exportDeclaration of sourceFile.getExportDeclarations()) {
          const targetModuleSpecifier = exportDeclaration.getModuleSpecifier();
          if (!targetModuleSpecifier) {
            continue;
          }

          const targetModuleLiteralText = targetModuleSpecifier
            .getLiteralText();
          if (deletedModules.has(targetModuleLiteralText)) {
            continue;
          }

          const nodesToKeepForTargetModule =
            this.nodesToKeep[targetModuleLiteralText];

          if (
            !nodesToKeepForTargetModule || nodesToKeepForTargetModule.size === 0
          ) {
            exportDeclaration.remove();
            continue;
          }

          for (const namedExport of exportDeclaration.getNamedExports()) {
            if (!nodesToKeepForTargetModule.has(namedExport)) {
              namedExport.remove();
            }
          }
        }

        sourceFile.forEachChild(node => {
          if (!nodesToKeepForModule.has(node)) {
            node.replaceWithText("");
          }
        });

        // Delete empty files
        const lines = sourceFile.getText().split("\n");
        if (lines.length === 0) {
          deletedModules.add(moduleName);
          sourceFile.deleteImmediatelySync();
          return;
        }
      }
    });
  }

  // Visit all files up which have done
  // `export * from "moduleName"`
  private visitDependentExports(moduleName: string) {
    if (!this.dependentExport[moduleName]) {
      return;
    }
    const dependentExportStack = [moduleName];

    while (dependentExportStack.length > 0) {
      const nextModuleName = dependentExportStack.pop()!;

      if (!this.dependentExport[nextModuleName]) {
        continue;
      }

      for (const node of this.dependentExport[nextModuleName]) {
        const rexportModuleName = getModuleFromFileName(node.getSourceFile());
        this.getNodesToKeepForModule(rexportModuleName).add(node);

        dependentExportStack.push(rexportModuleName);
      }
    }
  }
}

function getModuleFromFileName(sourceFile: SourceFile) {
  return sourceFile.getFilePath().replace("/", "").replace(".ts", "").replace(
    "/index",
    "",
  );
}
