import type { LoadedFoundryConfig } from "@osdk/foundry-config-json";
declare function getConfig(type: "site"): Promise<LoadedFoundryConfig<"site"> | undefined>;
declare function getConfig(type: "widgetSet"): Promise<LoadedFoundryConfig<"widgetSet"> | undefined>;
declare function getConfig(type: "site" | "widgetSet"): Promise<LoadedFoundryConfig<"site" | "widgetSet"> | undefined>;
export default getConfig;
