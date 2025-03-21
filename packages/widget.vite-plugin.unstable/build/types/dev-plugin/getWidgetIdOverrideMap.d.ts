import { type ParameterConfig, type WidgetConfig } from "@osdk/widget.api.unstable";
import type { ViteDevServer } from "vite";
export declare function getWidgetIdOverrideMap(server: ViteDevServer, codeEntrypoints: Record<string, string>, configFileToEntrypoint: Record<string, string>, configFiles: Record<string, WidgetConfig<ParameterConfig>>, localhostUrl: string): Promise<Record<string, string[]>>;
