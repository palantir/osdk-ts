import type { FoundryConfig } from "@osdk/foundry-config-json";
import type { Arguments } from "yargs";
import type { CommonSiteArgs } from "./CommonSiteArgs.js";
export declare function logSiteCommandConfigFileOverride(args: Arguments<CommonSiteArgs>, config: FoundryConfig<"site"> | undefined): Promise<void>;
