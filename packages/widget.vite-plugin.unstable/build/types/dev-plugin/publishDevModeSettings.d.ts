import type { ServerResponse } from "node:http";
import type { ViteDevServer } from "vite";
/**
* Finish the setup process by setting the widget overrides in Foundry and enabling dev mode.
*/
export declare function publishDevModeSettings(server: ViteDevServer, widgetIdToOverrides: Record<string, string[]>, res: ServerResponse): Promise<void>;
