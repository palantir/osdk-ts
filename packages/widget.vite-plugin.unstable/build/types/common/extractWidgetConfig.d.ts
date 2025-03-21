import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import type { Rollup } from "vite";
export declare function extractWidgetConfig(moduleId: string, ast: Rollup.ProgramNode | null): WidgetConfig<ParameterConfig> | undefined;
