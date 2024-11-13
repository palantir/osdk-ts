// THIS FILE IS GENERATED. DO NOT MODIFY.
// You probably want to modify ../../../codegen.mjs instead.
import type { Template } from "../templates.js";
import { getPackageFiles } from "../getPackageFiles.js";

export const TEMPLATES: readonly Template[] = [
// React
{
id: "template-react",
label: "React",
envPrefix: "VITE_",
buildDirectory: "./dist",
files: {
  "1.x": getPackageFiles(import("@osdk/create-app.template.react")),
  "2.x": getPackageFiles(import("@osdk/create-app.template.react.beta")),
},
},
// Vue
{
id: "template-vue",
label: "Vue",
envPrefix: "VITE_",
buildDirectory: "./dist",
files: {
  "1.x": getPackageFiles(import("@osdk/create-app.template.vue")),
  "2.x": getPackageFiles(import("@osdk/create-app.template.vue.v2")),
},
},
// Next (static export)
{
id: "template-next-static-export",
label: "Next (static export)",
envPrefix: "NEXT_PUBLIC_",
buildDirectory: "./out",
files: {
  "1.x": getPackageFiles(import("@osdk/create-app.template.next-static-export")),
  "2.x": getPackageFiles(import("@osdk/create-app.template.next-static-export.v2")),
},
},
// Tutorial: To do App
{
id: "template-tutorial-todo-app",
label: "Tutorial: To do App",
envPrefix: "VITE_",
buildDirectory: "./dist",
files: {
  "1.x": getPackageFiles(import("@osdk/create-app.template.tutorial-todo-app")),
  "2.x": getPackageFiles(import("@osdk/create-app.template.tutorial-todo-app.beta")),
},
},
// Tutorial: To do AIP App
{
id: "template-tutorial-todo-aip-app",
label: "Tutorial: To do AIP App",
envPrefix: "VITE_",
buildDirectory: "./dist",
files: {
  "1.x": getPackageFiles(import("@osdk/create-app.template.tutorial-todo-aip-app")),
  "2.x": getPackageFiles(import("@osdk/create-app.template.tutorial-todo-aip-app.beta")),
},
},
];