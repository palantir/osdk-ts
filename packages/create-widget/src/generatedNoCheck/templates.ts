// THIS FILE IS GENERATED. DO NOT MODIFY.
// You probably want to modify ../../../codegen.mjs instead.
import type { Template } from "../templates.js";
import { getPackageFiles } from "../getPackageFiles.js";

export const TEMPLATES: readonly Template[] = [
// React
{
id: "template-widget-react",
label: "React",
envPrefix: "VITE_",
buildDirectory: "./dist",
files: {
  
  "2.x": getPackageFiles(import("@osdk/create-widget.template.react.v2")),
},
},
];