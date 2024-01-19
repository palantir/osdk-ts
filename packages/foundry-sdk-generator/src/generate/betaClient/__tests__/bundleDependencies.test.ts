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

import { Project } from "ts-morph";
import { describe, expect, it } from "vitest";
import { outputModule } from "../bundleDependencies";
import { ProjectMinifier } from "../minifyBundle";

describe("minify project", () => {
  it("minifies a project", () => {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        outFile: "dist/bundle/index.d.ts",
      },
    });

    project.createSourceFile(
      "/internal/moduleA/index.ts",
      `export { A, B, C } from "internal/moduleB"`,
    );
    project.createSourceFile(
      "/internal/moduleB/index.ts",
      `export const A : {};
            export const UnusedConst: {};
            export * from "internal/moduleB/folder";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/index.ts",
      `export * from "internal/moduleB/folder/fileA";
            export * from "internal/moduleB/folder/fileB";
            export * from "internal/moduleB/folder/fileC";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/fileA.ts",
      `export type B = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileB.ts",
      `export type UnusedType = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileC.ts",
      `import { A } from "internal/moduleB/folder/fileA";
                            export type C = A;`,
    );

    const projectMinifier = new ProjectMinifier(
      project,
      new Set(["A", "B", "C"]),
      "/internal/moduleA/index.ts",
    );
    projectMinifier.minifyProject();

    expect(outputModule(project)).toMatchInlineSnapshot(`
      "/** /internal/moduleA/index.ts **/
      declare module "internal/moduleA" {
      	export * from "internal/moduleB"
      }
      /** /internal/moduleB/index.ts **/
      declare module "internal/moduleB" {
      	export const A : {};
      	            export * from "internal/moduleB/folder";
      }
      /** /internal/moduleB/folder/fileA.ts **/
      declare module "internal/moduleB/folder/fileA" {
      	export type B = string;
      }
      /** /internal/moduleB/folder/fileC.ts **/
      declare module "internal/moduleB/folder/fileC" {
      	import { A } from "internal/moduleB/folder/fileA";
      	                            export type C = A;
      }
      /** /internal/moduleB/folder/index.ts **/
      declare module "internal/moduleB/folder" {
      	export * from "internal/moduleB/folder/fileA";
      	            export * from "internal/moduleB/folder/fileC";
      }"
    `);
  });

  it("minifies a project with nested unused types", () => {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        outFile: "dist/bundle/index.d.ts",
      },
    });

    project.createSourceFile(
      "/internal/moduleA/index.ts",
      `export { A, C } from "internal/moduleB"`,
    );
    project.createSourceFile(
      "/internal/moduleB/index.ts",
      `export const A : {};
            export const UnusedConst: {};
            export * from "internal/moduleB/folder";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/index.ts",
      `export * from "internal/moduleB/folder/fileC";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/fileA.ts",
      `export type B = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileB.ts",
      `export type UnusedType = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileC.ts",
      `import { A } from "internal/moduleB/folder/fileA";
                            export type C = A;`,
    );

    const projectMinifier = new ProjectMinifier(
      project,
      new Set(["A", "C"]),
      "/internal/moduleA/index.ts",
    );
    projectMinifier.minifyProject();

    expect(outputModule(project)).toMatchInlineSnapshot(`
      "/** /internal/moduleA/index.ts **/
      declare module "internal/moduleA" {
      	export * from "internal/moduleB"
      }
      /** /internal/moduleB/index.ts **/
      declare module "internal/moduleB" {
      	export const A : {};
      	            export * from "internal/moduleB/folder";
      }
      /** /internal/moduleB/folder/fileC.ts **/
      declare module "internal/moduleB/folder/fileC" {
      	import { A } from "internal/moduleB/folder/fileA";
      	                            export type C = A;
      }
      /** /internal/moduleB/folder/index.ts **/
      declare module "internal/moduleB/folder" {
      	export * from "internal/moduleB/folder/fileC";
      }"
    `);
  });

  it("minifies a project with nested types", () => {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        outFile: "dist/bundle/index.d.ts",
      },
    });

    project.createSourceFile(
      "/internal/moduleA/index.ts",
      `export { A, C } from "internal/moduleB"`,
    );
    project.createSourceFile(
      "/internal/moduleB/index.ts",
      `export const A : {};
            export const UnusedConst: {};
export * from "internal/moduleB/folder";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/index.ts",
      `export * from "internal/moduleB/folder/fileC";
export * from "internal/moduleB/folder/fileB";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/fileB.ts",
      `export type B = string; export type Unused = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileC.ts",
      `import { B } from "internal/moduleB/folder/fileB";
type D = B;
export type C = D;`,
    );

    const projectMinifier = new ProjectMinifier(
      project,
      new Set(["A", "C"]),
      "/internal/moduleA/index.ts",
    );
    projectMinifier.minifyProject();

    expect(outputModule(project)).toMatchInlineSnapshot(`
      "/** /internal/moduleA/index.ts **/
      declare module "internal/moduleA" {
      	export * from "internal/moduleB"
      }
      /** /internal/moduleB/index.ts **/
      declare module "internal/moduleB" {
      	export const A : {};
      	export * from "internal/moduleB/folder";
      }
      /** /internal/moduleB/folder/fileB.ts **/
      declare module "internal/moduleB/folder/fileB" {
      	export type B = string; 
      }
      /** /internal/moduleB/folder/fileC.ts **/
      declare module "internal/moduleB/folder/fileC" {
      	import { B } from "internal/moduleB/folder/fileB";
      	type D = B;
      	export type C = D;
      }
      /** /internal/moduleB/folder/index.ts **/
      declare module "internal/moduleB/folder" {
      	export * from "internal/moduleB/folder/fileC";
      	export * from "internal/moduleB/folder/fileB";
      }"
    `);
  });

  it("minified a project with namespace imports", () => {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        outFile: "dist/bundle/index.d.ts",
      },
    });

    project.createSourceFile(
      "/internal/moduleA/index.ts",
      `export { A, C } from "internal/moduleB"`,
    );
    project.createSourceFile(
      "/internal/moduleB/index.ts",
      `export const A : {};
            export const UnusedConst: {};
import * as B from "internal/moduleB/folder";
export type C = B.C;`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/index.ts",
      `export type E = string;
export * from "internal/moduleB/folder/fileC";
export * from "internal/moduleB/folder/fileB";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/fileB.ts",
      `export type B = string; export type Unused = string;`,
    );
    project.createSourceFile(
      "/internal/moduleB/folder/fileC.ts",
      `import { B } from "internal/moduleB/folder/fileB";
type D = B;
export type C = D;`,
    );

    const projectMinifier = new ProjectMinifier(
      project,
      new Set(["A", "C"]),
      "/internal/moduleA/index.ts",
    );
    projectMinifier.minifyProject();

    expect(outputModule(project)).toMatchInlineSnapshot(`
      "/** /internal/moduleA/index.ts **/
      declare module "internal/moduleA" {
      	export * from "internal/moduleB"
      }
      /** /internal/moduleB/index.ts **/
      declare module "internal/moduleB" {
      	export const A : {};
      	import * as B from "internal/moduleB/folder";
      	export type C = B.C;
      }
      /** /internal/moduleB/folder/index.ts **/
      declare module "internal/moduleB/folder" {
      	export type E = string;
      	export * from "internal/moduleB/folder/fileC";
      	export * from "internal/moduleB/folder/fileB";
      }"
    `);
  });

  it("minifies a project namespace export", () => {
    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        outFile: "dist/bundle/index.d.ts",
      },
    });

    project.createSourceFile(
      "/internal/moduleA/index.ts",
      `export { A, C } from "internal/moduleB"`,
    );
    project.createSourceFile(
      "/internal/moduleB/index.ts",
      `export const A : {};
            export const UnusedConst: {};
import { B } from "internal/moduleB/folder";
export type C = B.C;`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/index.ts",
      `export type E = string;
export * as B from "internal/moduleB/folder/fileC";`,
    );

    project.createSourceFile(
      "/internal/moduleB/folder/fileC.ts",
      `
type D = string;
export type C = D;`,
    );

    const projectMinifier = new ProjectMinifier(
      project,
      new Set(["A", "C"]),
      "/internal/moduleA/index.ts",
    );
    projectMinifier.minifyProject();

    expect(outputModule(project)).toMatchInlineSnapshot(`
      "/** /internal/moduleA/index.ts **/
      declare module "internal/moduleA" {
      	export * from "internal/moduleB"
      }
      /** /internal/moduleB/index.ts **/
      declare module "internal/moduleB" {
      	export const A : {};
      	import { B } from "internal/moduleB/folder";
      	export type C = B.C;
      }
      /** /internal/moduleB/folder/fileC.ts **/
      declare module "internal/moduleB/folder/fileC" {
      	type D = string;
      	export type C = D;
      }
      /** /internal/moduleB/folder/index.ts **/
      declare module "internal/moduleB/folder" {
      	export * as B from "internal/moduleB/folder/fileC";
      }"
    `);
  });
});
