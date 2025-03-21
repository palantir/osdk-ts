import type { SiteConfig } from "@osdk/foundry-config-json";
import type { Arguments } from "yargs";
import type { SiteDeployArgs } from "./SiteDeployArgs.js";
export declare function logSiteDeployCommandConfigFileOverride(args: Arguments<SiteDeployArgs>, config: SiteConfig | undefined): Promise<void>;
