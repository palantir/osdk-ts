import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import type { Rollup } from "vite";
import type { BuildOutputs } from "./extractBuildOutputs.js";
export interface WidgetBuildOutputs extends BuildOutputs {
	widgetConfig: WidgetConfig<ParameterConfig>;
}
export declare function getWidgetBuildOutputs(bundle: Rollup.OutputBundle, input: string, buildDir: string, configFiles: Record<string, WidgetConfig<ParameterConfig>>): WidgetBuildOutputs;
